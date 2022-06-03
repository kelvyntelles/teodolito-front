import { Col, Container, Row } from "reactstrap";
import { ContainerReact } from "./style";

export const About = () => {
    return (
        <ContainerReact>
            <h1>Quem Somos</h1>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} className="border texto text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam error sed sint illum. Exercitationem perspiciatis quo ipsa. Ducimus recusandae quia voluptas perspiciatis veritatis soluta nulla dolor cum deleniti, est nostrum?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aperiam assumenda eaque, accusantium laborum, eos alias minima numquam aliquid mollitia sint iste. Soluta labore dignissimos suscipit minima quae, id similique.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus distinctio vero accusantium odit amet ipsum sit beatae quas, debitis omnis nobis rem doloremque maiores laboriosam voluptates. Fugit iste saepe minus.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus dolore qui, repudiandae in ut recusandae nesciunt similique aspernatur porro laborum, deleniti itaque eligendi accusamus autem velit neque consequuntur aut tempore.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, obcaecati commodi nihil dolore corporis dicta laborum perspiciatis. A laborum voluptatum, optio illo, distinctio corporis tempore nam vitae magni reprehenderit sunt.
                    </Col>
                    <Col className="border texto">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi odio mollitia reprehenderit facilis quidem ratione dolores eveniet, et nihil esse debitis molestiae dicta officiis ex aliquid. Expedita fugiat excepturi officia?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod vero ex dicta molestiae fuga doloribus, atque rem aliquam excepturi praesentium eum eligendi vel repellendus dolore officia fugiat, sequi ullam quia.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi ratione, quaerat harum vitae veniam incidunt tempore suscipit beatae? Ratione nemo temporibus odit pariatur harum. At soluta doloremque voluptatibus ad.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, sint? Assumenda tenetur quibusdam maxime optio ut numquam architecto asperiores suscipit ab natus tempore incidunt hic modi eum, quidem voluptates provident.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae dolorem cumque. Molestias est inventore dolor totam sunt, soluta autem quisquam ad assumenda reprehenderit nihil, necessitatibus voluptate voluptates nam! Odio?
                    </Col>
                </Row>
            </Container>
        </ContainerReact>
    );
}