import React from 'react';
import { Menu } from './model/resturant';
type Props = Menu & {
    showBestMenuName(name: string):string

}
const BestMenu:React.FC<Props> = ({name,price,category,showBestMenuName})=> {
    return (
      <div>{name}</div>
    );
  }
  
  export default BestMenu;