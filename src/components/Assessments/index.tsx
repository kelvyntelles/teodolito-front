import { Container } from "./style"
import { TerminialClient } from "../TestminialClient"

export const Assessments = () => {
    return (
        <Container>
            <h1>Avaliações dos clientes</h1>
            <div className="depoimentos">
                <TerminialClient 
                    nomeCliente="Kelvyn Telles"
                    depoimentoCliente="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis luctus sem, eu consequat risus. Donec commodo mauris at nibh ullamcorper, nec condimentum eros fringilla. Aliquam porttitor metus pellentesque efficitur interdum. Mauris pulvinar fringilla consequat. Curabitur vitae fermentum orci, sed vulputate arcu. Maecenas mollis non tortor quis eleifend. Curabitur finibus auctor ultrices. Proin odio ipsum, dapibus id metus et, ultricies volutpat magna."
                />
                <TerminialClient 
                    nomeCliente="Breno Cocheto"
                    depoimentoCliente="Proin at lectus rhoncus, malesuada nulla at, porta nibh. Pellentesque pharetra cursus fringilla. Proin tempor, metus in placerat porttitor, elit velit placerat dui, at ullamcorper arcu nibh et metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis eget odio euismod leo mollis ornare. Morbi pharetra bibendum metus, sollicitudin interdum quam viverra sed. Nam maximus accumsan commodo. Nam accumsan lectus vel quam scelerisque, vel imperdiet tortor efficitur."
                />
            </div>
        </Container>
    )
}