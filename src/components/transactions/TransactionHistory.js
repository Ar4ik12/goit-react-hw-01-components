import React from "react";
import style from "./TransactionHistory.module.css";
import TransactionList from "./transactionList/TransactionList";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.transactionHeader}>Type</th>
          <th className={style.transactionHeader}>Amount</th>
          <th className={style.transactionHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(elem => (
          <TransactionList data={elem} key={elem.id} />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
};
