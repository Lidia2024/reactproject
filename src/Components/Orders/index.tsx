import React  from "react";
import styles from './Orders.module.scss';
import { MdDeleteOutline } from "react-icons/md";
import { useAppContext } from "./../../useAppContext.tsx";

interface Props{
    item:any;
}

const Orders:React.FC<Props>=({item})=>{
    const {deleteOrder}=useAppContext();
    
    return(
        <div className={styles.item}>
            <img src={"./Images/"+item.img} alt="Error" />
            <h2>{item.title}</h2>
            <b>{item.price}</b>
            <MdDeleteOutline onClick={()=>deleteOrder(item.id)} className={styles.deleteItem}/>
        </div>
    );
};

export default Orders;