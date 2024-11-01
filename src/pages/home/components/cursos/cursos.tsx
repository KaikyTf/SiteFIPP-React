import { useState } from "react"
import { CursoWrapper, TipoCurso, TiposWrapper, Title, Wrapper, Image, View, NomeCurso } from "./cursos.styles";
import graduacao from "../../../../assets/images/graduacao.png"
import tecnologo from "../../../../assets/images/tec.png"
import pos from "../../../../assets/images/pos.png"
export const Cursos = () => {
    const [tipo, setTipo] = useState(0);
    console.log(tipo);

    return(
        <>
            <Title>Cursos</Title>
            <Wrapper>
                <TiposWrapper>
                    <TipoCurso onClick={() => setTipo(0)}>Bacharelado</TipoCurso>
                    <TipoCurso onClick={() => setTipo(1)}>Tecnólogo</TipoCurso>
                    <TipoCurso onClick={() => setTipo(2)}>Pós-graduação</TipoCurso>
                </TiposWrapper>
                {
                    tipo === 0 && (
                        <CursoWrapper>
                            <Image src={graduacao} />
                            <View>
                                <NomeCurso>Ciência da Computação</NomeCurso>
                                <NomeCurso>Sistemas da informação</NomeCurso>
                            </View>
                        </CursoWrapper>
                    )
                }
                {
                    tipo === 1 && (
                        <CursoWrapper>
                            <Image src={tecnologo} />
                            <View>
                                <NomeCurso>Análise e Desenvolvimento de Sistemas</NomeCurso>
                                <NomeCurso>Redes de Computadores</NomeCurso>
                            </View>
                        </CursoWrapper>
                    )    
                }
                {
                    tipo === 2 && (
                        <CursoWrapper>
                            <Image src={pos} />
                            <View>
                                <NomeCurso>Data Science</NomeCurso>
                                <NomeCurso>Desenvolvimento e Aplicações Web</NomeCurso>
                            </View>
                        </CursoWrapper>
                    )    
                }
            </Wrapper>
        </>
    )
}