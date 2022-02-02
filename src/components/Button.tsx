import React from "react";
import '../assets/styles/filter-button.css';

export function Button({button, filter}:any){
    return(
        <div className="buttons">
            {
                button.map((skill:any, i:any) =>{
                    return <button type="button" onClick={() => filter(skill)} className="filter-button">{skill}</button>
                })
            }
        </div>
    )
}

export default Button;