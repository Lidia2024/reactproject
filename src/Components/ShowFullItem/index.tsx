import React from 'react';
import styles from './ShowFullItem.module.scss';
import { useAppContext } from "./../../useAppContext.tsx";

const ShowFullItem:React.FC=()=>{
    const {fullItem,onShowItem,addToOrder, showFullItem, setShowFullItem}=useAppContext();

    return(
        <div className={styles.fullItem}>
            <div>
                <img src={"./Images/"+fullItem.img} alt="Error" onClick={()=>onShowItem(fullItem)} />
                <h2>{fullItem.title}</h2>
                <p>{fullItem.desc}</p>
                <b>{fullItem.price}</b>
                <button className={styles.addToCart} onClick={()=>addToOrder(fullItem)}>+</button>
            </div>
        </div>
    );
};

export default ShowFullItem;