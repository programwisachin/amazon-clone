import React from "react" 
import "./Home.css" 
import banner from "./features/Items/img/Banner.jpg" 
import { useSelector } from "react-redux" 
import Items from "./features/Items/Items" 

const Home = () => {
	const electricItems = useSelector((state) => state.item.electric) //Fetch electric items from redux store
	//Function to render the electric items
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

	const clothes = useSelector((state) => state.item.clothes) //Fetch clothes items from redux store
	const clothesHeader = clothes[0] //Extract first item from clothes
	const clothesItems = useSelector((state) => state.item.clothes.slice(1)) //Extract everything from clothes except first item
	//Function to render the clothes items
	const renderClothesItems = clothesItems.map((item) => {
		return (
			<>
				<Items
					id={item.id}
					title={item.title}
					imgUrl={item.imgUrl}
					price={item.price}
					key={item.id}
				/>
			</>
		) 
	}) 

	const groceryItems = useSelector((state) => state.item.grocery) //Fetch grocery items from redux store
	//Function to render the grocery items
	const renderGroceryItems = groceryItems.map((item) => {
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
	return (
		<div className="home">
			<img className="bannerImg" src={banner} alt="" /> {/*Banner image  */}
				{/* Render each section */}
				<div className="electricList">{renderedElectricItem}</div>
				<div className="clothesList">
					{/* Clothes section's first item */}
					{
						<Items
							id={clothesHeader.id}
							key={clothesHeader.id}
							title={clothesHeader.title}
							imgUrl={clothesHeader.imgUrl}
							price={clothesHeader.price}
							grid
						/>
					}

					{renderClothesItems}
				</div>
				<div className="groceryList">{renderGroceryItems}</div>
			</div>
	) 
} 

export default Home 
