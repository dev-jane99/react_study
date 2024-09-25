import React, { Component } from 'react';

class LifeCycleComponent extends Component {

  state = {
    number : 0,
    color : null
  }

  onClickToIncrease = () => {
    this.setState({
      number : this.state.number + 1
    })
  }

  constructor(props){
    super(props);
    console.log("constructor", props);
  }
// static 은 컴파일러가 올려줌
  static getDerivedStateFromProps(nextProps, prevState){
    console.log("getDerivedStatementFromProps", nextProps, prevState);
    if(nextProps.color !== prevState.color){
      return {color : nextProps.color}
    }
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  //5의 배수가 아니면 업데이트가 되게 만들기
  shouldComponentUpdate(nextProps, nextState){
    console.log(this.shouldComponentUpdate, nextProps, nextState)
    return nextState.number % 5 !== 0;
  }

  colorRef = null;

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    if(prevProps.color !== this.props.color){
      return this.colorRef.style.backgroundColor;
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapShot){
    if(prevState){console.log(`업데이트 직전 state: ${prevState}`)}
    if(snapShot){console.log(`업데이트 직전 snapshot: ${snapShot}`)}
  }

  render() {
    return (
      <div>
        <div
        ref={(el) => this.colorRef = el}
        style={{
          width : "100px",
          height : "100px",
          backgroundColor : this.state.color,
          display : "flex",
          justifyContent : "center",
          alignItems : "center",
          color : "#fff"
        }}
        >
          <h1>{this.state.number}</h1>
        </div>
        <button onClick={this.onClickToIncrease}>+1 증가</button>
      </div>
    );
  }
}

export default LifeCycleComponent;