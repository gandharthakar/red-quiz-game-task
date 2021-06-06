import React from 'react';
import { Link } from "react-router-dom";

function HomeBanner( props ) {
	const scrollToDiv = () => {
		props.scrollTo();
	}
    return (
        <>
			<div className="home--banner">
				<div className="site-container">
					<div className="banner--inner">
						<div className="banner--big-text-cnt">
							<h1 className="text-content text1">Ready for an</h1>
							<h2 className="text-content text2">All Access</h2>
							<h3 className="text-content text3">With your favorite <br /> cricketers?</h3>
						</div>
						<img src={process.env.PUBLIC_URL + '/images/athelete.png'} className="banner--athlete-image" alt="athlete-img" />
						<div className="banner--steps-container">
							<div className="step-message-mobile">3 steps to get all access</div>
							<div className="mobile-steps">
								<div className="step">
									<img src={process.env.PUBLIC_URL + '/images/game-steps/step-1.svg'} className="step-image-icon" alt="game-step-1" />
									<span className="step-name">Select a cricketer</span>
								</div>
								<div className="step">
									<img src={process.env.PUBLIC_URL + '/images/game-steps/step-2.svg'} className="step-image-icon" alt="game-step-1" />
									<span className="step-name">Clear quiz rounds</span>
								</div>
								<div className="step">
									<img src={process.env.PUBLIC_URL + '/images/game-steps/step-3.svg'} className="step-image-icon" alt="game-step-1" />
									<span className="step-name">Top the leaderboard</span>
								</div>
							</div>
						</div>
						<div className="banner--cta-cnt">
							<div style={{paddingBottom: '15px'}}>
								<button type="button" className="site-red-button default-round-corners" title="Play Now" style={{minWidth: '250px', textAlign: 'center'}} onClick={scrollToDiv}>Play Now</button>
							</div>
							<div>
								<Link to="/" className="site-red-button default-round-corners" title="See Leaderboard" style={{minWidth: '250px', textAlign: 'center'}}>See Leaderboard</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}

export default HomeBanner;
