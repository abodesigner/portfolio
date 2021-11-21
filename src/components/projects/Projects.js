import "./projects.css";
import Project from "../project/Project";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
    // define the state
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("js/data.json")
            .then((res) => {
                setProjects(res.data.projects);
            });

    });

    return (
        <section className="projects bg-light pb-4" id="projects">
            <h2 className="text-center text-capitalize mb-0">Projects</h2>
            <div className="custom-divider">
                <div className="custom-divider-line"></div>
                <div className="custom-divider-icon">
                    <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="custom-divider-line"></div>
            </div>
            <div className="container">
                <div className="row">
                    {projects &&
                        projects.map((item) => (
                            <Project project={item} />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
