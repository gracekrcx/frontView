function HOCFactoryFactory(...params){
  // do something with params
  console.log('--> 參數',params);
    
  // 這裡 return 一個 function 把 params 帶給了 WrappedComponent
  return function HOCFactory(WrappedComponent) {
    return class HOC extends React.Component {
      render() {
        return <WrappedComponent name={params} {...this.props}/>
      }
    }
  }
}
  
const WrappedComponent = (props) => {
  console.log('---> p',props)
  return (
    <div>test</div>
  )
}
  
// 順序：
// HOCFactoryFactory({a:111111}) 執行後 return 一個 function 
// 給 HOCFactoryFactory( WrappedComponent )
const EnhancedExample = HOCFactoryFactory( {a:111111} )( WrappedComponent )
  
const AppHOC = () => {
  return (
    <div style={{background:'#fff'}}>
      <EnhancedExample data={'11223344'}/>
    </div>
  );
};
    
export default AppHOC