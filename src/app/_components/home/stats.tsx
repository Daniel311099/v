import React from "react";

// export const Stats: React.FC = () => {
//     const stats = [
//         {
//             title: "People Served Through Our Community Programs",
//             number: "100k+"
//         },
//         {
//             title: "Educational Institutions Partnered With Us",
//             number: "50+"
//         },
//         {
//             title: "Healthcare Clinics Supported",
//             number: "200+"
//         }
//     ]
//     return (
//         <div className="frame">
//             <div className="group-24">
//               <div className="overlap-group-5">
//                 <p className="text-wrapper-15">People Served Through Our Community Programs</p>
//                 <div className="element-k">100k+</div>
//               </div>
//             </div>
//             <div className="group-24">
//               <div className="overlap-group-5">
//                 <p className="text-wrapper-15">Educational Institutions Partnered With Us</p>
//                 <div className="text-wrapper-16">50+</div>
//               </div>
//             </div>
//             <div className="group-25">
//               <div className="overlap-group-5">
//                 <div className="text-wrapper-15">Healthcare Clinics Supported</div>
//                 <div className="text-wrapper-17">200+</div>
//               </div>
//             </div>
//           </div>
//     )
// };

export const Stats: React.FC = () => {
    const stats = [
        {
            title: "People Served Through Our Community Programs",
            value: "100k+"
        },
        {
            title: "Educational Institutions Partnered With Us",
            value: "50+"
        },
        {
            title: "Healthcare Clinics Supported",
            value: "200+"
        }
    ];

    return (
        <div className="stats-section">
            {stats.map((stat, index) => (
                <div key={index} className="stats-card">
                    <div className="stats-card-value">{stat.value}</div>
                    <p className="stats-card-title">{stat.title}</p>
                </div>
            ))}
        </div>
    );
};


