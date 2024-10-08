import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Result, ListCategories, NavbarComp} from './component/Index.jsx'
import { Col, Row, Container } from 'react-bootstrap'

function App() {

  return (
    <>
      <div className='App'>
        <NavbarComp />
        <div className='mt-3'>
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h5><strong>List Products</strong></h5>
                <hr />
              </Col>
              <Result />
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}

export default App
