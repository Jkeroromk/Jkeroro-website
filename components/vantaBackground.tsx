"use client";

import React, { useEffect, useRef, useState } from "react";

export default function VantaBackground() {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && (window as any).VANTA && !vantaEffect) {
            const BIRDS = (window as any).VANTA.BIRDS;
            if (BIRDS) {
                const effect = BIRDS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    backgroundAlpha: 0.0,
                    // BIRDS-specific options:
                    color1: 0xffffff,
                    color2: 0x0,
                    birdSize: 1,
                    speedLimit: 5.0,
                    separation: 30.0,
                    cohesion: 20.0,
                    quantity: 3.0,
                });
                setVantaEffect(effect);
            }
        }
        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
            }
        };
    }, [vantaEffect]);

    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            <video
                src="/background.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div ref={vantaRef} className="absolute inset-0" />
        </div>
    );
}
