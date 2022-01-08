import React from "react"
import { useSelector } from "react-redux"
import Items from "./Items"
import "./Category.css"

const Category = ({ type }) => {
	const electricItems = useSelector((state) => state.item.electric) //Fetch electric items from the redux store
	const clothesItems = useSelector((state) => state.item.clothes) //Fetch clothes items from the redux store
	const groceryItems = useSelector((state) => state.item.grocery) //Fetch grocery items from the redux store

	//Function to render electric items
	const renderedElectricItem = electricItems.map((item) => {
		return (
			<Items
				id={item.id}
				title={item.title}
				imgUrl={item.imgUrl}
				price={item.price}
				key={item.id}
			/>
		)
	})

	//Function to render clothes items
	const renderedClothesItem = clothesItems.map((item) => {
		return (
			<Items
				id={item.id}
				title={item.title}
				imgUrl={item.imgUrl}
				price={item.price}
				key={item.id}
			/>
		)
	})

	//Function to render grocery items
	const renderedGroceryItem = groceryItems.map((item) => {
		return (
			<Items
				id={item.id}
				title={item.title}
				imgUrl={item.imgUrl}
				price={item.price}
				key={item.id}
			/>
		)
	})

	//Function capitalize the first letter
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	return (
		<div className="category">
			<div style={{ fontSize: "3.3rem", fontWeight: "bold" }}>
				{capitalizeFirstLetter(type)} Section
			</div>
			<div className="renderList">
				{/* Render section according to the props */}
				{type === "electric" && renderedElectricItem}
				{type === "clothes" && renderedClothesItem}
				{type === "grocery" && renderedGroceryItem}
			</div>
		</div>
	)
}

export default Category 
