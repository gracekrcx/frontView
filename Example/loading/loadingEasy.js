const List = ({ data }) => (
    <ul>
      <li>{data.a}</li>
      <li>{data.b}</li>
      <li>{data.c}</li>
    </ul>
  )
  
  const withLoading = BaseComponent => ({ isLoading, ...otherProps }) => (
    isLoading ?
      <div>我正在加载...</div> :
      <BaseComponent {...otherProps} />
  )
    
  const LoadingList = withLoading(List)
  
  const App = ()=>(
    <div style={{background:'#fff'}}>
    <LoadingList data={{a:'hhh',b:222,c:333}} isLoading={true}/>
    </div>
  )
    
  export default App
  