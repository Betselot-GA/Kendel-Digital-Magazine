import Link from "next/link";

export default function Footer() {
    return (<footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-info">
                            <h3>Kendel Magazine</h3>
                            <p>
                                Addis Ababa, Ethiopia<br />
                                <strong>Phone:</strong> (+251) 912178520<br />
                                <strong>Email:</strong> kdigitalmagazine@gmail.com<br />
                            </p>
                            <div className="social-links mt-3">
                                <a href="https://www.youtube.com/channel/UCMvSL9y2zS3KGmUfXEgSM_w" className="youtube"><i className="bx bxl-youtube"></i></a>
                                <a href="https://m.facebook.com/kdigitalmagazine" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="https://t.me/KenDelM" className="google-plus"><i className="bx bxl-telegram"></i></a>
                                <a href="https://www.linkedin.com/in/kendel-digital-magazine-24171b229/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/"><a href="#">Home</a></Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/magazine"><a href="#">Magazines</a></Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/posts"><a href="#">Posts</a></Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/team"><a href="#">Team</a></Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/contact"><a href="#">Contact</a></Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/#about"><a href="#">About us</a></Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/#vision"><a href="#">Vision</a></Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/#values"><a href="#">Values</a></Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link href="/#goals"><a href="#">Goals</a></Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Subscription will start soon</p>
                        <form action="" method="post">
                            <input type="email" name="email" disabled /><input type="submit" value="Subscribe" />
                        </form>

                    </div>

                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright <strong><span>Kendel Magazine</span></strong>. All Rights Reserved
            </div>
            <div className="credits">Proudly Developed bysq <a href="https://bootstrapmade.com/">Betslot Getnet</a>
            </div>
        </div>
    </footer>)
}