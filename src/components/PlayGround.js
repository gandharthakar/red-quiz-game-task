import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStopwatch } from 'react-timer-hook';
import { useHistory } from "react-router-dom";

function PlayGround(props) {

    const history = useHistory();
    let athlete_id = props.match.params.id;
    
    const showRoundPageView = false;
    const [roundView, setRoundView] = useState(showRoundPageView);
    const [roundSplashScreenData, setRoundSplashScreenData] = useState([]);
    const [roundScreenCount, setRoundScreenCount] = useState(1);
    let rc = [
        {
            show_ques_ans_panel: false,
            add_ripple_round_animation_effect: false
        }
    ];
    const [roundScreenClass, setRoundScreenClass] = useState(rc);

    
    const [currQuestion, setCurrQuestion] = useState([]);
    const [currAnswerOptions, setCurrAnswerOptions] = useState([]);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const [roundIndex, setRoundIndex] = useState(1);
    const [questionIndex, setQuestionIndex] = useState(1);
    let [positiveScore, setPositiveScore] = useState(0);
    let [negativeScore, setNegativeScore] = useState(0);

    // const [correctAns, setCorrectAns] = useState('');
    
    let { seconds, minutes, hours, start, pause } = useStopwatch({ autoStart: false });

    if(seconds < 10) {
        seconds = '0' + seconds;
    }

    if(minutes < 10) {
        minutes = '0' + minutes;
    }

    if(hours < 10) {
        hours = '0' + hours;
    }

    function startStopWatch () {
        start();
    }

    function pauseStopWatch() {
        pause();
    }

    useEffect(() => {
        setRoundView(true);
        setRoundScreenClass({show_ques_ans_panel: true, add_ripple_round_animation_effect: true});
        var tm = setInterval(() => {
            if(roundScreenCount < 3) {
                setRoundScreenCount(roundScreenCount => roundScreenCount + 1);
            }
            clearInterval(tm);
            setRoundView(false);
            startStopWatch();
        }, 1000);
        
    }, [roundScreenCount])

    useEffect(() => {
        const getAPIData = async () => {
            // Question Answers API Call();
            let qa_response = await axios.get(`https://rballaccess.achieveee.com/api/questions/${athlete_id}`);
            let qa_data = qa_response.data.data;

            let ques = qa_data.questions;
            let quesArr = [];
            let answr = qa_data.questions;
            let ansArr = [];
            let corAns = qa_data.questions;
            let corAnsArr = []

            for(let a = 0; a < ques.length; a++) {
                quesArr.push(ques[a].question);
            }
            for(let b = 0; b < answr.length; b++) {
                ansArr.push(answr[b].options);                
            }
            for(let c = 0; c < corAns.length; c++) {
                corAnsArr.push(corAns[c].correct_answer);
            }
            setCurrQuestion(quesArr);
            setCurrAnswerOptions(ansArr);
            setCorrectAnswers(corAnsArr);

            
            

            // Round Splash Screen API Call();
            let rs_respons = await axios.get(`https://rballaccess.achieveee.com/api/athletes/${athlete_id}`);
            let rs_data = rs_respons.data.data.athlete;
            setRoundSplashScreenData(rs_data);
        }
        getAPIData();

    }, [athlete_id]);

    let handleClick = (e) => {

        let target_id = parseInt(e.target.id);
        let curans = correctAnswers[currentIndex];
        
        if(target_id === curans) {
            setPositiveScore(a => a + 1);
            alert('Correct Answwer');
            //setCorrectAns(a => console.log(a[0] = 'condition-check correct correct-shake'));
        } else {
            setNegativeScore(a => a + 1);
            alert('Wrong Answwer');
        }
        
        // console.log(`Pos : ${positiveScore} && Neg : ${negativeScore}`)

        setQuestionIndex(a => a + 1);
        let roundPerQuesLength = 5 - 1;
        if(questionIndex > roundPerQuesLength) {
            if(currentIndex + 1 === 5) {
                setRoundView(true);
                pauseStopWatch();
                setRoundScreenClass({show_ques_ans_panel: true, add_ripple_round_animation_effect: true});
                setRoundScreenCount(1);
                var vm = setTimeout(() => {
                    var tm = setInterval(() => {
                        if(roundScreenCount < 3) {
                            setRoundScreenCount(roundScreenCount => roundScreenCount + 1);
                        }
                        clearInterval(tm);                        
                    }, 1000);
                    clearTimeout(vm);
                    setRoundView(false);
                    startStopWatch();
                }, 3000);
            }

            setRoundIndex(a => a + 1);
            setQuestionIndex(1);
        }

        if(currentIndex + 2 > currQuestion.length) {
            setRoundIndex(a => a - 1);
            setQuestionIndex(5);
        }

        if(currentIndex < currQuestion.length) {
            let nextQues = currentIndex + 1;
            setCurrentIndex(nextQues);
        }

        if(currentIndex + 2 > currQuestion.length) {
            setRoundView(false);
            pauseStopWatch();
            let scoreData = {
                positive_score: positiveScore,
                negative_score: negativeScore,
                timestamp: `${hours}:${minutes}:${seconds}`
            }
            localStorage.setItem('score_data', JSON.stringify(scoreData));
            history.push(`/score-leaderboard/${athlete_id}`);
            console.log(scoreData);
        }
    }

    return (
        <>
            {roundView ? ( 
                <>
                <div className="common-section-bg athlete-game-round--section">
                    <div className="common-game--container-1">
                        <div className="agrs-imgcnt">
                            <img src={roundSplashScreenData.cover_photo} className="agrs--athlete-picture" alt="athlete" />
                        </div>
                        <div className="agrs-ttlcnt">
                            <h1 className="agrs-ttl">
                                {roundSplashScreenData.name} - Round {roundIndex}
                            </h1>
                        </div>
                        <div className="agrs-gc-cnt">
                            <div className={
                                roundScreenClass.add_ripple_round_animation_effect === true ? 'agrs-round-counter ripple-round-animation play-anim' : 'agrs-round-counter ripple-round-animation'
                            }>
                                <span className="count">{roundScreenCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
            : (
                <div className="common-section-bg game-playground--section" style={
                    roundScreenClass.show_ques_ans_panel === true ? { display: 'black' } : { display: 'none' }
                }>
                    <div className="common-game--container-2">
                        <div className="quiz-header--section">
                            <div className="quiz-header-item">
                                <h2 className="qh-round-info">Round {roundIndex}/{currQuestion.length / 5}</h2>
                                <h2 className="qh-question-info">Question {questionIndex}/{currQuestion.length / 2}</h2>
                            </div>
                            <div className="quiz-header-item">
                                <div className="quiz-timer">
                                    <div className="qh-qt-inner">
                                        <svg className="svg-icon" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="fill" d="M18.125 1.20831H10.875V3.62498H18.125V1.20831ZM13.2917 16.9166H15.7083V9.66665H13.2917V16.9166ZM22.9946 8.92956L24.7104 7.21373C24.1908 6.59748 23.6229 6.01748 23.0067 5.50998L21.2908 7.22581C19.4179 5.72748 17.0617 4.83331 14.5 4.83331C8.49458 4.83331 3.625 9.7029 3.625 15.7083C3.625 21.7137 8.4825 26.5833 14.5 26.5833C20.5175 26.5833 25.375 21.7137 25.375 15.7083C25.375 13.1466 24.4808 10.7904 22.9946 8.92956ZM14.5 24.1666C9.82375 24.1666 6.04167 20.3846 6.04167 15.7083C6.04167 11.0321 9.82375 7.24998 14.5 7.24998C19.1763 7.24998 22.9583 11.0321 22.9583 15.7083C22.9583 20.3846 19.1763 24.1666 14.5 24.1666Z" fill="white"></path>
                                        </svg>
                                        <span className="str">{hours}:{minutes}:{seconds}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="quiz-progress--container">
                            <div className="quiz--progress" style={{width: `${(currentIndex / currQuestion.length) * 100}%`}}></div>
                        </div>
                        <div className="quiz-game-playground">
                            <div className="quiz-game-playground-inner">
                                <h3 className="quiz-question">
                                    {currQuestion[currentIndex]}
                                </h3>
                                <ul className="quiz-answer-option--list">
                                    {
                                        (currAnswerOptions[currentIndex] || []).map((data, index) => {
                                            return (
                                                <li key={index}>
                                                    <button id={data.id} dbid={index} className={`answer-option`} title={data.text} onClick={handleClick}>
                                                        {data.text}
                                                        <svg className="svg-icon wrong-icon" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                            <path className="fill" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#000"/>
                                                        </svg>
                                                        <svg className="svg-icon correct-icon" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
                                                            <path className="fill" d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="#000"/>
                                                        </svg>
                                                    </button>
                                                </li>
                                            );
                                        })
                                    }                                    
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
