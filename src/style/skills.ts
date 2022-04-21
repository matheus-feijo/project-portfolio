import styled from "styled-components";
import { Description, Title } from "./home";


export const ContainerSkills = styled.div`
    padding: 100px 40px;
    display:flex;
    gap:10%;

`

export const TitleSkills = styled(Title)`
    justify-content: start;
    margin-top: 0px;
    font-size: 38px;
`;

export const DescribeSkills = styled(Description)`
    font: 400 21px "Roboto";
    text-align: justify;
`

export const ContainerIcons = styled.div`
    padding: 5px;
    background-color: rgba(56,62,69,0.44);
    border-radius: 5px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

`