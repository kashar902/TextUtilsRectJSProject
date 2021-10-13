import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: 'absolute',
        width: '100%'
    }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            <p className='text-center'>
            © 2021 Ashar Ullah Khan. <br />
             All Rights Reserved | Terms and Conditions
            </p>
        </footer>
    )
}