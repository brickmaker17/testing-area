import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import Content from './Content';
import Backgrounds from './images/Background.png';
import Layer from './images/Layer.png';
import Layer1 from './images/Layer1.png';
import Layer2 from './images/Layer2.png';
import Layer3 from './images/Layer3.png';
import Layer4 from './images/Layer4.png';
import Layer5 from './images/Layer5.png';
import Layer6 from './images/Layer6.png';
import Layer7 from './images/Layer copy.png';
import LayerG from './images/LayerG.png';
import Moon from './images/Moon.png';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 260;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }

  render() {
    return (
      <div>
        <div className="parallaxLayer">
          <img src={Backgrounds} alt="" />
        </div>
        <div className="back">
          <img src={this.state.isTop ? `${Layer5}` : `${Moon}` } alt="" />
        </div>
        <div className="parallaxLayer parallaxLayer1">
          <img src={Layer4} alt="" />
        </div>
        <div className="parallaxLayer parallaxLayer1">
          <img src={Layer3} alt="" />
        </div>
        <div className="parallaxLayer parallaxLayer2">
          <img src={Layer2} alt="" />
        </div>
        <Parallax strength={600}>
          <Background>
            <div className="Heading">
              <div>
                <h1 className="name">Luke Barrett</h1>
                <h4 className="title">Web Developer</h4>
              </div>
            </div>
          </Background>
          <div className="parallaxLayer parallaxLayer3">
            <img src={Layer1} alt="" />
          </div>
          <Parallax strength={400}>
            <Background>
              <img className="cloud" src={Layer4} alt="" />
            </Background>
            <img src={Layer} alt="" />
          </Parallax>
        </Parallax>
        <Content />

      </div>
    );
  }
}

