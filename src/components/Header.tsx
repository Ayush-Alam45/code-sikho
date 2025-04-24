// import "../style/Header.css";

// function Header() {
//     const handleLoginClick = () => {
//         const modal = document.getElementById('id01');
//         if (modal) {
//             modal.style.display = 'block';
//         }
//     };

//     return (
//         <header>
//             <a href="index.html" className="logo">
//                 <img src="logo1.png" alt="Code Sikho Logo" width="200px" className="logo12" />
//             </a>
//             <nav className="hod">
//                 <ul>
//                     <li><button className="contact-us-btn">About Us</button></li>
//                     <li>
//                         <button className="loginbutton1" onClick={handleLoginClick}>
//                             Login
//                         </button>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;




import React, { useEffect, useState } from "react";
import "../style/Header.css";

function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    const handleLoginClick = () => {
        const modal = document.getElementById('id01');
        if (modal) {
            modal.style.display = 'block';
        }
    };

    return (
        <header>
            <a href="index.html" className="logo">
                <img src="logo1.png" alt="Code Sikho Logo" width="200px" className="logo12" />
            </a>
            <nav className="hod">
                <ul>
                    <li><button className="contact-us-btn">About Us</button></li>
                    <li>
                        <button className="loginbutton1" onClick={handleLoginClick}>
                            Login
                        </button>
                    </li>
                    <li>
                        <label className="theme-switch">
                            <input
                                type="checkbox"
                                checked={isDark}
                                onChange={() => setIsDark(!isDark)}
                            />
                            <span className="slider">
                                <span className="icon sun">☀️</span>
                                <span className="icon moon">🌙</span>
                            </span>
                        </label>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
