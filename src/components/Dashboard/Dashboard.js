import React, {Component} from 'react'
import './Dashboard.css'
import Product from '../Product/Product'

class Dashboard extends Component {
    render(){
        const productMap = this.props.products.map(e => (
            <Product 
                name={e.name}
                price={e.price}
                imgurl={e.imgurl}
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