const FormInput = ({ name, type, title, value, handleChange }) => {
  return (
    <div className="input-field">
      <label className="" htmlFor={name}>
        {title}
      </label>
      <input
        className="field form-input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
