import './Navbar.css';

import { PanelContextType, PanelContext } from '../page';
import React from 'react';

export default function Navbar(){
    const { currentTasklistName, setCurrentTasklistName } = React.useContext<PanelContextType>(PanelContext);
    return <>
        <nav className="navbar">
            <div className="navbar-start">
                <div className="logo">
                    Tasklist App
                </div>
            </div>
            <div className="navbar-center">
                You are currently in <span className="takslist-name">
                    &nbsp;{currentTasklistName}&nbsp;
                </span> tasklist
            </div>
            <div className="navbar-end">
                <div className="navbar-button">
                    New tasklist
                </div>
            </div>
        </nav>
    </>
}