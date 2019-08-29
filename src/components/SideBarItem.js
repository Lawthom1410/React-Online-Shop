import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

export class SideBarItem extends Component{
    render(){
        let path;
        console.log(this.props.category);
        if (this.props.category){
            path = "/category/" + this.props.text;
        } else{
            path = "/"+this.props.text;
        }
        return(
            <ul>
                <Link to={path} className="list-group-item">{this.props.text}</Link>
            </ul>
        )
    }
}