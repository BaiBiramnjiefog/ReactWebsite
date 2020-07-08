import React from 'react'

import { Button, Card, Container } from 'react-bootstrap'
import './index.css'

import VideoBackground from './components/videocover'



export const About = () => (
  <container class="mighty">
  <container class="about">
    
      <VideoBackground>

      </VideoBackground>
  
 
 
     <Container class="test">
     <Card style={{ width: '20rem',position:'absolute',color:'white',background:'black' }}>
  <Card.Body>
    <Card.Title>The Gambia</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">The Smiling Coast Of Africa</Card.Subtitle>
    <Card.Text>
    The Gambia is one of Africa's smallest countries
    </Card.Text>
    <Card.Link href="https://www.youtube.com/watch?v=xQYScZzbd1E">Watch A Brief Video</Card.Link>
    <Card.Link href="./about.js">Learn More</Card.Link>
  </Card.Body>
</Card>
</Container>
     </container>
     </container>
     
)
export default Button;