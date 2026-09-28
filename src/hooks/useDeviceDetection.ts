"use client";

import { useSyncExternalStore } from "react";

export type DeviceType = "ios" | "android" | "desktop" | "unknown";

function getSnapshot(): DeviceType {
    if (typeof window === "undefined") return "unknown";
    const ua = window.navigator.userAgent || "";
    const isIOS = /iPad|iPhone|iPod/.test(ua) || (window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
    if (isIOS) return "ios";
    if (/Android/i.test(ua)) return "android";
    return "desktop";
}

function getServerSnapshot(): DeviceType {
    return "unknown";
}

function subscribe() {
    return () => {};
}

export function useDeviceDetection(): { device: DeviceType; isMobile: boolean } {
    const device = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return {
        device,
        isMobile: device === "ios" || device === "android",
    };
}
