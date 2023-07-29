import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Contact = () => {
  return (
    <div className='kontak'>
        <Container className="text-white text-right">
                <Row>
                    <Col id='kontak'>
                    <Container className="text-white text-center">
                        <div className="tittle4">KONTAK</div>
                        <p></p>
                    </Container>
                    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h3>WhatsApp</h3>
          <p>081215237178</p>
        </div>
        <div className="col-md-4">
          <h3>Email</h3>
          <p>valvinced@gmail.com</p>
        </div>
        <div className="col-md-4">
          <h3>Lokasi :</h3>
          <p>Jl. Bobosan No 45, Karangjambu, Purwanegara, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah, 531127</p>
        </div>
      </div>
    </div>
    </Col>
    </Row>
    </Container>
    </div>
);
};

export default Contact