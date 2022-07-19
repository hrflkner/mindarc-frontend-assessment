import { useState, useEffect } from 'react';

export const useWindowSize = () => {
    const [size, setSize] = useState<Number[]>([
        window.innerHeight,
        window.innerWidth,
    ]);

    useEffect(() => {
        function handleResize() {
            setSize([window.innerHeight, window.innerWidth]);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return size;
};
