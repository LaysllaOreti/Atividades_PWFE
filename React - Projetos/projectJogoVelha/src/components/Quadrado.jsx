// cuida dos estados do botões e dos outros componentes;função do React que funciona por meio dos estados;
import { useState } from "react"

export default function Quadrado({value, onQuadrado}){
    
    return <button className="quadrado" onClick={onQuadrado}>
    {value}</button>
}