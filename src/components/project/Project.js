const Project = (props) => {
    const {image, title, desc,tech,link} = props.project;
    return (
        <div className="col-lg-4 col-6 proj">
            <a
                href="https://www.oneemall.net/"
                target="_blank"
                className="d-none-lg"
                rel="noreferrer"
            >
                <img
                    src={image}
                    alt="oneemal"
                    className="img-fluid img-thumbnail img-thumbnail"
                />
            </a>
            <div className="overlay d-none d-lg-block">
                <div className="text">
                    <div className="data">
                        <h2>{title}</h2>
                        <h5 className="mb-4">{desc}</h5>
                        <h6>{tech}</h6>
                    </div>
                    <a href={link} target="_blank" rel="noreferrer">
                        <i className="fas fa-eye fa-2x"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;