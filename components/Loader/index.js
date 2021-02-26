import { Wrap } from "./style";

const Loader = props => {
  return (
    <Wrap color={props.color}>
      <div class="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </Wrap>
  );
};

export default Loader;
