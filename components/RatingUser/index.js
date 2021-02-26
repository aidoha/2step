import Rating from "react-rating";
import Star from "../icons/star";

const RatingUser = ({ data }) => {
  return (
    <Rating
      readonly
      initialRating={data}
      emptySymbol={<Star color={"#BEC0C3"} />}
      fullSymbol={<Star color={"#FFA34D"} />}
    />
  );
};

export default RatingUser;
