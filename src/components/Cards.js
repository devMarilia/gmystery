import React from 'react';
import './Cards.css';
import CardItem from '../components/CardsItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Conheça nossos serviços!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/product.jpeg'
              text='Criamos sites PROFISSIONAIS que geram RESULTADOS!'
              label='Web Design Responsivo'
              path='/about'
            />
            <CardItem
              src='images/product1.jpeg'
              text='Somos uma agência digital especializada em
              e-commerces e marcas inovadoras.'
              label='Marketing digital para sua empresa crescer.'
              path='/about'
            />
          </ul>
          <h1>Programadoras</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/liaaa.jpeg'
              text='Front-end'
              label='Lia'
              path='/about'
            />
            <CardItem
              src='images/anna.jpeg'
              text='Back-end'
              label='Anna'
              path='/about'
            />
            <CardItem
              src='images/wemilly.jpeg'
              text='Design'
              label='Wemilly'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;