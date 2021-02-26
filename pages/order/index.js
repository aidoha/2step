import { useState, useEffect } from "react";
import { ApolloConsumer, Query } from "react-apollo";
import withData from "../../lib/apollo";
import Router from "next/router";
import { Wrap, Section } from "../../style/order";
import { Text, FlexBlock, Block } from "../../style/common";
//Components
import MainLayout from "../../components/MainLayout";
import Button from "../../components/Button";
import Head from "../../components/head";
import parsePhone from "../../components/parsePhone";
import CloudPayments from "../../components/common/CloudPaymentsShop";
import OrderBlock from "../../components/OrderBox";
import ProductQuantity from "../../components/ProductQuantity";
import OrderPartner from "../../components/OrderPartner";
import OrderDelivery from "../../components/OrderDelivery";
import OrderInputs from "../../components/OrderInputs";
import OrderPaymentWay from "../../components/OrderPaymentWay";
import OrderAdditionalInputs from "../../components/OrderAdditionalInputs";
import { GET_OFFER, EPAY_QUERY, CREATE_ORDER } from "../../queries/order";

const Order = () => {
  if (typeof window === "undefined") return <div />;
  const [switchStatus, setSwitchStatus] = useState(0);
  const [addressStatus, setAddressStatus] = useState(0);
  const [fioError, setFioError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [iinError, setiinError] = useState(null);
  const [offerId, setOfferId] = useState(null);
  const [activeOffer, setActiveOffer] = useState(null);
  const [loadingStorage, setLoadingStorage] = useState(true);
  const [allPartners, setAllPartners] = useState(false);
  const [activePaymentWay, setActivePaymentWay] = useState(0);
  // const [cloudPaymentsStatus, setCloudPaymentsStatus] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [streetError, setStreetError] = useState(null);
  const [houseError, setHouseError] = useState(null);
  const [orangeMonth, setOrangeMonth] = useState(null);
  const [hkbMonth, setHkbMonth] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const [form, setValues] = useState({
    fio: null,
    phone: null,
    email: null,
    comments: null,
    addressStreet: "",
    addressHome: "",
    addressFlat: "",
    iin: ""
  });

  const switchStatusHandler = i => setSwitchStatus(i);
  const handlePickUpAddress = i => setAddressStatus(i);
  const onInputChange = e => {
    const { value, name } = e.target;
    setValues({
      ...form,
      [name]: value,
      [name + "Error"]: false
    });
  };
  const fioValidate = () => {
    if (form.fio === null || form.fio === "") setFioError(true);
    else setFioError(false);
  };
  const phoneValidate = () => {
    if (form.phone.match(/ /g).length > 3) setPhoneError(true);
    else setPhoneError(false);
  };
  const emailValidate = () => {
    if (form.email === null || form.email === "") {
      setEmailError(0);
    } else if (!form.email.includes("@") || !form.email.includes(".")) {
      setEmailError(1);
    } else setEmailError(null);
  };
  const iinValidate = () => {
    if (form.iin === null || form.iin === "") {
      setiinError(0);
    } else if (form.iin.length < 12) {
      setiinError(1);
    } else if (form.iin.split("").every(i => i === form.iin[0])) {
      setiinError(2);
    } else if (!form.iin.match(/\d+/g)) {
      setiinError(3);
    } else setiinError(null);
  };
  const streetValidate = () => {
    if (form.addressStreet === null || form.addressStreet === "") {
      setStreetError(true);
    } else setStreetError(null);
  };
  const houseValidate = () => {
    if (form.addressHome === null || form.addressHome === "") {
      setHouseError(true);
    } else setHouseError(null);
  };

  useEffect(() => {
    const offerIds = JSON.parse(localStorage.getItem("order"));
    setOfferId(offerIds.offerId);
    setActiveOffer(offerIds.activeOffer);
    setLoadingStorage(false);
  }, []);

  const epayPayment = url => (window.location = url);
  const handleListAllPartner = () => setAllPartners(true);
  const handleChangePartner = id => {
    setAllPartners(false);
    setActiveOffer(id);
  };

  const handlePaymentWay = id => setActivePaymentWay(id);
  const handleOrangeInstMonth = month => setOrangeMonth(month);
  const handleHkbInstMonth = month => setHkbMonth(month);
  // const closeCloudPayments = () => setCloudPaymentsStatus(false);

  const onIncreaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  const onDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const validationErrors =
    form.fio === null ||
    form.fio === "" ||
    form.email === null ||
    form.email === "" ||
    form.phone === null ||
    form.phone === "" ||
    emailError === 0 ||
    emailError === 1 ||
    emailError === undefined ||
    fioError ||
    fioError === undefined ||
    phoneError ||
    phoneError === undefined;

  const noActiveButton =
    activePaymentWay === 2
      ? validationErrors ||
        iinError === 0 ||
        iinError === 1 ||
        iinError === 2 ||
        iinError === undefined ||
        form.iin === null ||
        form.iin === ""
      : validationErrors;

  const address = `${form.addressStreet} ${form.addressHome}, ${
    form.addressFlat
  }`;
  return (
    <MainLayout section={2} bg="#F8F8F8" noFooter>
      <Head title="Оформление заказа" />
      {!loadingStorage && (
        <Query query={GET_OFFER} variables={{ id: offerId }}>
          {({ loading, data, error }) => {
            if (loading) return <div />;
            if (error) return <div />;
            const { offerSet, name, mediaUrl } = data.offer[0].prodId;
            let pickUpAddresses = [];
            offerSet.edges.map(val => {
              val.node.shopPartner.addressSet.edges.map(v => {
                pickUpAddresses.push(v.node.street);
              });
            });
            let addressType =
              (switchStatus === 0 && pickUpAddresses[addressStatus]) ||
              (switchStatus === 1 && address);
            const activePartner = offerSet.edges[activeOffer].node;
            const allOffers = offerSet.edges;
            const bankList = activePartner.installment.banks.map(val =>
              JSON.parse(val)
            );
            const hkb = bankList.filter(v => v.short_name === "hkb");
            const orange = bankList.filter(v => v.short_name === "orange");
            const orangeInstId =
              activePaymentWay === 1
                ? orange.length !== 0 &&
                  orangeMonth !== null &&
                  orange[0].installments.find(val => val.month == orangeMonth)
                    .id
                : 0;
            const hkbInstId =
              activePaymentWay === 2
                ? hkb.length !== 0 &&
                  hkbMonth !== null &&
                  hkb[0].installments.find(val => val.month == hkbMonth).id
                : 0;
            const maxMonthOrange =
              orange.length !== 0 ? orange[0].max_month : null;
            const maxMonthHkb = hkb.length !== 0 ? hkb[0].max_month : null;
            const price =
              switchStatus === 0
                ? activePartner.finalPrice * quantity
                : switchStatus === 1
                ? (activePartner.finalPrice + activePartner.deliveryPrice) *
                  quantity
                : 0;
            const thank_you = {
              orderId: orderId,
              product_name: name,
              fio: form.fio,
              phone: form.phone,
              email: form.email,
              price: price,
              partner: activePartner.shopPartner.name,
              isPickup: switchStatus,
              address: addressType,
              payment_way: activePaymentWay,
              mediaUrl: mediaUrl
            };
            localStorage.setItem("thank-you", JSON.stringify(thank_you));
            return (
              <Wrap>
                <Section>
                  <Text weight="600" size="24px" lh="29px">
                    Оформление заказа
                  </Text>
                  <FlexBlock jc="space-between">
                    <Block>
                      <ProductQuantity
                        quantity={quantity}
                        onIncreaseQuantity={onIncreaseQuantity}
                        onDecreaseQuantity={onDecreaseQuantity}
                      />
                      <OrderPartner
                        allPartners={allPartners}
                        activePartner={activePartner}
                        allOffers={allOffers}
                        handleListAllPartner={handleListAllPartner}
                        handleChangePartner={handleChangePartner}
                      />
                      <OrderDelivery
                        onInputChange={onInputChange}
                        activePartner={activePartner}
                        switchStatus={switchStatus}
                        switchStatusHandler={switchStatusHandler}
                        houseValidate={houseValidate}
                        streetValidate={streetValidate}
                        houseError={houseError}
                        streetError={streetError}
                        handlePickUpAddress={handlePickUpAddress}
                      />
                      <OrderInputs
                        onInputChange={onInputChange}
                        emailValidate={emailValidate}
                        phoneValidate={phoneValidate}
                        fioValidate={fioValidate}
                        fioError={fioError}
                        emailError={emailError}
                        phoneError={phoneError}
                      />
                      <OrderPaymentWay
                        activePaymentWay={activePaymentWay}
                        handlePaymentWay={handlePaymentWay}
                        activePartner={activePartner}
                        orange={orange}
                        hkb={hkb}
                        handleHkbInstMonth={handleHkbInstMonth}
                        handleOrangeInstMonth={handleOrangeInstMonth}
                        product={data.offer[0].prodId}
                        price={price}
                      />
                      <OrderAdditionalInputs
                        onInputChange={onInputChange}
                        activePaymentWay={activePaymentWay}
                        iinValidate={iinValidate}
                        iinError={iinError}
                      />
                      <ApolloConsumer>
                        {client => {
                          return (
                            <Button
                              color="#F18E67"
                              width="220px"
                              height="50px"
                              round="5px"
                              top="20px"
                              disabled={noActiveButton}
                              onClick={async () => {
                                const queryOrder = await client.mutate({
                                  mutation: CREATE_ORDER,
                                  variables: {
                                    offerId: offerId,
                                    ordFio: form.fio,
                                    ordEmail: form.email,
                                    ordAddress: addressType,
                                    ordComments: form.comments || "",
                                    ordPhone: parsePhone(form.phone),
                                    quantity: quantity,
                                    iin: form.iin,
                                    instId:
                                      activePaymentWay === 1
                                        ? orangeInstId
                                        : activePaymentWay === 2
                                        ? hkbInstId
                                        : 0,
                                    isPickup:
                                      switchStatus === 0
                                        ? true
                                        : switchStatus === 1
                                        ? false
                                        : true
                                  }
                                });
                                if (activePaymentWay === 0) {
                                  client
                                    .query({
                                      query: EPAY_QUERY,
                                      variables: {
                                        amount: price,
                                        orderId:
                                          queryOrder.data.createOrder.orderId
                                      }
                                    })
                                    .then(res => {
                                      epayPayment(
                                        res.data.getEpayPayment.urlPayment
                                      );
                                    });
                                } else if (activePaymentWay === 1) {
                                  client
                                    .query({
                                      query: EPAY_QUERY,
                                      variables: {
                                        orderId:
                                          queryOrder.data.createOrder.orderId,
                                        months:
                                          activePaymentWay === 1
                                            ? orangeMonth !== null
                                              ? parseInt(orangeMonth)
                                              : maxMonthOrange
                                            : ""
                                      }
                                    })
                                    .then(res => {
                                      epayPayment(
                                        res.data.getEpayPayment.urlPayment
                                      );
                                    });
                                } else if (activePaymentWay === 2) {
                                  Router.push(`/thank-you`);
                                }
                              }}
                            >
                              Оплатить
                            </Button>
                          );
                        }}
                      </ApolloConsumer>
                      {/* {activePaymentWay === 0 && cloudPaymentsStatus && (
                        <CloudPayments
                          id={orderId}
                          email={form.email}
                          closeCloudPayments={closeCloudPayments}
                          price={price}
                        />
                      )} */}
                    </Block>
                    <Block>
                      <OrderBlock
                        quantity={quantity}
                        switchStatus={switchStatus}
                        price={activePartner.finalPrice}
                        deliveryPrice={activePartner.deliveryPrice}
                        partner={activePartner.shopPartner.name}
                        name={name}
                        img={JSON.parse(mediaUrl).images[0]}
                      />
                    </Block>
                  </FlexBlock>
                </Section>
              </Wrap>
            );
          }}
        </Query>
      )}
    </MainLayout>
  );
};

export default withData(Order);
