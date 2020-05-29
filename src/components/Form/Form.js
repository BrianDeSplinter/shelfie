import React, {Component} from 'react'
import axios from 'axios'
import './Form.css'

class Form extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleImageChange(e) {
        this.setState({
            imgurl: e.target.value
        })
    }

    cancelInput(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
        document.getElementById('name').value= ''
        document.getElementById('price').value= ''
        document.getElementById('img').value= ''
    }

    addProduct(name, price, imgurl){
        const body = {name, price, imgurl}
        axios.post('/api/product', body).then((res) => {
            this.props.componentDidMount()
        })
    }

    render() {
        return(
            <div>
                <div>Form</div>
                <div className='inputs'>
                    <input id='name' onChange={(e) => this.handleNameChange(e)} placeholder='Name'/>
                    <input id='price' type="number" onChange={(e) => this.handlePriceChange(e)} placeholder='Price'/>
                    <input id='img' onChange={(e) => this.handleImageChange(e)} placeholder='Image URL'/>
                </div>
                <div className='buttons'>
                    <button onClick={()=> this.cancelInput()}>Cancel</button>
                    <button onClick={() => this.addProduct(this.state.name, this.state.imgurl, this.state.price)}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form