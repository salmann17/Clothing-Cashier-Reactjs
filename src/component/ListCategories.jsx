import { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class ListCategories extends Component {
  render() {
    return (
      <Col md={2} mt='2'>
        <h5><strong>List Categories</strong></h5>
        <hr />
      </Col>
    )
  }
}