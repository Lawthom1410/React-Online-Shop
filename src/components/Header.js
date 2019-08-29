import React, {Component} from 'react';

export class Header extends Component{
    render(){
        return(
            <div className="navbar bg-info">
                <button onClick={this.props.toggleSideBar} className="btn btn-outline-light">Menu</button>
                <input placeholder="Search" />
            </div>
        )
    }
}