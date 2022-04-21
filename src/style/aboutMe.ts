import styled from "styled-components";
import { Description, SubTitle } from "./home";


export const ContainerAboutMe = styled.div`
    display: flex;
    gap:30px;
    padding: 0px 40px;
`

export const TitleAboutMe = styled(SubTitle)`
    justify-content: start;
`;

export const TextAboutMe = styled(Description)`
    font-weight: 400;
`;