import React from "react";
import style from "./Statistical.module.css";
import StatisticalItem from "./statisticalItem/StatisticalItem";
import PropTypes from "prop-types";

const Statistical = ({ stats, title }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>

      <ul className={style.statList}>
        {stats.map(elem => (
          <StatisticalItem data={elem} key={elem.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistical;

Statistical.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
};
