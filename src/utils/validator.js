export const required = (value) =>{
    if(value){
        return undefined
    }else{
        return "Field is required"
    }
}

export const maxLength = (len) =>{
    return (value)=>{
        if(value && value.length > len ) return "Max length is "+ len
        return undefined
    }
}