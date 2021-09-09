import React from 'react'
import "./Introduction.css"
import arrow from "./arrow.svg"

const Introduction = () => {
	return (
		<div className="introduction">
			<p className="short-intro">Authentic pizza and pasta created with much love by foodie family from Napoli, Italy</p>
			<p className="short-intro">Menu</p>
			<img id="arrow" src={arrow}></img>
			
		</div>
	)
}

export default Introduction
