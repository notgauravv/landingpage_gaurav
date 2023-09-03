import React from "react";
import Particles from "react-tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Typical from "react-typical";
import { FaLinkedin, FaGithub, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import {SiHashnode} from "react-icons/si"
import me from "./assets/gaurav2.jpg"; 

const App = () => {
    return (
        <div className="App">
            <Particles id="tsparticles" options={particlesOptions} />
            <header className="App-header">
                <img src={me} className="App-logo" alt="Gaurav" /> {}
                <h1>Hello, I am Gaurav!</h1>
                <h3>
                    I &#128153;{" "}
                    <Typical
                        loop={Infinity}
                        wrapper="span"
                        steps={[
                            "solving problems",
                            1000,
                            "building stuff",
                            1000,
                            "to learn",
                            1000,
                        ]}
                    />
                </h3>
                <div className="icons">
                    <span className="box">
                        <a
                            className="dix"
                            href="https://github.com/notgauravv"
                            target="_blank"
                            rel="noreferrer"
                            aria-hidden={true}
                        >
                            <FaGithub className="icon" />
                        </a>
                    </span>
                    <span className="box">
                        <a
                            className="dix"
                            href="https://www.linkedin.com/in/notgaurav"
                            target="_blank"
                            rel="noreferrer"
                            aria-hidden={true}
                        >
                            <FaLinkedin />
                        </a>
                    </span>
                    <span className="box">
                        <a
                            className="dix"
                            href="https://twitter.com/notgauravv"
                            target="_blank"
                            rel="noreferrer"
                            aria-hidden={true}
                        >
                            <FaTwitter />
                        </a>   
                    </span>
                    <span className="box">
                        <a
                            className="dix"
                            href="http://notgaurav.hashnode.dev/"
                            target="_blank"
                            rel="noreferrer"
                            aria-hidden={true}
                        >
                            < SiHashnode/>
                        </a>
                    </span>
                    <span className="box">
                        <a
                            className="dix"
                            href="mailto:notgauravv@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-hidden={true}
                        >
                            <FaRegEnvelope />
                        </a>
                    </span>
                </div>
                <p></p>
            </header>
        </div>
    );
};

export default App;
