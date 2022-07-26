import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {
        basic_info: {
          section_name: {
            about: "ABOUT ME",
            projects: "PROJECTS",
            skills: "SKILLS",
            experience: "EDUCATION"
          },
          description_header: "Hi",
          description: "👋 I'm Jack McLean. I'm a recent bootcamp graduate and Full-Stack Developer with a passion for learning and solving problems. I was previously a chemical engineering student at Montana State University until I decided I wanted a career switch. Now I'm looking to break into the tech field and show the world what I can do!"
        },
        projects: [
          {
            title: "Wordle",
            images: ["/images/wordle2.webp","/images/wordle.png"],
            startDate: "2022",
            technologies: [
              {class: "devicon-html5-plain", name: "HTML 5"},
              {class: "devicon-css3-plain", name: "CSS 3"},
              {class: "devicon-react-plain", name: "React"},
              {class: "devicon-redux-plain", name: "Redux"},
              {class: "devicon-javascript-plain", name: "Javascript"},
              {class: "devicon-rails-plain", name: "Rails"},
              {class: "devicon-ruby-plain", name: "Ruby"},
              {class: "devicon-sqlite-plain", name: "SQLite"},
            ],
            description: "This single page application displays a page where you can play a clone of the popular NYT game Wordle."
          },
          {
            title: "Recipe Manager",
            images: ["/images/burger.jpg", "/images/pizza.jpg"],
            startDate: "2022",
            technologies: [
              {class: "devicon-html5-plain", name: "HTML 5"},
              {class: "devicon-rails-plain", name: "Rails"},
              {class: "devicon-ruby-plain", name: "Ruby"},
              {class: "devicon-sqlite-plain", name: "SQLite"},
            ],
            description: "A recipe sharing website that allows users to create, share, and review recipes."
          },
          {
            title: "Soundboard",
            images: ["/images/soundboard.jpg", "/images/soundboard2.jpg"],
            startDate: "2022",
            technologies: [
              {class: "devicon-html5-plain", name: "HTML 5"},
              {class: "devicon-css3-plain", name: "CSS 3"},
              {class: "devicon-javascript-plain", name: "Javascript"},
            ],
            description: "A single page application that allows you to loop tracks and create songs."
          }
        ],
        experience: [
          {
            title: "Software Engineering Student",
            company: "Certificate of Completion",
            technologies: ["HTML", "CSS", "JavaScript", "React", "Ruby", "Rails", "REST APIs", "SQL"],
            mainTech: ["Flatiron School"], 
            years: "11.2021 - 04.2022", 
            icon: "fas fa-keyboard experience-icon"
          },
          {
            title: "Business Major",
            company: "Worked toward Bachelor of Science in Accounting",
            technologies: ["Accounting", "Finance", "Economics", "Green & Gold Fund - Bond Sector"], 
            mainTech: ["University of Alabama at Birmingham"], 
            years: "01.2019 - 12.2019", 
            icon: "fas fa-graduation-cap experience-icon"
          },
          {
            title: "Engineering Major",
            company: "Worked toward Bachelor of Science in Chemical Engineering",
            technologies: ["Chemistry", "Calculus", "Physics","General Education"], 
            mainTech: ["Montana State University"], 
            years: "08.2016 - 12.2018", 
            icon: "fas fa-graduation-cap experience-icon"
          },
        ]
      },
      sharedData: {
        basic_info: {
          name: "Jack McLean",
          titles: ["Full-Stack Developer", "Software Engineer"],
          image: "me.jpg",
          social: [
            {
              name: "GitHub",
              url: "https://github.com/PepperMcLean",
              class: "fab fa-github"
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/jack-h-mclean/",
              class: "fab fa-linkedin"
            }
          ]
        },
        skills : {
          icons: [
            {class: "devicon-html5-plain", name: "HTML 5"},
            {class: "devicon-css3-plain", name: "CSS 3"},
            {class: "devicon-react-plain", name: "React"},
            {class: "devicon-redux-plain", name: "Redux"},
            {class: "devicon-javascript-plain", name: "Javascript"},
            {class: "devicon-rails-plain", name: "Rails"},
            {class: "devicon-ruby-plain", name: "Ruby"},
            {class: "devicon-sqlite-plain", name: "SQLite"},
          ]
        }
      },
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  // componentDidMount() {
  //   this.loadSharedData();
  //   this.applyPickedLanguage(
  //     window.$primaryLanguage,
  //     window.$secondaryLanguageIconId
  //   );
  // }

  // loadResumeFromPath(path) {
  //   $.ajax({
  //     url: path,
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ resumeData: data });
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       alert(err);
  //     },
  //   });
  // }

  // loadSharedData() {
  //   $.ajax({
  //     url: `portfolio_shared_data.json`,
  //     dataType: "json",
  //     cache: false,
  //     success: function (data) {
  //       this.setState({ sharedData: data });
  //       document.title = `${this.state.sharedData.basic_info.name}`;
  //     }.bind(this),
  //     error: function (xhr, status, err) {
  //       alert(err);
  //     },
  //   });
  // }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        {/* <div className="col-md-12 mx-auto text-center language">
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-poland"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div> */}
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
