import React from 'react';
import { Row, Col } from 'react-bootstrap';


function ImageTiles (props) {
    return (
        <Row className="Splash-Images">
            <Col class="column">
                <img className="imageTile" p-1 flex-fill src={props.tiles[0]} alt=""/>
            </Col>
            <Col class="column">
            <img className="imageTile" p-1 flex-fill src={props.tiles[1]} alt=""/>
            </Col>
            <Col class="column">
            <img className="imageTile" p-1 flex-fill src={props.tiles[2]} alt=""/>
            </Col>
            <Col class="column">
            <img className="imageTile" p-1 flex-fill src={props.tiles[3]} alt=""/>
            </Col>
        </Row>
    );
}

export default ImageTiles;

// iterating and showing all images on tiles