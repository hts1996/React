import React from 'react';
import { Address,Restautant } from './model/resturant';

type Props={
    info:Restautant;
    changeAddress(address:Address):void;
}
const Store:React.FC<Props> = ({info})=> {
  return (
    <div>{info.name}</div>
  );
}

export default Store;