import { useEffect } from 'react';
import HALO from 'vanta/src/vanta.halo'

const AnimatedBackground = () => {
    useEffect(() => {
        const halo = HALO({
            el: '#vanta',
            baseColor: 0x000000,
            backgroundColor: 0x102033,
            amplitudeFactor: 1.0,
            size: 1.0,
            gyroControls: false
        });

        document.addEventListener('scroll', () => {
            let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
            
            let incrementor = Math.max(window.scrollY / 100, 1);
            halo.setOptions({
                size: incrementor
            })
        })
    }, [])
    return (
        <div id="vanta" className='animated-background'></div>
    );
};

export default AnimatedBackground