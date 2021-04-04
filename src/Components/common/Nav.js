import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div>
        <Link to="/loguin">Loguin</Link>
        <Link to="/register">Registro</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/wkablue">WkaBlue</Link>
        <Link to="/quality">Quality</Link>
      </div>
    </>
  );
};

export default Nav;
