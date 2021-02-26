const star = props => {
  return (
    <svg
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00007 9.00121L2.7863 10.6908L3.40007 7.1122L0.800074 4.57783L4.39319 4.05572L6.00007 0.799805L7.60696 4.05572L11.2001 4.57783L8.60007 7.1122L9.21385 10.6908L6.00007 9.00121Z"
        fill={props.color}
      />
    </svg>
  );
};

export default star
