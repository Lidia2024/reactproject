import React from 'react';
import Item from './../item';
import styles from "./Items.module.scss";

export default function Items(props){
    return(
        <main>
            {props.allItems.map(el=>(
                <Item key={el.id} item={el}/>
            ))}
        </main>
    )
}