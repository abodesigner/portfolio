import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    const styles = {
        color: "#f00"
    }
    return (
        <footer>
            <div className="container">
                <p className="text-muted mb-0 py-3 text-center">
                    made with <FontAwesomeIcon icon={faHeart} className="mx-2" style={styles} />
                    by <span className="logo">abosalem</span> <span>{new Date().getFullYear()}</span>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;