import React, { useState } from "react";
import { Button, Input, Snackbar, TextField } from "@material-ui/core";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState(0);
  const [message, setmessage] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const [opensnackbar, setopensnackbar] = useState(false);

  const submitData = () => {
    if (name === "" || name.length <= 1) {
      setopensnackbar(true);
      seterrormsg("Please Enter valid name");
    } else if (email === "") {
      setopensnackbar(true);
      seterrormsg("Please Enter valid email");
    } else if (age < 25 || age > 45) {
      setopensnackbar(true);
      seterrormsg("Please Enter valid age");
    } else if (message.length > 255 || message.length == 0) {
      setopensnackbar(true);
      seterrormsg("Please Enter Valid Message for us");
    } else {
      setopensnackbar(true);
      seterrormsg("Form Submitted successfully");
    }
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={opensnackbar}
        onClose={() => setopensnackbar(false)}
        message={errormsg}
      />{" "}
      <h2 style={{ textAlign: "center" }}>Contact US </h2>
      <form name="f1">
        <center>
          <div
            style={{ display: "flex", flexDirection: "column", width: "30%" }}
          >
            <TextField
              placeholder="Enter Name"
              className="input-field"
              name="name"
              type="text"
              label="name"
              autoFocus
              onChange={(e) => setname(e.target.value)}
            />
            <TextField
              placeholder="Enter Email"
              className="input-field"
              name="email"
              type="email"
              label="email"
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              label="Age"
              type="number"
              placeholder="Enter Age"
              className="input-field"
              name="Age"
              onChange={(e) => setage(e.target.value)}
            />

            <TextField
              id="outlined-multiline-flexible"
              label="enter message"
              multiline
              maxRows={7}
              onChange={(e) => setmessage(e.target.value)}
            />

            <Button variant="contained" color="primary" onClick={submitData}>
              Submit
            </Button>
          </div>
        </center>
      </form>
    </div>
  );
}

export default Contact;
