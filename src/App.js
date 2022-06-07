import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";

const App = () => {
  return (
      //<BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Nav/>
              <div className='app-wrapper-cont'>
                  <Content/>
                  <Dialogs/>
                  {/*<Route path='/content' element={<Content/>}/>
                  <Route path='/dialogs'  element={<Dialogs/>}/>*/}
              </div>
          </div>
      //</BrowserRouter>
  );
}

export default App;
