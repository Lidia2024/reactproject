import React from "react";
import styles from './Categories.module.scss';


export default function Categories(props){
    
    const categories = [
        {
            key:'all',
            name:'All'
        },
        {
            key:'Office supplies',
            name:'Office supplies'
        },
        {
            key:'Storage',
            name:'Storage'
        },
        {
            key:'Decor',
            name:'Decor'
        }

    ];
    
    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}