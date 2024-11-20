import React from 'react';
import '../Sty.css';

export default function About() {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p className="wel">
                <b>✨Welcome to Tivora✨</b>
            </p>
            <p className="about-text">
                At <b>Tivora</b>, we're passionate about all things cinema. Our mission is to provide movie lovers with the most comprehensive, up-to-date, and engaging information about the films you love. Whether you're looking for the latest reviews, detailed film analysis, or simply want to stay informed about upcoming releases, we've got you covered.
            </p>
            <div className="team-section">
                <img src="/ourMission.jpeg" alt="Our Mission" className="team-image" />
                <p className="about-text">
                    <strong>Our Mission:</strong> We believe in the power of movies to inspire, entertain, and bring people together. Our goal is to create a space where movie enthusiasts can find accurate and insightful information about their favorite films and discover new ones to enjoy.
                </p>
            </div>
            <div className="team-section">
                <img src="/Teamwork top view with people fistbumping illustration clipart.jpeg" alt="Meet the Team" className="team-image" />
                <p className="about-text">
                    <strong>Meet the Team:</strong> Our team is made up of dedicated movie buffs and industry professionals who are committed to bringing you the best content possible. From in-depth reviews to insightful articles, each member of our team brings a wealth of knowledge and a love for cinema.
                </p>
            </div>
            <div className="team-section">
                <img src="/story.jpeg" alt="Our Story" className="team-image" />
                <p className="about-text">
                    <strong>Our Story:</strong> <b>Tivora</b> was founded with a simple idea: to create a hub for movie lovers to connect and share their passion. What started as a small project has grown into a vibrant community of film enthusiasts.
                </p>
            </div>
            <div className="team-section">
                <img src="/unique.jpeg" alt="What Makes Us Unique" className="team-image" />
                <p className="about-text">
                    <strong>What Makes Us Unique:</strong> Unlike other movie sites, we offer a unique blend of detailed reviews, interactive features, and a community-driven approach. We strive to create a platform where you can not only find the information you need but also engage with others who share your love for movies.
                </p>
            </div>
            <div className="team-section">
                <img src="/joinUs.jpeg" alt="Join Us" className="team-image" />
                <p className="about-text">
                    <strong>Join Us:</strong> We invite you to explore <b>Tivora</b>, join the conversation, and become part of our community. Follow us on social media, sign up for our newsletter, and let us know what you think!
                </p>
            </div>
            <p className="outro">
                <b>Thank you for visiting Tivora. We look forward to sharing our love of movies with you!</b>
            </p>
        </div>
    );
}
