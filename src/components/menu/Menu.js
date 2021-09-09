import React from 'react'
import pizzaTypes from "./PizzaTypes.json"
import "./Menu.css"

const Menu = () => {
	return (
		<div className="menu">
			{pizzaTypes["pizzaTypes"].map((pizza) => (
			<li>
				<div className="pizza">
					<strong>{pizza.name}</strong> €{pizza.price}
					<div className="toppings">{pizza.topping}</div>
				</div>
			</li>))}
		</div>
	)
}

export default Menu
