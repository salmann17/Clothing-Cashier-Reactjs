import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {numberWithCommas} from '../utils/utils';
const Menus = ({ menu }) => {
    return (
        <Col md={4} xs={6} className='mb-4'>
            <Card>
                <Card.Img 
                variant="top" 
                src={"{process.env.PUBLIC_URL}assets/images/{menu.category.nama.toLowerCase()}/{menu.gambar}"} 
                />
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>Rp.{numberWithCommas(menu.harga)}</Card.Text>
                    <Button variant="primary">BUY</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Menus