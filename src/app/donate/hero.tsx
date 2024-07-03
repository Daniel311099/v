import React from "react";
import "~/styles/hero.css";
export const DonateHero: React.FC = () => {
    console.log('DonateHero');
    return (
        <div className="hero">
            <div>
                <p className="heading">Donate</p>
                <p className="subheading">
                    Together, We Can Create a Brighter Future for Communities in Need
                </p>
            </div>
            {/* <div className="buttons">
                <div className="primary-button">Donate Now!</div>
                <div className="secondary-button">Learn More</div>
            </div> */}
            {/* <div className="ellipse-8" />
            <div className="rectangle-7" />
            <div className="rectangle-8" /> */}
        </div>
    );
};

// export function Hero() {
//     return (
//         <>
//             <div className="BG">
//                 <div className="overlap-7">
//                     <div className="rectangle-2" />
//                     <div className="ellipse-2" />
//                     <img
//                         className="mask-group"
//                         alt="Mask group"
//                         src="mask-group.png"
//                     />
//                     <img
//                         className="mask-group"
//                         alt="Mask group"
//                         src="image.png"
//                     />
//                 </div>
//             </div>
//             <div className="rectangle-3" />
//             <div className="rectangle-4" />
//             <div className="navigation-menu">
//                 <div className="div-wrapper-2">
//                     <div className="text-wrapper-6">Login</div>
//                 </div>
//                 <div className="div-wrapper-3">
//                     <div className="text-wrapper-7">Signup</div>
//                 </div>
//                 <div className="navbar">
//                     <div className="text-wrapper-8">Feedback</div>
//                     <div className="text-wrapper-9">Partners</div>
//                     <div className="text-wrapper-10">Contact Us</div>
//                     <div className="text-wrapper-11">About Us</div>
//                     <div className="text-wrapper-12">Donate</div>
//                     <div className="group-5">
//                         <div className="text-wrapper-13">Home</div>
//                     </div>
//                 </div>
//             </div>
//             <div className="ellipse-3" />
//             <div className="text-wrapper-14">Donate</div>
//             <p className="text-wrapper-15">
//                 Together, We Can Create a Brighter Future for Communities in
//                 Need
//             </p>
//             <div className="ellipse-4" />
//         </>
//     );
// };

// import React from 'react';
// import './hero.css'; // assuming this is the stylesheet used in your initial hero component

