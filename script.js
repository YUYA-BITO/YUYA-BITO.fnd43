'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const colleagues = ["奥村さん", "平石さん", "富士本さん", "沖館さん", "田崎さん", "松根さん", "後藤さん", "垰坂さん", "古瀬さん", "北さん", "堀部さん", "藤井さん", "深津さん"];

const studyMates = ["Akiさん", "Yutoさん", "Shimoさん", "Kazumaさん"];

const instructors = ["Tasukuさん", "Naoさん", "Reitoさん", "Hongiさん", "Uraraさん", "Masaさん", "Seijirouさん", "Tomoさん", "Satoshiさん"];

const slides = [
    {
        category: "・・・・・・・・・・・・・・・・・・・", 
        names: "FND基礎講習 20日間を終えて･･これまでの感謝を伝えさせてください！" ,
        msg: "・・・・・・・・・・・・・"
    },
    {
        category: "職場上司", 
        names: [colleagues[0], colleagues[1]], 
        msg: "学びの時間を頂き感謝しています。ありがとうございました！"
    },
    {
        category: "職場 組メンバー",
        names: colleagues.slice(2),
        msg: "日々の業務を粛々と進めてくれて感謝しています。ありがとうございました！"
    },
    {
        category: "FND43メンバー",
        names: [studyMates[0]],
        msg: "Akiさんの積極的な『学びの姿勢、自ら共有する発信力』とても素敵です。ありがとうございました！"
    },
    {
        category: "FND43メンバー",
        names: [studyMates[1]],
        msg: "Yutoさんの『常に落ち着いた姿』とても頼もしかったです。ありがとうございました！"
    },
    {
        category: "FND43メンバー",
        names: [studyMates[2]],
        msg: "Shimoさんの『真剣に向き合う姿』とても刺激になりました。ありがとうございました！"
    },
    {
        category: "FND43メンバー",
        names: [studyMates[3]],
        msg: "Kazumaさんの『相手に寄り添う姿勢』とても学びになりました。ありがとうございました！"
    },
    {
        category: "インストラクターの皆様 （講習回数順に表示させていただきます）",
        names: instructors,
        msg: "温かいご指導により、この日を迎えることができました！ありがとうございました！"
    }
];

let currentStep = 0;

const categoryEl = document.getElementById("target-category");
const namesEl = document.getElementById("target-names");
const messageEl = document.getElementById("message-text");
const pageEl = document.getElementById("page-number");

function updateSlide() {
    const data = slides[currentStep];
    categoryEl.innerText = data.category;
    messageEl.innerText = data.msg;
    pageEl.innerText = `${currentStep + 1} / ${slides.length}`;

    let nameText = "";

    if (data.names.length > 5) {
        for (const name of data.names) {
            nameText += name + " ";
        }
    } else {
        nameText = data.names.join("、");
        namesEl.style.fontSize = "1.5rem";
    }
    namesEl.innerText = nameText;
}

document.getElementById("next-btn").addEventListener("click",()=> {
    if (currentStep < slides.length - 1) {
        currentStep++;
        updateSlide();
    } else {
        alert("お時間頂き ありがとうございました！");
    }
});

document.getElementById("prev-btn").addEventListener("click", ()=> {
    if (currentStep > 0) {
        currentStep--;
        updateSlide();
    }
});

updateSlide();
