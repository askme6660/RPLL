import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
  const handleScroll = () => {
    const element = document.getElementById('price');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
        <div className='intro'>
        <Container className='text-white text-center'>
          <Row>
            <Col>
            <div className='tittle'>Bingung ngapain dirumah?</div>
            <div className='tittle'>Mending kamu sewa PlayStation di</div>
            <div className='tittle'>GiessaGame Store Center</div>
            <div className='sewa mt-5 text-center'>
            <Button variant='outline-danger' onClick={handleScroll}>Sewa Sekarang !</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro