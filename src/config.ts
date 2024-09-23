export let PORT = 370; // 端口

export interface Proxy {
    domain: string;
    url: string;
    enable: boolean;
    replaces?: {
        old: string,
        new: string
    }[];
}

// 代理
let PROXYS: Proxy[] = [
    {
        domain: "google-sand-rho.vercel.app",
        url: "www.youtube.com/",
        enable: true
    },
    {
        domain: "www.example2.com",
        url: "www.google.com/",
        enable: true
    }
];
