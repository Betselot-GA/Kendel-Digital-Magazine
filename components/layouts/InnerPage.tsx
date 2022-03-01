import Link from "next/link";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

type Props = {
    pageTitle: String;
    children: ReactNode;
};

const InnerPageLayout: React.FC<Props> = (props) => (
    <div>
        <Header />
        <section className="breadcrumbs">
            <div className="container">

               {props.pageTitle && (<div className="d-flex justify-content-between align-items-center">
                    <h2>{props.pageTitle}</h2>
                    <ol>
                        <li><Link href="/">Home</Link></li>
                        <li>{props.pageTitle}</li>
                    </ol>
                </div>)
            }
            </div>
        </section>

        <section className="inner-page">
            <div className="container">

                {props.children}
            </div>
        </section>
        <Footer />
    </div>
);

export default InnerPageLayout;