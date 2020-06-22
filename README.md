![img](https://bit.ly/2XlO8NR)

### 簡介
製作此範例的目的：
1. 熟悉 redux 環境設定
2. 使用 redux-thunk 處理 api 呼叫
3. 把剛學習的 HOC pattern 運用在真實範例

### run the repository
`yarn dev`

### 使用技術

- next.js
- redux.js
- express.js
- axios
- Material-UI
- ESlint

### HOC pattern
```js
const WithLoading = WrappedComponent => {
   return class LoadingHOC extends Component {
     render() {
       return this.props.item ? (
         <WrappedComponent {...this.props}/>
       ) : (
         <ImgCardLoading />
       );
     }
   };
 };

  export default WithLoading
```

改寫 loading 為 HOC 後，WrappedComponent 裡就不需有判斷 loading 的邏輯。

