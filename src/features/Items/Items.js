import React, { useEffect, useState } from "react" 
import { useDispatch, useSelector } from "react-redux" 
import "./Items.css" 
import {addToCart} from "./cartSlice" 

const Items = ({ title, imgUrl, price, grid }) => {

	const user = useSelector((state)=>state.user.isLoggedIn)  //Fetch login status of the user from the redux store
	const [success, setSuccess] = useState(false)

	//Set the state after the component is rendered in order to avoid infinite re-rendering
	useEffect(() => {
		
		if(user === true){
			setSuccess(true)
		}
	}, [user])
	    
	const dispatch = useDispatch()

	//Function to add items to the cart
	const handleClick = ()=>{

		dispatch(addToCart(title,imgUrl,price))  //Send item to the redux store 
		setTimeout(() => {			
			alert("Your item has been added to the cart!")
		}, 1000) 
	}

	return (
		<div className={`item ${grid && 'itemGrid'}`}>
			<div className="itemTitle">{title.slice(0,50)}...</div>
			<div className="itemPrice">
				<span style={{ fontSize: "1.3rem", fontWeight: "400" }}>
					Starting from &#x20B9 
				</span>
				{price}

			</div>
			<div className="imgDiv">
				<img src={imgUrl} alt="" className="itemImg" />
			</div>
			<div className="divBtn">
				{success && <button className="btn BtnColor " onClick={handleClick}>Add to cart</button>} {/*If the user is logged in then only show button*/}
			</div>
		</div>
	) 
} 

export default Items 
