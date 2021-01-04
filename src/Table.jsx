import React from "react";
import "./Table.css";
// import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
   
      <table style={{width:"100%"}}>
       
        <tbody>
      {countries.map((country,index) => (
        <tr key={index}>
          <td>{country.country}</td>
          <td>
            <strong>{(country.cases)}</strong>
          </td>
        </tr>
      ))}
      </tbody>
      </table>
    </div>
  );
}

export default Table;
