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
    <div>
      <input
        type="text"
        id="input"
        placeholder={placeholder}
        style={styles.TextInput}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
