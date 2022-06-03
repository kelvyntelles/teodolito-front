import { Container } from "./style";
import { 
    Navbar, 
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    Button
} from "reactstrap";


export const Header = () => {
    return (
        <Container>
            <Navbar className="conteudo-header"
                dark
                expand="xs"
                light
            >
                <NavbarBrand href="/">
                Logo
                </NavbarBrand>
                <Collapse navbar>
                <Nav
                    className="me-auto"
                    navbar
                >
                    <NavItem>
                        <NavLink href="/">
                            Quem somos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">
                            Clientes
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">
                            Contato
                        </NavLink>
                    </NavItem>
                </Nav>
                <Button
                    className="botao-login"
                    size="lg"
                >
                    Login
                </Button>
                </Collapse>
            </Navbar>            
        </Container>
    );
}
