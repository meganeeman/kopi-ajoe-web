"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Environment, Float } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect, MutableRefObject } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

function Bean({ position, rotation, scale, activeRef }: { position: [number, number, number]; rotation: [number, number, number]; scale: number; activeRef: MutableRefObject<boolean> }) {
    const meshRef = useRef<THREE.Mesh>(null);
    // Load texture
    const texture = useTexture("/coffee_bean.png");

    // Rotate slowly (skipped when off-screen to save CPU)
    useFrame((state, delta) => {
        if (!activeRef.current || !meshRef.current) return;
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
                {/* A sphere scaled to look vaguely bean-like */}
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial
                    map={texture}
                    color="#3e2723" // Dark coffee brown base
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
            ([entry]) => { activeRef.current = entry.isIntersecting; },
            { threshold: 0.01 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Create an array of random positions for the beans
    const beans = useMemo(() => {
        const items = [];
        for (let i = 0; i < 15; i++) {
            items.push({
                position: [
                    (Math.random() - 0.5) * 20, // x spread
                    (Math.random() - 0.5) * 20, // y spread
                    (Math.random() - 0.5) * 10 - 5 // z spread, mostly behind
                ] as [number, number, number],
                rotation: [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                ] as [number, number, number],
                scale: 0.5 + Math.random() * 0.5
            });
        }
        return items;
    }, []);

    return (
        <div ref={containerRef} className={cn("absolute inset-0 pointer-events-none", className)}>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} color="orange" intensity={0.5} />

                {beans.map((bean, i) => (
                    <Bean key={i} {...bean} activeRef={activeRef} />
                ))}
                {/* Add environment for better reflections if desired, though standard material works well without */}
            </Canvas>
        </div>
    );
}
