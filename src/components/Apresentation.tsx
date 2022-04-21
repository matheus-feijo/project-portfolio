import React from "react"
import {Title,SubTitle,Description,ContainerApresentation,Perfil} from "../style/home"
import perfil from "../assets/perfil.jpg"

export function Apresentation(){
    return(
        <ContainerApresentation>
            <Title>Ola meu nome e matheus feijo</Title>
            <SubTitle>Desenvolvedor</SubTitle>
            <Description>Sou um desenvolvedor em busca do aprendizado sempre</Description>
            <div style={{
                        display:"flex",
                        justifyContent:"center",
            }}>
                <Perfil src={perfil} alt="matheus feijo"></Perfil>
            </div>
        </ContainerApresentation>
    )
}