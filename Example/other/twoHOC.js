
// 2 層 HOC 
// 負責各自的事
// 可組合、覆寫、編輯上層資料與UI ，成為一個新元件的函式。

const Page = ({ name, number }) => (
    <div>
      <h2>A-> {name}</h2>
      <h3>B-> {number}</h3>
    </div>
);

// 在這裡改變 number 的 value
const numberAddOne = Component => ({ number, ...props }) => (
    <Component {...props} number={number + 100} />
);

// HOC
// 在這裡改變 name 的 value
const greetingWithName = greeting => Component => ({ name, ...props }) => (
    <Component {...props} name={`${greeting}----> ${name}`} />
);

// HOC
// 在這裡增加了 html tag
const addATitle = Component => props => (
  <React.Fragment>
    <h1>主題預設位置</h1>
    <Component {...props} />
  </React.Fragment>
);

// 輸出 HOC 
const App = addATitle(greetingWithName("hihi~")(numberAddOne(Page)));

// 這裏是最原始的 props
const AppHOC = () => {
  return (
    <div style={{background:'#fff'}}>
      <App name="Michelle" number={10} />
    </div>
  );
};

export default AppHOC


// import { compose } from 'recompose';
// const hoc = compose(
//   addATitle,
//   greetingWithName(‘Hello'),
//   numberAddOne,
// );
// const App = hoc(Page);