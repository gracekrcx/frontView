![img](https://bit.ly/2XlO8NR)

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
         <WrappedComponent item={this.props.item} />
       ) : (
         <ImgCardLoading />
       );
     }
   };
 };

  export default WithLoading
```

改寫 loading 為 HOC 後，讓 WrappedComponent 不需判斷 loading 
（下圖為 WrappedComponent 拿掉 loading 判斷）

![img](https://bit.ly/2TU4MSj)
