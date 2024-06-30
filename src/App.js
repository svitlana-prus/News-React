import "./styles.css";
import Main from "./Layout/Main/main";
import World from "./Layout/World/world";
import Bbc from "./Layout/Bbc/bbc";
import Footer from "./Layout/Footer/footer";
import Layout from './Layout/Layout/layout';
import { Routes, Route } from "react-router-dom";

 function App() {
  return(
    <div className="App">  
       <Routes>
          <Route path="/" element={<Layout />}>
           <Route index element={<Main/>}/>
            <Route path="/bbc" element={<Bbc />} />
            <Route path="/world" element={<World />} />
          </Route>
      </Routes>
      <Footer/>
</div>
   )
}
export default App
