import { Component } from 'react'
import { Badge, Row, Col, ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { numberWithCommas } from '../utils/utils';
import TotalAmount from './TotalPayment';

export default class Result extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            keranjangsDetail: false,
            jumlah: 0,
            keterangan: '',
        }
    }
    handleShow = (menuKeranjang) =>{
        this.setState({
            showModal:true,
            keranjangsDetail: menuKeranjang
        })
    }
    handleClose = () =>{
        this.setState({
            showModal:false
        })
    }
    render() {
        const { keranjangs } = this.props
        return (
            <Col md={3} mt='2'>
                <h5><strong>Result</strong></h5>
                <hr />
                {keranjangs.length !== 0 && (
                    <ListGroup variant="flush" >
                        {keranjangs.map((menuKeranjang) => (
                            <ListGroup.Item key={menuKeranjang.id} onClick={() => this.handleShow(menuKeranjang)} className='result-list' >
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
                <TotalAmount keranjangs={keranjangs} {...this.props} />
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
