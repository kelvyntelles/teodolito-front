import { BottonLogin, BottonNavbar, Container, Navbar } from "./style";

export const Header = () => {
    return (
        <Container>
            <Navbar>
                Logo
                <BottonNavbar>Quem Somos</BottonNavbar>
                <BottonNavbar>Clientes</BottonNavbar>
                <BottonNavbar>Contato</BottonNavbar>
            </Navbar>
            <BottonLogin>
                Login
            </BottonLogin>
        </Container>
    );
}
