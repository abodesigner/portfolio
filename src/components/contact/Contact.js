import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
    return (
        <div className="contact text-center py-5 text-light" id="contact">
            <div className="container">
                <div className="row d-flex flex-column align-items-center justify-content-center">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h2 className="text-capitalize mb-0">Contact Me</h2>
                        <div className="custom-divider">
                            <div className="custom-divider-line"></div>
                            <div className="custom-divider-icon">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="custom-divider-line"></div>
                        </div>
                        <a
                            className="btn btn-outline-light btn-social mx-1"
                            target="_blank"
                            href="https://www.facebook.com/mohammed.abosalim/"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faFacebookSquare}

                            />
                        </a>

                        <a
                            className="btn btn-outline-light btn-social mx-1"
                            target="_blank"
                            href="https://github.com/abodesigner/"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faGithubSquare}

                            />
                        </a>

                        <a
                            className="btn btn-outline-light btn-social mx-1"
                            target="_blank"
                            href="https://www.linkedin.com/in/mohammedabosalim/"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}

                            />
                        </a>
                        <a
                            className="btn btn-outline-light btn-social mx-1"
                            target="_blank"
                            href="https://stackoverflow.com/users/6317252/m-abosalem"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faStackOverflow}

                            />
                        </a>
                    </div>

                    <div className="col-lg-4">
                        <p className="lead mb-0 mt-4">
                            <FontAwesomeIcon
                                icon={faWhatsapp}

                            />
                            <b className="ms-2">(+20) 012-764-128-98</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;