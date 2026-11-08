// 10주차 : 자바스크립트 이벤트 교사용 정답 (학생 배포 X)

console.log("10주차 시작!");


/* ───────── 10-1 찾기 → 바꾸기 ───────── */

// 과제 1
const notice = document.querySelector("#notice");
notice.textContent = "내일은 현장 체험학습!";
notice.style.color = "royalblue";


/* ───────── 10-2 click ───────── */

const helloBtn = document.querySelector("#helloBtn");
const message = document.querySelector("#message");

helloBtn.addEventListener("click", () => {
  message.textContent = "안녕하세요, 새싹반입니다!";
});

const menuBtn = document.querySelector("#menuBtn");
const dropdown = document.querySelector("#dropdown");

menuBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

// 과제 2
const darkBtn = document.querySelector("#darkBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 과제 3 (더 해보기 포함)
const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");
let likes = 0;

likeBtn.addEventListener("click", () => {
  likes = likes + 1;
  likeCount.textContent = likes;
  if (likes >= 10) {
    message.textContent = "인기 폭발!";
  }
});


/* ───────── 10-3 input ───────── */

const guestName = document.querySelector("#guestName");
const preview = document.querySelector("#preview");

guestName.addEventListener("input", () => {
  preview.textContent = guestName.value + "님, 반갑습니다!";
});

// 과제 4
const guestText = document.querySelector("#guestText");

guestText.addEventListener("input", () => {
  message.textContent = guestText.value;
});

// 과제 4 더 해보기
const textCount = document.querySelector("#textCount");

guestText.addEventListener("input", () => {
  textCount.textContent = `${guestText.value.length} / 30`;
});
