import React from "react";
import { achievements } from "../constants/achievements";
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getConfigurableProps } from '../constants/config'

export function Achievements(){
    if( achievements.length === 0 ) return <></>
    return (
    <>
    <h2 className="headings">Achievements</h2>
    <Carousel {...getConfigurableProps()}>
        {achievements.map((item:any) => {
          return (<div>
            <img alt="" src={item.url}/>
            <p className="legend">{item.caption}</p>
          </div>)
        })}                
      </Carousel>
    </>
    )
}