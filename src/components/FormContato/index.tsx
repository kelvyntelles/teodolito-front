import { Container } from "./style"
import { 
    Button, 
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

export const FormularioContato = () => {
    return (
        <Container>
            <div className="area-titulo">
                <h1>Contato</h1>
            </div>
            
            <div className="area-form">
                <Form>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label>
                                Nome
                            </Label>
                            <Input
                            name="nome"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label>
                                Sobrenome
                            </Label>
                            <Input
                            name="sobrenome"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label>
                                Email
                            </Label>
                            <Input
                            name="email"
                            type="email"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label>
                                Telefone
                            </Label>
                            <Input
                            name="telefone"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={9}>
                        <FormGroup>
                            <Label>
                                Endereço
                            </Label>
                            <Input
                            name="endereco"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={3}>
                        <FormGroup>
                            <Label>
                                Complemento
                            </Label>
                            <Input
                            name="complemento"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <FormGroup>
                            <Label>
                                Cidade
                            </Label>
                            <Input
                            name="cidade"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={3}>
                        <FormGroup>
                            <Label>
                                Estado
                            </Label>
                            <Input
                            name="estado"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                        <Col md={3}>
                        <FormGroup>
                            <Label>
                                CEP
                            </Label>
                            <Input
                            name="cep"
                            type="text"
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleText">
                            Descrição da Solicitação 
                        </Label>
                        <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Input
                        id="exampleCheck"
                        name="check"
                        type="checkbox"
                        />
                        <Label
                        check
                        for="exampleCheck"
                        >
                        Aceito os termos e condições
                        </Label>
                    </FormGroup>
                    <Button className="botao-enviar">
                        Enviar
                    </Button>
                </Form>
            </div>
        </Container>
    )
}