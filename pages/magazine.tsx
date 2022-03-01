import Magazine from "../components/Blog/Magazine";
import InnerPageLayout from "../components/layouts/InnerPage";
export default function MagazinePage() {
    return (
        <InnerPageLayout pageTitle="Our Magazines">
            <div className="row">
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m1.jpg" link="img/portfolio/m1.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m2.jpg" link="img/portfolio/m2.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m3.jpg" link="img/portfolio/m3.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m4.jpg" link="img/portfolio/m4.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m5.jpg" link="img/portfolio/m.5pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m6.jpg" link="img/portfolio/m6.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m7.jpg" link="img/portfolio/m7.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m8.jpg" link="img/portfolio/m8.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m9.jpg" link="img/portfolio/m9.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m10.jpg" link="img/portfolio/m10.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m11.jpg" link="img/portfolio/m11.pdf" />
                </div>
                <div className="col-md-4">
                    <Magazine image="img/portfolio/m12.jpg" link="img/portfolio/m12.pdf" />
                </div>
            </div>
        </InnerPageLayout>
    );
}