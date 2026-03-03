import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { docsNav } from '../docs-nav';

export const DocsSidebar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile toggle */}
            <button
                className="lg:hidden flex items-center gap-2 text-sm font-medium text-gray-700 mb-4"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle documentation navigation"
                aria-expanded={mobileOpen}
            >
                {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                Documentation Menu
            </button>

            {/* Sidebar */}
            <nav
                className={`lg:w-64 lg:flex-shrink-0 ${mobileOpen ? 'block' : 'hidden lg:block'}`}
                aria-label="Documentation navigation"
            >
                <div className="lg:sticky lg:top-4 space-y-6">
                    {docsNav.map(section => (
                        <SidebarSection key={section.title} section={section} onNavigate={() => setMobileOpen(false)} />
                    ))}
                </div>
            </nav>
        </>
    );
};

const SidebarSection = ({ section, onNavigate }: { section: typeof docsNav[0]; onNavigate: () => void }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <button
                className="flex items-center gap-1 w-full text-left text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 hover:text-gray-700"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {isOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                {section.title}
            </button>
            {isOpen && (
                <ul className="space-y-1 ml-4">
                    {section.items.map(item => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                onClick={onNavigate}
                                className={({ isActive }) =>
                                    `block px-3 py-1.5 text-sm rounded transition-colors ${
                                        isActive
                                            ? 'bg-uic-red/10 text-uic-red font-medium border-l-2 border-uic-red'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
