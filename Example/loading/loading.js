// 再傳入 HOC 時多一個參數傳入，增加彈性
// 2 個 HOC 分開疊加：LoadingList, FlattenLoadingList

const List = ({ data }) => (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  )
  
  const withLoading = BaseComponent => ({ isLoading, ...otherProps }) => (
    isLoading ?
      <div>我正在加载...</div> :
      <BaseComponent {...otherProps} />
  )
  
  const LoadingList = withLoading(List)
  
  // propKey => wrapCmp => props
  const flatten = propKey => BaseComponent => {
    return props => {
      console.log('propKey-->',propKey)
      console.log('props-->',props)
      return <BaseComponent {...props} {...props[propKey]} />
    } 
  }
  
  const FlattenLoadingList = flatten('list')(LoadingList)
  
  const App = ()=>(
    <div style={{background:'#fff'}}>
      <FlattenLoadingList list={[1,2,3]}/>
    </div>
  )
      
  export default App