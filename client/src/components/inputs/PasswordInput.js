import React from 'react';
import BaseInput from './Inputs';

const PasswordInput = (props) => {
    return (
        <BaseInput 
        {...props}
        type="password"
        /> 
    )
}

export default PasswordInput;