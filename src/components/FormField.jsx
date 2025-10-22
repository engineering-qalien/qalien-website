export default function FormField({ label, id, type = "text", required = false, placeholder = "" }) {
  return (
    <label htmlFor={id} className="block">
      <span className="block font-medium">
        {label} {required && <span className="text-slate-900/60 text-sm">(required)</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border-b border-slate-900/40 focus:outline-none focus:border-slate-900 py-2"
      />
    </label>
  );
}