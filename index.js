
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Page2} from './Page2.js';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/"><App/></Route>
    <Route exact path="/Page2"><Page2/></Route>
  </Switch>
  </BrowserRouter>
  
  ,
  document.getElementById('root')
);


