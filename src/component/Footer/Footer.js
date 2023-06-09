import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <>
            <div className="bg-dark p-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className='text-center text-white mb-0'>&copy; {year}. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
