import React  from "react";
import styles from './Orders.module.scss';
import { MdDeleteOutline } from "react-icons/md";

export default function Orders(props){
    return(
        <div className={styles.item}>
            <img src={"./Images/"+props.item.img} alt="Error" />
            <h2>{props.item.title}</h2>
            <b>{props.item.price}</b>
            <MdDeleteOutline onClick={()=>props.onDelete(props.item.id)} className={styles.deleteItem}/>
        </div>
    );
}