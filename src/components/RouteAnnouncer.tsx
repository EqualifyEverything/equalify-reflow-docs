import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { docsNav } from '../docs-nav';

export const RouteAnnouncer = () => {
    const location = useLocation();
    const [announcement, setAnnouncement] = useState('');

    useEffect(() => {
        let title = 'Equalify Reflow';
        const path = location.pathname;

        if (path === '/partner') {
            title = 'Partner Signup - Equalify Reflow';
        } else if (path.startsWith('/docs/')) {
            const docItem = docsNav
                .flatMap(s => s.items)
                .find(item => item.path === path);
            if (docItem) {
                title = `${docItem.title} - Equalify Reflow`;
            }
        }

        document.title = title;
        setAnnouncement(title);
    }, [location.pathname]);

    return (
        <div aria-live="assertive" aria-atomic="true" className="sr-only">
            {announcement}
        </div>
    );
};
