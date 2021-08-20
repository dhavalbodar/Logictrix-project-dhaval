import React, { useState } from "react";
import { TextField } from "@material-ui/core";

function HomeCompany(props) {
  return (
    <div className="container">
      <TextField
        type="text"
        placeholder="Enter Value"
        onChange={props.changeData}
        value={props.data}
      />
    </div>
  );
}

export default HomeCompany;
