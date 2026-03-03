import { Outlet } from 'react-router-dom';
import { DocsSidebar } from './DocsSidebar';

export const DocsLayout = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <DocsSidebar />
                <div className="flex-1 min-w-0">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
