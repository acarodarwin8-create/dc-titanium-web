// src/components/cursos-v0/video-modal.tsx
// ============================================================
// Reproductor de Video HD Interactivo — Haute Elegance v2.0
// ============================================================
"use client";

import React, { useState, useRef, useEffect } from "react";
import { IconPlay, IconClock, IconAward } from "./icons";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
    tituloLeccion?: string;
    nombreCurso?: string;
}

export function VideoModal({
    isOpen,
    onClose,
    videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    tituloLeccion = "Demostración Técnica & Modelo Estructural en ETABS",
    nombreCurso = "ETABS Avanzado: Pórticos SMF Sísmicos",
}: VideoModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1);

    // Cierre con Tecla Escape
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) onClose();
            if (e.key === " " && isOpen && videoRef.current) {
                e.preventDefault();
                togglePlay();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, isPlaying]);

    if (!isOpen) return null;

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const current = videoRef.current.currentTime;
        const total = videoRef.current.duration || 1;
        setProgress((current / total) * 100);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!videoRef.current) return;
        const newTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(parseFloat(e.target.value));
    };

    const changeSpeed = (speed: number) => {
        if (!videoRef.current) return;
        videoRef.current.playbackRate = speed;
        setPlaybackRate(speed);
    };

    const toggleFullScreen = () => {
        if (!videoRef.current) return;
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(7, 7, 8, 0.92)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                padding: "1.5rem",
            }}
            onClick={onClose}
        >
            {/* Contenedor Modal */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "1000px",
                    borderRadius: "20px",
                    border: "1px solid rgba(140, 109, 70, 0.35)",
                    background: "linear-gradient(160deg, #161619 0%, #0D1018 100%)",
                    boxShadow: "0 30px 90px rgba(0,0,0,0.9), 0 0 50px rgba(212, 175, 55, 0.15)",
                    overflow: "hidden",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Cabecera del Reproductor */}
                <div
                    style={{
                        padding: "1.25rem 1.75rem",
                        borderBottom: "1px solid rgba(140, 109, 70, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "rgba(7, 7, 8, 0.5)",
                    }}
                >
                    <div>
                        <span
                            style={{
                                fontSize: "0.68rem",
                                fontFamily: "JetBrains Mono, monospace",
                                color: "var(--gold-primary, #D4AF37)",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: "0.2rem",
                            }}
                        >
                            VISTA PREVIA DE CLASE • {nombreCurso}
                        </span>
                        <h3
                            style={{
                                fontSize: "1.1rem",
                                fontWeight: 800,
                                color: "var(--ivory-pearl, #F2F0EB)",
                                margin: 0,
                            }}
                        >
                            {tituloLeccion}
                        </h3>
                    </div>

                    {/* Botón Cerrar X */}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar reproductor"
                        style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            border: "1px solid rgba(140, 109, 70, 0.3)",
                            background: "rgba(22, 22, 25, 0.8)",
                            color: "var(--ivory-pearl, #F2F0EB)",
                            fontSize: "1.1rem",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.25s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--gold-primary, #D4AF37)";
                            e.currentTarget.style.color = "var(--gold-primary, #D4AF37)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(140, 109, 70, 0.3)";
                            e.currentTarget.style.color = "var(--ivory-pearl, #F2F0EB)";
                        }}
                    >
                        ✕
                    </button>
                </div>

                {/* Área del Video */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#000" }}>
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        onTimeUpdate={handleTimeUpdate}
                        onClick={togglePlay}
                        style={{ width: "100%", height: "100%", objectFit: "contain", cursor: "pointer" }}
                    />

                    {/* Overlay Botón Play Central (cuando está pausado) */}
                    {!isPlaying && (
                        <div
                            onClick={togglePlay}
                            style={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "rgba(7, 7, 8, 0.4)",
                                cursor: "pointer",
                            }}
                        >
                            <div
                                style={{
                                    width: "72px",
                                    height: "72px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, var(--gold-primary, #D4AF37), var(--gold-light, #F0D78C))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 0 35px rgba(212, 175, 55, 0.6)",
                                    transition: "transform 0.25s ease",
                                }}
                            >
                                <span style={{ display: "inline-flex", width: "30px", height: "30px", marginLeft: "4px", color: "#070708" }}>
                                    <IconPlay />
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bar de Controles Custom Executive */}
                <div
                    style={{
                        padding: "1rem 1.5rem",
                        background: "rgba(7, 7, 8, 0.95)",
                        borderTop: "1px solid rgba(140, 109, 70, 0.2)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                    }}
                >
                    {/* Slider Timeline */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={progress}
                        onChange={handleSeek}
                        style={{
                            width: "100%",
                            height: "4px",
                            accentColor: "var(--gold-primary, #D4AF37)",
                            cursor: "pointer",
                        }}
                    />

                    {/* Botones de Acción */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                            <button
                                type="button"
                                onClick={togglePlay}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "var(--gold-primary, #D4AF37)",
                                    fontSize: "0.85rem",
                                    fontWeight: 800,
                                    cursor: "pointer",
                                    fontFamily: "JetBrains Mono, monospace",
                                }}
                            >
                                {isPlaying ? "❚❚ PAUSAR" : "▶ REPRODUCIR"}
                            </button>

                            <span
                                style={{
                                    fontSize: "0.75rem",
                                    fontFamily: "JetBrains Mono, monospace",
                                    color: "var(--titanium, #9E9A92)",
                                }}
                            >
                                1080p HD • Alta Definición
                            </span>
                        </div>

                        {/* Selector de Velocidades */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            {[1, 1.25, 1.5, 2].map((speed) => (
                                <button
                                    key={speed}
                                    type="button"
                                    onClick={() => changeSpeed(speed)}
                                    style={{
                                        padding: "0.2rem 0.5rem",
                                        borderRadius: "4px",
                                        border: "1px solid",
                                        borderColor: playbackRate === speed ? "var(--gold-primary, #D4AF37)" : "rgba(140, 109, 70, 0.2)",
                                        background: playbackRate === speed ? "rgba(212, 175, 55, 0.15)" : "transparent",
                                        color: playbackRate === speed ? "var(--gold-primary, #D4AF37)" : "var(--titanium, #9E9A92)",
                                        fontSize: "0.7rem",
                                        fontFamily: "JetBrains Mono, monospace",
                                        cursor: "pointer",
                                    }}
                                >
                                    {speed}x
                                </button>
                            ))}

                            <button
                                type="button"
                                onClick={toggleFullScreen}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "var(--titanium, #9E9A92)",
                                    fontSize: "0.9rem",
                                    cursor: "pointer",
                                    marginLeft: "0.5rem",
                                }}
                            >
                                ⛶
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
