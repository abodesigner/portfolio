import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileWink } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
    return (
        <section className="home py-5" id="home">
            <div className="container">
                <div className="home-content d-flex justify-content-center align-items-center">
                    <div className="home-content-text mr-auto">
                        <span className="greeting">hello, i'm</span>
                        <span className="name">mohammed abosalem</span>
                        <span className="job">front end developer.</span>
                        <p className="lead">
                            Welcome to my portfolio.
                            I'm glad <FontAwesomeIcon icon={faSmileWink} /> you're
                            here!
                        </p>
                        <a
                            href="#about"
                            className="btn btn-outline-dark text-capitalize"
                        >
                            about me
                        </a>
                    </div>
                    <div className="effect-hover">
                        <img
                            src="./images/photo.png"
                            alt="MyPhoto"
                            width="300px"
                            className="img-fluid d-none d-md-block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;