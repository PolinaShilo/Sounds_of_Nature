import { v4 as uuidv4 } from "uuid";
import { faker } from '@faker-js/faker';
function chillHop() {
  return [
    
    {
    name: "Spring Birds",
    cover:
    "https://celes.club/uploads/posts/2022-11/thumbs/1667364972_22-celes-club-p-oboi-krasivie-ptitsi-vkontakte-26.jpg",
    artist: "Nature",
    audio: "https://zvukipro.com/uploads/files/2019-04/1554211218_morning-meadow-birdsongs-looping_zyb7nhnu.mp3",
    color: ["#205950", "#2ab3bf"],
    id: 1,
    
     comment: faker.lorem.paragraph(),
      active: false,
    },
    {
      name: "Rain",
      cover:
      "https://celes.club/uploads/posts/2022-11/thumbs/1667325295_60-celes-club-p-oboi-dozhd-na-telefon-pinterest-66.jpg",
      artist:"Nature",
      audio: "https://zvukipro.com/uploads/files/2021-04/1618321875_e7d2ef78955884046d01dc5bbb22b868.mp3",
      color: ["#253434", "#cd94bf"],
      id: 2,
      comment: faker.lorem.paragraph(),
      active:false,
    },
    {
      name: "Tropical forest",
      cover:"https://celes.club/uploads/posts/2022-11/thumbs/1667269483_6-celes-club-p-dzhungli-fon-oboi-7.jpg",
      artist: "Nature",
      audio: "https://zvukipro.com/uploads/files/2021-03/1616829225_6f234871ff7bb7f.mp3",
      color:["#284555", "#ca43bf"],
      id: 3,
      comment: faker.lorem.paragraph(),
      active: false,
    },
    {
      name: "Snowflakes",
      cover: "https://celes.club/uploads/posts/2022-09/1662363197_64-celes-club-p-samaya-bolshaya-snezhinka-pinterest-69.jpg",
      artist: "Nature",
      audio: "https://zvukipro.com/uploads/files/2019-12/1576658666_winter-ambience-snow-falls_wa-02.mp3",
      color:["#270000", "#abc403"],
      id: 4,
      comment: faker.lorem.paragraph(),
      active: false,
    },
    {
      name: "Mediterranean",
      cover:"https://celes.club/uploads/posts/2022-11/thumbs/1667405036_57-celes-club-p-spokoinii-fon-dlya-rabochego-stola-krasivo-59.jpg",
      artist:"Nature",
      audio: "https://zvukipro.com/uploads/files/2019-08/1566024591_0eb24fcad1bffed.mp3",
      color:["#240011", "#a3b4c5"],
      id: 5,
      comment: faker.lorem.paragraph(),
      active: false,
    },
    {
      name: "Waterfall",
      cover: "https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXJmYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      artist: "Nature",
      audio: "https://zvukipro.com/uploads/files/2018-11/1542732170__-z_uki-zhi_oy-prirody-vodopad.mp3",
      color:["210001", "#bc435d"],
      id: 6,
      comment: faker.lorem.paragraph(),
      active: false,
    },
    {
      name: "Forest Spring",
      cover: "https://images.unsplash.com/photo-1510586729411-a44a3001b5f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZvcmVzdCUyMHNwcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      artist: "Nature",
      audio: "https://zvukipro.com/uploads/files/2017-11/1511289906_zvuk-rucheyka-pod-mostom1.mp3",
      color:["211367", "#cb00ae"],
      id: 7,
      comment: faker.lorem.paragraph(),
      active: false,
    },
  ];
}

export default chillHop;
