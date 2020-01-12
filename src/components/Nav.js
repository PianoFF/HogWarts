import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	const {showGreased, greasedHogsFilter} = props
	return (
		<div className="navWrapper">
			<button className="mini ui toggle button" onClick={greasedHogsFilter}>
				{showGreased ? 'All' : 'Greased Piglets' }
			</button>
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		
		</div>
	)
}

export default Nav
