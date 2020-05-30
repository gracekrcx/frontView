// 2 層 HOC 包含一個 DebuggerHOC 
// Inheritance Inversion (反向繼承)

import React from 'react'

function replacer(key, value) {
  // console.log('--->value',value);
  if (typeof value === 'function') {
    return `function ${value.name}() {...}`
  }
  return value
}

export function stringify(value) {
  return JSON.stringify(value, replacer, 2)
}

export function DebuggerHOC(WrappedComponent) {
  return class II extends WrappedComponent {
    render() {
      return (
        <div>
          <h2>HOC Debugger Component</h2>
          <p>Props</p>
          <pre>{stringify(this.props)}</pre>
          <p>State</p>
          <pre>{stringify(this.state)}</pre>
          {super.render()}
        </div>
      )
    }
  }
}


// Props Proxy and state abstraction demonstration 
// Props proxy 和 state abstraction 示範
function PPHOC(WrappedComponent) {
  return class PP extends React.Component {
    constructor(props) {
      super(props)
      this.state = { fields: {} } // 宣告新的 fields 物件
    }

    getField(fieldName) {
      // 判斷 fields 有沒有這個 key
      if (!this.state.fields[fieldName]) {
        console.log('--> 沒有這個 key');
        this.state.fields[fieldName] = {
          value: '',
          onChange: event => {
            this.state.fields[fieldName].value = event.target.value
            this.forceUpdate()
          }
        }
      }
      console.log('--> 有這個 key 了');
      return {
        value: this.state.fields[fieldName].value,
        onChange: this.state.fields[fieldName].onChange
      }
    }

    render() {
      const props = Object.assign({}, this.props, {
        fields: this.getField.bind(this),
      })
      return (
        <div>
          <h2>PP HOC</h2>
          <p>Im a Props Proxy HOC that abstracts controlled inputs</p>
          <WrappedComponent {...props}/>
        </div>
      )
    }
  }
}
// base component
class Example extends React.Component {
  render() {
    return (
      <div>
        <h2>Wrapped Component</h2>
        <p>Props</p>
        <pre>{stringify(this.props)}</pre>
        <form>
          <label>Automatically controlled input!</label>
          <input type="email" {...this.props.fields('email')}/>
        </form>
      </div>
    )
  }
}
 
const EnhancedExample = DebuggerHOC(PPHOC(Example))

const AppHOC = () => {
  return (
    <div style={{background:'#fff'}}>
      <EnhancedExample date={(new Date).toISOString()}/>
    </div>
  );
};
  
export default AppHOC
  


