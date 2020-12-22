import React, { useState } from 'react';

const ErrorMessage = ({formError}) => {
    return(
        <>
            <p className="contact-form-err">{formError}</p>
        </>
    )
}

export default ErrorMessage;