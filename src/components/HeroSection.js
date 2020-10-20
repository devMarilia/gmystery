import React from 'react';
import '../App.css';
import { Button } from './Button';
import '../components/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Mulheres no Produto</h1>
      <p>Conheça nossos serviços!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          INICIAR
        </Button>
        {/*<Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        > 
          Veja Mais <i className='far fa-play-circle' /> 
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;