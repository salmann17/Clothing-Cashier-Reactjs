import { Component } from 'react'
import { Badge, Row, Col, ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { numberWithCommas } from '../utils/utils';

export default class Result extends Component {
    render() {
        const { keranjangs } = this.props
        return (
            <Col md={3} mt='2'>
                <h5><strong>Result</strong></h5>
                <hr />
                {keranjangs.length !== 0 && (
                    <ListGroup variant="flush" >
                        {keranjangs.map((menuKeranjang) => (
                            <ListGroup.Item key={menuKeranjang.id} className='result-list' >
                                <Row>
                                    <Col xs="2">
                                        <h4>
                                            <Badge pill bg="primary">
                                                {menuKeranjang.jumlah}
                                            </Badge>
                                        </h4>
                                    </Col>
                                    <Col>
                                        <h5>{menuKeranjang.products.nama}</h5>
                                        <p>Rp. {numberWithCommas(menuKeranjang.products.harga)}</p>
                                    </Col>
                                    <Col>
                                        <strong className='float-right'>Rp. {numberWithCommas(menuKeranjang.harga_produk)}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
        )
    }
}
Result.propTypes = {
    keranjangs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nama: PropTypes.string.isRequired,
            harga: PropTypes.string.isRequired
        })
    ).isRequired
};
