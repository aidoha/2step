const Logo = ({ width, height }) => {
  return (
    <svg
      width={width || '35'}
      height={height || '38'}
      viewBox="0 0 35 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2843 36.4929C17.2843 36.4929 29.0188 35.4152 27.9813 29.5434C26.9439 23.6716 12.1877 21.3149 14.2224 9.78277C16.257 -1.74934 35.6163 -0.772377 32.7054 2.67214C29.7944 6.11667 24.3552 6.77133 26.3395 14.436C28.3238 22.1004 35.8379 22.4429 34.8105 30.9635C33.7832 39.4843 17.2843 36.4929 17.2843 36.4929Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M17.3649 36.5635C17.3649 36.5635 19.5607 31.2154 18.2715 26.4112C16.9821 21.607 11.0595 20.7206 10.0523 16.974C9.04501 13.2273 11.3314 11.928 11.3314 11.928C11.3314 11.928 5.17716 11.0921 4.05912 15.2618C2.94107 19.4315 7.99746 20.489 7.99746 20.489C7.99746 20.489 4.6131 20.3078 4.05912 22.0702C7.82623 21.6272 9.86087 22.9364 9.86087 22.9364C9.86087 22.9364 12.0163 24.2961 11.3314 26.4011C10.6466 28.5061 6.20455 30.7923 6.20455 30.7923L14.6856 34.1563L17.3649 36.5635Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M26.1281 26.5018C22.7639 23.1479 12.6813 20.9422 14.2022 9.15832C15.7232 -2.62558 34.7803 -0.762309 32.9169 2.31963C31.0535 5.40157 24.4157 7.02312 26.4101 14.8187C25.4633 19.4617 29.17 23.2285 26.1281 26.5018Z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M17.3348 36.5131C17.3348 36.5131 13.1849 32.6858 7.36299 33.139C1.54109 33.5923 0 34.962 0 34.962C0 34.962 7.16154 28.3349 12.2381 29.9967C17.3146 31.6585 17.3348 36.5131 17.3348 36.5131Z"
        fill="#FF895E"
      />
      <path
        d="M17.2844 36.493C17.2844 36.493 29.0189 35.4153 27.9814 29.5434C26.944 23.6716 35.8279 22.4429 34.8106 30.9535C33.7933 39.4641 17.2844 36.493 17.2844 36.493Z"
        fill="url(#paint3_linear)"
      />
      <path
        d="M10.0525 16.974C9.05532 13.2374 11.3317 11.928 11.3317 11.928C11.3317 11.928 5.1774 11.0921 4.05936 15.2618C2.94131 19.4315 11.0597 20.7106 10.0525 16.974Z"
        fill="url(#paint4_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="24.47"
          y1="0.37"
          x2="24.47"
          y2="37.002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9F5D" />
          <stop offset="1" stopColor="#FFB45D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="11.287"
          y1="11.863"
          x2="11.287"
          y2="36.566"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAC77" />
          <stop offset="1" stopColor="#FF964A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="19.305"
          y1="-1.224"
          x2="34.934"
          y2="16.403"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA264" />
          <stop offset="1" stopColor="#FF7A5A" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="26.09"
          y1="24.854"
          x2="26.09"
          y2="36.997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9F5D" />
          <stop offset="1" stopColor="#FF825D" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="7.644"
          y1="11.862"
          x2="7.644"
          y2="19.195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFAC77" />
          <stop offset="1" stopColor="#FF824A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
