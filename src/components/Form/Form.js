import React, {Component} from 'react'
import axios from 'axios'
import './Form.css'

class Form extends Component {
    constructor () {
        super()
        this.state = {
            product_name: '',
            price: 0,
            product_image: ''
        }
    }

    handleNameChange(e) {
        this.setState({
            product_name: e.target.value
        })
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleImageChange(e) {
        this.setState({
            product_image: e.target.value
        })
    }

    cancelInput() {
        this.setState({
            product_name: '',
            price: 0,
            product_image: ''
        })
        document.getElementById('name').value= ''
        document.getElementById('price').value= ''
        document.getElementById('img').value= ''
    }

    addProduct(product_name, product_image, price){
        const body = {product_name, product_image, price}
        axios.post('/api/product', body).then((res) => {
            this.props.componentDidMount()
        })
        document.getElementById('name').value= ''
        document.getElementById('price').value= ''
        document.getElementById('img').value= ''
    }

    render() {
        return(
            <div className='form'>
                <div>Form</div>
                <div className='inputs'>
                    <input id='name' onChange={(e) => this.handleNameChange(e)} placeholder='Name'/>
                    <input id='price' type="number" onChange={(e) => this.handlePriceChange(e)} placeholder='Price'/>
                    <input id='img' onChange={(e) => this.handleImageChange(e)} placeholder='Image URL'/>
                </div>
                <div className='buttons'>
                    <button onClick={() => this.cancelInput()}>Cancel</button>
                    <button onClick={() => this.addProduct(this.state.product_name, this.state.product_image, this.state.price)}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form