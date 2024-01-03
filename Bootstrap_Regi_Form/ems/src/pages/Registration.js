import React from 'react'
import { RegistraionForm } from '../components/RegistraionForm'
import { Col, Row } from 'react-bootstrap'

export const Registration = () => {
  return (
    <Row>
         <Col md={{ span: 3, offset: 4 }}>
        <RegistraionForm/>
        </Col>
    </Row>
  )
}
