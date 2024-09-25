// 프로젝트에서 정의된 스타일을 선언하는 파일


const theme = {}

theme.PALLETE ={
  primary : {
    main : "#113F8A",
    sub : "#FFC303",
  },
  secondary : "#FFE072",
  white : "#FFF",
  gray : {
    100 : "#F1EBF5",
    200 : "#AEA8B2",
    300 : "#605866",
  },
  error : "#EB6111",
  background : {
    white : "#FFF",
    gray : "F1EBF5"
  }
}

theme.FONT_SIZE = {
  h1 : "40px",
  h2 : "28px",
  h3 : "24px",
  h4 : "20px",
  h5 : "16px",
  h6 : "14px",
  h7 : "11px",
}
theme.FONT_LINE = {
  h1 : "52px",
  h2 : "36px",
  h3 : "32px",
  h4 : "28px",
  h5 : "24px",
  h6 : "22px",
  h7 : "19px",
}

theme.FONT_WEIGHT = {
  light : "300",
  normal : "400",
  medium : "500",
  bold : "700",
}


export default theme;
