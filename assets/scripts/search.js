const browseAllItems = [
  {
    title: "Podcasts",
    imgSrc: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg",
    bgColor: "rgb(245, 155, 35)",
    href: "/podcasts",
  },
  {
    title: "Made For You",
    imgSrc: "https://t.scdn.co/images/68433b0ee5b5465b8e926c42b84cbcdb.jpeg",
    bgColor: "rgb(160, 195, 210)",
    href: "/for-you",
  },
  {
    title: "Charts",
    imgSrc: "https://t.scdn.co/images/4b7472015a274eadbc00119f5141e548.jpeg",
    bgColor: "rgb(75, 145, 125)",
    href: "/charts",
  },
  {
    title: "New Releases",
    imgSrc: "https://t.scdn.co/images/acc7b5d7b1264d0593ec05c020d0a689.jpeg",
    bgColor: "rgb(160, 195, 210)",
    href: "/home",
  },
  {
    title: "Discover",
    imgSrc: "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
    bgColor: "rgb(180, 155, 200)",
    href: "/discover",
  },
  {
    title: "Concerts",
    imgSrc: "https://t.scdn.co/images/60075fbc12304968941c7445a971fb9d.jpeg",
    bgColor: "rgb(255, 100, 55)",
    href: "/concerts",
  },
  {
    title: "Mood",
    imgSrc: "https://t.scdn.co/images/baf681efc57145e180589e027496b101.jpeg",
    bgColor: "rgb(80, 155, 245)",
    href: "/mood",
  },
  {
    title: "Chill",
    imgSrc: "https://t.scdn.co/images/2470fe22d03a4375a9501dce8cfb2b8c.jpeg",
    bgColor: "rgb(160, 195, 210)",
    href: "/chill",
  },
  {
    title: "Flamenco",
    href: "/flamenco",
  },
  {
    title: "Workout",
    imgSrc: "https://t.scdn.co/images/0093f59664854b619e34a51d39d35a2f.jpeg",
    bgColor: "rgb(255, 200, 100)",
    href: "/workout",
  },
  {
    title: "Higher Ground",
    imgSrc: "https://i.scdn.co/image/4f26db8239305bef29ef956b331b31407cbf51f9",
    bgColor: "rgb(160, 195, 210)",
    href: "/higher-ground",
  },
  {
    title: "dance",
    href: "/dance-ground",
  },
];

const createItem = (item) => {
  let img = "";
  if (item.imgSrc) {
    img = `<img class="item-img" src="${item.imgSrc}" alt="${item.title}">`;
  } else {
    img = `<div class="item-img" style="background-color:rgb(127, 127, 127);"></div>`;
  }

  return `
    <a
      class="grid-item"
      style="background-color: ${item.bgColor};"
      href = "${item.href}">
          <h3>${item.title}</h3>
          ${img}
    </a >
    `;
};
window.onload = () => {
  const browseAllDiv = document.querySelector(".browse-all");
  console.log("browseAllDiv", browseAllDiv);

  browseAllDiv.innerHTML = browseAllItems
    .map((item) => {
      return createItem(item);
    })
    .join(" ");
};
