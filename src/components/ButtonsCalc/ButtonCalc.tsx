
import { useState } from "react"
import { CSSTransition } from 'react-transition-group';

export interface ButtonParams {
    heightBtn: string
    widthBtn: string
    leftBtn: string
    topBtn: string
    valueBtn: string
    isHover:boolean
    props:any
  }
export function ButtonCalc({
    heightBtn,
    widthBtn,
    leftBtn,
    topBtn,
    valueBtn,
    isHover,
    props
}: ButtonParams){


    return(
        <button type='button' value={valueBtn}
            style={{
                position: "absolute",
                width: widthBtn,
                height: heightBtn,
                left: leftBtn,
                top: topBtn,

                background: isHover ? "#FFFFFF": "#F8F8F9",
                borderRadius: "8px",
                border: isHover ? "1px solid #BF271B" : ""
            }}
            onClick={() => props(!isHover)}>
            <p style={{
                fontFamily: "Raleway",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "120%",
                color: "#000000"
            }}>{valueBtn}</p>
        </button>
    )
}