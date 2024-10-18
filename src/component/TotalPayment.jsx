import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';

export default class TotalAmount extends Component {
    render() {
        const total = this.props.keranjangs.reduce(function (result, item){
            return result + item.harga_produk;
        }, 0)
        return (
            <div className='fixed-bottom'>
                <Row>
                    <Col md={{span:3, offset:9}} className='px-4'>
                        <h4>Total Payment : Rp. {numberWithCommas(total)}</h4>
                    </Col>
                </Row>
            </div>
        )
    }
}
