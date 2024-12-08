import './Navbar.css';

export default function Navbar(){
    let tasklistName = "test";
    return <>
        <nav className="navbar">
            <div className="navbar-start">
                <div className="logo">
                    Tasklist App
                </div>
            </div>
            <div className="navbar-center">
                You are currently in <span className="takslist-name">
                    &nbsp;{tasklistName}&nbsp;
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