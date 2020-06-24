import React from "react";
import {itsFieldError, getFieldError} from '_helpers/form_helpers';

const FormError = ({error_set})=>{
    
    if(itsFieldError("detail", error_set))
        return (
            <div className="invalid-feedback d-block">
                {getFieldError("detail", error_set)}
            </div>
        );
    return [undefined]
    
} 

export {FormError as default}