import { Container } from "./style"

interface Cliente {
    nomeCliente: string;
    depoimentoCliente: string;
}

export const TerminialClient = (props:Cliente) => {
    return (
        <Container>
            <div className="area-photo">
                <img className="photo-client" src="./assets/perfil.jpg"/>
                
            </div>
            <div className="name-client">
                <a>{props.nomeCliente}</a>
            </div>
            <p>
                {props.depoimentoCliente}
            </p>
        </Container>
    )
}