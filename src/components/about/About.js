import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const About = () => {
    return (
        <div className="about-section py-5 text-light" id="about">
            <h2 className="text-center text-capitalize mb-0">
                let me introduce my self
            </h2>
            <div className="custom-divider">
                <div className="custom-divider-line"></div>
                <div className="custom-divider-icon">
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="custom-divider-line"></div>
            </div>
            <div className="container">
                <div className="about-content d-flex flex-column align-items-start">
                    <p className="lead">
                        My story started in 2014 when i decided to shift my
                        career. So i joined a web design course at Taha Hessien
                        Center, then i started to learn from online tutorials &
                        solve my issues using google.
                    </p>

                    <p className="lead">
                        I have a good experience in Node.js and Express.js
                        Framework as a backend technologies.
                    </p>

                    <p className="lead">
                        I'm started learning the basics of Vue.js & Vuex state
                        mangement, but now i'm focusing on React.js to be a MERN
                        stack developer.
                    </p>
                </div>
                <div className="text-center">
                    <a
                        href="https://drive.google.com/file/d/1htBiVQ6t3_yeSHf2q30A-RgnE8bN84pg/view?usp=sharing"
                        className="btn btn-outline-dark btn-lg"
                        target="_blank"
                        type="button"
                        rel="noreferrer"
                    >
                        Download CV
                        <i className="fas fa-download"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;