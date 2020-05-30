import React from 'react';

const sayHello = (name) => {
  return (Base) => {
    Base.intro = `Hello, I am ${name}`;
    console.log(Base.intro);
    return () => <Base name={123}/>;
  };
};

const HelloWorld = props =>(
  <div>Hello World! {props.name}</div>
)

const HOC = sayHello('Loona')(HelloWorld);

const App = () => {
  return (
    <div className='App'>
      <HOC />
    </div>
  );
};

export default App