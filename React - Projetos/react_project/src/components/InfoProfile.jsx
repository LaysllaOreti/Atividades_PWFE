import React from "react";

export default function InfoProfile(props) {
  return (
    <div className="info">

      {/* mostra o nome do usuário */}
      <h2>{props.nome}</h2>

      {/* lista com os detalhes do perfil do personagem */}
      <ul>
        <li><strong>Data de Nascimento:</strong> {props.nascimento}</li>
        <li><strong>Cidade Natal:</strong> {props.cidade}</li>
        <li><strong>Profissão:</strong> {props.profissao}</li>
        <li><strong>Origem:</strong> {props.origem}</li>
      </ul>
      
      {/* descrição do personagem */}
      <p>{props.descricao}</p>
    </div>
  );
}
