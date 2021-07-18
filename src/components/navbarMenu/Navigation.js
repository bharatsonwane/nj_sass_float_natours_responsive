import React, { Fragment } from 'react'
import { allClass } from 'src/constants/customModuleClassMethod'
import mdl from "./navigation.module.scss"

function Navigation() {


    return (
        <Fragment>
            <div className={allClass("", "navigation", mdl)}>
                <input type="checkbox" className={allClass("", "navigation__checkbox", mdl)} id="navi-toggle" />

                <label htmlFor="navi-toggle" className={allClass("", "navigation__button", mdl)}>
                    <span className={allClass("", "navigation__icon", mdl)}>&nbsp;</span>
                </label>

                <div className={allClass("", "navigation__background", mdl)}>&nbsp;</div>

                <nav className={allClass("", "navigation__nav", mdl)}>
                    <ul className={allClass("", "navigation__list", mdl)}>
                        <li className={allClass("", "navigation__item", mdl)}><a href="#" className={allClass("", "navigation__link", mdl)}><span>01</span>About Natous</a></li>
                        <li className={allClass("", "navigation__item", mdl)}><a href="#" className={allClass("", "navigation__link", mdl)}><span>02</span>Your benfits</a></li>
                        <li className={allClass("", "navigation__item", mdl)}><a href="#" className={allClass("", "navigation__link", mdl)}><span>03</span>Popular tours</a></li>
                        <li className={allClass("", "navigation__item", mdl)}><a href="#" className={allClass("", "navigation__link", mdl)}><span>04</span>Stories</a></li>
                        <li className={allClass("", "navigation__item", mdl)}><a href="#" className={allClass("", "navigation__link", mdl)}><span>05</span>Book now</a></li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navigation
