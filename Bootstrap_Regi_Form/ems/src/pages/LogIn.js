import React from 'react';
import { LogInForm } from '../components/LogInForm';
import { Col, Row } from 'react-bootstrap'

export const LogIn = () => {
  return (
    <Row>
         <Col md={{ span: 3, offset: 4 }}>
        <LogInForm/>
        </Col>
    </Row>
  )
}
