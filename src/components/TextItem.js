import React from "react";
// import { FaAngleLeft }  from "react-icons/fa";
import './TextItem.css'



export default function TextItem() {
  return (
    <div className="container">
      
       {/* <div className="back" to="/"> 
        <FaAngleLeft />
       </div>  */}
      <div className="content">
        <div className="subConteiner">
          <h1>Sobre</h1>
          <h2>O mistério dos nossos códigos</h2>

          <div className="text">
          A <b>Mystery</b>, surgiu na mente de duas programadoras com filosofias bem parecidas,
          que se conheceram em fevereiro de 2020 em um curso de desenvolvimento de aplicativos Android, 
          dado por uma das empresas de maior reconhecimento atual. Na Av Paulista, elas se encontravam, 
          duas vezes na semana, para aprender, e consequentemente, acabaram tendo uma afinidade criada nos sofás 
          da Estação Hack. As coincidências eram enormes, Anna Caroline e a Marília residiam em Guarulhos, meses 
          de interação e amizade, tornou os interesses profissionais em algo real, com muita demanda por boas 
          aplicações em softwares, decidiram então juntar suas experiências e força de vontade, para apresentar uma 
          visão feminina e humanitária na área da tecnologia, com o intuito de mostrar que é possível trazer inovação, 
          acessibilidade, e qualidade de um bom desenvolvimento de um site  e aplicativo.
          </div>
        </div>
      </div>
    </div> 
  );
}