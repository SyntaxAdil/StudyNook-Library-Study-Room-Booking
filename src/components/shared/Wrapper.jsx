import React from "react";

const Wrapper = ({ className = "", children }) => {
  return (
    <section className={`${className} max-w-6xl mx-auto px-4 my-6 `}>
      {children}
    </section>
  );
};

export default Wrapper;
