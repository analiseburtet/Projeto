import React from 'react';
import UserForm from '../user/UserForm';
import "./Contato.css"

class Contato extends React.Component {
    render(){
        return(
        <div className="secondDiv">
             <UserForm></UserForm> 
        </div>
        );
    }
}
export default Contato;