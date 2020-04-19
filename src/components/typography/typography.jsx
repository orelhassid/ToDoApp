import React from "react";
import "./typography.css";

export function Headline6({ text, border }) {
  return (
    <h6 className="headline-6">
      {border && <div className={`border-${border}`}></div>}
      {text}
    </h6>
  );
}

export function TextCaption({ text }) {
  return <p className="text-caption">{text}</p>;
}
