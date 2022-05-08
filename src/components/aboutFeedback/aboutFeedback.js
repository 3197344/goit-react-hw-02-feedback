import React from 'react';
import s from './aboutFeedback.module.css';

const About = ({ onWriteFeedback }) => {
    
    return (
        <ul className={s.stats}>
            <li className={s.list}>
                <button className={s.label}
                    type="button"
                    name="good"
                    onClick={onWriteFeedback}
                >
                    good
                </button>
                
            </li>
            <li className={s.list}>
                <button className={s.label}
                    type="button"
                    name="neutral"
                    onClick={onWriteFeedback}
                >
                    neutral
                </button>
                    
            </li>
            <li className={s.list}>
                <button className={s.label}
                    type="button"
                    name="bad"
                    onClick={onWriteFeedback}
                >
                    bad
                </button>
                    
            </li>
        </ul>
    );
};
    
export default About;

