import { Col, Row } from "antd";

import { useState } from "react";

import { Book, useBooks } from "../../apollo/useBooks";

import AppForm from "../AppForm/AppForm";

import axios from "axios";

const AddBook = () => {

    const [books] = useBooks();

    const [book, setBook] = useState<Book>({

        title: "",

        rating: 0,

        author: "",

        price: 0

    });

    const addBook = () => {

        let id = books.length + 1;

        console.log({id: id, key: id, ...book});

        axios.post("http://localhost:3000/books", {id: id, key: id, ...book})
            
            .then(response => console.log(response.status));

    }

    return (

        <Row style={{padding: "20px 0"}}>

            <Col md={2} xs={1}></Col>

            <Col md={20} xs={22}>
            
                <h2 className="main-title">Add Book</h2>

                <AppForm
                    
                    setBook={setBook}
                    
                    book={book}
                    
                    handler={addBook}

                    initValue = {book}
                
                    btnText="Add Book"
                
                />

            </Col>

            <Col md={2} xs={1}></Col>

        </Row>

    );

}

export default AddBook;