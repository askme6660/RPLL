import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Price = () => {
    const handleWhatsAppRedirect = () => {
        // Replace 'your_phone_number' with the actual phone number you want to redirect to
        const phoneNumber = '6281315473098';
        window.location.href = `https://wa.me/${phoneNumber}`;
      };
    return (
        <div className='cardbox'>
                <Row>
                    <Container className='text-white text-center'>
                        <div className='tittle3' id='price'>HARGA</div>
                        </Container>
                    <Col className='sewaps'>
        <Card className="text-center">
      <Card.Header>SEWA PS</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
        <ListGroup.Item>PS 2    25K/Hari</ListGroup.Item>
        <ListGroup.Item>PS 3    40K/Hari</ListGroup.Item>
        <ListGroup.Item>PS 4    80K/Hari</ListGroup.Item>
      </ListGroup>
      </Card.Body>
      <Button variant="danger" onClick={handleWhatsAppRedirect}>Sewa !</Button>
    </Card>
    </Col>

    <Col className='belips'>
        <Card className="text-center">
      <Card.Header>JUAL PS & AKSESORIS</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
        <ListGroup.Item>PS 2    500K</ListGroup.Item>
        <ListGroup.Item>PS 3    1500K</ListGroup.Item>
        <ListGroup.Item>PS 4    4000K</ListGroup.Item>
        <ListGroup.Item>Stik    50K-800K</ListGroup.Item>
        <ListGroup.Item>HDMI    50K</ListGroup.Item>
        <ListGroup.Item>Hardisk 150K</ListGroup.Item>
      </ListGroup>
      </Card.Body>
      <Button variant="danger" onClick={handleWhatsAppRedirect}>Beli !</Button>
    </Card>
    </Col>

    <Col className='game'>
        <Card className="text-center">
      <Card.Header>ISI GAME</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
        <ListGroup.Item>PS 2    15K-100K</ListGroup.Item>
        <ListGroup.Item>PS 3    50K-150K</ListGroup.Item>
        <ListGroup.Item>PS 4    75K-200K</ListGroup.Item>
      </ListGroup>
      </Card.Body>
      <Button variant="danger" onClick={handleWhatsAppRedirect}>Isi !</Button>
    </Card>
    </Col>
    </Row>
    </div>
    )
}

export default Price