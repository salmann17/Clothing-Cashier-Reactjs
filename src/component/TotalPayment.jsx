import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_URL } from '../utils/constant';

export default class TotalPayment extends Component {
    submitTotalPayment = (total) => {
        const pesanan = {
            totalPayment : total,
            menus : this.props.keranjangs
        }

        axios.post(API_URL+ "pesanans", pesanan).then((res) =>{
            this.props.history.push('/success')
        })
    }
    render() {
        const total = this.props.keranjangs.reduce(function (result, item) {
            return result + item.harga_produk;
        }, 0)
        return (
            <div className='fixed-bottom'>
                <Row>
                    <Col md={{ span: 3, offset: 9 }} className='px-4'>
                        <h4>Total Payment : <strong className='float-right mr-2'>Rp. {numberWithCommas(total)}</strong></h4>
                        <Button variant='primary' className='btn-fullwidth mb-2 mt-2 mr-2' size='large' onClick={ () => this.submitTotalPayment(total)}>
                            <FontAwesomeIcon icon={faShoppingCart}/> <strong>PAYMENT</strong>
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

