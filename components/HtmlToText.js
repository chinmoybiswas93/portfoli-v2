import React from "react";

const HtmlToText = ({ children }) => {
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
};

export default HtmlToText;
