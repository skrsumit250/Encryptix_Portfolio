function Project(){
    return (
        <section id="projects">
            <h3>Projects</h3>

            <div className="inner">
                <div className="logo"><img src="/exchange.png"></img></div>
                <div className="description">
                    <h6>Website Change Detector</h6>
                    <p>Jan 2023</p>
                    <a href="https://github.com/skrsumit250/Website-Watcher">Github link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>Developed a real-time website change detection tool using JavaScript (Node.js), Cheerio for HTML parsing, Crypto for hash calculations, and Nodemon for automatic script restarts.</li>
                            <li>Implemented a web scraping mechanism with cosmetic filtering and keyword-based alerts to track multiple websites, providing real-time notifications for detected changes in specified sections.</li>
                        </ul>                
                    </div>
                </div>
            </div>
            <br></br>
            <div className="inner">
                <div className="logo"><img src="/Google_meet.png"></img></div>
                <div className="description">
                    <h6>Google Meet Clone, Coding Club IITGuwahati</h6>
                    <p>July 2022</p>
                    <a href="https://github.com/GMeet-Clone/GMeet_Clone">Github link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>Developed a GMeet conferencing web application clone from scratch using JavaScript, Node.js, Express.js, and Socket.IO for real-time communication and user interactions.</li>
                            <li>Integrated WebRTC peer-to-peer communication, enabling video-audio streaming and Implemented chat functionality for instant messaging during video calls, enhancing the overall collaborative experience.</li>
                        </ul>                
                    </div>
                </div>
            </div>
            <br></br>
            <div className="inner">
                <div className="logo"><img src="/DISANG.png"></img></div>
                <div className="description">
                    <h6>Disang Hostel Website</h6>
                    <p>March 2022</p>
                    <a href="https://skrsumit250.github.io/Disang/">Website link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>Developed Hostel website using HTML, CSS, Javascript, and Bootstrap for responsive design elements.</li>
                            <li>Facilitated boarders to access various hostel forms, including mess feedback, complaints, and maintenance forms.</li>
                        </ul>                
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Project;