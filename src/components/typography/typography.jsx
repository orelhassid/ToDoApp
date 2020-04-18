import React from "react";
import "./typography.css";

export function Headline6({ text }) {
  return <h6 className="headline-6">{text}</h6>;
}

export function TextCaption({ text }) {
  return <p className="text-caption">{text}</p>;
}
