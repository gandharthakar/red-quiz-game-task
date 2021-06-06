import React from 'react';
import { Link } from 'react-router-dom';

function AthleteList(refParam) {

    return (
        <>
            <div className="athlete--list">
                <div className="site-container">
                    <div className="athlete-list--title">
                        <h1>Select your athlete</h1>
                    </div>
                    <div className="athlete-list-row">
                        <div className="athlete-list--player-card">
                            <Link to="/" className="player-link">
                                <img src={process.env.PUBLIC_URL + '/images/athlete-cricket-players/kl-rahul.png'} className="player-image" alt="athlete-player" />
                                <h2 className="player-name">KL Rahul</h2>
                                <div className="shadow"></div>
                            </Link>
                        </div>
                        <div className="athlete-list--player-card">
                            <Link to="/" className="player-link">
                                <img src={process.env.PUBLIC_URL + '/images/athlete-cricket-players/ben-stokes.png'} className="player-image" alt="athlete-player" />
                                <h2 className="player-name">Ben Stokes</h2>
                            </Link>
                        </div>
                        <div className="athlete-list--player-card">
                            <Link to="/" className="player-link">
                                <img src={process.env.PUBLIC_URL + '/images/athlete-cricket-players/kagiso-rabada.png'} className="player-image" alt="athlete-player" />
                                <h2 className="player-name">Kagiso Rabada</h2>
                            </Link>
                        </div>
                        <div className="athlete-list--player-card">
                            <Link to="/" className="player-link">
                                <img src={process.env.PUBLIC_URL + '/images/athlete-cricket-players/smriti-mandhana.png'} className="player-image" alt="athlete-player" />
                                <h2 className="player-name">Smriti Mandhana</h2>
                            </Link>
                        </div>
                        <div className="athlete-list--player-card">
                            <Link to="/" className="player-link">
                                <img src={process.env.PUBLIC_URL + '/images/athlete-cricket-players/riyan-parag.png'} className="player-image" alt="athlete-player" />
                                <h2 className="player-name">Riyan Parag</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AthleteList;
