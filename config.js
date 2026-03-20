// ==========================================
// ★ 設定ファイル：ここを書き換えて更新
// ==========================================

// 1. トップ画面の設定（ここを追加！）
const topConfig = {
    logoName: "Le.Safaiya",
    discordLink: "https://discord.gg/79h84dBNqX", // あなたのDiscord招待リンクに書き換えてください
    discordButtonText: "公式Discordサーバー"
};

// 2. 商品リストの設定
// stock: "在庫数" を追加しました
const productData = [
    { 
        id: 1, 
        name: "Spotify", 
        price: "120", 
        stock: "15", // 在庫数を追加
        color: "#1DB954",
        description: "【Spotify Premium】\n・広告なしで音楽再生\n・オフライン再生対応\n・最短10分でお届けします。"
    },
    { 
        id: 2, 
        name: "Netflix", 
        price: "90",  
        stock: "8", // 在庫数を追加
        color: "#E50914",
        description: "【Netflix 4K UHD】\n・最高画質での視聴が可能\n・全映画・ドラマが見放題\n・複数端末での同時視聴対応"
    },
    { 
        id: 3, 
        name: "Discord", 
        price: "500", 
        stock: "25", // 在庫数を追加
        color: "#5865F2",
        description: "【Discord Nitro】\n・サーバーブースト付き\n・カスタム絵文字使用可能\n・最大500MBのアップロード容量"
    }
];

// 3. 支払い方法の設定
const paymentMethods = [
    { name: "PayPay", icon: "🅿️" },
    { name: "仮想通貨 (BTC/ETH)", icon: "💎" },
    { name: "クレジットカード", icon: "💳" },
    { name: "銀行振込", icon: "🏦" }
];

// 4. 購入確定後の案内設定
const purchaseConfig = {
    title: "ご注文ありがとうございます！",
    message: "お支払いと商品の受け渡しを完了するために、公式Discordサーバーにてチケットを作成してください。",
    buttonText: "公式Discordを開く",
    link: "https://discord.gg/yourlink" // あなたのDiscordリンクに書き換えてください
};