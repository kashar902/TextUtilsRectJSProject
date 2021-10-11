import React from 'react'

function Alert(props) {
    const FirstLetterCap = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    // const Capp = (lower) => {
    //     const str = lower.toLowerCase();
    //     return str.charA
    // }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{FirstLetterCap(props.alert.type)}!</strong> {props.alert.message}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}

export default Alert
