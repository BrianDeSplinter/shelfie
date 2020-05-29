import React, {Component} from 'react'
import './Product.css'

class Product extends Component{
    render() {
        return(
            <div className='product'>
                <img src={this.props.imgurl}/>
                <div className='productInfo'>
                    <h4>{this.props.name}</h4>
                    <h4>{this.props.price}</h4>
                </div>
            </div>
        )
    }
}

export default Product