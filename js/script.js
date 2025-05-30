const fortunes = [
  { text: "M字むぎ吉", img: "images/IMG_0673.jpg"},
  { text: "のびむぎ吉", img: "images/IMG_2463.jpg"},
  { text: "すやむぎ大吉", img: "images/IMG_2489.jpg"},
  { text: "けつむぎ吉", img: "images/IMG_2616.jpg"},
  { text: "がじむぎ吉", img: "images/IMG_2664.jpg"},
  { text: "アザラシ！！！！", img: "images/IMG_2711.jpg"},
  { text: "最強むぎかわ大吉", img: "images/IMG_2720.jpg"},
  { text: "お手手のばしむぎ吉", img: "images/IMG_2749.jpg"},
  { text: "目付き悪むぎかわ吉", img: "images/IMG_2943.jpg"},
  { text: "あくびむぎ吉", img: "images/IMG_2946.jpg"},
  { text: "お手手たらしむぎ吉", img: "images/IMG_2947.jpg"},
  { text: "すこやかむぎ最強かわ大大大吉", img: "images/IMG_2972.jpg"},
];

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resultDiv = document.getElementById("result");
const fortuneImage = document.getElementById("fortuneImage");
const fortuneText = document.getElementById("fortuneText");

let intervalId = null;

startBtn.addEventListener("click", () => {
  // ルーレット開始
  resultDiv.style.display = "block";
  startBtn.style.display = "none";
  stopBtn.disabled = false;
  stopBtn.style = "block";

  // ルーレットの画像とテキストを高速切り替え
  intervalId = setInterval(() => {
    const randIndex = Math.floor(Math.random() * fortunes.length);
    fortuneImage.src = fortunes[randIndex].img;
    fortuneText.textContent = fortunes[randIndex].text;
  }, 100);
});

stopBtn.addEventListener("click", () => {
  // ルーレット停止
  clearInterval(intervalId);
  startBtn.style.display = "block";
  stopBtn.disabled = true;
  stopBtn.style.display = "none";
});