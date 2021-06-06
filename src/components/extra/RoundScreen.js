import React from 'react';

function RoundScreen() {
    return (
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
    )
}

export default RoundScreen;
