import React, {Component} from 'react'
import './Product.css'

class Product extends Component{
       
    render() {
        // console.log(this.props)
        return(
            <div className='product'>
                <img src={this.props.imgUrl} alt='failed to load :('/>
                <div className='productInfo'>
                    <h4>{this.props.name}</h4>
                    <h4>{this.props.price}</h4>
                    <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
                    <button onClick={() => {}}>Edit</button>
                </div>
            </div>
        )
    }
}

export default Product