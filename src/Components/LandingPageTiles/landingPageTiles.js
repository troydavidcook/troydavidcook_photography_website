
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



function ImageTiles(props) {
    const images = props.tiles.map((picture) =>
        <Col xs={12} sm={6} md={4} lg={4} >
            <img className="imageTile" src={picture} alt="" />
        </Col>

    );

    return (
        <Container>
            <Row>
                {images}
            </Row>
        </Container>
    );
}

export default ImageTiles;
// iterating and showing all images on tiles