import { ContainerReact } from "./style"
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap"

export const Banner = () => {
    return (
        <ContainerReact>
            <Card inverse>
                <CardImg
                alt="Card image cap"
                src="https://picsum.photos/318/270"
                width="100%"
                className="image"
                />
                <CardImgOverlay>
                <CardTitle className="titulo" tag="h1">
                    Teodolito online
                </CardTitle>
                <CardTitle className="sub-titulo" tag="h5">
                    Uma nova forma inovadora de fazer
                </CardTitle>
                </CardImgOverlay>
            </Card>
        </ContainerReact>
    )
}