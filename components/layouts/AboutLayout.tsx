import React, { ReactNode } from "react";

type Props = {
    title?: string,
    subTitle?: string,
    image: string,
    alignLeft: Boolean,
    children: ReactNode;
};
const AboutLayout: React.FC<Props> = (props) => (
    <section id="about" className="about">
        <div className="container">
            <div className="d-flex justify-content-center">
            {props.title && (
                <h1 className="pb-4">{props.title}</h1>
            )}
            </div>
            {props.title && (
                // @ts-ignore
                // @ts-ignore
                <center className="pb-4 px-4"><p>{props.subTitle}</p></center>
            )}
            <div className="row">
                <div className={`col-lg-6 ${(props.alignLeft == true) ? 'order-1 order-lg-1' : 'order-2 order-lg-2'}`}>
                    <div className="about-img">
                        <img src={props.image} alt="about" />
                    </div>
                </div>
                <div className={`col-lg-6  pt-4 pt-lg-0 ${(props.alignLeft == true) ? 'order-2 order-lg-2' : 'order-1 order-lg-1'}`}>
                    {props.children}
                </div>
            </div>

        </div>
    </section>
)

export default AboutLayout;