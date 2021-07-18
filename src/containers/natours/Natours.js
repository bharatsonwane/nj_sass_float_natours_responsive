import React, { Fragment } from 'react'
import mdl from "./natours.module.scss"
import { allClass } from 'src/constants/customModuleClassMethod'
import Navigation from 'src/components/navbarMenu/Navigation'
import Header from 'src/components/header/Header'
import Footer from 'src/components/footer/Footer'
import Popup from 'src/components/popup/Popup'
// import Grid from 'src/components/grid/Grid'

import SectionAbout from './content/sectionAbout/SectionAbout'
import SectionFeatures from './content/sectionFeatures/SectionFeatures'
import SectionTours from './content/sectionTours/SectionTours'
import SectionStories from './content/sectionStories/SectionStories'
import SectionBook from './content/sectionBook/SectionBook'



function Natours() {
    return (
        <Fragment>
            <Navigation />
            <Header />
            <main>
                <section className={allClass("globalTest", "section-about", mdl)}>
                    <SectionAbout />
                </section>

                <section className={allClass("", "section-features", mdl)}>
                    <SectionFeatures />
                </section>

                <section className={allClass("", "section-tours", mdl)} id="section-tours">
                    <SectionTours />
                </section>

                <section className={allClass("", "section-stories", mdl)}>
                    <SectionStories />
                </section>

                <section className={allClass("", "section-book", mdl)}>
                    <div className="row">
                        <div className={allClass("", "book", mdl)}>
                            <div className={allClass("", "book__form", mdl)}>
                                <SectionBook />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Popup />
            {/* <Grid /> */}
        </Fragment>
    )
}

export default Natours
