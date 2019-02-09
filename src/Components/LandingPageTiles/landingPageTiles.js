import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function ImageTiles (props) {
    return (
        <Container>
            <Row className="Splash-Images">
                <Col xs={12} sm={6} md={4} lg={4} >
                    <img className="imageTile" src={props.tiles[0]} alt=""/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} >
                <img className="imageTile" src={props.tiles[1]} alt=""/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} >
                <img className="imageTile" src={props.tiles[2]} alt=""/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} >
                <img className="imageTile" src={props.tiles[3]} alt=""/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} >
                <img className="imageTile" src={props.tiles[4]} alt=""/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} >
                <img className="imageTile" src={props.tiles[5]} alt=""/>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4} >
                <img className="imageTile" src={props.tiles[6]} alt=""/>
                </Col>
            </Row>
        </Container>
    );
}

export default ImageTiles;

// iterating and showing all images on tiles