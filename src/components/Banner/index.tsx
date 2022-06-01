import { Container } from "./style"

export const Banner = () => {
    return (
        <Container>
            <div className="image">
                <div className="text">
                    <a className="titulo">Teodolito online</a>
                    <br />
                    <a className="sub-titulo">Uma forma inivadora de fazer</a>
                </div>
            </div>
        </Container>
    )
}