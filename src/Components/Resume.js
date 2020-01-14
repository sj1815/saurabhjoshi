import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skills= this.props.data.skills.map(function(skills){
        var skillLogo = 'images/icons/'+skills.logo;
          return <div className = "skills-grid-item" key={skills.name}>
            <div className="skills-item-content">
              <img src ={skillLogo} alt = {skills.name}></img>
              <p>{skills.name}</p>
            </div>
          </div>
      });
    }

    return (
      <section id="resume"> 
        <h1>Coding Languages & Frameworks</h1>

        <div className = "tech-skills-container">
          <div className = "skills-grid-row">
            {skills}
          </div>
        </div>

        {/* <div>
          <div className="nine columns main-col">
            <ul >
              {skills}
            </ul>
          </div>
         
        </div> */}
      

   </section>
    );
  }
}

export default Resume;
