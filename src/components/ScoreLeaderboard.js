import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ScoreLeaderboard(props) {
    let athlete_id = props.match.params.id;    

    let leaderboardData = {
        activeWeeklyTab: true,
        showWeeklyTable: true
    }

    const [apiData, setAPIData] = useState([]);
    const [toggleLeaderboardData, setToggleLeaderboardData] = useState(leaderboardData);
    const [weeklyDataFound, setWeeklyDataFound] = useState(false);
    const [allTimeDataFound, setAllTimeDataFound] = useState(false);

    const toggleDataWeekly = () => {
        setToggleLeaderboardData({
            activeWeeklyTab: true,
            showWeeklyTable: true
        });
    }

    const toggleDataAllTime = () => {
        setToggleLeaderboardData({
            activeWeeklyTab: false,
            showWeeklyTable: false
        });
    }

    useEffect(() => {
        const getAPIData = async () => {
            let response = await axios.get(`https://rballaccess.achieveee.com/api/athletes/leaderboard/${athlete_id}`);
            let data = response.data.data;
            setAPIData(data);
            if(Object.keys(data.weekly).length === 0) {
                setWeeklyDataFound(true);
            }
            if(Object.keys(data.alltime).length === 0) {
                setAllTimeDataFound(true);
            }
        }
        
        getAPIData();
    }, [athlete_id]);

    return (
        <div className="common-section-bg game-score-leaderboard--section">
            <div className="common-game--container-1">
                <div className="scoreboard">
                    <div className="scoredata--container">
                        <h1 className="user-score">Your Score : -4</h1>
                        <p className="user-score-result-text">You answered 3 questions correctly and scored -4 points</p>
                        <p className="user-score-result-time">in 00:00:28 time</p>
                    </div>
                    {/* <button type="button" className="site-white-button btn-block-full-width" title="Play Again" style={{textTransform: 'uppercase'}}>Play Again</button> */}
                    <Link to={`/start-game/${athlete_id}`} className="site-white-button btn-block-full-width" title="Play Again" style={{textTransform: 'uppercase'}}>Play Again</Link>
                </div>
                <div className="submit-score-btn-cnt">
                    <button type="button" className="site-red-button default-round-corners btn-block-full-width" title="Submit Score" style={{textTransform: 'uppercase'}}>Submit Score</button>
                </div>
                <div className="sbmsg-cnt-1">
                    <p className="sbmsg">
                        Your score will be saved only after login 
                        <br />
                        By Proceeding, you agree to the
                        <a href="https://addons-redbullallaccess-india.redbull.com/All-access-terms.pdf" target="_blank" className="link" rel="noreferrer">T&C</a>
                    </p>
                </div>
                <div className="athlete-lbnm-cnt">
                    <h2 className="athlete-lbnm">KL Rahul Leaderboard</h2>
                </div>
                <div className="leaderboard">
                    <div className="tab-nav--container">
                            {
                                toggleLeaderboardData.activeWeeklyTab ? (
                                    <ul className="tab-nav--list">
                                        <li className="active">
                                            <button type="button" className="tab-elem" title="Weekly" onClick={toggleDataWeekly}>
                                                Weekly
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" className="tab-elem" title="All Time" onClick={toggleDataAllTime}>
                                                All Time
                                            </button>
                                        </li>
                                    </ul>
                                )
                                 : 
                                (
                                    <ul className="tab-nav--list slide-tonext">
                                        <li>
                                            <button type="button" className="tab-elem" title="Weekly" onClick={toggleDataWeekly}>
                                                Weekly
                                            </button>
                                        </li>
                                        <li className="active">
                                            <button type="button" className="tab-elem" title="All Time" onClick={toggleDataAllTime}>
                                                All Time
                                            </button>
                                        </li>
                                    </ul>
                                )
                            }
                        
                    </div>
                    <div className="lbdata-tables">
                        {
                            toggleLeaderboardData.showWeeklyTable ? (
                            <>
                                {
                                    weeklyDataFound ? (<h2 className="nodata-found">No Data Found</h2>) : (
                                        <>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Score</th>
                                                        <th>Time</th>
                                                        <th>Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        (apiData.weekly || []).map((data, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="usr-no"></td>
                                                                    <td className="usr-score">{data.score}</td>
                                                                    <td className="usr-time">{data.total_time}</td>
                                                                    <td>{data.full_name}</td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </>
                                    )
                                }
                            </>
                            ) : (
                            <>
                                {
                                    allTimeDataFound ? (<h2 className="nodata-found">No Data Found</h2>) : (
                                        <>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Score</th>
                                                        <th>Time</th>
                                                        <th>Name</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        (apiData.alltime || []).map((data, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="usr-no"></td>
                                                                    <td className="usr-score">{data.score}</td>
                                                                    <td className="usr-time">{data.total_time}</td>
                                                                    <td>{data.full_name}</td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </>
                                    )
                                }                                
                            </>)
                        }
                    </div>
                </div>
                <div className="uslb-ctagrp-cont">
                    <div className="item-cta">
                        <Link to="/" className="site-red-button default-round-corners btn-block-full-width" title="Choose Athlete" style={{textTransform: 'uppercase'}}>Choose Athlete</Link>
                    </div>
                    <div className="item-cta">
                        <Link to="/current-leaders" className="site-red-button default-round-corners btn-block-full-width" title="Current Leaders" style={{textTransform: 'uppercase'}}>Current Leaders</Link>
                    </div>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p className="sbmsg">Weekly leaderboard refreshes every Sunday night</p>
                </div>
            </div>
        </div>
    )
}

export default ScoreLeaderboard;
