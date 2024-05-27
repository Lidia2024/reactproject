import React,{useState, useEffect, useContext} from "react";
import axios from "axios";
import { parseJsonSourceFileConfigFileContent } from "typescript";

const AppContext=React.createContext<any>(null);


export const useAppContext= () => {
    const context=useContext(AppContext);

    if(!context){
        throw new Error('Ошибка при получении в useAppContext');
    }
    return context;
}

const AppProvider:React.FC<{children:React.ReactNode}>=({children})=>{
    const [items,setItems]=useState<any[]>([]);
    const [showFullItem,setShowFullItem]=useState <boolean>(false);
    const[orders,setOrders]=useState <any[]>([]);
    const [currentItems,setCurrentItems]=useState <any[]>([]);
    const[fullItem, setFullItem]=useState <any>({});

    useEffect(()=>{
      axios
        .get("http://localhost:3001/items")
        .then((responce)=>{
          setItems(responce.data);
          chooseCategory("all");
          setCurrentItems(responce.data);
        })
        .catch((error)=>{
          console.log("Data loading error",error);
        });
    },[]);
  
    const deleteOrder=(id:number)=>{
        setOrders(orders.filter((el)=> el.id!==id));
    }

    const addToOrder=(item:any)=>{
        if(!orders.some((el)=>el.id===item.id)){
        setOrders([...orders,item]);
        } //добавление товара, но только по одному одного типа
        // без строки if - неограниченное количество товаров
    }
  
    const chooseCategory=(category:string)=>{
        if(category==='all'){
        setCurrentItems(items);
        }
        else{
            setCurrentItems(items.filter((el)=>el.category===category));
        }
    }
    const onShowItem=(item:any)=>{
        setFullItem(item);
        setShowFullItem(!showFullItem);
    }

    const contextValue={
        items,
        setItems,
        orders,
        setOrders,
        currentItems,
        setCurrentItems,
        showFullItem,
        setShowFullItem,
        fullItem,
        setFullItem,
        deleteOrder,
        addToOrder,
        chooseCategory,
        onShowItem
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;