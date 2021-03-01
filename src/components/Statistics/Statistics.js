import React from "react";
import style from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={style.statistics}>
        {title && <h2 className={style.title}>Upload stats</h2>}

        <ul className={style.statList}>
          {stats.map((el) => {
            const { id, label, percentage } = el;
            return (
              <li className={style.item} key={id}>
                <span className={style.label}>{label}</span>
                <span className={style.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: "Statistics",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
