import React, { Fragment } from 'react'
import Image from 'next/image'
import { allClass } from 'src/constants/customModuleClassMethod'
import mdl from './header.module.scss'

import logo_white from "public/img/logo-white.png"


function Header() {


    return (
        <Fragment>
            <header className={allClass("", "header", mdl)}>
                <div className={allClass("", "header__logo-box header__logo", mdl)}>
                        <Image src={logo_white} alt="Logo"  layout="responsive" />
                </div>
                <div className={allClass("", "header__text-box", mdl)}>
                    <h1 className={"heading-primary"}>
                        <span className={"heading-primary--main"}>Outdoors</span>
                        <span className={"heading-primary--sub"}>is where life happens</span>
                    </h1>
                    <a href="#section-tours" className={"btn btn--white btn--animated"}>Discover our tours</a>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
