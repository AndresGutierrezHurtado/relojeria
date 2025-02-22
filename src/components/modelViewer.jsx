"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect, Suspense } from "react";
import { MeshPhysicalMaterial } from "three";

const Model = () => {
    const { scene } = useGLTF("/watch.glb");
    console.log(scene);

    const metalMaterial = new MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 1,
        roughness: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        reflectivity: 0.5,
    });

    return <primitive object={scene} scale={1.1} />;
};

const ModelViewer = () => {
    return (
        <Suspense fallback={<div className="w-full h-full flex flex-col gap-2 justify-center items-center">Loading...</div>}>
            <Canvas camera={{ position: [-10, 0, 0], fov: 50 }} gl={{ antialias: true, powerPreference: "high-performance" }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, 10, 5]} intensity={0.5} />
                <directionalLight position={[0, 10, 0]} intensity={0.5} />
                <Model />
                <OrbitControls />
            </Canvas>
        </Suspense>
    );
};

export default ModelViewer;

