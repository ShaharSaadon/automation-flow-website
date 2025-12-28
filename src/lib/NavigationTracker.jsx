import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavigationTracker() {
    const location = useLocation();

    // Update page title based on route
    useEffect(() => {
        // Simple analytics tracking could be added here
        // e.g., Google Analytics pageview tracking
        if (window.gtag) {
            window.gtag('event', 'page_view', {
                page_path: location.pathname + location.search
            });
        }
    }, [location]);

    return null;
}