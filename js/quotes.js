const quotes = [
  {
    quote: "학생이 되기를 멈춘 자는 한 번도 학생인 적이 없었던 자이다.",
    author: "조르지오 일리스",
  },
  {
    quote: "어떤 것을 완전히 알려거든 그것을 다른 이에게 가르쳐라.",
    author: "트라이언 에드워즈",
  },
  {
    quote: "많은 공부와 지식이 곧 지혜로 연결되는 것은 아니다.",
    author: "헤라클레이토스",
  },
  {
    quote: "사랑은 눈으로 보지 않고 마음으로 보는 거지.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote: "누군가를 사랑한다는 것은 자신을 그와 동일시 하는 것이다.",
    author: "아리스토텔레스",
  },
  {
    quote: "사랑의 첫 번째 의무는 상대방에 귀기울이는 것이다.",
    author: "폴 틸리히",
  },
  {
    quote: "친구라면 친구의 결점을 참고 견뎌야 한다.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote:
      "모든 언행을 칭찬하는 자보다 결점을 친절하게 말해주는 친구를 가까이하라.",
    author: "소크라테스",
  },
  {
    quote: "자기보다 못한 자를 벗으로 삼지 말라.",
    author: "공자",
  },
  {
    quote: "친구는 제 2의 자신이다.",
    author: "아리스토텔레스",
  },
  {
    quote: "미래를 결정짓고 싶다면 과거를 공부하라.",
    author: "공자",
  },
  {
    quote: "절대로 고개를 떨구지 말라. 고개를 치켜들고 세상을 똑바로 바라보라.",
    author: "헬렌 켈러",
  },
  {
    quote:
      "자존심은 강력한 마약이지만, 자가면역 체계에는 별 도움이 되지 않는다.",
    author: "스튜어트 스티븐스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const random_quote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = random_quote.quote;
author.innerHTML = random_quote.author;
