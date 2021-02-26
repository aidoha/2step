import Router from "next/router";

class CloudPayments extends React.Component {
  state = {};

  componentDidMount() {
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      js = d.createElement(s);
      js.id = id;
      js.src = '//widget.cloudpayments.kz/bundles/cloudpayments';
      js.async = true;
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'cp', () => {
      this.payHandle();
    });
  }

  payHandle = () => {
    const widget = new window.cp.CloudPayments();
    const { id, email, price, closeCloudPayments } = this.props;
    widget.auth(
      {
        publicId: 'pk_13c33481c8dfd6c79b0c3258177b1', // id из личного кабинета
        description: 'Оплата в 2step.me', // назначение
        amount: price, // сумма
        currency: 'KZT', // валюта
        invoiceId: id, // номер заказа  (необязательно)
        accountId: 1, // идентификатор плательщика (необязательно)
        email: email,
        data: {
          productId: 32 // произвольный набор параметров
        }
      },
      options => {
        Router.push(`/thank-you`)
      },
      () => {
        closeCloudPayments();
      }
    );
  };
    // pk_13c33481c8dfd6c79b0c3258177b1 : dev
    // pk_b9f0e09f9076beb258370439473ca : prod
  render() {
    return <div />;
  }
}

export default CloudPayments;
