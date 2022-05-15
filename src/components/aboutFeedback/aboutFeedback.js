import React from 'react';
import PropTypes from 'prop-types';
import s from './aboutFeedback.module.css';

const About = ({options, onLeaveFeedback }) => {
    
    return (
            <>
            {options.map(option => (
                <div className={s.list}>
                    
            <button
            className={s.label}
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            >
            {option}
            </button></div>
        ))}
        </>
    );
};

  About.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default About;

