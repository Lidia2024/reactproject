import React from 'react';
import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './index.css';
import Items from './Components/Items';

export default function App(){
  
  const [items,setItems]=useState([
    {
      id:1,
      title:'Ruler',
      img:'Линейка.jpg',
      desc:'Plastic mulricolored ruler',
      category:'Office supplies',
      price:'2.99$'

    },
    {
      id:2,
      title:'Pencil',
      img:'простой.jpg',
      desc:'Gray pencil kit, HB hardness',
      category:'Office supplies',
      price:'4.99$'

    },
    {
      id:3,
      title:'Pen',
      img:'ручка.jpg',
      desc:'Blue ball-point pen kit',
      category:'Office supplies',
      price:'7.99$'

    },
    {
      id:4,
      title:'Notebook',
      img:'Тетрадь.jpeg',
      desc:'Mulricolored 12 page quad-ruled notebook',
      category:'Office supplies',
      price:'3.99$'

    },
    {
      id:5,
      title:'Calculator',
      img:'калькуль.jpg',
      desc:'Plastic mulricolored calculator',
      category:'Office supplies',
      price:'10.99$'

    },
    {
      id:6,
      title:'Globe',
      img:'глобус.jpg',
      desc:'Plastic coloured 70sm globe',
      category:'Decor',
      price:'20.99$'

    },
    {
      id:7,
      title:'Eraser',
      img:'стерка.jpg',
      desc:'Soft&Hard side two-colored eraser',
      category:'Office supplies',
      price:'2.99$'

    },
    {
      id:8,
      title:'Book-mark',
      img:'закладки.jpg',
      desc:'Sticky multicolored paper book-mark kit',
      category:'Office supplies',
      price:'5.99$'

    },
    {
      id:9,
      title:'Pensil-case',
      img:'пенал.jpg',
      desc:'Pastel purple case',
      category:'Storage',
      price:'12.99$'

    },
    {
      id:10,
      title:'Folder',
      img:'папка.jpg',
      desc:'Plastic mulricolored folder',
      category:'Storage',
      price:'7.99$'

    },
  ])
  
  return (
    <div className="wrapper">
      <Header />
      <Items allItems={items}/>
      <Footer/>
    </div>
  );
}

