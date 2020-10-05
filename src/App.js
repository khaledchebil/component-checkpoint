import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {FullName} from "./components/profile/FullName";
import Adress from "./components/profile/Address";
import ProfilPhoto from "./components/profile/ProfilPhoto";

const App = () => {
return (
<div className="all"> 
<h2 className='clean'>Weclome to my profile,</h2>
<p>We will test the components accordingly: </p>
<FullName />
<Adress />
<ProfilPhoto />

</div>
);
};


export default App;
