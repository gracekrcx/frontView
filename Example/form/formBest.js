// Object fields 這裏定義了 他需要被 validate 的資訊
// 最強最完整的範例了
// 有驗證



import React, { useState, useMemo } from 'react'
import { checkValidation } from '../utils/validations'
// import { NavLink } from 'react-router-dom'

import fieldsForm from '../utils/fields'
import Input from '../utils/input'


const withForm = formInitialData => WrappedComponent => {
  return props => {
    const [formState, setFormState] = useState({ ...formInitialData })
    const [ formIsValid, setFormIsValid ] = useState(false)

    const handlerFormValidation = form => {
      console.log('---> 驗證',form);
      let isValidForm = true
      for (let inputElement in form) {
        console.log('---> in',inputElement);
        isValidForm = isValidForm && form[inputElement].valid
      }
      return isValidForm
    }

    // updating the input value
    // validates it
    const handlerOnChangeForm = (ev, id) => {
      const inputValue = ev.target.value

      console.log('---> AA',formState);
      const validation = checkValidation(inputValue, formState[id].validation)
      
      const formData = {
        ...formState,
        [id]: {
          ...formState[id],
          value: inputValue,
          touched: true,
          valid: validation.isValid,
          errorMessage: validation.error
        }
      }

      console.log('---> BB',formData);

      setFormState(formData)
      setFormIsValid(handlerFormValidation(formData))
    }

    // iterating the object fields and exporting all the values
    const handlerOnSubmitJSON = ev => {
      console.log('-呈現 obj-->');
      const data = {}
      for (let key in formState) {
        data[key] = formState[key].value
      }
      return data
    }

    // object 的資料透過這個 function render 出需要的 tag
    const arrayElementsForm = () => {
      const formElementsArr = []
      if (formState) {
        for (let key in formState) {
          formElementsArr.push({
            id: key,
            config: formState[key]
          })
        }
      }
      return formElementsArr
    }

    const onResetForm = () => {
      setFormState(formInitialData)
      setFormIsValid(false)
    }

    return (
      useMemo(() => (
        <WrappedComponent
          { ...props }
          isValidForm={ formIsValid }
          onChangeForm={ handlerOnChangeForm }
          onRenderElements={ arrayElementsForm }
          onResetForm={ onResetForm }
          getJsonData={ handlerOnSubmitJSON }
        />
      ), [formState, formIsValid])

    )
  }
}

// base component
const HocTest = props => {
  const renderForm = () => {
    let form = (
      <div className="form-style-2">
        <form>
          {props.onRenderElements().map(formElement => (
            <Input
              key={ formElement.id }
              label={ formElement.config.elementLabel }
              elementType={ formElement.config.elementType }
              elementConfig={ formElement.config.elementConfig }
              value={ formElement.config.value }
              changed={ ev => props.onChangeForm(ev, formElement.id) }
              errorMessage={ formElement.config.errorMessage }
            />
          ))}
          <button disabled={ !props.isValidForm } type="button">
            Save
          </button>
        </form>
      </div>
    )
  
    return form
  }
  
  return (
    <div  className="container" style={{background:'#fff'}}>
      {/* <NavLink to="/"> GO TO HOOKS </NavLink> */}
      <h2>Using HOC</h2>
      { renderForm() }
      <br />
      { JSON.stringify(props.getJsonData()) }
    </div>
  )
}
  
  
export default withForm(fieldsForm)(HocTest)