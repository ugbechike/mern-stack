import React from 'react';
import BaseInput from './Inputs';

const TextInput = (props) => {
    return (
        <BaseInput 
        {...props}
        type="text"
        /> 
    )
}

export default TextInput;