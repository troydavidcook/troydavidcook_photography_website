import React from 'react';
import {Row, Col} from 'react-bootstrap';
    function Banner (props) {
        
        return (
            <div>
                <Row>
                    <Col lg="8" className="column">
                        <img className="Banner" src={ props.sedona } alt=""/>
                    </Col>
                </Row>
            </div>
        )
    }

export default Banner;