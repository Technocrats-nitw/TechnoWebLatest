import React from "react";
import ScrollAnimation from "react-animate-on-scroll"
import './styles/testimonial.css'

function TestimonialCards(props:any){
    const direction = props.direction;
    var behavior = "testimonial-quote group";
    var fadeDir = "fadeInLeft";
    if(direction == 'right'){
        behavior += " right";
        fadeDir = "fadeInRight";
    }
    return(
        <>
            <ScrollAnimation animateIn={fadeDir} delay={0.15 * 1000} animateOnce={true}>
            <div className={behavior}>
                <img src={props.img}/>
                <div className="quote-container">
                    <blockquote>
                        <p>{props.testimonial}”</p>
                    </blockquote>  
                    <cite><span>{props.name}</span><br/>
                        {props.title}<br/>
                        {props.college}
                    </cite>
                </div>
            </div>    
            </ScrollAnimation>
            <hr style={{margin: '60px auto', opacity: '.5'}}></hr>
        </>
        )
    
}

export default TestimonialCards;