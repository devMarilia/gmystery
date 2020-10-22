import React from 'react'
import './Products.css'

function Products() {
    return (
        <div className="container">
            <div className="content">
                <img
                 src='images/code.png'
                />
                <div className="subContainer">
                <h2>Missão</h2>
                <p> A Mystery acredita que as oportunidades precisam chegar ao máximo de pessoas
                possíves, por este motivo, nossa proposta é trazer o benefício de um software moderno, 
                com um preço acessível. </p>
                 <h2>Visão</h2>
                 <p>Nós entendemos que a tecnologia detem o poder de  alcançar vidas que antes 
                     não tinham poder de escolha social trazendo novas perspectivas para essas 
                     pessoas serem capazes de sonhar e escrever o próprio futuro, por esta razão 
                     nosso objetivo é proporcionar uma integração entre o empreendedor e seu cliente,
                     atendendo assim, a sua necessidade de ser entendido pelo usuário final e a 
                     oportunidade de estar fazendo parte da modernidade e expandindo assim seus negócios.</p>
                 <h2>Valores</h2>
                 <p> Para nós da Mystery, a evolução começa dentro da gente mesmo, interagimos 
                     com nossos clientes da forma mais humana e compreensiva possível, os fazemos crer 
                     que ele é capaz de escrever linhas de códigos, tão reais quanto as que desenvolvemos, sendo
                     ele o responsável pelo brilhante software que desejou.  
                           </p>
                </div>  
            </div>
        </div>
    )
}

export default Products