import React from 'react'
import "./shoppingSticker.css"


const shoppingSticker = (props) => {
    return (
        <>
            <div className="card">
            <img className="sticker-pic" src={`/${props.primaryid}.jpg`}/>
       <div className="info">
                    <h3>{props.itemtype}</h3>
                    <h2>{props.itemdescription}</h2>
                    <h2>{props.rating}</h2>
                    <h3>{props.cost}</h3>
                    <h2>{props.deliverytime}</h2>
                    <h2>{props.estimatedtime}</h2>
                    <h2>{props.specialnote}</h2>
                </div>
            </div>
        </>
    )
}

export default shoppingSticker;