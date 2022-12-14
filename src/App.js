import React from 'react';
import Header from "./components/header/header"
import Topcontainer from './components/topcontainer/topcontainer';
import Skillcontainer from './components/skillcontainer/skillcontainer';
import Projects from './components/project2/project2';

import Footercontent from './components/footercontent/footercontent';


const App = () =>{
  return (
    <div>
      <Header /> 
      <Topcontainer/>
      <Skillcontainer/>
      <Projects/>
      
      <Footercontent/>
    </div>
  )
}

export default App