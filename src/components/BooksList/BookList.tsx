import { Button, InputNumber, Row, Table } from "antd";

import { Col } from "antd/es/grid";

import { useBooks } from "../../apollo/useBooks";

import { useEffect } from 'react';

import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import "./BookList.css";

const BookList = () => {

    const [books, setBooks] = useBooks();

    const [isDeleted, setIsDeleted] = useState(404);

    const [targetPrice, setTargetPrice] = useState(0);

    const [price, setPrice] = useState(0);

    const columns = [

        {

            title: "Title",

            dataIndex: "title",

            key: "title",

        },

        {

            title: "Rating",

            dataIndex: "rating",

            key: "rating"

        },

        {

            title: "Author",

            dataIndex: "author",

            key: "author"

        },

        {

            title: "Price",

            key: "price",

            render: (record: any) => {

                return (

                    targetPrice !== record.price ?
                        
                        <span
                            
                            onDoubleClick={e => {

                                e.currentTarget.textContent &&

                                    setTargetPrice(+e.currentTarget.textContent);
                                
                                setPrice(record.price);
                                

                            }}
                        
                        >
                            
                            {record.price}
                        
                        </span> : 

                        <InputNumber
                            
                            defaultValue={record.price}

                            onChange={price => { setPrice(price); }}

                            onKeyDown={e => { editePrice(e, record.id); }}
                        
                        />
                    
                )

            }

        },

        {

            title: "Actions",

            key: "actions",

            render: (record: any) => {

                return <>
                
                    <Button className="edite-btn" danger={true}>

                        <Link to={ `/${record.id}` }>Edite</Link>

                    </Button>

                    <Button
                    
                        danger={true}

                        onClick={_ => { deleteBook(record.id); }}
                    
                    >
                        
                        Delete
                    
                    </Button>
                
                </>

            }

        }

    ];
        
    const deleteBook = (id: number) => {

        axios.delete(`http://localhost:3000/books/${id}`)
            
            .then(response => setIsDeleted(response.status));

    }

    const editePrice = (event: any, id: number) => {

        if (event.keyCode === 13) {

            axios.patch(`http://localhost:3000/books/${id}`, {price: price})
            
                .then(response => setIsDeleted(response.status));   
            
            setTargetPrice(0);

        }

    }

    useEffect(() => {

        setBooks("http://localhost:3000/books");

        setIsDeleted(404);

    }, [isDeleted]);

    return (

        <Row style={{padding: "20px 0"}}>

            <Col md={2} xs={1}></Col>

            <Col md={20} xs={22}>
            
                <h2 className="main-title">Book List</h2>

                <Table dataSource={books} columns={columns} pagination={false} />
                
            </Col>

            <Col md={2} xs={1}></Col>

        </Row>

    );

}

export default BookList;