const React = require('react')
const curry = require('lodash/curry')

// 這裏是錯誤接收點，所以可以把你要呈現的錯誤 html template 傳入進來

// 第一個參數：errorCallback ，讓你可以做一些彈性的處理
// 第二個參數：FallbackComponent
// 看不出來第三個參數要做什麼

function withErrorHandler (errorCallback, FallbackComponent, Component) {
  class WithErrorHandler extends React.Component {
    constructor () {
      super()

      this.state = {
        hasError: false,
        error: null,
        errorInfo: null
      }
    }

    // 觸發錯誤  hasError 變 true
    componentDidCatch (error, info) {
      this.setState({ hasError: true, error, errorInfo: info })

      errorCallback(error, info, this.props)
    }

    render () {
      if (this.state.hasError) {
        const { error, errorInfo } = this.state
        return (
          <FallbackComponent
            {...this.props}
            error={error}
            errorInfo={errorInfo}
          />
        )
      }

      return <Component {...this.props} />
    }
  }
  WithErrorHandler.displayName = `withErrorHandler(${Component.displayName})`
  return WithErrorHandler
}

module.exports = curry(withErrorHandler)