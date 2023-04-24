import React from "react";

export default function Item( {icon, label, value, color}) {
  return (
    <div className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p> {label}</p>
      </div>
    </div>
  );
}
