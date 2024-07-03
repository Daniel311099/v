import React from "react";
import "~/styles/about.css";
import { api } from "~/trpc/react";
// export const AboutUs: React.FC = () => {
//     return (
//         <div className="about">
//             <div className="primary-value">
//                 <div className="text-wrapper-22">About Us</div>
//             </div>
//             <p className="at-charity-name-our">
//                 At [charity Name], Our Mission Is To Bring Positive Change To
//                 Communities In Need Through Compassionate Action And Sustainable
//                 Solutions. We Believe That Everyone Deserves Access To Basic
//                 Necessities, Education, And Opportunities For A Better Future.
//                 Our Dedicated Team Works Tirelessly To Empower Individuals,
//                 Support Families, And Uplift Entire Communities.
//             </p>
//         </div>
//     );
// };

export const AboutUs: React.FC = () => {
    const {data, isLoading} = api.content.getSectionElement.useQuery({
        section: "About Us",
        element: "About Us"
    })

    if (!data) {
        return <div></div>
    }

    const element = data.element || {
        content: "Loading ..."
    }

    return (
        <div className="about-us">
            <div className="about-us__header">
                <h2>About Us</h2>
            </div>
            <p className="about-us__content">
                {element.content}
            </p>
        </div>
    );
};