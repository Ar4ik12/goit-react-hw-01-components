import React from "react";

const TransactionList = ({ data }) => {
  return (
    <tr>
      <td>{data.type}</td>
      <td>{data.amount}</td>
      <td>{data.currency}</td>
    </tr>
  );
};

export default TransactionList;
