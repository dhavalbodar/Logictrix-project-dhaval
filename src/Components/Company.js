import React from "react";
import CompanyChild from "./CompanyChild";
import CompanyParent from "./CompanyParent";
function Company() {
  return (
    <div>
      <CompanyParent />
      <CompanyChild />
    </div>
  );
}

export default Company;
