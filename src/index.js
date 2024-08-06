import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Poem from './components/Poem';
import Futer from './components/Futer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 <Header/>
 <Poem/>
 <Futer/>
  </>
);

