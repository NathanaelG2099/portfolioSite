import "./global.css";


interface TopbarProps {
    siteNameText?: string;
    navLinks?: {label: string; href: string;}[];
}

export default function Topbar ({
    siteNameText = 'Nathanael Garcia : Portfolio',
    navLinks = [
        {label: 'Home', href: '/'},
        {label: 'Applications', href: '/apps'},
        {label: 'Websites', href: '/websites'},
        {label: 'ML/AI Models', href: '/models'}
    ]
}: TopbarProps) {

    return (
        <>
            {/* Topbar Container */}
            <nav className="fixed top-o left-0 right-0">
                <div className="pt-3 pb-8 pr-3 pl-3 bg-cyan-500">

                    {/* Left side: Site Name */}
                    <div className="flex float-left">
                    <a className="text-black font-serif">
                        {siteNameText}
                    </a>
                    </div>

                    {/* Right side: Navigation Links */}
                    <div className="flex float-right gap-5">
                        {navLinks.map((link) => (
                            <a
                            key={link.label}
                            href={link.href}
                            className="text-black hover:text-gray-600 font-medium transition-colors font-serif"
                            >
                            {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Spacer to prevent fixed topbar from overlaying main content */}
            <div className="h-10"></div>
        </>
    );
};

