import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>  {
    
    return (
        <ul className={s.stats}>
            <li className={s.list}>
                <p className={s.label}>Good: {good}</p>
            </li>

            <li className={s.list}>
                <p className={s.label}>Neutral: {neutral}</p>
            </li>

            <li className={s.list}>
                <p className={s.label}>Bad: {bad}</p>
            </li>

            <li className={s.list}>
                <p className={s.label}>Total: {total}</p>
            </li>

            <li className={s.list}>
                <p className={s.label}>Positive feedback: {positivePercentage}%</p>
            </li>
        </ul>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;