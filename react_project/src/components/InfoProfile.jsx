import React from "react";

export default function InfoProfile({ nome, nascimento, cidade, profissao, origem, descricao }) {
  return (
    <div className="info">
      <h2>{nome}</h2>
      <ul>
        <li><strong>Data de Nascimento:</strong> {nascimento}</li>
        <li><strong>Cidade Natal:</strong> {cidade}</li>
        <li><strong>Profissão:</strong> {profissao}</li>
        <li><strong>Origem:</strong> {origem}</li>
      </ul>
      
      <p>{descricao}</p>
    </div>
  );
}
