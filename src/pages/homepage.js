import React from 'react';
import "../pages/homepage.css";
import Orange_rect from "../Personal Website/Rectangle 2.svg";
import background_img from "../Personal Website/Untitled_Artwork.png";


const homepage = () => {
    return (
        <>
            <div className = "hero">
                <div className='hero-text'>
                    <h2>Hi! Welcome</h2>
                    <p>My name is Victor; an aspring web developer and this is my website. Please explore!</p>
                    
                </div>
                <div className="background">
                    <svg className="big_purple" width="632" height="632" viewBox="0 0 632 632" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f)">
                            <circle cx="316" cy="316" r="199" fill="#C793EF"/>
                        </g>
                        <defs>
                        <filter id="filter0_f" x="0" y="0" width="632" height="632" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="58.5" result="effect1_foregroundBlur"/>
                        </filter>
                        </defs>
                    </svg>
                    <svg className="edge_red" width="203" height="365" viewBox="0 0 203 365" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f)">
                            <ellipse cx="182" cy="182.5" rx="89" ry="89.5" fill="#F18B8B"/>
                        </g>
                        <defs>
                        <filter id="filter0_f" x="0" y="0" width="364" height="365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="46.5" result="effect1_foregroundBlur"/>
                        </filter>
                        </defs>
                    </svg>
                    <svg className="edge_yellow" width="198" height="341" viewBox="0 0 198 341" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f)">
                            <circle cx="27.5" cy="170.5" r="77.5" fill="#FAEB9B"/>
                        </g>
                        <defs>
                        <filter id="filter0_f" x="-143" y="0" width="341" height="341" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="46.5" result="effect1_foregroundBlur"/>
                        </filter>
                        </defs>
                    </svg>
                    <svg className="small_purple" width="372" height="372" viewBox="0 0 372 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f)">
                            <circle cx="186" cy="186" r="69" fill="#939DEF"/>
                        </g>
                        <defs>
                        <filter id="filter0_f" x="0" y="0" width="372" height="372" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="58.5" result="effect1_foregroundBlur"/>
                        </filter>
                        </defs>
                    </svg>
                    <img className="orange_rect" src={Orange_rect}/>
                </div>
                

            </div>
            <section className="project-section">
                <div className="projects">
                    <div className="project-card">
                        <div className="placeholder">
                            
                        </div>
                        <div className='project-card-text'>
                            <h5>Project Title</h5>
                            <p>Dolor aliquip culpa Lorem pariatur anim consequat pariatur sint quis consequat.</p>
                        </div>
                        
                    </div>
                    <div className="project-card">
                        <div className="placeholder">
                            
                        </div>
                        <div className='project-card-text'>
                            <h5>Project Title</h5>
                            <p>Dolor aliquip culpa Lorem pariatur anim consequat pariatur sint quis consequat.</p>
                        </div>
                        
                    </div>
                    <div className="project-card">
                        <div className="placeholder">
                            
                        </div>
                        <div className='project-card-text'>
                            <h5>Project Title</h5>
                            <p>Dolor aliquip culpa Lorem pariatur anim consequat pariatur sint quis consequat.</p>
                        </div>
                        
                    </div>
                </div>

            </section>
            <section className='footer'>
                <p>Get In Touch</p>
                <div className='footer-links'>
                    <a href="#">LinkedIn</a>
                    <a href="#">Instagram</a>
                    <a href="#">Email</a>
                    <a href="#">GitHub</a>
                </div>
            </section>
            
            
        </>
    );
}

export default homepage;