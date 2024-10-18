import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class success extends Component {
    render() {
        return (
            <div className='mt-4 text-center'>
                <Image src='../../public/images/success.png' width='500' />
                <h2>success</h2>
                <p>thankyou for your order!</p>
                <Button variant='primary' as={Link} to='/'>
                    Back
                </Button>
            </div>
        )
    }
}
