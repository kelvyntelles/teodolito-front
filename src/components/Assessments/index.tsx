import { ContainerReact } from "./style"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CardDepoimentos } from "../CardDepoimentos";

export const Assessments = () => {
    return (
        <ContainerReact>
            <h1>Avaliações dos clientes</h1>
            <Carousel>
                <div className="conteudo">
                    <CardDepoimentos
                        nomeCliente="Kelvyn Telles"
                        depoimento="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dapibus euismod. Phasellus interdum mollis nulla, vitae feugiat enim volutpat sed. Cras id ex quis lectus commodo pharetra vitae non metus. Proin ante eros, blandit id tellus in, cursus viverra ipsum. Donec vel tellus interdum, vestibulum nunc ut, pulvinar diam. Donec laoreet lectus quis varius consectetur.
                        " 
                    />
                </div>
                <div className="conteudo">
                    <CardDepoimentos 
                        nomeCliente="Breno Cocheto"
                        depoimento="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dapibus euismod. Phasellus interdum mollis nulla, vitae feugiat enim volutpat sed. Cras id ex quis lectus commodo pharetra vitae non metus. Proin ante eros, blandit id tellus in, cursus viverra ipsum. Donec vel tellus interdum, vestibulum nunc ut, pulvinar diam. Donec laoreet lectus quis varius consectetur.
                        " 
                    />
                </div>
                <div className="conteudo">
                    <CardDepoimentos 
                        nomeCliente="Rafael Torres"
                        depoimento="
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum dapibus euismod. Phasellus interdum mollis nulla, vitae feugiat enim volutpat sed. Cras id ex quis lectus commodo pharetra vitae non metus. Proin ante eros, blandit id tellus in, cursus viverra ipsum. Donec vel tellus interdum, vestibulum nunc ut, pulvinar diam. Donec laoreet lectus quis varius consectetur.
                        " 
                    />
                </div>
            </Carousel>
        </ContainerReact>
    )
}