import React from 'react';
import './App.css';

function App({ imageUrl }) {
  return (
    <div className="App">
      {/* Navigation */}
      <nav>
  <div className="container">
    <div className="itc">
      <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/ITClogoWhite.png" style={{ width: '200px', height: 'auto', backgroundPosition: 'left'}} alt="ITC Logo" />
      <img src="https://www.biospectrumindia.com/uploads/articles/iit_bombay_website-9373.jpg" style={{ width: '300px', height: 'auto', backgroundPosition: 'right', float: 'right' }} alt="" />
    </div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#TECH TEAM">Tech Team</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>


      {/* Content */}
      <div className='icebox'>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="container">
            <h2>HOW TO JOIN </h2>
            <p>There is no ‘formal’ way to join a club. You can go and participate in activities and events of any club. You will receive information about these via webmail. These activities are organized by the managers and conveners of respective clubs. In order to become a part of the council, you can take part in the recruitments that happen every year. To join the technical teams, you can participate in the respective teams’ year around recruitments. More information will again be shared via webmail.). </p>
            <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/output-onlinepngtools.png" style={{ width: '1250px', height: '500px' }} alt="ITC Logo" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <h2>About Us</h2>
            <p>The ‘T’ of IIT Bombay is right here
              The Institute Technical Council caters to the needs for everything related to tech happening in the institute. Student Tech is one of the pillars of IIT Bombay, which fosters a culture of motivating young minds to pursue innovative ideas. We make sure that your ideas are heard and help you turn these ideas into reality in every way possible.</p>
            {/* Image added below the text */}
          </div>
        </section>

        <section id="TECH TEAM" className="TECH TEAM">
          <h2 style={{ textAlign: 'center', color:'red' }}>TECH TEAM</h2>
          <div className="container">
            <div className="team-images">
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/auv.jpg"        style={{ width: '250px', height: 'auto' }} alt="AUV" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/ssp.jpg"        style={{ width: '250px', height: 'auto' }} alt="SSP" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/racing.jpg"     style={{ width: '250px', height: 'auto' }} alt="Racing" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/mars.png"       style={{ width: '250px', height: 'auto' }} alt="Mars" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/umic.png"       style={{ width: '250px', height: 'auto' }} alt="UMIC" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/exofly.jpg"     style={{ width: '250px', height: 'auto' }} alt="Exofly" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/shunya.jpg"     style={{ width: '250px', height: 'auto' }} alt="Shunya" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/stride.jpg"     style={{ width: '250px', height: 'auto' }} alt="Stride" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/waste.jpg"      style={{ width: '250px', height: 'auto' }}alt="Waste" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/rakshak.png"    style={{ width: '250px', height: 'auto' }} alt="Rakshak" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/hyperloop.jpg"  style={{ width: '250px', height: 'auto' }} alt="Hyperloop" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/spart.jpeg"     style={{ width: '250px', height: 'auto' }} alt="Spart" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/rocket.jpg"     style={{ width: '250px', height: 'auto' }} alt="Rocket" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="team">
          <h2 style={{ textAlign: 'center', color:'red' }}>Our Team Member</h2>
          <div className="container">
            <div className="team-images">
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/core_team2022.png"                  style={{ width: '1250px', height: '900px' }}alt="Core Team" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/Aero.png"           style={{ width: '250px', height: 'auto' }} alt="Aero" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/Biox.png"           style={{ width: '250px', height: 'auto' }} alt="Biox" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/ERC.png"            style={{ width: '250px', height: 'auto' }}alt="ERC" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/Krittika%20(1).png" style={{ width: '250px', height: 'auto' }}alt="Krittika" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/MnP.png"            style={{ width: '250px', height: 'auto' }}alt="MnP" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/WnCC.png"           style={{ width: '250px', height: 'auto' }}alt="WnCC" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/TL.png"             style={{ width: '250px', height: 'auto' }}alt="TL" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/ChemETL.png"        style={{ width: '250px', height: 'auto' }} alt="ChemETL" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/team_web.png"       style={{ width: '250px', height: 'auto' }} alt="Web Team" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/team_design.png"    style={{ width: '250px', height: 'auto' }} alt="Design Team" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/team-media.png"     style={{ width: '250px', height: 'auto' }} alt="Media Team" />
              <img src="https://itc.gymkhana.iitb.ac.in/static/mainwebsite/images/team-poster2022/pg_team_poster.png" style={{ width: '250px', height: 'auto' }} alt="PG Team" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2 style={{ textAlign: 'center', color:'red' }}>Contact Us</h2>
          <div className="container">
            <p>Have any questions or suggestions? Feel free to reach out to us via email or social media.</p>
            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="https://www.facebook.com/tech.iitb" target="_blank" rel="noopener noreferrer"><img src="https://www.freeiconspng.com/uploads/facebook-logo-png--impending-10.png" alt="Facebook" /></a>
              <a href="https://www.instagram.com/tech.iitb" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt="Instagram" /></a>
              <a href="https://twitter.com/tech_iitb" target="_blank" rel="noopener noreferrer"><img src="https://cdn1.iconfinder.com/data/icons/social-links/410/twitter-256.png" alt="Twitter" /></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
