import React, { useRef, useEffect, useState } from 'react';
import HomeBanner from './home-sections/HomeBanner';
import SitePrizeWinBanner from './home-sections/SitePrizeWinBanner';
import { Link } from 'react-router-dom';
import axios from 'axios';

const useScroll = () => {
	const elRef = useRef(null);
	const scrollToTarget = () => elRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'});
	return [scrollToTarget, elRef];
};

export default function Home() {
	// Scroll To Div.
	const [scrollToTarget, elRef] = useScroll();
    const [apiData, setAPIData] = useState([]);

    useEffect(() => {
        const getAPIData = async () => {
            let response = await axios.get('https://rballaccess.achieveee.com/api/athletes');
            setAPIData(response.data.data.athletes);
        }
        getAPIData();
    }, []);

	return (
		<>
			<HomeBanner scrollTo={scrollToTarget} />
			
			<div className="athlete--list" ref={elRef}>
                <div className="site-container">
                    <div className="athlete-list--title">
                        <h1>Select your athlete</h1>
                    </div>
                    <div className="athlete-list-row">
                        {
                            apiData.map((data, index) => {
                                return (
                                    <div className="athlete-list--player-card" key={data.id}>
                                        <Link to={`/start-game/${data.id}`} className="player-link">
                                            <img src={data.avatar} className="player-image" alt="athlete-player" />
                                            <h2 className="player-name">{data.name}</h2>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

			<SitePrizeWinBanner scrollTo={scrollToTarget} />           
		</>
	)
}
