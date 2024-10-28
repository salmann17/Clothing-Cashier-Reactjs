import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_URL } from '../utils/constant';
import { useNavigate } from 'react-router-dom';

const TotalPayment = ({ keranjangs }) => {
    const navigate = useNavigate();

    const submitTotalPayment = (total) => {
        const pesanan = {
            totalPayment: total,
            menus: keranjangs
        };

        axios.post(API_URL + "pesanans", pesanan).then(() => {
            navigate('/success');
        }).catch(error => {
            console.log("Error submitting payment:", error);
        });
    };

    const total = keranjangs.reduce((result, item) => result + item.harga_produk, 0);

    return (
        <div className='fixed-bottom'>
            <Row>
                <Col md={{ span: 3, offset: 9 }} className='px-4'>
                    <h4>Total Payment: <strong className='float-right mr-2'>Rp. {numberWithCommas(total)}</strong></h4>
                    <Button variant='primary' className='btn-fullwidth mb-2 mt-2 mr-2' size='large' onClick={() => submitTotalPayment(total)}>
                        <FontAwesomeIcon icon={faShoppingCart} /> <strong>PAYMENT</strong>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default TotalPayment;
