import React, { memo, useState } from "react";

function Index() {
  const [state, setState] = useState(0);
  const add = () => {
    setState(state + 1);
  };
  return (
    <div>
      <div>{state}</div>
      <button onClick={add}>+</button>
    </div>
  );
}

export default memo(Index);
