
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Contuct from './Pages/Contuct';
import Abouts from './Pages/Abouts';
import Nabver from './Pages/Nabver';
import Error from './Pages/Error';
import Blog from './Pages/Blog';




function App() {


  return (
    <div>
     
      <BrowserRouter>
       <Nabver />
         <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/blogs' element={<Blogs/>}/>
         <Route path='/blogs/:title' element={<Blog/>}/>
         <Route path='/contuct' element={<Contuct/>}/>
         <Route path='/abouts' element={<Abouts/>}/>
         <Route path='*' element={<Error />}/>
         </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
