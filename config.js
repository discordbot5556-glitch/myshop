const config = {
    // サイトの基本情報
    top: {
        serverName: "Le.Safaiya",
        discordLink: "https://discord.gg/79h84dBNqX", // Discordサーバーの招待リンク
        payPayLink: "https://qr.paypay.ne.jp/p2p01_4iHzuQaV8lpV6m6a"    // PayPayの送金先リンク
    },

    // 管理画面用（今回は商品リストの構造を優先）
    adminPassword: "ia",

    // 商品リスト：ここを書き換えるだけでサイトに反映されます
    products: [
        { 
            id: 1, 
            name: "Netflix Premium", 
            price: "3000", 
            image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            desc: "最高画質で視聴可能なアカウントです。"
        },
        { 
            id: 2, 
            name: "Spotify Plan", 
            price: "500", 
            image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
            desc: "広告なしで音楽を楽しめます。"
        },
        { 
            id: 3, 
            name: "Private Script", 
            price: "5000", 
            image: "", // 画像URLがない場合は自動でアイコンになります
            desc: "独自の多機能スクリプトです。"
        }
    ]
};