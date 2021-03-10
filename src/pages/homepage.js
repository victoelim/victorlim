import React from 'react';
import "../styles/homepage.css";

const homepage = () => {
    return (
        <>
            <div className = "hero">
                <div className='hero-text'>
                    <h2>Hi! Welcome!</h2>
                    <p>My name is Victor; an aspring web developer and this is my website. 
                        Please explore! Hover around the items to see what they can do or click to pan around!</p>
                    
                </div>
                <div className="background">
                    <iframe src='https://my.spline.design/untitled-1f42cf61a008be14aed632a8b9acaa2b/' frameborder='0' width='100%' height='100%'></iframe>
                </div>
                
            </div>
            <section className="project-section">
                <div className="projects">
                    <div className="project-card">
                        <div className="placeholder">
                            
                        </div>
                        <div className='project-card-text mt-3'>
                            <h5>Project Title</h5>
                            <p>Dolor aliquip culpa Lorem pariatur anim consequat pariatur sint quis consequat.</p>
                        </div>
                        
                    </div>
                    <div className="project-card">
                        <div className="placeholder">
                            
                        </div>
                        <div className='project-card-text mt-3'>
                            <h5>Project Title</h5>
                            <p>Dolor aliquip culpa Lorem pariatur anim consequat pariatur sint quis consequat.</p>
                        </div>
                        
                    </div>
                    <div className="project-card">
                        <div className="placeholder">
                            
                        </div>
                        <div className='project-card-text mt-3'>
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