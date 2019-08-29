import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { ProductSection } from './components/ProductSection';
import { SideBar } from './components/SideBar';
import { ProductsByCategory } from './components/ProductsByCategory';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Home } from './components/Home';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      isSideBar: 0
    }
  }

  toggleSideBar = () =>{
    if(this.state.isSideBar){
      this.setState({
        isSideBar: 0
      })
    } else {
      this.setState({
        isSideBar: 1
      })
    }
  }

  render(){
    let sideBarStyle;
    if(this.state.isSideBar){
      sideBarStyle = {
        maxWidth: "20%"
      }
    } else {
      sideBarStyle = {
        maxWidth: "0px"
      }
    }
    return (
      <div className="App">
          <Header toggleSideBar={this.toggleSideBar} />
          <div className="row">
            <BrowserRouter>
              <div className="col px-0" style={sideBarStyle}>
                <SideBar isSideBar={this.state.isSideBar} />
              </div>
              <div className="col">
                <FilterBar />
                <Route path="/home" component={Home} />
                <Route path="/products" component={ProductSection} />
                <Route path="/category/:category" component={ProductsByCategory} />
              </div>
            </BrowserRouter>
          </div>
      </div>
    );
  }
}

export default App;
