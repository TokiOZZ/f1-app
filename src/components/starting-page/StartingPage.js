import React from 'react';
import './StartingPage.css';
import morpheus from './1.png'
import arsenalLogo from './arsenalLogo.png';
import arsenalLogo2 from './arsenalLogo2.png';
import f1Logo from './formula1Logo.png';
import f1Logo2 from './formula1Logo2.png';

const StartingPage = (props) => {
	return (
		<div className='container'>
			<h1 className="greetings">Welcome to the app about two greatest things ever!</h1>
			<div className="small-text">But this isn`t for sure... </div>
			<div className="choosing">
				<div className="grid item-1"><a href="#"><img className="arsenal" src={arsenalLogo2} alt="Arsenal LOGO" /></a></div>
				<div className="grid item-2"><img className="morpheus" src={morpheus} alt="Morpheus gives two pills for get your choose" /></div>
				<div className="grid item-3"><a href=""><img className="f1" src={f1Logo2} alt="Formula1 LOGO" /></a></div>
			</div>
		</div>
	);
};

export default StartingPage;