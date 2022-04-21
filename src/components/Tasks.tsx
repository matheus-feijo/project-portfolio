import React from "react";
import { MoreDetails, Paragraph, ParagraphDescribe, SkillArea } from "../style/tasks";

type CardProps={
    quantidade:string,
    describe:string
}

export function Tasks(){


    const Cards = (props:CardProps) =>{
        return(
            <SkillArea>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{
                    paddingLeft:"15px"
                }}>
                    <circle cx="32" cy="32" r="32" fill="#E9E9E9"/>
                    <rect x="12" y="12" width="40" height="40" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_6_24" transform="scale(0.015625)"/>
                    </pattern>
                    <image id="image0_6_24" width="64" height="64" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                </svg>
                <div style={{
                    display: "block",
                    height: "100%",
                    padding:"10px 25px",
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent:"center",
                    }}>
                        <Paragraph>{props.quantidade}</Paragraph>
                    </div>
                    <ParagraphDescribe>{props.describe}</ParagraphDescribe>
                </div>

                <div style={{
                    paddingRight:10
                }}>
                    <MoreDetails>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16301 4.51605C9.58101 4.92405 13.665 9.21105 13.665 9.21105C13.7709 9.31319 13.855 9.4356 13.9126 9.57099C13.9701 9.70638 13.9997 9.85196 13.9997 9.99905C13.9997 10.1461 13.9701 10.2917 13.9126 10.4271C13.855 10.5625 13.7709 10.6849 13.665 10.7871C13.665 10.7871 9.58101 15.0761 9.16301 15.4821C8.74501 15.8901 7.99301 15.9181 7.54801 15.4821C7.10201 15.0481 7.06701 14.4411 7.54801 13.9081L11.295 10.0001L7.54801 6.09205C7.06701 5.55905 7.10201 4.95105 7.54801 4.51605C7.99301 4.08005 8.74501 4.10705 9.16301 4.51605Z" fill="#B3B3B3"/>
                    </svg>

                    </MoreDetails>
                </div>

            </SkillArea>
        )
    }


    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap:"5px",
            paddingBottom:"50px",
        }}>
            <Cards quantidade={"+1"} describe={"Years of experience"}/>  
            <Cards quantidade={"10+"} describe={"completed projects"}/>  
            <Cards quantidade={"50+"} describe={"happy clients"}/>
                    
            
        </div>
    )
}