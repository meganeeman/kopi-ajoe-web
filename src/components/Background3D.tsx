"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Float } from "@react-three/drei";
import { useRef, useEffect, MutableRefObject } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface BeanItem {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
}

const STATIC_BEANS: BeanItem[] = [
    { position: [-6.2, 4.1, -4.5], rotation: [0.8, 1.2, 0.4], scale: 0.75 },
    { position: [5.8, -3.2, -3.2], rotation: [1.4, 0.6, 2.1], scale: 0.65 },
    { position: [-3.5, -5.4, -6.1], rotation: [2.3, 1.8, 0.9], scale: 0.85 },
    { position: [7.1, 5.2, -5.0], rotation: [0.5, 2.4, 1.3], scale: 0.70 },
    { position: [-8.4, -1.5, -4.2], rotation: [1.9, 0.4, 1.7], scale: 0.90 },
    { position: [3.3, 6.7, -6.5], rotation: [2.7, 1.1, 0.3], scale: 0.60 },
    { position: [-1.8, 3.5, -3.8], rotation: [0.3, 1.9, 2.5], scale: 0.80 },
    { position: [8.5, -4.8, -5.5], rotation: [1.6, 2.2, 1.0], scale: 0.72 },
    { position: [-5.6, -7.1, -4.8], rotation: [2.1, 0.8, 1.5], scale: 0.68 },
    { position: [4.7, -6.3, -6.0], rotation: [0.9, 1.5, 2.8], scale: 0.82 },
    { position: [-7.2, 6.4, -5.2], rotation: [1.2, 2.6, 0.7], scale: 0.64 },
    { position: [2.1, -4.2, -3.5], rotation: [2.5, 0.3, 1.8], scale: 0.78 },
    { position: [-4.3, 1.8, -5.8], rotation: [0.7, 1.7, 2.2], scale: 0.88 },
    { position: [6.4, 2.5, -4.0], rotation: [1.8, 0.9, 0.5], scale: 0.62 },
    { position: [0.5, -7.5, -5.4], rotation: [2.2, 2.0, 1.4], scale: 0.74 },
];

function Bean({
    position,
    rotation,
    scale,
    activeRef,
}: {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
    activeRef: MutableRefObject<boolean>;
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture("/coffee_bean.png");

    useFrame((_, delta) => {
        if (!activeRef.current || !meshRef.current) return;
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    map={texture}
                    color="#3e2723"
                    roughness={0.7}
                    metalness={0.1}
                />
            </mesh>
        </Float>
    );
}

export default function Background3D({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef(true);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                activeRef.current = entry.isIntersecting;
            },
            { threshold: 0.01 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className={cn("absolute inset-0 pointer-events-none", className)}>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="orange" intensity={0.5} />

                {STATIC_BEANS.map((bean, i) => (
                    <Bean
                        key={i}
                        position={bean.position}
                        rotation={bean.rotation}
                        scale={bean.scale}
                        activeRef={activeRef}
                    />
                ))}
            </Canvas>
        </div>
    );
}
