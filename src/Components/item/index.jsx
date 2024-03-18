import React from 'react';
import styles from "./item.module.scss";

export default function Item(props){
    return(
        <div className={styles.item}>
            <img src={"./Images/"+props.item.img} alt="Error" onClick={()=>props.onShowItem(props.item)} />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}</b>
            <button className={styles.addToCart} onClick={()=>props.onAdd(props.item)}>+</button>
        </div>
    )
}