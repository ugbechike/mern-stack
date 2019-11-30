import React from 'react';

const BaseForm = (props) => {
    return (
        <form onSubmit = {props.onSubmit}>
            {props.children}
        </form>
    )
}

export default BaseForm