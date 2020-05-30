import React, { Component } from 'react';
 

// base component 有 function 覺得不太好
const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  }
 
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
     
    props.onChange(inputName,inputValue); 
  }
 
  return(
    <div>
      {/* onSubmit and onChange events are triggered by the form */ }
      <form onSubmit = {handleSubmit} onChange={handleChange}>
        <input name = "name" type= "text" />
        <input name ="email" type="text"  />
        <button type="submit"> Submit </button>
      </form>
    </div>
  )
}


// HOC : CustomFormHOC 

const CustomForm = (propState) => ({propName, propListName}) => WrappedComponent => {
  return class withCustomForm extends Component {
 
 
    constructor(props) {
      super(props);
      propState[propListName] = [];
      this.state = propState;
     
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      console.log('--> s', this.state);
      /*
       {
          contact: {name: "", email: ""}
          contactList: []
        }
      他如此費盡心思，應該就是因為，所以的 input 資料集中在 contact 這個 object 裡
      */
    }
 
    /* prevState holds the old state. 
    The old list is concatenated with the new state and copied to the array */
 
    handleSubmit() {
     
      this.setState( prevState => { 
        return ({
          [propListName]: [...prevState[propListName], this.state[propName] ]
        })}, 
      () => console.log(this.state[propListName]) )
    }  
     
 
    /* When the input field value is changed, the [propName] is updated */
    handleChange(name, value) {
      this.setState( prevState => (
        {[propName]: {...prevState[propName], [name]:value} }) )
    }
 
    render() {
      console.log('--> A', this.props);
      return(
        <WrappedComponent {...this.props} {...this.state} 
          onChange = {this.handleChange} 
          onSubmit = {this.handleSubmit} 
        />
      )
    }
  }
}
 

const SignupWithCustomForm = CustomForm({ 
  contact: {name: '', email: ''}  //Initial state
})({
  propName:'contact', propListName: 'contactList'
  //The name of state object and the array
})(Form); // WrappedComponent

 

const CustomFormDemo = (props) => {
  return(
    <div>
      <SignupWithCustomForm {...props} />
    </div>
  );
}

export default CustomFormDemo