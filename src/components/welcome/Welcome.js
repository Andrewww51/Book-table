import React from 'react'
import logo from "./white-new-center-logo.svg"
import './Welcome.css'

const Welcome = () => {
	return (
		<div className="welcome">
			<img id="logo" src={logo}></img>	
		</div>
	)
}

export default Welcome
