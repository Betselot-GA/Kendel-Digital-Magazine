import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
    children: ReactNode;
};

const LandingLayout: React.FC<Props> = (props) => {

    const { data: session } = useSession();
    return (
        <div>
            <Header />
            <section id="hero" className="d-flex align-items-center">
                <div className="container position-relative text-center text-lg-start">
                    <div className="row">
                        <div className="col-lg-8 text-left">
                            <h1>Welcome to <span>kendel Magazine</span></h1>
                            <h2>እንኳን ወደ ቅንድል ዲጂታል መፅሔት ደህና መጡ!</h2>

                            <div className="btns">
                                {(session) ? (
                                    <>
                                        <Link href="/#about"><a href="" className="btn-menu animated fadeInUp scrollto">About Us</a></Link>
                                        <Link href="/posts"><a href="" className="btn-menu animated fadeInUp scrollto mx-3">Latest Posts</a></Link></>) : (
                                    <>
                                        <Link href="/#about"><a href="" className="btn-menu animated fadeInUp scrollto">About Us</a></Link>
                                        <Link href="/auth/signup"><a href="" className="btn-book animated fadeInUp scrollto">Create Account</a></Link>
                                    </>)}
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" >
                            <a href="https://www.youtube.com/channel/UCMvSL9y2zS3KGmUfXEgSM_w" className="glightbox play-btn"></a>
                        </div>

                    </div>
                </div>
            </section>
            <section className="inner-page">
                <div className="container">
                    {props.children}
                </div>
            </section>
            <Footer />
        </div>
    )
};

export default LandingLayout;