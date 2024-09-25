import React, { Component } from 'react';
import LifeCycleComponent from './LifeCycleComponent';


//16 진수로 랜덤한 숫자가 나오게 만들기
const getRandomColor = () => {
  return "#" +Math.floor(Math.random() * 16777215).toString(16)
}

class LifeCycleContainer extends Component {
  state = {
    color : "#000",
  }

  onClickToChangeColor = () => {
    this.setState({
      color : getRandomColor()
    })
    console.log(this.state.color)
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickToChangeColor}>색상 변경</button>
        <LifeCycleComponent color={this.state.color}/>
      </div>
    );
  }
}

export default LifeCycleContainer;