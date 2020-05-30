import React from 'react'

function withSecElapsed(WraCmp) {
  return class extends React.Component {
    state = {
      secondElapsed: 0
    };

    tick = () => {
      // 直接取出物件裡的 { secondElapsed } 帥
      this.setState(({ secondElapsed }) => ({
        secondElapsed: secondElapsed + 1
      }));
    };

    componentDidMount() {
      this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return <WraCmp secondElapsed={this.state.secondElapsed}/>
    }
  }
}

class Clock extends React.Component {
   
    state = {
      date: new Date()
    };
    render() {
      const { secondElapsed } = this.props;
      const { date } = this.state;
      return (
        <div>
          {new Date(date.getTime() + secondElapsed * 1000).toLocaleString()}
        </div>
      );
    }
  }

export default withSecElapsed(Clock);