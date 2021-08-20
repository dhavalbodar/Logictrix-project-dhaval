import React, { useState } from "react";
import { TextField } from "@material-ui/core";
function HomeEmployee(props) {
  return (
    <div>
      <TextField
        type="text"
        placeholder="Enter Value"
        onChange={props.changeData}
        value={props.data}
      />
    </div>
  );
}

export default HomeEmployee;
