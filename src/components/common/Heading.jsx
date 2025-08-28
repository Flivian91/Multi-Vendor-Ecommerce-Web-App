import React from "react";

function Heading({ title }) {
  return (
    <h2 className="text-xl font-semibold dark:text-slate-50 text-black">
      {title}
    </h2>
  );
}

export default Heading;
