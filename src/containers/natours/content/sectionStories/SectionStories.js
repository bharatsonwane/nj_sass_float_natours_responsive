import React, { Fragment } from 'react'
import Image from 'next/image'

import nat_8 from "public/img/nat-8.jpg"
import nat_9 from "public/img/nat-9.jpg"

function SectionStories() {


    return (
        <Fragment>
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop >
                    <source src="/img/video.mp4" type="video/mp4" />
                    <source src="/img/video.webm" type="video/webm" />
                    Your browser is not supported!
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <div className="story__img">
                            <Image src={nat_8} alt="Person on a tour" layout="responsive" />
                        </div>
                        <figcaption className="story__caption">Mary Smith</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                            repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <div className="story__img">
                            {/* <Image src={nat_9} alt="Person on a tour" /> */}
                            <img src={"img/nat-9.jpg"} alt="Person on a tour" className="story__img" />
                        </div>
                        <figcaption className="story__caption">Jack Wilson</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                            ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                            repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                        </p>
                    </div>
                </div>
            </div>

            <div className="u-center-text u-margin-top-huge">
                <a href="#" className="btn-text">Read all stories &rarr;</a>
            </div>
        </Fragment>
    )
}

export default SectionStories
