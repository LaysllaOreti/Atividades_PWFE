import React from "react";
import InfoProfile from "./InfoProfile";
import ImageProfile from "./ImageProfile";

export default function Card({ nome, nascimento, cidade, profissao, origem, descricao, imagem }) {
  return (
    <div className="card">
      <ImageProfile url={imagem} alt={nome} />
      <InfoProfile 
        nome={nome} 
        nascimento={nascimento} 
        cidade={cidade} 
        profissao={profissao} 
        origem={origem} 
        descricao={descricao} 
      />
    </div>
  );
}
