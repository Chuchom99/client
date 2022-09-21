import React from 'react'
import { Row, Col } from 'react-bootstrap'
import DOMPurify from 'dompurify';


function Newsitem(props) {
  return (
    <div className="items">

    <Row>
    
    <Col sm={4}><img src={props.news.image} /></Col>
    <Col className="text">
       <a href={props.news.url} rel="noopener" target="_blank" > <h3 className="headline">{props.news.headline}</h3> </a>
       {/* <a href={props.news.url} rel="noopener" target="_blank"  > <h3 className="headline">{props.news.headline}</h3> </a> */}
        <p className="summary">{props.news.summary}</p>
        <p><span>source:</span> {props.news.source}</p>
        </Col>
      </Row>  
    </div>
  )
}

export default Newsitem