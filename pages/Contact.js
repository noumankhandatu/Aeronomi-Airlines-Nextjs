import React from 'react'
import CommonBanner from '../src/component/Common/Banner'
import ContactDetails from '../src/component/Contact'
import OurPartner from '../src/component/Common/OurPartner'

const Contact = () => {
    return (
        <>
            <CommonBanner heading="Contact Us" page="Contact Us"/>
            <ContactDetails/>
            <OurPartner/>
        </>
    )
}

export default Contact
