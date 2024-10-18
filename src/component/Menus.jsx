import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { numberWithCommas } from '../utils/utils';
import PropTypes from 'prop-types';

const Menus = ({ menu, addKeranjang }) => {
    return (
        <Col md={4} xs={6} className='mb-4'>
            <Card className='shadow' onClick={() => addKeranjang(menu)}>
                <Card.Img
                    variant="top"
                    src={
                        "images/" +
                        menu.category.nama.toLowerCase() +
                        "/" +
                        menu.gambar
                    }
                />
                <Card.Body>
                    <Card.Title>{menu.nama} <strong>({menu.kode})</strong></Card.Title>
                    <Card.Text>Rp.{numberWithCommas(menu.harga)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
Menus.propTypes = {
    menu: PropTypes.shape({
        nama: PropTypes.string.isRequired,
        harga: PropTypes.number.isRequired,
        category: PropTypes.shape({
            nama: PropTypes.string.isRequired
        }).isRequired,
        gambar: PropTypes.string.isRequired,
    }).isRequired,
};
export default Menus