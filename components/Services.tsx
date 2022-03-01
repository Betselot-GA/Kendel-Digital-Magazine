import { BsFillEyeFill, BsFillBrightnessHighFill, BsFillChatSquareDotsFill, BsFillBookmarkCheckFill, BsCheck } from 'react-icons/bs';

export default function Services() {
    return (
        <section id="why-us" className="why-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mt-4 mt-lg-0">
                        <div className="box aos-init aos-animate" >
                            <span><BsFillEyeFill /></span>
                            <h4>Vision</h4>
                            <p>Building a prominent & reliable media that promotes sincerity, disseminates rationality and patriotism in local and international Languages in 2033.</p>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="box" data-aos="zoom-in" >
                            <span><BsFillBrightnessHighFill /></span>
                            <h4>Misson</h4>
                            <p className='mb-1'><BsCheck size={25} /> Enabling youths to be reasonable and responsible</p>
                            <p className='mb-1'><BsCheck size={25} /> Producing writings that promote social togetherness, peace and values of the community</p>
                            <p className='mb-1'><BsCheck size={25} />  Promoting sincerity as the motive of human being</p>
                            <p className='mb-1'><BsCheck size={25} /> Creating positive impact on reachable technological & Social media outlets</p>
                        </div>
                    </div>


                    <div className="col-lg-3 mt-4 mt-lg-0">
                        <div className="box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <span><BsFillBookmarkCheckFill></BsFillBookmarkCheckFill></span>
                            <h4>Goals</h4>
                            <p>Creating visionary, reasonable and rational youth with indigenous culture, language, values, and enabling them to be figures in sincerity and other social aspects to the rest of the people. Beyond this the goal of Kendel Digital Magazine is capacitating the youth with rational and balanced knowledge and wisdom.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-4 mt-lg-0">
                        <div className="box aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <span><BsFillChatSquareDotsFill></BsFillChatSquareDotsFill></span>
                            <h4>Values</h4>
                            <p className='mb-1'><BsCheck size={25} /> Sincerity</p>
                            <p className='mb-1'><BsCheck size={25} /> Rationality</p>
                            <p className='mb-1'><BsCheck size={25} /> Patriotism</p>
                            <p className='mb-1'><BsCheck size={25} /> Reliability</p>
                            <p className='mb-1'><BsCheck size={25} /> Accountability</p>
                            <p className='mb-1'><BsCheck size={25} /> Inclusiveness</p>
                            <p className='mb-1'><BsCheck size={25} /> Achievement</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}