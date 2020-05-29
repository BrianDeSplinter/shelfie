import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }

    this.componentDidMount = this.componentDidMount.bind(this)
  }
  
  componentDidMount() {
    axios.get('/api/inventory').then((res) => {
      this.setState({
        products: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <Dashboard 
            products={this.state.products} 
            componentDidMount= {this.componentDidMount}
          />
          <Form 
            componentDidMount= {this.componentDidMount}
          />
        </div>
      </div>
    );
  }
}

export default App;




    // {
        //   name: 'Stuff',
        //   price: 10.99,
        //   imgurl: 'https://www.responsesource.com/content/uploads/2016/06/Stuff.jpg'
        // },
        // {
        //   name: 'Things',
        //   price: 4.99,
        //   imgurl: 'https://cupofjo.com/wp-content/uploads/2013/04/maddie-on-things.jpg'
        // },
        // {
        //   name: 'XBox OneX',
        //   price: 399.00,
        //   imgurl: 'https://th.bing.com/th/id/OIP.T0nii6LBXeiPPRQjjkCV8wHaEK?pid=Api&rs=1'
        // }