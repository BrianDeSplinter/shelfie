import React, {Component} from 'react'
import './Dashboard.css'
import Product from '../Product/Product'

class Dashboard extends Component {
    render(){
        const productMap = this.props.products.map(e => (
            <Product 
                key={e.product_id}
                name={e.product_name}
                price={e.price}
                imgurl={e.product_image}
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