import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import React from 'react'
import { submitUserAction } from '../../actions/user/UserAction'
const UserFormFunc = props =>{
    const {handleSubmit} = props

    const submit = (data, submitUserAction)=>{
        submitUserAction(data)
    }
    return(
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>
                Nome
            </label>
            <Field 
                type="text"
                component="input"
                name="name"/>
            <label>
                E-mail
            </label>
            <Field 
                type="text"
                component="input"
                name="email"/>
            <label>
                Mensagem
            </label>
            <Field 
            type="text"
            name="notes" 
            component="textarea"
            />    
            <button
                type="submit"
            >Enviar</button>
        </form>
    );
}

const UserForm = (reduxForm({
    form:"formUser"
}))(UserFormFunc)

const mapStateProps = state =>({

})

export default connect(mapStateProps,{submitUserAction})(UserForm)