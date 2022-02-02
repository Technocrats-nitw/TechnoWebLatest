import React from "react";
import { Container } from "../assets/styles/filter-button";
import '../assets/styles/filter-button.ts';

export function Button({button, filter}:any){
    return(
        <Container>
            <div className="buttons">
            {
                button.map((skill:any, i:any) =>{
                    return <button type="button" onClick={() => filter(skill)} className="filter-button">{skill}</button>
                })
            }
        </div>
        </Container>
        
    )
}

export default Button;