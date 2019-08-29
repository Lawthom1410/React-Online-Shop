import React, {Component} from 'react';
import { SideBarItem } from './SideBarItem';

export class SideBar extends Component{
    render(){

        if(this.props.isSideBar){
            return(
                <div className="mt-3">
                    <SideBarItem text="Home" />
                    <SideBarItem text="Products"/>
                    <h2>Categories</h2>
                    <SideBarItem category="DVDs" text="DVDs" />
                    <SideBarItem category="Fruit" text="Fruit" />
                </div>
            )
        } else{
            return(
                <></>
            )
        }
    }
}