'use client'

import React, { useState } from "react";


export default function CCInput() {
  const [val, setVal] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <input
      className="border-[1.5px] border-[#cccccc] mt-1 w-full rounded-xl p-2 outline-0 focus:border-[#003d29]"
      type="text"
      autoFocus
      placeholder="xxxx xxxx xxxx xxxx"
      value={cc_format(val)}
      onChange={onChange}
    />
  );
}

function cc_format(value:string) {
  const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(" ") : value;
}
