// http://jason-wang.logdown.com/posts/700631-example-react-higher-order-components
// example:時鐘

import React from 'react';

const TickTock = (props)=>(
  <p>
    React has been running for {props.seconds} seconds.
  </p>
)

 
const HOC = (Component, state, intervalFn) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
  }

  componentWillMount() {
    this.intervals = [];
  }

  componentWillUnmount() {
    // Unmount 時清除所有 clearInterval
    this.intervals.forEach(clearInterval);
  }

  componentDidMount() {
    // DidMount時執行 setInterval 觸發 tick()
    this.setInterval(this.tick.bind(this), 1000);
  }

  setInterval() {
    // 堆疊 setInterval
    this.intervals.push(setInterval.apply(null, arguments));
  }

  tick() {
    // 觸發變動 state 函數 intervalFn
    this.setState(intervalFn(this.state));
  }

  render() {
    // 配置 props 及 state
    return <Component {...this.props} {...this.state} />
  }
};

const intervalFn = (state) => {
  return {seconds: state.seconds + 1};
};

const Wrapped = HOC(TickTock, { seconds: 0 }, intervalFn);
const Wrapped2 = HOC(TickTock, { seconds: 3 }, intervalFn);
const Wrapped3 = HOC(TickTock, { seconds: 6 }, intervalFn);


const App = ()=>(
  <div style={{background:'#fff'}}>
    <Wrapped />
    <Wrapped2 />
    <Wrapped3 />
  </div>
)

export default App
