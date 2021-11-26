import React, { Fragment } from 'react'
import AvailableSweets from './AvailableSweets'
import SweetsSummary from './SweetsSummary'

const Sweets = () => {
    return (
        <Fragment>
            <SweetsSummary/>
            <AvailableSweets/>
        </Fragment>
    )
}

export default Sweets
