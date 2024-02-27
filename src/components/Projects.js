import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // This import can be removed as Carousel is no longer used
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const projects = {
      "EduCloud: Hybrid Cloud-Based Smart Classroom Assistant": {
        desc: "EduCloud leverages a hybrid cloud setup combining AWS, Ceph, and OpenFaaS to enhance smart classroom assistance through scalable, cost-effective solutions for real-time video processing and academic data retrieval.",
        techStack: "AWS Lambda, Ceph, OpenFaaS, Kubernetes, DynamoDB",
        link: "https://github.com/maddyrajesh/EduCloud-Hybrid-Cloud-Based-Smart-Classroom-Assistant",
        open: ""
      },
        "P4 DDoS Attack Detection": {
          desc: "Utilizing the P4 programming language, this system effectively identifies and mitigates DDoS attacks in real-time by dynamically analyzing and filtering network traffic patterns.",
          techStack: "P4, Docker, Behavioral Model v2 (BMv2), Python",
          link: "https://github.com/maddyrajesh/P4-DDoS-Attack-Detection",
          open: ""
        },
        "Covid-19 Contact Tracing": {
          desc: "Award-winning, privacy-centric COVID-19 exposure notification app developed using Dart and Flutter, featuring advanced Geo-Tracking to map 500,000+ locations daily for accurate user movement tracing related to reported COVID-19 cases. Recognized as the winner of the Government of India’s Hack the Crisis Challenge among 10,000 participants.",
          techStack: "Dart, Flutter, Geo-Tracking",
          link: "https://github.com/IEEE-VIT/falcon",
          open: ""
        },
      "GraphExplorer: Interactive Search & Visualization": {
        desc: "GraphExplorer: Interactive Search & Visualization is a dynamic visualization tool for understanding pathfinding algorithms, including Dijkstra's, A*, and Greedy Best-first Search, through immersive and interactive simulations.",
        techStack: "JavaScript, React, HTML/CSS, Algorithm Visualization",
        link: "https://github.com/maddyrajesh/GraphExplorer-Interactive-Search-Visualization",
        open: ""
      },
      "Doom Reinforcement Master: Strategic AI Training": {
        desc: "An advanced deep reinforcement learning project aimed at mastering Doom gameplay through strategic AI training, utilizing deep Q-learning, A3C, and curiosity-driven techniques for enhanced decision-making in dynamic environments.",
        techStack: "Python, PyTorch, TensorFlow, VizDoom, Docker",
        link: "https://github.com/maddyrajesh/Doom-Reinforcement-Master-Strategic-AI-Training",
        open: ""
      },
      "Saving Rainforests using Audio Surveillance": {
        desc: "Saving Rainforests using Audio Surveillance is a  project aimed at preserving biodiversity by identifying species through audio detection in rainforests, utilizing TensorFlow for deep learning models based on spectrogram analysis.",
        techStack: "Python, TensorFlow, Mel Spectrogram Analysis, 1D-CNN",
        link: "https://github.com/taarusshwd/Saving-Rainforests-using-Audio-Surveillance",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`} key={i}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 35 }} />
                    </div>
                    <ExternalLinks githubLink={projects[key]["link"]} openLink={projects[key]["open"]} />
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
