import { CardContent } from "./card-content"
import { Wrapper, Title, SubTitle, Card, Message } from "./sobre-nos.styles";
import { CardType } from "./type"

export const SobreNos = () => {
    const cards : CardType[] = CardContent();

    return(
        <Wrapper>
            <Title>Sobre nós</Title>
            <SubTitle>FIPP - Faculdade de Informática de Presidente Prudente</SubTitle>
            {cards.map((card) => (
                <Card key={card.id}>
                    <Message>{card.message}</Message>
                </Card>
            ))}
        </Wrapper>
    )
}