import './Footer.css'

export const FooterComponent = () => {
    return (
        <footer>
            <div className="address">
                <div className="footer_left">
                    <div className="blog_link"><p>Stasik<a href="#">.Blog</a></p></div>
                    <p className="footer_left_p">Website by Stasik</p>
                    <div className="social_media"><img src="src/Img/telegram.png" alt="monogram"/>
                        <img src="src/Img/twitter.png" alt="twitter"/>
                        <img src="src/Img/instagram.png" alt="instagram"/>
                        <img src="src/Img/twitter.png" alt="twitter"/>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_category">
                        <h2>Category</h2>
                        <a href="#">CSS</a>
                        <a href="#">Javascript</a>
                        <a href="#">Tailwind</a>
                        <a href="#">React JS</a>
                        <a href="#">More Category</a></div>
                    <div className="footer_about">
                        <h2>About Me</h2>
                        <a href="#">About Me</a>
                        <a href="#">Projects</a>
                        <a href="#">Achievement</a>
                    </div>
                    <div className="footer_get_in_touch">
                        <h2>Get in touch</h2>
                        <a href="#">+62-8XXX-XXX-XX</a>
                        <a href="#">demo@gmail.com</a>
                    </div>
                    <div className="footer_follow">
                        <h2>Follow Us</h2>
                        <a href="#">Medium</a>
                        <a href="#">Instagram</a>
                        <a href="#">Twitter</a>
                        <a href="#">Facebook</a>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="license"><p>© 2025 Digitalstasik</p></div>
        </footer>
    );
};