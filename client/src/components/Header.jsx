import React from "react";
import SearchBar from "./SearchBar.jsx";
import "../styles/index.css";

export default function Header({ onSearch }) {
    return (
        <header className="header">
            <h1 className="bungee-spice-regular">RoadFlix</h1>
            <SearchBar onSearch={onSearch} />
        </header>
    );
}