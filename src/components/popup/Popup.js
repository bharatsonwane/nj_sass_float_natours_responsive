import React, { Fragment } from 'react'
import Image from 'next/image'
import { allClass } from 'src/constants/customModuleClassMethod'
import mdl from './popup.module.scss'

import nat_8 from "public/img/nat-8.jpg"
import nat_9 from "public/img/nat-9.jpg"


function Popup() {


    return (
        <Fragment>
            <div className={allClass("", "popup", mdl)} id="popup" >
                <div className={allClass("", "popup__content", mdl)}>
                    <div className={allClass("", "popup__left", mdl)}>
                        {/* <img src={nat_8} alt="Tour photo" className={allClass("", "popup__img", mdl)} /> */}
                        <Image src={nat_8} alt="Tour photo" className={allClass("", "popup__img", mdl)} />
                        {/* <img src={nat_9} alt="Tour photo" className={allClass("", "popup__img", mdl)} /> */}
                        <Image src={nat_9} alt="Tour photo" className={allClass("", "popup__img", mdl)} />
                    </div>
                    <div className={allClass("", "popup__right", mdl)}>
                        <a href="#section-tours" className={allClass("", "popup__close", mdl)}>&times;</a>
                        <h2 className={allClass("", "heading-secondary u-margin-bottom-small", mdl)}>Start booking now</h2>
                        <h3 className={allClass("", "heading-tertiary u-margin-bottom-small", mdl)}>Important &ndash; Please read these terms before booking</h3>
                        <p className={allClass("", "popup__text", mdl)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                            amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                            sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                            gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                            Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                            vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                            vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                            euismod nisi porta.
                        </p>
                        <a href="#" className={allClass("", "btn btn--green", mdl)}>Book now</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Popup
