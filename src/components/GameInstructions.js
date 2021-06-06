import React from 'react';

function GameInstructions(props) {

    const backToGameStartPage = () => {
        window.history.back();
    }

    return (
        <div className="common-section-bg game-instruction--section">
            <div className="common-game--container-1">
                <div className="game-instruction--container">
                    <div className="gitl-cnt">
                        <h2 className="game-instruction--title">How To Play ?</h2>
                    </div>
                    <ul className="game-instruction--list">
                        <li>
                            Each game will consist of 2 rounds with 5 questions each.
                        </li>
                        <li>
                            Every correct answer gets you 1 point.
                        </li>
                        <li>
                            Every wrong answer makes you lose 1 point.
                        </li>
                        <li>
                            All questions need to be attempted.
                        </li>
                        <li>
                            The amount of time you take to finish a round is also important– in case ofa tie, the player who has scored most in least amount of time is placed higher on the leaderboard.
                        </li>
                    </ul>
                    <div className="gi-ctacnt-1">
                        <button className="site-red-button default-round-corners btn-block-full-width" title="Got it" onClick={backToGameStartPage}>Got it</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameInstructions;
