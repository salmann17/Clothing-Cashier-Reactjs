import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Result, ListCategories, Menus } from '../component'
import { Col, Row, Container } from 'react-bootstrap'
import { Component } from 'react'
import { API_URL } from '../utils/constant';
import axios from 'axios';
import Swal from 'sweetalert2'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            menus: [],
            selectedCategory: "Atasan",
            keranjangs: []
        }
    }
    componentDidMount() {
        axios.get(API_URL + "products?category.nama=" + this.state.selectedCategory)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(error => {
                console.log(error)
            })

        axios.get(API_URL + "keranjangs")
            .then(res => {
                const keranjangs = res.data;
                this.setState({ keranjangs });
            })
            .catch(error => {
                console.log(error)
            })
    }
    componentDidUpdate(prevState) {
        if (this.state.keranjangs !== prevState.keranjangs) {
            axios.get(API_URL + "keranjangs")
                .then(res => {
                    const keranjangs = res.data;
                    this.setState({ keranjangs });
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    changeCategory = (value) => {
        this.setState({
            selectedCategory: value,
            menus: []
        })
        axios.get(API_URL + "products?category.nama=" + value)
            .then(res => {
                const menus = res.data;
                this.setState({ menus });
            })
            .catch(error => {
                console.log(error)
            })
    }
    addKeranjang = (value) => {
        axios.get(API_URL + "keranjangs?products.id=" + value.id)
            .then(res => {
                if (res.data.length === 0) {
                    const keranjang = {
                        jumlah: 1,
                        harga_produk: value.harga,
                        products: value
                    }
                    axios.post(API_URL + "keranjangs", keranjang)
                        .then(res => {
                            Swal.fire({
                                title: "Success!",
                                text: keranjang.products.nama + " has been added to basket!",
                                icon: "success",
                                button: false,
                                timer: 2000
                            });
                        })
                        .catch(error => {
                            console.log(error)
                        })
                } else {
                    const keranjang = {
                        jumlah: res.data[0].jumlah + 1,
                        harga_produk: res.data[0].harga_produk + value.harga,
                        products: value
                    }
                    axios.put(API_URL + "keranjangs/" + res.data[0].id, keranjang)
                        .then(res => {
                            Swal.fire({
                                title: "Success!",
                                text: keranjang.products.nama + " has been added to basket!",
                                icon: "success",
                                button: false,
                                timer: 2000
                            });
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const menus = this.state.menus
        const selectedCategory = this.state.selectedCategory
        const keranjangs = this.state.keranjangs
        return (
            <div className='mt-3'>
                <Container fluid>
                    <Row>
                        <ListCategories changeCategory={this.changeCategory} selectedCategory={selectedCategory} className="listGrup" />
                        <Col>
                            <h5><strong>List Products</strong></h5>
                            <hr />
                            <Row>
                                {menus && menus.map((menu) => (
                                    <Menus
                                        key={menu.id}
                                        menu={menu}
                                        addKeranjang={this.addKeranjang}
                                    />
                                ))}
                            </Row>
                        </Col>
                        <Result keranjangs={keranjangs} />
                    </Row>
                </Container>
            </div>
        )
    }
}

