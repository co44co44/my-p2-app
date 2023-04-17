import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

function Home() {
  
  return(
    <div style={{background: "black" }}>
     
      <Container id= "videos-container">
        <h2 style={{ color: "pink", fontweight: "bold" }}>
          Why Programming is important? 
        </h2>

      <div className="ratio ratio-21x9">
        <iframe src= "https://www.youtube.com/embed/Dv7gLpW91DM" 
        title="YouTube video" allowFullScreen> 
        </iframe>
      </div>

      <br></br>
      <h2 style={{ color: "pink" }} >What is Coding?</h2>
        <div className="ratio ratio-21x9">
          <iframe src="https://www.youtube.com/embed/g1J4181W8ss" 
          title="YouTube video" allowFullScreen> 
          </iframe>
        </div>

      </Container>
      
      
    </div>
  )
}

  export default Home;

