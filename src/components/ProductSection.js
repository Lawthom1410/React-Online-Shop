import React, {Component} from 'react';
import { Product } from './Product';
import axios from 'axios';

export class ProductSection extends Component{
    constructor(){
        super();
        this.state = {
            productsList: []
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:8080/getAll`).then((res) => {
            this.setState({
                productsList: res.data
            })
        })
    }

    render(){
        return(
            <div className="row">
                {this.state.productsList.map(product => <Product img={product.img} />)}
            </div>
        )
    }
}