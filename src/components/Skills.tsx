import React from "react";
import { SkillArea } from "../style/home";

export function Skills(){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap:"5px",
            paddingBottom:"50px",
        }}>
            <SkillArea>
                <img></img>
                <p>+5</p>
                <p>Years of experience</p>

                <button></button>

            </SkillArea>
            <SkillArea></SkillArea>
            <SkillArea></SkillArea>
        </div>
    )
}