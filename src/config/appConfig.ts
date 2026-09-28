export interface AppConfig {
    isLive: boolean;
    appName: string;
    packageName: string;
    iosBundleId: string;
    playStoreUrl: string;
    appStoreUrl: string;
    whatsappOrderUrl: string;
    supportEmail: string;
    supportPhone: string;
}

export const APP_CONFIG: AppConfig = {
    isLive: false,
    appName: "Kopi Ajoe",
    packageName: "com.kopiajoe.app",
    iosBundleId: "com.kopiajoe.app",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.kopiajoe.app",
    appStoreUrl: "https://apps.apple.com/app/kopi-ajoe/idcom.kopiajoe.app",
    whatsappOrderUrl: "https://wa.me/628212691657?text=Halo%20Kopi%20Ajoe%2C%20saya%20ingin%20pesan%20antar%20kopi",
    supportEmail: "admin@kopiajoe.com",
    supportPhone: "+62 821-2691-657",
};
