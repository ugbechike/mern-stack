import React from 'react';
import BaseInput from './Inputs';

const EmailInput = (props) => {
    return (
        <BaseInput 
        {...props}
        type="email"
        /> 
    )
}

export default EmailInput;