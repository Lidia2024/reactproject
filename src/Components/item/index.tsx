import React from 'react';
import styles from "./item.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";
interface Props{
    item:any;

}

const Item:React.FC<Props>=({item})=>{
        const {onShowItem,addToOrder}=useAppContext();
    
    return(
        <div className={styles.item}>
            <img src={"./Images/"+item.img} alt="Error" onClick={()=>onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}</b>
            <button className={styles.addToCart} onClick={()=>addToOrder(item)}>+</button>
        </div>
    )
};

export default Item;