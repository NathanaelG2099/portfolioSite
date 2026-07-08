import React from "react";
import "./global.css";

type Navlink = {
    label: string;
    href: string;
};

interface TopbarProps {
    siteNameText?: string;
    navLinks?: Navlink[];
}

const Topbar: React.FC<TopbarProps> = ({
    siteNameText = 'Nathanael Garcia : Portfolio',
    navLinks = [
        {label: 'Home', href: '/'},
        {label: 'Applications', href: '/apps'},
        {label: 'Websites', href: '/websites'},
        {label: 'ML/AI Models', href: '/models'}
    ]
}) => {

    return (
        <>
            {/* Topbar Container */}
            <nav>
                <div className="pt-3 pb-10 bg-cyan-500">
                    {/* Left side: SiteName */}
                    <div className="flex float-left">
                    <a className="text-black">
                        {siteNameText}
                    </a>
                    </div>

                    {/* Center: Desktop Navigation Links */}
                    <div className="flex float-right gap-5">
                        {navLinks.map((link) => (
                            <a
                            key={link.label}
                            href={link.href}
                            className="text-black hover:text-gray-600 font-medium transition-colors"
                            >
                            {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent fixed topbar from overlaying main content */}
            <div className="h-5"></div>
        </>
    );
};

export default Topbar;
