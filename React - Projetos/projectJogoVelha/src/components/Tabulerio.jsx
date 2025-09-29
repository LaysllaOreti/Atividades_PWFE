import { useState } from "react";
import Quadrado from "./Quadrado";

export default function Tabuleiro(){
    
    const [quadrados, setQuadrados] = useState(Array(9).fill(null));
    const [xProximo, setXproximo] = useState(true);
    
    
    function handleClick(i){
        if(venceu || quadrados[i]){
            return;
        }
        
        const nextQuadrado = quadrados.slice();
        
        if (xProximo){
            //Começa com o X
            nextQuadrado[i]= "X";
        }else{
            nextQuadrado[i] = "O"
        }
        setQuadrados(nextQuadrado);
        setXproximo(!xProximo);
    }
    
    
    const venceu = vencedor(quadrados);
    
    let status;
    if (venceu){
        status = "Vencedor é: " + venceu;
    }else if (quadrados.includes(null)){
        status = "O próximo jogador é: " + (xProximo ? "X":"O")
    }else{
        status="VELHA";
    }
    
    return(
        <>
        <div className="tabuleiro">
        <div id="titulo">{status}</div>
        <div className="linha">
        <Quadrado value={quadrados[0]} onQuadrado ={()=> handleClick(0)}/>
        <Quadrado value={quadrados[1]} onQuadrado ={()=> handleClick(1)}/>
        <Quadrado value={quadrados[2]} onQuadrado ={()=> handleClick(2)}/>
        </div>
        <div className="linha">
        <Quadrado value={quadrados[3]} onQuadrado ={()=> handleClick(3)}/>
        <Quadrado value={quadrados[4]} onQuadrado ={()=> handleClick(4)}/>
        <Quadrado value={quadrados[5]} onQuadrado ={()=> handleClick(5)}/>
        </div>
        <div className="linha">
        <Quadrado value={quadrados[6]} onQuadrado ={()=> handleClick(6)}/>
        <Quadrado value={quadrados[7]} onQuadrado ={()=> handleClick(7)}/>
        <Quadrado value={quadrados[8]} onQuadrado ={()=> handleClick(8)}/>
        </div>
        </div>
        </>
    )
    
    function vencedor(quadrados){
        const linhas = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < linhas.length; i++){
            const [a,b,c] = linhas[i];
            if (quadrados [a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]){
                return quadrados[a];
            }
        }
        
        return null;
    }
}