import { createSlice } from "@reduxjs/toolkit";
import c1 from "./img/C1_laptop.jpg"
import c2 from "./img/C2_mobile1.jpg"
import c3 from "./img/C3_mobile2.jpg"
import c4 from "./img/C4_mouse.jpg"
import c5 from "./img/C5_tshirt.jpg"
import c6 from "./img/C6_tshirt2.jpg"
import c7 from "./img/C7_lehenga.jpg"
import c8 from "./img/C8_jeans.jpg"
import c9 from "./img/C9_grocery1.jpg"
import c10 from "./img/C10_grocery2.jpg"
import c11 from "./img/C11_grocery3.jpg"
import c12 from "./img/C12_grocery4.jpg"

//Initial state
const initialState = {

    electric: [
        { id: 1, title: "ASUS VivoBook 15 (2020) Intel Core i3-10110U 10th Gen 15.6 inches FHD, Business Laptop (4GB/1TB HDD/Office 2019/Windows 10 Home/Integrated UHD Graphics/Silver/1.9 Kg), X509FA-EJ311TS", price: "34,990", imgUrl: c1 },
        { id: 2, title: "OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage)", price: "12,990", imgUrl: c2 },
        { id: 4, title: "Dell MS116 1000DPI USB Wired Optical Mouse", price: "299", imgUrl: c4 },
        { id: 3, title: "OPPO A74 5G (Fluid Black,6GB RAM,128GB Storage)", price: "17,990", imgUrl: c3 },
    ]
    ,
    clothes: [
        { id: 5, title: "HELLCAT Boys T-shirt (Set of 3)", price: "690", imgUrl: c5 },
        { id: 6, title: "Marvel By Kidsvill Boys T-Shirt (Pack of 3)", price: "679", imgUrl: c6 },
        { id: 7, title: "Ethnic Yard Womens Organza Silk SemiStitched Lehenga Choli Free Size", price: "999", imgUrl: c7 },
        { id: 8, title: "KILLER Men's Slim Jeans", price: "1,279", imgUrl: c8 },
    ]
    ,
    grocery: [
        { id: 9, title: "Aashirvaad Atta with Multigrains, 5kg", price: "292", imgUrl: c9 },
        { id: 10, title: "Kissan Fresh Tomato Ketchup 950 g Pouch, Sweet & Tangy Sauce made from 100% Real Tomatoes", price: "115", imgUrl: c10 },
        { id: 11, title: "Tata Tea Premium, 1500 g", price: "500", imgUrl: c11 },
        { id: 12, title: "Tata Salt, 1kg", price: "22", imgUrl: c12 },
    ]

}

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {}
})

export default itemSlice.reducer;