import React, { Fragment, useState } from 'react'
import { allClass } from 'src/constants/customModuleClassMethod'
import mdl from "./footer.module.scss"
import Image from 'next/dist/client/image'

import logo_green_small_2x from "public/img/logo-green-small-2x.png"
import logo_green_2x from "public/img/logo-green-2x.png"


function Footer() {

    const [screenSize, setScreenSize] = useState("")
    function GetScreenSize() {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 600 || window.screen.width < 600) {
                setScreenSize("phone")
            } else {
                setScreenSize("otherDevice")
            }
        }
    }
    if (typeof window !== "undefined") {
        window.addEventListener('resize', GetScreenSize)
    }

    return (
        <Fragment>
            <footer className={allClass("", "footer", mdl)}>
                <div className={allClass("", "footer__logo-box", mdl)}>
                    <div className={allClass("", "footer__logo", mdl)}>
                        <Image src={screenSize === "phone" ? logo_green_small_2x : logo_green_2x} alt="Full logo" />
                        {/* {screenSize === "phone" ?
                                <Image src={logo_green_small_2x} alt="Full logo" />
                                :
                                <Image src={logo_green_2x} alt="Full logo" />
                            } */}
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col-1-of-2"}>
                        <div className={allClass("", "footer__navigation", mdl)}>
                            <ul className={allClass("", "footer__list", mdl)}>
                                <li className={allClass("", "footer__item", mdl)}><a href="#" className={allClass("", "footer__link", mdl)}>Company</a></li>
                                <li className={allClass("", "footer__item", mdl)}><a href="#" className={allClass("", "footer__link", mdl)}>Contact us</a></li>
                                <li className={allClass("", "footer__item", mdl)}><a href="#" className={allClass("", "footer__link", mdl)}>Carrers</a></li>
                                <li className={allClass("", "footer__item", mdl)}><a href="#" className={allClass("", "footer__link", mdl)}>Privacy policy</a></li>
                                <li className={allClass("", "footer__item", mdl)}><a href="#" className={allClass("", "footer__link", mdl)}>Terms</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"col-1-of-2"}>
                        <p className={allClass("", "footer__copyright", mdl)}>
                            Built by <a href="#" className={allClass("", "footer__link", mdl)}>Jonas Schmedtmann</a> for his online course <a href="#" className={allClass("", "footer__link", mdl)}>Advanced CSS and Sass</a>.
                            Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
                            and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
                            Schmedtmann, is of course highly appreciated!
                        </p>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer
