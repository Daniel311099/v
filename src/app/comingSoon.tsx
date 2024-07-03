
import React, { useState, useEffect } from "react";
import "~/styles/coming.css";

const RELEASE_DATE = "2024-07-05"

export const ComingSoon: React.FC = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date(RELEASE_DATE) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="coming-soon-page">
            <header className="coming-soon-header">
                <h1>Coming Soon ...</h1>
                <p>We are working hard to give you a better experience!</p>
            </header>
            <div className="countdown">
                <div className="time-box">
                    <span className="time">{timeLeft.days || '0'}</span>
                    <span className="label">Days</span>
                </div>
                <div className="time-box">
                    <span className="time">{timeLeft.hours || '0'}</span>
                    <span className="label">Hours</span>
                </div>
                <div className="time-box">
                    <span className="time">{timeLeft.minutes || '0'}</span>
                    <span className="label">Minutes</span>
                </div>
                <div className="time-box">
                    <span className="time">{timeLeft.seconds || '0'}</span>
                    <span className="label">Seconds</span>
                </div>
            </div>
            <div className="subscribe-form">
                <p>Subscribe to be notified when we this page goes live: &nbsp;</p>
                <input type="email" placeholder="Enter your email"/>
                <button type="button">Subscribe</button>
            </div>
            {/* <footer className="coming-soon-footer">
                <p>Follow us on</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </footer> */}
        </div>
    );
};


export const ComingSoonHero: React.FC = () => {
    console.log("Coming soon hero")
    return (
        <div className="coming-soon-hero">
            <div className="overlap-23">
                <div className="group-14">
                    <div className="overlap-24">
                        <div className="text-3">Coming Soon</div>
                        <div className="text-4">We are working on something amazing. Stay tuned!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}