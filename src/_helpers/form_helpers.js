export const itsFieldError = (name, data)=>{
    if( data === undefined) return false
    if(data[name] === undefined) return false
    
    return true
}
export const getFieldError = (name, data)=>{
    if( data === undefined) return undefined
    if(data[name] === undefined) return undefined

    return data[name]
}
