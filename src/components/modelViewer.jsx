"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect, Suspense } from "react";
import * as THREE from "three";
const Model = () => {
    const { scene } = useGLTF("/scene.glb");

    const secondsPointer = scene.getObjectByName("Cylinder013");
    const minutePointer = scene.getObjectByName("Cylinder016");
    const hourPointer = scene.getObjectByName("Cylinder017");

    const [time, setTime] = useState(
        new Date().toLocaleString("en-US", { timeZone: "America/Bogota" })
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const hours = parseInt(time.split(" ")[1].split(":")[0]);
    const minutes = parseInt(time.split(" ")[1].split(":")[1]);
    const seconds = parseInt(time.split(" ")[1].split(":")[2]);

    secondsPointer.rotation.z = -(seconds / 60) * 2 * Math.PI;
    minutePointer.rotation.z = -(minutes / 60) * 2 * Math.PI;
    hourPointer.rotation.z = -(hours / 12 + minutes / 720) * 2 * Math.PI;

    return <primitive object={scene} scale={1.1} />;
};

const ModelViewer = () => {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
                    Loading...
                </div>
            }
        >
            <Canvas
                camera={{ position: [-10, 0, 0], fov: 50 }}
                gl={{ antialias: true, powerPreference: "high-performance" }}
                dpr={[1, 2]}
            >
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
