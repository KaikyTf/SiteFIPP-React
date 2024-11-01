import { Button, List, Nav, Wrapper, NavLink} from "./navbar.styles"
import logoFipp from "../../assets/images/logo-fipp.png"
import { ListItem, Image } from "./navbar.styles"
import logoUnoeste from "../../assets/images/logo-unoeste.png"
import { MobileNavbar } from "./mobile-navbar"

export const Navbar = () => {
    const openLink = () => {
        const url = "https://www.unoeste.br/"
        window.open(url, '_blank_');
    }
    return(
        <Wrapper>
            <Nav>
                <Image src={logoFipp} alt="Logo Fipp"/>
                <List>
                    <ListItem>
                        <NavLink to="/">Home</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/corpo-docente">Corpo-docente</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/contato">Contato</NavLink>
                    </ListItem>
                    <ListItem>
                        <Button onClick={openLink}><Image src={logoUnoeste} alt = "logounoeste"/></Button>
                    </ListItem>
                </List>
                <MobileNavbar />
            </Nav>
        </Wrapper>
    )
}