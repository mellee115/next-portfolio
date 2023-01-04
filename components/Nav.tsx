import React from 'react';

/**
 * The Nav components serves as the navigation for the portfolio app
 * @param props
 * @returns {JSX.Element}
 * @constructor */
export const Nav = (props: { pages: any[]; handleNavClick: React.MouseEventHandler<HTMLButtonElement> | undefined; }): JSX.Element => {
    return (
        <nav>
            {props.pages.map(page => {

                return (
                    <button
                        className='m-r-5'
                        onClick={props.handleNavClick}
                        value={page}
                        key={page}
                    >
                        {page}
                    </button>
                )
            })}
        </nav>
    )
}