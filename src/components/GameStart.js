import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function GameStart(props) {
    let athlete_id = props.match.params.id;
    let initialData = {
        name: '',
        cover_photo: ''
    }
    const [apiData, setAPIData] = useState(initialData);

    useEffect(() => {
        const getAPIData = async () => {
            let response = await axios.get(`https://rballaccess.achieveee.com/api/athletes/${athlete_id}`);
            let data = response.data.data.athlete;
            setAPIData(data)
        }
        getAPIData();
    }, [athlete_id]);

    return (
        <div className="common-section-bg single-athlete--section">
            <div className="common-game--container-1">
                <img src={apiData.cover_photo} className="start-game--athlete-picture" alt="athlete" />
                <h1 className="start-game--athlete-name">{apiData.name}</h1>
                <div className="game-start--ctacnt1">
                    <div className="game-start--cta-item">
						<Link to="/game-instructions" className="site-white-button default-round-corners btn-block-full-width" title="How To Play">How To Play</Link>
                    </div>
                    <div className="game-start--cta-item">
                        <Link to={`/play-ground/${athlete_id}`} className="site-red-button default-round-corners btn-block-full-width" title="Start">Start</Link>
                    </div>
                    <div>
                        <Link to="/" className="site-red-transparent-bg-button default-round-corners btn-block-full-width" title="Back">Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameStart;
