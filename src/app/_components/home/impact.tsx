// components/Impact.tsx
import React from "react";
import { api } from "~/trpc/react";



export const Impact: React.FC = () => {

    const {data} = api.content.getSection.useQuery({
        section: "What we do",
    })

    if (!data) {
        return <div>Loading...</div>
    }

    const impacts = data.elements

    return (
        <div className="advance-value">
            <div className="group-26">
                <div className="text-wrapper-18">Our Impact</div>
                <div className="group-27">
                    {impacts.map((impact, index) => (
                        <div className="impact-card" key={index}>
                            <div className="impact-icon"></div>
                            <div className="title">{impact.title}</div>
                            <div className="description">{impact.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};