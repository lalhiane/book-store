import { Row } from "antd";

import { Col } from "antd/es/grid";

import { Link } from "react-router-dom";

import "./AppHeader.css";

const AppHeader = () => {

    return (

        <Row style={{padding: "20px 0"}}>

            <Col md={2} xs={1}></Col>

            <Col md={10} xs={11}>

                <Link to="/" className="head-link">Book Store</Link>

            </Col>

            <Col md={10} xs={11} style={{ textAlign: "end" }}>
                
                <Link to="/addbook" className="head-link">Add Book</Link>

            </Col>

            <Col md={2} xs={1}></Col>

        </Row>

    );

}

export default AppHeader;