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
    }
  }
  componentDidMount() {
    axios.get(API_URL + "products")
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
    return (
      <div className='App'>
        <NavbarComp />
        <div className='mt-3'>
          <Container fluid>
            <Row>
              <ListCategories />
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
    )
  }
}

