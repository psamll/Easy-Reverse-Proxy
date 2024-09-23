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
        domain: "www.example1.com",
        url: "https://youtube.com/",
        enable: true
    },
    {
        domain: "www.example2.com",
        url: "https://google.com/",
        enable: true
    }
];
