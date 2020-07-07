import React from 'react';
import { Jumbotron as Jumbo, Container,} from 'react-bootstrap';
import styled from 'styled-components';
import Gambia from '../dist/Gambia.jpg'
import './videocover'
import './jumbotron.css'
import './button'
import '../index.css'
import '../NoMatch.js'

const Styles = styled.div`
  .jumbo {
    background: url(${Gambia}) no-repeat fixed bottom;
    background-size: cover;
    box-sizing: border-box;
    padding:8px, 16px;
    color: #efefef;
    position: absolute;
    height: 800px;
   
    display: flex !important;
    flex-basis: auto;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  
  
`;


export const Jumbotron = () => (
  <Styles>
   
    <Jumbo fluid className="jumbo">
    <div id="root"></div>
      <div className="overlay"></div>
      <Container>
        <h1>Welcome To The Gambia</h1>
        <p>The Smiling Coast Of Africa</p>               
      </Container>
      </Jumbo>
  </Styles>
  
)
