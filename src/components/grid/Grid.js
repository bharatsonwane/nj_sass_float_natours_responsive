import React, { Fragment } from 'react'
import { allClass } from 'src/constants/customModuleClassMethod'
import mdl from './grid.module.scss'

function Grid() {


    return (
        <Fragment>
            <section className={allClass("", "grid-test", mdl)}>
                <div className={allClass("", "row", mdl)}>
                    <div className={allClass("", "col-1-of-2", mdl)}>
                        Col 1 of 2
                    </div>
                    <div className={allClass("", "col-1-of-2", mdl)}>
                        Col 1 of 2
                    </div>
                </div>

                <div className={allClass("", "row", mdl)}>
                    <div className={allClass("", "col-1-of-3", mdl)}>
                        Col 1 of 3
                    </div>
                    <div className={allClass("", "col-1-of-3", mdl)}>
                        Col 1 of 3
                    </div>
                    <div className={allClass("", "col-1-of-3", mdl)}>
                        Col 1 of 3
                    </div>
                </div>

                <div className={allClass("", "row", mdl)}>
                    <div className={allClass("", "col-1-of-3", mdl)}>
                        Col 1 of 3
                    </div>
                    <div className={allClass("", "col-2-of-3", mdl)}>
                        Col 2 of 3
                    </div>
                </div>

                <div className={allClass("", "row", mdl)}>
                    <div className={allClass("", "col-1-of-4", mdl)}>
                        Col 1 of 4
                    </div>
                    <div className={allClass("", "col-1-of-4", mdl)}>
                        Col 1 of 4
                    </div>
                    <div className={allClass("", "col-1-of-4", mdl)}>
                        Col 1 of 4
                    </div>
                    <div className={allClass("", "col-1-of-4", mdl)}>
                        Col 1 of 4
                    </div>
                </div>

                <div className={allClass("", "row", mdl)}>
                    <div className={allClass("", "col-1-of-4", mdl)}>
                        Col 1 of 4
                    </div>
                    <div className={allClass("", "col-1-of-4", mdl)}>
                        Col 1 of 4
                    </div>
                    <div className={allClass("", "col-2-of-4", mdl)}>
                        Col 2 of 4
                    </div>
                </div>

                <div className={allClass("", "row", mdl)}>
                    <div className={allClass("", "col-1-of-4", mdl)}>
                        Col 1 of 4
                    </div>
                    <div className={allClass("", "col-3-of-4", mdl)}>
                        Col 3 of 4
                    </div>
                </div>
            </section>

        </Fragment>
    )
}

export default Grid
