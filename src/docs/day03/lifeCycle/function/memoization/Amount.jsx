import React from 'react';

const Amount = ({
  props,
  divStyle,
  pStyle,
  buttonStyle,
  onClickToAddAmount,
  onClickToAddCoupon,
  onClickToSubtractAmount,
  onClickToSubtractCoupon,
}) => {
  console.log("자식(Amount) 랜더링 👶")
  const {amount, coupon} = props;

  return (
    <div style={divStyle}>
      <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>
      <p style={pStyle}>수량 : {amount}</p>
      <button style={buttonStyle} onClick={onClickToSubtractAmount}>-</button>

      <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
      <p style={pStyle}>쿠폰 : {coupon}</p>
      <button style={buttonStyle} onClick={onClickToSubtractCoupon}>-</button>
    </div>
  );
};

export default Amount;