import React, {Component} from 'react'
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

    handelPriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleImageChange(e) {
        this.setState({
            imgurl: e.target.value
        })
    }

    postNewProduct() {

    }

    cancelInput(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }


    render() {
        return(
            <div>
                <div>Form</div>
                <div className='inputs'>
                    <input onChange={(e) => this.handleNameChange(e)} placeholder='Name'/>
                    <input onChange={(e) => this.handlePriceChange(e)} placeholder='Price'/>
                    <input onChange={(e) => this.handleImageChange(e)} placeholder='Image URL'/>
                </div>
                <div className='buttons'>
                    <button onClick={()=> this.cancelInput()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form