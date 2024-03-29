import React, { Component } from 'react';
import Particles from 'react-particles-js';

const particleOpt = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1500
      }
    },
    color: {
      value: '#010101'
    },
    line_linked: {
      enable: true,
      opacity: 0.02
    },
    move: {
      direction: 'right',
      speed: 0.05
    },
    size: {
      value: 1
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05
      }
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: 'push'
      }
    },
    modes: {
      push: {
        particles_nb: 1
      }
    }
  },
  retina_detect: true
};

export default class ParticleBG extends Component {
  render() {
    return (
      <div className='canvas'>
        <Particles params={particleOpt} />
      </div>
    );
  }
}
