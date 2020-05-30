import React from 'react'
// 這範例使用了 children
// 但還沒有體會什麼時機會適合用 children 在錯誤處理

const withErrorHandling = WrappedComponent => ({ showError, children }) => {

    return (
      <WrappedComponent>
        {showError && <div className="error-message">Oops! Something went wrong!</div>}
        {children}
      </WrappedComponent>
    );
  };


const DivWithErrorHandling = withErrorHandling(({children}) => {
    console.log('==>',{children});
    return <div>{children}</div>}
)

class App extends React.Component {
    state = { showError: true }
    
    toggleError = () => {
      this.setState((prevState, props) => {
        return { showError: !prevState.showError }
      })
    };
    
    render() {
      return (
        <DivWithErrorHandling showError={this.state.showError}>
          <h1>Your Amazing Content</h1>
          <button onClick={this.toggleError}>
             Toggle Error
          </button>
        </DivWithErrorHandling>
      );
    }
  }

  export default App