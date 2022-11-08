import React from 'react';
import './About.css'

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const About = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);



    return (
        <div>

          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                
                {
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                    },
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": 10,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 10,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 1,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onHover": {
                                "enable": true,
                                "mode": "bubble",
                                "parallax": {
                                    "enable": false,
                                    "force": 60,
                                    "smooth": 10
                                }
                            },
                            "onClick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "lineLinked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 10,
                                "duration": 2,
                                "opacity": 0.5,
                                "speed": 300
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "backgroundMask": {
                        "enable": true,
                        "cover": {
                            "value": {
                                "r": 255,
                                "g": 255,
                                "b": 255
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        "color": "#ffffff",
                        "image": "url('https://particles.js.org/images/background3.jpg')",
                        "position": "50% 50%",
                        "repeat": "no-repeat",
                        "size": "cover"
                    }
                }
        
        
        }
        />

            <div className="card">
                <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non vel quia reprehenderit, provident suscipit sint dicta ut similique nihil assumenda excepturi perferendis explicabo beatae blanditiis voluptates? Ipsa deleniti similique a porro rem. Inventore facere architecto, labore dicta iusto voluptatem pariatur est quia neque assumenda accusantium ipsum voluptate et asperiores maiores necessitatibus dolor, culpa earum natus non aliquid? Repellat aperiam sapiente laborum? Deleniti asperiores aspernatur consequuntur omnis tempora reiciendis eius modi corporis dolores repellendus nostrum, impedit amet quidem animi ad facilis saepe ducimus. Dolore et accusantium officiis temporibus, nisi quaerat molestias eligendi facere. Nulla facilis exercitationem explicabo impedit consequuntur sed debitis.</div>
                <div></div>
            </div>

        </div>
    );
};

export default About;