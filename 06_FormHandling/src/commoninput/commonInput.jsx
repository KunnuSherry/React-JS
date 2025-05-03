function CommonInput({label, name, id, type, placeholder, value, onChange}){
    return <div>
        <label htmlFor={name}>{label}</label>
        <input name={name}
        id={id}
        type={type}
        placeholder={placeholder || "Enter a value"}
        value = {value}
        onChange = {onChange} />
    </div>
}

export default CommonInput