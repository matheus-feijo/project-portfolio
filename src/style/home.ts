import styled from "styled-components";


export const Container = styled.header`
    background-color:#212529;
    width: 100%;
`;

export const HeaderHome = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 30px;
    justify-content: space-between;
`

export const HireMe = styled.button`
    background-color: #FFB742;
    padding: 10px;
    font: 700 16px 'Poppins';
    border: 2px solid #FFB742;
    box-sizing: border-box;
    border-radius: 50px;
    cursor:pointer;
`

export const ButtonsHeader = styled.button`
    background: transparent;
    font: bold 18px "Poppins";
    border: none;
    cursor: pointer;
    color: #ffff;

    :hover{
        color: #FFB742;
    }
`

export const ContainerButtons = styled.div`
    gap: 10px;
    display: flex;
`

export const ContainerApresentation = styled.div`
    padding: 50px 0px;
    
`

export const Title = styled.p`
    color: #ffff;
    font: bold 26px "Roboto";
    display: flex;
    justify-content: center;
`

export const SubTitle = styled(Title)`
    font: bold 38px "roboto";
    margin-top: 0px;
`

export const Description = styled(Title)`
    font: bold 21px "Roboto";
`

export const Perfil = styled.img`
    border-radius: 999px;
    width: 120px;
`

