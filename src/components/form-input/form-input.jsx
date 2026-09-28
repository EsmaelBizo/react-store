function FormInput({ id, type, placeholder, required, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-extrabold">
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </label>
      {type === "textarea" ? (
        <textarea
          className="resize-y col-span-full w-full border border-border fucus:border-accent rounded-sm py-3.5 px-4 bg-surface text-text fucus:box-shadow-accent"
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className="w-full border border-border fucus:border-accent rounded-sm py-3.5 px-4 bg-surface text-text fucus:box-shadow-accent"
          id={id}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        ></input>
      )}
    </div>
  );
}

export default FormInput;
