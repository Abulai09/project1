import s from './formControl.module.css'


const TextArea = ({input,meta,...props}) =>{
    
    let hasError = meta.touched && meta.error

    return(
        <div className={ s.formControl + " " + (hasError ? s.error : + " ") } >
            <div><input {...input} {...props}/></div>
            {hasError ? <span>{meta.error}</span> : null}
        </div>
    )
}

export default TextArea