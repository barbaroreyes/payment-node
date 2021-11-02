import {Switch , Route} from 'react-router-dom'
import './App.css';
import Pay from './pages/Payment'
import Success from './pages/Success';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/payment">
          <Pay/>
      </Route>
        <Route exact path="/success">
          <Success/>

        </Route>
      </Switch>
    </div>
  );
}

export default App;
