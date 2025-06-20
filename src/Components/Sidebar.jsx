import React from 'react';
import {
    Squares2X2Icon ,
    ComputerDesktopIcon,
    CalendarDaysIcon,
    ClipboardIcon,
    PencilIcon,
    ChartBarIcon,
    ChevronRightIcon,
} from '@heroicons/react/24/outline';
import {Link} from "react-router-dom";

const Sidebar = ({ isOpen }) => {
    return (
        <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <Link to="/" className="logo">
                <img src="../Assets/logo.png" alt="EDU ONLINE Logo" className="h-10"/>
            </Link>
            <nav>
                <ul>
                    <li><Link to="/"><Squares2X2Icon className="icon" /> Дашборд</Link></li>
                    <li><Link to="/"><ComputerDesktopIcon className="icon" /> Видео сабақ</Link></li>
                    <li><Link to="/"><CalendarDaysIcon className="icon" /> Сабақ кестесі</Link></li>
                    <li><Link to="/"><PencilIcon className="icon" /> Үй жұмысы</Link></li>
                    <li><Link to="/"><ClipboardIcon className="icon" /> Байқау сынағы</Link></li>
                    <li><Link to="/"><ChartBarIcon className="icon" /> Рейтинг</Link></li>
                </ul>
            </nav>
            <div className="lang">🇰🇿 қазақша <ChevronRightIcon className="icon" /></div>
        </aside>
    );
};

export default Sidebar;
