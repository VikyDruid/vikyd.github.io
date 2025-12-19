// ============================================
// VIKY'S WORKSHOP - 网站内容配置文件
// 注意：文字需要用引号 "" 包裹，逗号不能少
// ============================================

const CONFIG = {
    // --- 1. 个人信息 ---
    profile: {
        name: "VIKY",
        title: "数字工匠 / UI设计 / 复古未来主义",
        subtitle: "构建逻辑与霓虹梦想交汇的界面",
        // 状态栏文字
        status: "当前状态: 接受自由约稿中 (Available)",
        lastUpdate: "2025.12.20",
        // 头像图片链接 (可以是本地文件路径，也可以是网络链接)
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&q=80",
        // 自我介绍
        intro: "我是 Viky，一名游走于代码与像素之间的数字设计师。我痴迷于 80 年代的模拟美学，并致力于用现代技术重现那份温情。在这里，每一个像素都是精心计算的结果。"
    },

    // --- 2. 社交链接 (跳转地址) ---
    social: {
        github: "https://github.com/yourname",
        dribbble: "https://dribbble.com/yourname",
        linkedin: "https://linkedin.com/in/yourname",
        email: "mailto:yourname@example.com" // mailto: 开头会自动唤起邮件客户端
    },

    // --- 3. 作品列表 (在这里添加或删除作品) ---
    // cat (分类) 必须是以下之一: "UI", "Web", "Brand", "Art"
    projects: [
        { 
            id: 1, 
            title: "NEON GENESIS", 
            cat: "UI", 
            year: "2024", 
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", 
            desc: "赛博朋克游戏HUD界面系统设计，强调高对比度与信息层级。", 
            tools: ["Figma", "AE"] 
        },
        { 
            id: 2, 
            title: "DATA VAULT", 
            cat: "Web", 
            year: "2023", 
            img: "https://images.unsplash.com/photo-1515630278258-407f66498911?w=800&q=80", 
            desc: "加密数据存储服务着陆页，使用WebGL粒子特效。", 
            tools: ["React", "WebGL"] 
        },
        // 复制上面的花括号块 {...}, 来添加新作品...
    ]
};
