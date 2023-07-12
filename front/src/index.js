import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {RecoilRoot} from "recoil";
const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
      <RecoilRoot>
    <App />
  </RecoilRoot>
);
