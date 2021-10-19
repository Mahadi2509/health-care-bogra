import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Doctors from './pages/Doctors/Doctors';
import Home from './pages/Home/Home/Home';
import Slider from './pages/Home/Slider/Slider';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import View from './pages/View/View';

function App() {
  return (
    <div className="App">
      <Slider></Slider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/view/:serviceId">
            <View></View>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/login">

          </Route>
          <Route path="/register">

          </Route>
          <Route path="*">

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
