import React, {Component} from 'react'
import './Dashboard.css'
import Product from '../Product/Product'

class Dashboard extends Component {
    render(){
        return(
            <div>
            <div>Dashboard</div>
            <Product/>
            </div>
        )
    }
}

export default Dashboard