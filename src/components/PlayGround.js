import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PlayGround(props) {
    let athlete_id = props.match.params.id;
    const showRoundPageView = false;
    const [roundView, setRoundView] = useState(showRoundPageView);

    useEffect(() => {
        setRoundView(true);
    }, []);

    return (
        <>
            {roundView ? ( 
                <>
                <h1><Link to={`/score-leaderboard/${athlete_id}`}>Jump To Score</Link></h1>
                <div className="common-section-bg athlete-game-round--section">
                    
                    <div className="common-game--container-1">
                        <div className="agrs-imgcnt">
                            <img src={process.env.PUBLIC_URL + '/images/athlete-game-start-player/kl-rahul.png'} className="agrs--athlete-picture" alt="athlete" />
                        </div>
                        <div className="agrs-ttlcnt">
                            <h1 className="agrs-ttl">
                                KL Rahul - Round 1
                            </h1>
                        </div>
                        <div className="agrs-gc-cnt">
                            <div className="agrs-round-counter ripple-round-animation">
                                <span className="count">1</span>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
            : (
                <div className="common-section-bg game-playground--section">
                    <div className="common-game--container-2">
                        <div className="quiz-header--section">
                            <div className="quiz-header-item">
                                <h2 className="qh-round-info">Round 1/2</h2>
                                <h2 className="qh-question-info">Question 1/10</h2>
                            </div>
                            <div className="quiz-header-item">
                                <div className="quiz-timer">
                                    <div className="qh-qt-inner">
                                        <svg className="svg-icon" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="fill" d="M18.125 1.20831H10.875V3.62498H18.125V1.20831ZM13.2917 16.9166H15.7083V9.66665H13.2917V16.9166ZM22.9946 8.92956L24.7104 7.21373C24.1908 6.59748 23.6229 6.01748 23.0067 5.50998L21.2908 7.22581C19.4179 5.72748 17.0617 4.83331 14.5 4.83331C8.49458 4.83331 3.625 9.7029 3.625 15.7083C3.625 21.7137 8.4825 26.5833 14.5 26.5833C20.5175 26.5833 25.375 21.7137 25.375 15.7083C25.375 13.1466 24.4808 10.7904 22.9946 8.92956ZM14.5 24.1666C9.82375 24.1666 6.04167 20.3846 6.04167 15.7083C6.04167 11.0321 9.82375 7.24998 14.5 7.24998C19.1763 7.24998 22.9583 11.0321 22.9583 15.7083C22.9583 20.3846 19.1763 24.1666 14.5 24.1666Z" fill="white"></path>
                                        </svg>
                                        <span className="str">00:00:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-progress--container">
                            <div className="quiz--progress" style={{width: '10%'}}></div>
                        </div>
                        <div className="quiz-game-playground">
                            <div className="quiz-game-playground-inner">
                                <h3 className="quiz-question">
                                    In which 2 formats of the game was Rahul appointed as vice-captain of the Indian team touring Australia?
                                </h3>
                                <ul className="quiz-answer-option--list">
                                    <li>
                                        <button className="answer-option" title="Normal One">
                                            Normal One
                                            <svg className="svg-icon wrong-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#000"/>
                                            </svg>
                                            <svg className="svg-icon correct-icon" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="#000"/>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="answer-option condition-check correct" title="Correct One">
                                            Correct One
                                            <svg className="svg-icon wrong-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#000"/>
                                            </svg>
                                            <svg className="svg-icon correct-icon" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="#000"/>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="answer-option condition-check wrong" title="Wrong One">
                                            Wrong One
                                            <svg className="svg-icon wrong-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#000"/>
                                            </svg>
                                            <svg className="svg-icon correct-icon" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="#000"/>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="answer-option condition-check correct correct-shake" title="Correct One With Shake Animation">
                                            Correct One With Shake Animation
                                            <svg className="svg-icon wrong-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#000"/>
                                            </svg>
                                            <svg className="svg-icon correct-icon" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="#000"/>
                                            </svg>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="answer-option condition-check wrong wrong-shake" title="Wrong One With Shake Animation">
                                            Wrong One With Shake Animation
                                            <svg className="svg-icon wrong-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#000"/>
                                            </svg>
                                            <svg className="svg-icon correct-icon" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill" d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="#000"/>
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PlayGround;
