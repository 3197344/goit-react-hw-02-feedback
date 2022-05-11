import React from 'react';
import s from './aboutFeedback.module.css';

const About = ({ onLeaveFeedback }) => {
    
    return (
        <ul className={s.stats}>
            <li className={s.list}>
                <button className={s.label}
                    type="button"
                    name="good"
                    onClick={onLeaveFeedback}
                >
                    good
                </button>
                
            </li>
            <li className={s.list}>
                <button className={s.label}
                    type="button"
                    name="neutral"
                    onClick={onLeaveFeedback}
                >
                    neutral
                </button>
                    
            </li>
            <li className={s.list}>
                <button className={s.label}
                    type="button"
                    name="bad"
                    onClick={onLeaveFeedback}
                >
                    bad
                </button>
                    
            </li>
        </ul>
    );
};
    
export default About;

