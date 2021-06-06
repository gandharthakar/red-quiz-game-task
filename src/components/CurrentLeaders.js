import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CurrentLeaders() {

    const [apiData, setAPIData] = useState([]);

    useEffect(() => {
        const getAPIData = async () => {
            let response = await axios.get(`https://rballaccess.achieveee.com/api/athletes/leaderboard`);
            let data = response.data.data;
            setAPIData(data.leaderboard);
        }
        
        getAPIData();
    }, []);

    return (
        <div className="common-section-bg current-leaders--section">
            <div className="common-game--container-1">
                <div className="cl-ttlcnt">
                    <h1 className="cl-ttl">Current Leaders</h1>
                </div>
                <div className="cl-group">
                    {
                        apiData.map((data, index) => {
                            return data.user.length > 0 ?
                                <div className="cl-group-item" key={index}>
                                    <div className="cl-group-athlete-name">{data.name}</div>
                                        {
                                            (data.user).map((table, index) => {
                                                return (
                                                    <table className="cl-group-rank-user--table" key={index}>
                                                        <tbody>
                                                            <tr>
                                                                <td className="score-text">{table.score}</td>
                                                                <td className="time-text">{table.total_time}</td>
                                                                <td>{table.full_name}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                );
                                            })
                                        }                                   
                                </div>
                                :
                                <div className="cl-group-item" key={index}>
                                    <div className="cl-group-athlete-name">{data.name}</div>
                                    <h2 className="no-data">No Record Foound</h2>                                          
                                </div>                            
                        })
                    }
                </div>
                <div>
                    <Link to="/" className="site-red-button btn-block-full-width" title="Play The Game" style={{textTransform: 'uppercase'}}>Play The Game</Link>
                </div>
            </div>
        </div>
    )
}

export default CurrentLeaders;
