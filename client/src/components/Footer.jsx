import React from "react";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import "../styles/index.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>Follow us</p>
            <section className="socials">
                <div className="social-media">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                    >
                        <img src={instagram} alt="Instagram logo" />
                    </a>
                    <a
                        href="https://www.tiktok.com/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                    >
                        <img src={tiktok} alt="TikTok logo" />
                    </a>
                    <a
                        href="https://github.com/KaiaBryant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                    >
                        <img src={github} alt="GitHub logo" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kaia-bryant/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social"
                    >
                        <img src={linkedin} alt="LinkedIn logo" />
                    </a>
                </div>
            </section>
            <p>&copy; {new Date().getFullYear()} RoadFlix</p>
        </footer>
    );
}
