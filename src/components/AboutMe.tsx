import React from "react";
import person from "../assets/person.png"
import { ContainerAboutMe, TextAboutMe, TitleAboutMe } from "../style/aboutMe";

export function AboutMe(){

    return(
        <ContainerAboutMe>
            <img src={person} alt={"pessoa de exemplo"}  style={{width:"60%"}}/>

            <div style={{
                display:"block",
                textAlign:"justify",
                paddingTop:25
            }}>
                <TitleAboutMe>About Me</TitleAboutMe>
                <TextAboutMe>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus soluta maxime blanditiis. Itaque, nisi voluptates asperiores eaque sint est iste debitis quia, exercitationem, aliquid aperiam ad eius laboriosam veniam et?</TextAboutMe>
            </div>
            
        </ContainerAboutMe>
    )
}