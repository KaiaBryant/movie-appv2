import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";

export default function Header({ onSearch }) {
    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <h1 className="bungee-spice-regular">RoadFlix</h1>
            </Link>
            {/* <SearchBar onSearch={onSearch} /> */}
        </header>
    );
}