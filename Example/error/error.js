// 這範例做的比較有彈性

import React, { Component } from "react";
import withErrorHandler from '../../utils/errorHandle'

// html template
const FallBackComponent = ({ error, errorInfo }) =>
  <div>
    <h2>Something went wrong.</h2>
    <details style={{ whiteSpace: "pre-wrap" }}>
      {error && error.toString()}
      <br />
      {errorInfo.componentStack}
    </details>
  </div>;


// Error Handler 的 HOC 
// 用這個去包住你要有 error handle 的 component
const ErrorBoundary = withErrorHandler(
  console.log,
  FallBackComponent
);

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error();
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

// 2 個 BuggyCounter 在同一個 ErrorBoundary
const TwoCountersInSameBoundary = ErrorBoundary(() =>
  <div>
    <p>
      These two counters are inside the same error boundary. If one crashes,
      the error boundary will replace both of them.
    </p>
    <BuggyCounter />
    <BuggyCounter />
  </div>
);


const ErrorProneBuggyCounter = ErrorBoundary(BuggyCounter);

const TwoCountersInDifferentBoundaries = () =>
  <div>
    <p>
      These two counters are each inside of their own error boundary. So if
      one crashes, the other is not affected.
    </p>
    <ErrorProneBuggyCounter />
    <ErrorProneBuggyCounter />
  </div>;

function App() {
  return (
    <div style={{backgroundColor:'#fff'}}>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a
          JavaScript error in a component.
        </b>
      </p>
      <hr />
      <TwoCountersInSameBoundary />
      <hr />
      <TwoCountersInDifferentBoundaries />
    </div>
  );
}

export default App