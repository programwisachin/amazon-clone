import React, { useState } from "react" 
import { Link, useNavigate } from "react-router-dom" 
import "./Navbar.css" 
import logo from "./features/Items/img/amazon_PNG25.png" 
import searchIcon from "./features/Items/img/icons8-search-30.png" 
import cart from "./features/Items/img/icons8-shopping-cart-64.png" 
import { useSelector, useDispatch} from "react-redux" 
import { logout } from './features/Items/userSlice'

const Navbar = () => {
	const num = useSelector((state) => state.cart) //Fetch cart items from redux store 
	const user = useSelector((state) => state.user) //Fetch user information from redux store
	const dispatch = useDispatch()
	const [search, setSearch] = useState("") 

	//Function to handle the input of the search bar
	const handleSearch = (e) => {
		setSearch(e.target.value) 
	} 

	const history = useNavigate() 

	//Function to serve pages according to the input
	const handleClick = () => {
		if (search === "electric") {
			history("/electric") 
		} else if (search === "clothes") {
			history("/clothes") 
		} else if (search === "grocery") {
			history("/grocery") 
		} else {
			history("/") 
		}
	} 

	//Function to handle logout action
	const handleLogout = ()=>{
		dispatch(logout())
		alert("You have been logged out.")
	}

	return (
		<>
			<nav>
				<div className="navbar1">
					<Link to="/">
						<img src={logo} alt="img" className="logo" />
					</Link>
					<div className="searchBar">
						<input
							type="text"
							value={search}
							onChange={handleSearch}
							placeholder="Search category here..."
							className="searchBarInput"
						/>
						<span>
							<img
								src={searchIcon}
								alt=""
								onClick={handleClick}
							/>
						</span>
					</div>
					{user.isLoggedIn && <div className="order">
						<div className="orderFont">Welcome, {user.userName}</div>
					</div>}
					{!user.isLoggedIn ? <Link to="/authenticate" style={{ textDecoration: "none" }}>
						<div className="order">
							<div className="orderFont">SignUp/Login</div>
						</div>
					</Link> : <div className="order">
							<div className="orderFont" onClick={handleLogout}>Logout</div>
						</div>}
					<Link to="/orders" style={{ textDecoration: "none" }}>
						<div className="order">
							<div className="orderFont">Cart/Order</div>
							<img src={cart} alt="" className="orderImage" />
							<div className="orderNum">{num.length}</div>
						</div>
					</Link>
				</div>
				<div className="navbar2">
					<Link to="/electric" style={{ textDecoration: "none" }}>
						<div className="categoryFont">Electric</div>
					</Link>
					<Link to="/clothes" style={{ textDecoration: "none" }}>
						<div className="categoryFont">Clothes</div>
					</Link>
					<Link to="/grocery" style={{ textDecoration: "none" }}>
						<div className="categoryFont">Grocery</div>
					</Link>
				</div>
			</nav>
		</>
	) 
} 

export default Navbar 
