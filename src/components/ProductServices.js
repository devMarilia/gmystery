import React from 'react'
import './ProductServices.css'
                        

function ProductServices() {
    return (
    <div className="containerContent">

        <h1>Serviços</h1>
        <div className="subContent">
            <div className="subContainer">
                <h2>Qualdade</h2>
                <p>Com a expansão dos dispositivos móveis, a demanda por tornar as plataformas digitais mais qualificadas para receber os internautas, vem crescendo consideravelmente,  melhorar a interação desses serviços com o cliente é a proposta da Mystery. 
                    Veja o que oferecemos:
              
                </p>
            </div>  
        </div>

        <div className="content">
            <div className="subContainer">
                <h2>Sites responsivos</h2>
                <p>
                 Sites que se adaptam a diferentes tipos de aparelhos, sejam eles aparelhos móveis ou web.<br/><br/>

                    Aplicativos:  Android, IOS, Nativos.<br/><br/>
                    Acessibilidade: A internet deve ser para todas as pessoas, seja para alguém com deficiência física ou para alguém que apenas 
                    quebrou um dedinho, tornar o acesso descomplicado, é responsável.<br/><br/>

                    Funcionalidade: Trazemos as melhores funcionalidades que um software moderno pode proporcionar,  otimização para motores de busca, layout clean, integração com as redes socias e muito mais.
                </p>
            </div> 
            <img className="imgSvg"
             src='images/svg-4.svg'
            /> 
        </div>
    
    </div>
    )
}

export default ProductServices