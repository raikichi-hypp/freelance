document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });
});

function recommendNextArticle() {
    const articles = [
        "パン屋のためのSNS集客術",
        "メルカリで売れる食品ランキング",
        "飲食店のコスト削減アイデア",
    ];
    const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    document.getElementById("next-article").innerText = `おすすめ記事: ${randomArticle}`;
}

