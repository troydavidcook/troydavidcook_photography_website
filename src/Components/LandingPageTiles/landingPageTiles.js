import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function ImageTiles (props) {
    return (
        <Container>
            <Row className="Splash-Images">
                <Col className="col-4" col-sm-2 col-xs-1>
                    <img className="imageTile" p-1 flex-fill src={props.tiles[0]} alt=""/>
                </Col>
                <Col className="col-4" col-sm-2 col-xs-1>
                <img className="imageTile" p-1 flex-fill src={props.tiles[1]} alt=""/>
                </Col>
                <Col className="col-4" col-sm-2 col-xs-1>
                <img className="imageTile" p-1 flex-fill src={props.tiles[2]} alt=""/>
                </Col>
                <Col className="col-4" col-sm-2 col-xs-1>
                <img className="imageTile" p-1 flex-fill src={props.tiles[3]} alt=""/>
                </Col>
                <Col className="col-4" col-sm-2 col-xs-1>
                <img className="imageTile" p-1 flex-fill src={props.tiles[4]} alt=""/>
                </Col>
                <Col className="col-4" col-sm-2 col-xs-1>
                <img className="imageTile" p-1 flex-fill src={props.tiles[5]} alt=""/>
                </Col>
                <Col className="col-4" col-sm-2 col-xs-1>
                <img className="imageTile" p-1 flex-fill src={props.tiles[6]} alt=""/>
                </Col>
            </Row>
        </Container>
    );
}

export default ImageTiles;

// iterating and showing all images on tiles