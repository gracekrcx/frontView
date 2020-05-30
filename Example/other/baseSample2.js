import React from 'react'

const Demo = (props) => {
  console.log('--11-->',props);
  return (
    <div>我是一个普通组件</div>
  );
}

 
// 不更改原本 component 增加 html 在 origin component 上
const GenerateId = (WrappedComponent) => {
  return class HOC extends React.Component {
    
    render() {
      const newProps = {
        id: Math.random().toString(36).substring(2).toUpperCase()
      };
      return <WrappedComponent {...this.props} {...newProps}/>;
    }
  };
}

const WithHeaderDemo = GenerateId(Demo);

const AppHOC = () => {
  return (
    <div style={{background:'#fff'}}>
      <WithHeaderDemo/>
    </div>
  );
};
  
export default AppHOC