import * as React from "react";

const Header = props => {
  const { userName } = props;

  return (
    <div>
      <h2> {userName} </h2>
      <button onClick={props.logout}>logout</button>
    </div>
  );
};

export default Header;
