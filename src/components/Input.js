import React, { memo } from "react";

const Input = ({ placeholder = "Start typing", onKeyPress }) => (
  <input placeholder={placeholder} onKeyPress={onKeyPress} />
);

export default memo(Input);
