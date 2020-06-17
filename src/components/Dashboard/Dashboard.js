import React, {Component} from 'react'
import './Dashboard.css'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    
    deleteProduct(product_id) {
        axios.delete(`/api/product/${product_id}`).then((res) => {
            this.props.componentDidMount()
        })
    }

    render(){
        const productMap = this.props.products.map(e => (
            <Product 
                key={e.product_id}
                id={e.product_id}
                name={e.product_name}
                price={e.price}
                imgUrl={e.product_image}
                delete={this.deleteProduct}
            />
        ))
        
        return(
            <div>
                <div>Dashboard</div>
                {productMap}
            </div>
        )
    }
}

export default Dashboard