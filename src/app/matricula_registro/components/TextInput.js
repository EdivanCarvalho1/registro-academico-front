export default function TextInput({
  width = "100px",
  onChange = () => {},
  placeholder = "Digite aqui",
  rounded = true,
  padding = "5px",
  fontSize = "16px",
  border = "1px solid #ccc",
  margin = "0",
  value,
}) {
  const styles = {
    TextInput: {
      width: width,
      borderRadius: rounded ? "5px" : "0",
      padding: padding,
      fontSize: fontSize,
      border: border,
      margin: margin,
    },
  };

  return (
    <div style={{ margin }}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border border-gray-300 rounded px-2 py-1 text-base"
        style={{ width }}
      />
    </div>
  );
}
