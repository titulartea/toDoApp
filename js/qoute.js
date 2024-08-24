// quote
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
  {
    quote: "어린애라고 모든 일을 용서받을거란 생각은 고정관념이죠",
    author: "- 침착맨",
  },
  {
    quote: "55 도발 왜 하냐고",
    author: "- 침착맨",
  },
  {
    quote: "임포스터가 아무도 죽이지 않았다면 임포스터는 당신들이야",
    author: "- 침착맨",
  },
  {
    quote: "고만해 미친놈들아",
    author: "- 침착맨",
  },
  {
    quote: "보조배터리도 없으면서 무슨 배짱으로 사진을 찍어달라고",
    author: "- 침착맨",
  },
  {
    quote: "군중심리에 한껏 취한 미치광이들",
    author: "- 침착맨",
  },
  {
    quote: "내 만화는 퍼가지도 않았어",
    author: "- 침착맨",
  },
  {
    quote: "도도새가 운영해도 니들보단 잘하겠다",
    author: "- 침착맨",
  },
  {
    quote: "이렇게 된 이상 청와대로 간다",
    author: "- 침착맨",
  },
  {
    quote: "명예로운 죽음을 당한거지",
    author: "- 침착맨",

    quote:
      "배는 항구에 있을 때 가장 안전하지만 그것이 배의 존재 이유는 아니잖아요?",
    author: "- 침착맨",
  },
  {
    quote:
      "힘을 다 쏟고 나면 아무것도 할 수가 없어요. 모든 일에는 강약 조절이 중요합니다.",
    author: "- 침착맨",
  },
  {
    quote: "이말년 작가님이요?저에요 저 3류 만화가 이말년이 저에요.",
    author: "- 침착맨",
  },
];

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;
