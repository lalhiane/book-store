import { Col, Row } from "antd";

import { useParams } from "react-router-dom";

import { Book, useBooks } from "../../apollo/useBooks";

import { useState } from "react";

import axios from "axios";

import AppForm from "../AppForm/AppForm";

const EditeBook = () => {

    const {id} = useParams();

    const [books] = useBooks(); 

    let singleBook: any = books.find(book => id && book.id === +id);

    const [book, setBook] = useState<Book>({

        id: singleBook.id,

        key: singleBook.key,

        title: singleBook.title,
        
        rating: singleBook.rating,
        
        author: singleBook.author,
        
        price: singleBook.price

    });

    console.log(id);

    const editeBook = () => {

        axios.put(`http://localhost:3000/books/${id}`, book)
            
            .then(response => console.log(response.status));

    }
        
    return (

        <Row style={{padding: "20px 0"}}>

            <Col md={2} xs={1}></Col>

            <Col md={20} xs={22}>
            
                <h2 className="main-title">Edite Book</h2>

                <AppForm
                
                    setBook = { setBook }
                    
                    book = { book }
                    
                    handler = { editeBook }

                    initValue = { singleBook }
                
                    btnText = "Edite Book"
                
                />
                
            </Col>

            <Col md={2} xs={1}></Col>

        </Row>

    )

}

export default EditeBook;