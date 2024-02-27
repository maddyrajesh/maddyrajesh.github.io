import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently pursuing a <b>Master of Science in Computer Science</b> at
        <a href="https://www.asu.edu/"> Arizona State University</a>, with an expected graduation date of May 2024. My coursework includes Algorithms, Advanced Networks, Combinatorics and Optimization, Cloud Computing, and Quantum Computing.
      </p>
    );
    
    const two = (
      <p>
        Previously, I contributed as an <b>Undergraduate Researcher</b> at
        <a href="https://vit.ac.in/"> Vellore Institute of Technology</a>, where I trained a CNN-RF model for real-time processing of Rainforest Audio, deployed a threat detection system with recycled phones, and achieved a notable accuracy surpassing established benchmarks. Additionally, I interned as a <b>Software Engineer</b> at
        <a href="https://www.freshtohome.com/"> FreshToHome</a>, optimizing a recommendation engine for enhancing user experience for over 1.5 million active users and implementing real-time data solutions.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Python",
      "React.js",
      "Java",
      "Javascript ES6+",
      "C#"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Madhav Rajesh" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
