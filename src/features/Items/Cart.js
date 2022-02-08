import React from "react"
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "./cartSlice"

const Cart = () => {
	const cartItems = useSelector((state) => state.cart) //Fetch cart items from redux store
	const dispatch = useDispatch()

	//Function to render cart items
	const renderCartItems = cartItems.map((item) => {
		const itemId = item.id
		//Function to remove items from the cart 
		const removeItem = () => {
			dispatch(removeFromCart(itemId))
			setTimeout(() => {
				alert("Removed from the cart!")
			}, 1000)

		}
		return (
			<div className="cartDiv" key={item.id}>
				<div className="cartTitle">{item.title}</div>
				<div className="cartPrice">
					<span style={{ fontSize: "1.3rem", fontWeight: "400" }}>
						Starting from ₹
					</span>
					{item.price}
				</div>
				<div className="cartImage">
					<img src={item.imgUrl} alt="" />
				</div>
				<div className="cardBtn">
					<button className="btn" onClick={removeItem} style={{ backgroundColor: "#fba64b" }}>
						Remove from cart
					</button>
				</div>
			</div>
		)
	})
	return <div className="cart">{renderCartItems}</div>
}

export default Cart 
