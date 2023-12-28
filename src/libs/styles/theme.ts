export const size = {
  // 다른 해상도의 반응형 추가 시에 유지 보수
  mobile: "430px",
  mobile_constant: 430,
};

const theme = {
  size: {
    mobile: `(max-width: ${size.mobile})`,
    desktop: `(min-width: ${size.mobile})`,
  },
  color: {
    main: "#33CC99",
  },
};

export default theme;
