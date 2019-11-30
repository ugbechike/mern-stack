import React from 'react';
import BaseInput from './Inputs';

const CheckBox = (props) => {
    return (
        <BaseInput 
        {...props}
        type="checkbox"
        /> 
    )
}

export default CheckBox;