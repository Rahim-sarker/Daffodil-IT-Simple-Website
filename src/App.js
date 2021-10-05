import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound'
import Teachers from './components/Teachers/Teachers';


function App() {
  
  return (
    <div className="App">
        <Header></Header>
       <Router>
          <Switch>
            <Route exact path="/"> 
              <Home></Home>
            </Route>

            <Route path="/home"> 
              <Home></Home>
            </Route>

            <Route path="/about">
               <About></About>
            </Route>

           <Route path="/services">
             <Services></Services>
           </Route> 

           <Route path="/teacher">
              <Teachers></Teachers>
           </Route>

           <Route path="*">
             <NotFound></NotFound>
           </Route>
          </Switch>
       </Router>
       

        <Footer></Footer>
    </div>
  );
}

export default App;
