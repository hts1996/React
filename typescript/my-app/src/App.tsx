import React,{useState} from 'react';
import './App.css';
import Store from './Store';
import BestMenu from './BestMenu';
import { Address,Restautant } from './model/resturant';

let data:Restautant={
  name:'식당',
  category:'western',
  address:{
    city:'ulsan',
    detail:'sw',
    zipCode:413413414
  },
  menu:[{name:'pasta',price:1000,category:'PASTA'}]
}

const App:React.FC = ()=> {
  const [myrestaurant,setMyrestaurant] =useState<Restautant>(data)
  const changeAddress=(address:Address)=>{
    setMyrestaurant({...myrestaurant,address:address})
  }
  const showBestMenuName = (name:string)=>{
    return name
  }
  return (
    <div className="App">
    <Store info={myrestaurant} changeAddress={changeAddress}/>
    <BestMenu name="피자" category="피자" price={12000} showBestMenuName={showBestMenuName}/>
    </div>
  );
}

export default App;
