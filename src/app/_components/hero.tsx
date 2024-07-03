import React from "react";
import "~/styles/hero.css";

interface props  {
    title: string,
    subheading: string
}

export const Hero: React.FC<props> = ({title, subheading}) => {
    console.log('General Hero');
    return (
        <div className="hero">
            <div>
                <p className="heading">{title}</p>
                <p className="subheading">
                    {subheading}
                </p>
            </div>
        </div>
    );
};