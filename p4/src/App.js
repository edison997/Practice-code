import SofaOne from './component/SofaOne';

import './App.css'

import { BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom";
import TwoDetails from './Pages/TwoDetails.js';

function App() {
  return (
    <div className="App">
    {/* //还可以把这个直接写在全局的index中 */}
   
    <Router>
      <Switch>
        <Route exact path="/TwoDetails:id"  component={TwoDetails}></Route>
        <Route exact path="/SofaOne"  component={SofaOne}></Route>
        <Redirect to="/SofaOne"></Redirect>
      </Switch>
       
    </Router>
     
   
    </div>
  );
}

export default App;
