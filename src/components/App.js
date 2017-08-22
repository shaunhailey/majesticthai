import React, { Component } from 'react'
import '../styles/App.css'
import Layout from './Layout.js'
import Appetizers from './Appetizers.js'
import Entrees from './Entrees.js'
import Desserts from './Desserts.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
  }

  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
      .then(results => results.json())
      .then(responseData => {
        this.setState({
          appetizers: responseData[0].Appetizers,
          entrees: responseData[0].Entrees,
          desserts: responseData[0].Desserts
        })
      })
      .catch(error => {
        console.log('Error with Fetching : ', error)
      })
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Appetizers items={this.state.appetizers} />
          <Entrees items={this.state.entrees} />
          <Desserts items={this.state.desserts} />
        </Layout>
      </div>
    )
  }
}
export default App
