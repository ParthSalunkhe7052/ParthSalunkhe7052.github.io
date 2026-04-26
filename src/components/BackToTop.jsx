import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useScroll } from '../hooks/use-scroll';

const BackToTop = () => {
    const { isThresholdMet: visible } = useScroll(400);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className={`fixed right-6 z-40 p-2.5 rounded-lg border border-border bg-surface text-muted hover:text-text hover:border-muted transition-all duration-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
            style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
        >
            <ChevronUp size={18} />
        </button>
    );
};

export default BackToTop;
