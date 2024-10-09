import axios from 'axios'
import { Component } from 'react'
import { Col } from 'react-bootstrap'
import { API_URL } from '../utils/constant'
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faTags, faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Icon = ({ nama }) => {
  if (nama == "Atasan") return <FontAwesomeIcon icon={faShirt} className='mr-2' />
  if (nama == "Bawahan") return <FontAwesomeIcon icon={faTags} className='mr-2' />
  if (nama == "Aksesoris") return <FontAwesomeIcon icon={faHatCowboy} className='mr-2' />

  return <FontAwesomeIcon icon={faShirt} className='mr-2' />
}
export default class ListCategories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }
  componentDidMount() {
    axios.get(API_URL + "categories")
      .then(res => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const categories = this.state.categories
    const { changeCategory, selectedCategory } = this.props

    return (
      <Col md={2} mt='2'>
        <h5><strong>List Categories</strong></h5>
        <hr />
        <ListGroup>
          {categories && categories.map((category) =>
            <ListGroup.Item  
            key={category.id} 
            onClick={() => changeCategory(category.nama)}
            className={selectedCategory === category.nama && "category-active"}
            style={{cursor:"pointer"}} >
              <Icon nama={category.nama} /> {category.nama}
            </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    )
  }
}
ListCategories.propTypes = {
  changeCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
