import React, { useState } from 'react'
import { getPieChart } from '../jsons/piechart';
import { getPlotChart } from '../jsons/plotChart';
import Charts from '../components/Charts';
import { Container, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
    
  return (
    <div >
        <Container>
            <Row xs={2}>
                <Col><Charts options={getPieChart} /></Col>
                <Col> <Charts options={getPlotChart} /></Col>
            </Row>
        </Container>
        
        
    </div>
  )
}
