// https://codebrahma.com/efficient-handling-of-react-alerts-with-higher-order-component-hoc/
// Efficient Handling of React Alerts with Higher-Order Component (HOC)
// 會自動消失的 alert 
// 製造 alert 的 sample 
// 共同的 button  之類的，點擊產生相同的功能


class AlertDialog extends React.Component {
    componentDidMount() {
        Number.isFinite(this.props.timeout) &&
        (this.timer = window.setTimeout(
          this.props.handleOnClose,
          this.props.timeout
        ))
    }
  
    componentWillUnmount() {
      this.timer && window.clearTimeout(this.timer)
    }
  
    render() {
      const { message, type, handleOnClose } = this.props
  
      return (
        <div
          data-notify="container"
          className={`alert ${type} animated bounce`}
          role="alert"
          data-notify-position="bottom-center"
        >
          <button
            onClick={handleOnClose}
            type="button"
            aria-hidden="true"
            className="close"
            data-notify="dismiss"
          >
            x
          </button>
  
          <span
            style={{
              wordBreak: "break-word",
            }}
          >
            {message}
          </span>
        </div>
      )
    }
  }
  
  /*
   *  onClearClick - Close click event handler - Clears all messages from the list
   */
  
  const ClearAlertDialog = ({ onClearClick }) => (
    <div
      data-notify="container"
      className="alert clear-all-alert-wrapper"
      role="alert"
      data-notify-position="bottom-center"
      onClick={onClearClick}
    >
      <span type="button">Clear All</span>
    </div>
  )



const withAlertMessagesContainer = WrappedComponent => {
    return class extends React.Component {
      state = {
        messages: [],
      }
  
      /* API to be exposed as props to the wrapped component */
      alertMessage = {
        error: (message, { timeout }) =>
          this.addMessage(message, "error", { timeout }),
        success: (message, { timeout }) =>
          this.addMessage(message, "success", { timeout }),
        info: (message, { timeout }) =>
          this.addMessage(message, "info", { timeout })
      };
  
      addMessage = (payload, type, options = {}) => {

        console.log('options -> ', options);

        const { messages } = this.state
        this.setState({
          messages: [
            {
              payload,
              type,
              id: Math.random().toString(36).substring(2).toUpperCase(),
              timeout: options.timeout
            },
            ...messages,
          ],
        })
      }
  
      clearMessages = () => {
        this.setState({
          messages: [],
        })
      }
      // 只有 alert sample 不會出現 清除全部
      isMultipleMessagesPresent = () => {
          return this.state.messages.length > 1 
      }
  
      removeMessage = messageId => {
        const { messages } = this.state
        const updatedMessages = messages.filter((message)=>{
            return message.id !== messageId
        })
  
        this.setState({
          messages: updatedMessages,
        })
      }
  
      render() {
        // 這是所有產生的 AlertDialog
        const alertDialogs = this.state.messages.map(({ payload, type, id, timeout })=>{
            return (
                <AlertDialog
                key={id}
                message={payload}
                type={type}
                timeout={timeout}
                handleOnClose={() => this.removeMessage(id)}
                />
            )
        })
  
        return (
          <React.Fragment>
            <WrappedComponent alertMessage={this.alertMessage} />
  
            <div>
              <div>{alertDialogs}</div>
              <div>
                {this.isMultipleMessagesPresent() && (
                  <ClearAlertDialog onClearClick={this.clearMessages} />
                )}
              </div>
            </div>
          </React.Fragment>
        )
      }
    }
  }

// in ms
const ALERT_TIMEOUTS = {
    error: 1000,
    success: 2000,
    info: 3000,
  }


// 製造 alert 的 sample 
// 共同的 button  之類的，點擊產生相同的功能

const SampleApp = ({ alertMessage }) => (
    <React.Fragment>
      {["error", "success", "info"].map(messageType => (
        <div key={messageType}>
          <button
            onClick={() =>
              alertMessage[messageType](`It's ${messageType}`, {
                timeout: ALERT_TIMEOUTS[messageType],
              })
            }
          >
            {`Show ${messageType}`}
          </button>
        </div>
      ))}
    </React.Fragment>
  )
  
  // 所以的功能都在 withAlertMessagesContainer
  // SampleApp 只負責 html
  export default withAlertMessagesContainer(SampleApp)