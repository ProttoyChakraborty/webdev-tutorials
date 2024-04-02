import React from 'react'
import "./ShoppingCart.css"
import ShoppingSticker from '../components/shoppingSticker'
const ShoppingCart = () => {
    const data=[
        {
            primaryid:1,
            itemtype:"Amazon Essentials",
            itemdescription :"Women's Pointed-Toe Ballet Flat",
            rating:"4.24.2 out of 5 stars 9,951 ratings",
            cost:"$23.70",
            deliverytime: "One-Day",
            estimatedtime:"FREE delivery Tomorrow, Apr 2",
            specialnote:"Or FREE delivery Overnight 7 AM - 11 AM on $25 of qualifying items"
        },
        {
            primaryid:2,
            itemtype:"Prada",
            itemdescription :"Women's best shoe for any occasion",
            rating:"4.24.2 out of 5 stars 9,951 ratings",
            cost:"$2223.70",
            deliverytime: "One-Day",
            estimatedtime:"FREE delivery Tomorrow, Apr 2",
            specialnote:"Or FREE delivery Overnight 8 AM - 11 AM on $25 of qualifying items"
        }, 
        {
            primaryid:3,
            itemtype:"Jimmy Choo",
            itemdescription :"Women's second best shoe",
            rating:"4.24.2 out of 5 stars 9,951 ratings",
            cost:"$223.70",
            deliverytime: "One-Day",
            estimatedtime:"FREE delivery Tomorrow, Apr 2",
            specialnote:"Or FREE delivery Overnight 8 AM - 11 AM on $25 of qualifying items"
        }
    ]
  return (
    <>
    <h1>ShoppingSticker</h1>
    <div class="Shopping-cart">
        {data.map((shoppingStickerParam)=>{
            return <ShoppingSticker primaryid={shoppingStickerParam.primaryid} itemtype={shoppingStickerParam.itemtype} itemdescription={shoppingStickerParam.itemdescription} rating={shoppingStickerParam.rating} cost={shoppingStickerParam.cost} deliverytime={shoppingStickerParam.deliverytime} estimatedtime={shoppingStickerParam.estimatedtime} specialnote={shoppingStickerParam.specialnote}/>
        })}
    </div>
    </>
  )
}

export default ShoppingCart