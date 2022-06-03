import { Container, Row, Col } from "reactstrap"
import { ContainerReact } from "./styled"

export const Footer = () => {
    return (
        <ContainerReact>
            <Container>
                <Row className="teste">
                    <Col className="texto-footer">
                        Av.Expediocionário Osvaldo de Almeida <br />
                        Ramos, nº 280, Centro Vassouras/RJ <br />
                        CEP: 27700-000
                    </Col>
                    <Col className="texto-footer">
                        (25) 2471-8200
                    </Col>
                    <Col className="texto-footer">
                        Horário de Funcionamento<br />
                        Segunda a sexta: 8h às 12h e 14h às 22h <br />
                        Sábados: das 8h às 12h.
                    </Col> 
                </Row>
            </Container>
        </ContainerReact>
    )
}