import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Result, ListCategories, NavbarComp, Menus } from './component/Index.jsx'
import { Col, Row, Container } from 'react-bootstrap'
import { Component } from 'react'
import { API_URL } from './utils/constant.jsx';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      selectedCategory: "Atasan"
    }
  }
  componentDidMount() {
    axios.get(API_URL + "products?category.nama=" + this.state.selectedCategory)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error)
      })
  }
  changeCategory = (value) => {
    this.setState({
      selectedCategory: value,
      menus: []
    })
    axios.get(API_URL + "products?category.nama=" + value)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const menus = this.state.menus
    const selectedCategory = this.state.selectedCategory
    return (
      <div className='product-list'>
        <div className='App'>
          <NavbarComp />
          <div className='mt-3'>
            <Container fluid>
              <Row>
                <ListCategories changeCategory={this.changeCategory} selectedCategory={selectedCategory}/>
                <Col>
                  <h5><strong>List Products</strong></h5>
                  <hr />
                  <Row>
                    {menus && menus.map((menu) => (
                      <Menus
                        key={menu.id}
                        menu={menu}
                      />
                    ))}
                  </Row>
                </Col>
                <Result />
              </Row>
            </Container>
          </div>
        </div>
      </div>
    )
  }
}

