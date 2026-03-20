// config.js
const config = {
    top: {
        logoName: "Le.Safaiya",
        discordLink: "https://discord.gg/79h84dBNqX", 
        discordButtonText: "公式Discordサーバーに参加"
    },
    products: [
        { id: 1, name: "botソスコ", price: "500", stock: "無限", color: "#634ce7", desc: "お金を払ってチケットに乗せ作りたい内容を言えば作ります！\n" },
        { id: 2, name: "ロブロックススクリプト", price: "3000", stock: "無限", color: "#ff212c", desc: "【Netflix 4K UHD】\n・最高画質視聴\n・全映画ドラマ見放題\n・複数端末対応" },
        { id: 3, name: "Discordtokunn", price: "15", stock: 10, color: "#5865F2", desc: "【Discord Nitro】\n・サーバーブースト×2\n・特大ファイル送信可能\n・限定バッジ" }, // ←ここにカンマが必要でした！
        { id: 6, name: "Spotify", price: "200", stock: 0, color: "#1DB954", desc: "【Spotify Premium】\n・広告なし再生\n・オフライン保存可能\n・最短10分納品" }
    ],
    payment: {
        name: "PayPay",
        icon: "🅿️",
        link: "https://qr.paypay.ne.jp/p2p01_4iHzuQaV8lpV6m6a" 
    },
    purchase: {
        title: "ご注文ありがとうございます",
        message: "以下のボタンからPayPayでお支払い後、公式Discordサーバーにてチケットを作成し、決済完了のスクリーンショットを送信してください。",
        payButtonText: "PayPayで支払う",
        discordButtonText: "Discordで報告する",
        discordLink: "https://discord.gg/79h84dBNqX" 
    }
};