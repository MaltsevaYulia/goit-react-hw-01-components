import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from '../getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.statistics_title}>{title}</h2>}
        <ul className={css.stat_list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={css.statistics_item}
                style={{ backgroundColor: getRandomHexColor() }}
                key={id}
              >
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
