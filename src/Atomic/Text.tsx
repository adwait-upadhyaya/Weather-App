import React from "react";
import { IText } from "../interface/Itext";

const Text = (props: IText) => {
  const { type, className, id, content } = props;
  return React.createElement(type, { className, id }, content);
};

export default Text;
