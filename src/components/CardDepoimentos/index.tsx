import { ContainerReact } from "./style"

import { 
    Card, 
    CardBody,
    CardTitle,
    CardText,
    CardImg
} from "reactstrap";

interface DepoimentoCliente {
    nomeCliente: string,
    depoimento: string
}

export const CardDepoimentos = (props: DepoimentoCliente) => {
    return (
        <ContainerReact>
            <Card className="card-teste">
                <CardImg className="imagem" 
                    alt="foto de perfil"
                    src="https://picsum.photos/318/180"
                    top
                />
                <CardBody>
                <CardTitle className="nome" tag="h5">
                    {props.nomeCliente}
                </CardTitle>
                <CardText>
                    {props.depoimento}
                </CardText>
                </CardBody>
            </Card>
        </ContainerReact>
    )
}