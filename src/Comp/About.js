import { Col, Container, Row } from "react-bootstrap"
import putihh from './img/putihh.png'
import hitamm from './img/hitamm.png'

const About = () => {
    return (
        <div className="about">
            <Container className="text-white text-right">
                <Row>
                    <Col id="about">
                    <Container className="text-white text-center">
                        <div className="tittle2">TENTANG</div>
                        <p></p>
                    </Container>
                    <div className="imgbox">
                        <img src={hitamm}/>
                        <img src={putihh}/>
                    <div className="box">
                        <div className="textbox">
            <p>Anda tentu sudah tidak asing lagi dengan PlayStation.<p/>
                <p>Game konsol paling baru buatan Sony itu memang</p>
                <p>sukses menarik perhatian gamers. Selain membelinya,</p>
                <p>Anda pun bisa melakukan rental jika ingin bermain PS.</p>
                <p>Dengan syarat dan ketentuan berlaku.</p>
                <p>- KTP/BPJS/Kartu Pelajar.</p>
                <p>- Kerusakan dan kehilangan menjadi tanggung jawab</p>
                  <p>penyewa.</p>
                <p>- Jika segel rusak, maka dianggap membeli.</p>
                <p>- Dilarang memindah tangankan unit ke pihak lain.</p>
            </p>
            </div>
            </div>
            </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default About