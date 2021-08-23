import React, { useEffect, useState } from "react";

function User() {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/users")
      .then((response) => response.json())
      .then((data) => setuserData(data.data))
      .catch((e) => {
        console.log(e);
        document.getElementById("msg").innerText = "Something went wrong";
      });
  }, []);

  return (
    <div className="mt-4">
      {userData.length > 0 ? (
        userData.map((item) => (
          <>
            <span>Id : {item.id}</span> | <span> Name : {item.name}</span>
            <br />
          </>
        ))
      ) : (
        <p id="msg">Please Wait Data Is fatching</p>
      )}
    </div>
  );
}

export default User;
