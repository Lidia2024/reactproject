// import React from 'react';
// import {useState} from 'react';
// import {useEffect} from 'react';
// import {useContext} from 'react';
// import {createContext} from 'react';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import './index.css';
// import Items from './Components/Items';
// import Categories from './Components/Categories';
// import ShowFullItem from './Components/ShowFullItem';

// const AppContext=createContext();

// export default function App() {
  

//   const [items,setItems]=useState([
//     {
//       id:1,
//       title:'Ruler',
//       img:'Линейка.jpg',
//       desc:'Plastic mulricolored ruler',
//       category:'Office supplies',
//       price:'2.99$'

//     },
//     {
//       id:2,
//       title:'Pencil',
//       img:'простой.jpg',
//       desc:'Gray pencil kit, HB hardness',
//       category:'Office supplies',
//       price:'4.99$'

//     },
//     {
//       id:3,
//       title:'Pen',
//       img:'ручка.jpg',
//       desc:'Blue ball-point pen kit',
//       category:'Office supplies',
//       price:'7.99$'

//     },
//     {
//       id:4,
//       title:'Notebook',
//       img:'Тетрадь.jpeg',
//       desc:'Mulricolored 12 page quad-ruled notebook',
//       category:'Office supplies',
//       price:'3.99$'

//     },
//     {
//       id:5,
//       title:'Calculator',
//       img:'калькуль.jpg',
//       desc:'Plastic mulricolored calculator',
//       category:'Office supplies',
//       price:'10.99$'

//     },
//     {
//       id:6,
//       title:'Globe',
//       img:'глобус.jpg',
//       desc:'Plastic coloured 70sm globe',
//       category:'Decor',
//       price:'20.99$'

//     },
//     {
//       id:7,
//       title:'Eraser',
//       img:'стерка.jpg',
//       desc:'Soft&Hard side two-colored eraser',
//       category:'Office supplies',
//       price:'2.99$'

//     },
//     {
//       id:8,
//       title:'Book-mark',
//       img:'закладки.jpg',
//       desc:'Sticky multicolored paper book-mark kit',
//       category:'Office supplies',
//       price:'5.99$'

//     },
//     {
//       id:9,
//       title:'Pensil-case',
//       img:'пенал.jpg',
//       desc:'Pastel purple case',
//       category:'Storage',
//       price:'12.99$'

//     },
//     {
//       id:10,
//       title:'Folder',
//       img:'папка.jpg',
//       desc:'Plastic mulricolored folder',
//       category:'Storage',
//       price:'7.99$'

//     },
//     {
//       id:11,
//       title:'Pencil Sharpener',
//       img:'Точилка.jpg',
//       desc:'Stainless steel blade plasric pencil sharpener',
//       category:'Office supplies',
//       price:'15.99$'

//     },
//     {
//       id:12,
//       title:'Compass',
//       img:'Циркуль.jpg',
//       desc:'Metal multipurpose mathimatical compass',
//       category:'Office supplies',
//       price:'14.99$'

//     },
//   ]);

//   const [showFullItem,setShowFullItem]=useState(false);
//   const[orders,setOrders]=useState([]);
//   const [currentItems,setCurrentItems]=useState([]);
//   const[fullItem, setFullItem]=useState({});

//     useEffect(()=>{
//       setCurrentItems(items);
//     },[items]);
//   const deleteOrder=(id)=>{
//     setOrders(orders.filter((el)=> el.id!==id));
//   }

//   const addToOrder=(item)=>{
//     if(!orders.some((el)=>el.id===item.id)){
//       setOrders([...orders,item]);
//     } //добавление товара, но только по одному одного типа
//     // без строки if - неограниченное количество товаров
//   }
  
//   const chooseCategory=(category)=>{
//     if(category==='all'){
//       setCurrentItems(items);
//     }
//     else{
//         setCurrentItems(items.filter((el)=>el.category===category));
//     }
//   }
  
//   const onShowItem=(item)=>{
//     setFullItem(item);
//     setShowFullItem(!showFullItem);
//   }

//   return (
//     <AppContext.Provider
//       value={
//         {
//           items,
//           setItems,
//           orders,
//           setOrders,
//           currentItems,
//           setCurrentItems,
//           showFullItem,
//           setShowFullItem,
//           fullItem,
//           setFullItem,
//           deleteOrder,
//           addToOrder,
//           chooseCategory,
//           onShowItem
//         }
//       }
//     >
//       <div className="wrapper">
//         <Header/>
//         <Categories/> 
//         <Items/>
//         {showFullItem && <ShowFullItem/>}
//         <Footer/>
//       </div>
//     </AppContext.Provider>  
//   );
// }

import React from "react";
import Header from "./Components/Header/index.tsx";
import Items from "./Components/Items/index.tsx";
import Footer from "./Components/Footer/index.tsx";
import Categories from "./Components/Categories/index.tsx";
import ShowFullItem from "./Components/ShowFullItem/index.tsx";
import { useAppContext } from "./useAppContext.tsx";
import "./index.css";

export default function App(): JSX.Element {
    const { showFullItem } = useAppContext();
    return (
        <div className="wrapper">
            <Header />
            <Categories />
            <Items />
            {showFullItem && <ShowFullItem />}
            <Footer />
        </div>
    );
}