import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

function Home() {
   console.log ("home running")
  return(
    <div style={{background: "black" }}>
      <h1 style={{ color: "orange" }}>
      
      </h1>
      
      <Container id= "videos-container">
        <h1 
        style={{ color: "darkorange", fontweight: "bold" }}>
          Why Programming is important? 
        </h1>

      <div className="ratio ratio-21x9">
        <iframe src= "https://www.youtube.com/embed/Dv7gLpW91DM" 
        title="YouTube video" allowFullScreen> 
        </iframe>
      </div>
      <br></br>
      <h1 style={{ color: "orange" }} >What is Coding?</h1>
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

