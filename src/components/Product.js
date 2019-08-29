import React, {Component} from 'react';

export class Product extends Component{
    render(){
    let imgStyle = {
        borderRadius: "50%",
        margin: "50px"
    }

        return(
            <div>
                <img style={imgStyle} width="140" height="140" src={this.props.img} />
            </div>
        )
    }
}