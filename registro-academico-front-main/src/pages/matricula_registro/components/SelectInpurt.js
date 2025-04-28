import React from "react";

const SelectInput = ({
  defaultValue,
  width = "100px",
  options,
  value,
  onChange,
  rounded = true,
  padding = "5px",
  fontSize = "16px",
  border = "1px solid #ccc",
  margin = "0",
}) => {
  const styles = {
    select: {
      width: width,
      borderRadius: rounded ? "5px" : "0",
      padding: padding,
      fontSize: fontSize,
      border: border,
      margin: margin,
    },
  };

  return (
    <div className="select-input">
      <select value={value} onChange={onChange} style={styles.select}>
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
