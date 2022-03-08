import scissorsImg from "./images/scissors.svg";
import grzebienImg from "./images/grzebien.svg";
import mencutImg from "./images/mencut.png";
import suszarkaImg from "./images/drying.png";
import farbaImg from "./images/farba.png";

export const serviceArticles = [
  {
    id: 1,
    icon: scissorsImg,
    title: "Strzyżenie damskie",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At culpaconsequuntur iure enim magni perferendis quos sequi! Repellendustotam eum officia magni explicabo, a beatae! Dignissimos aliquamdolore fugiat suscipit. Quis totam, et reprehenderit at quiadeserunt harum possimus vitae fugiat, voluptate suscipit velitrepellendus ea praesentium sapiente maxime. Dolore.",
  },
  {
    id: 2,
    icon: mencutImg,
    title: "Strzyżenie męskie",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At culpaconsequuntur iure enim magni perferendis quos sequi! Repellendustotam eum officia magni explicabo, a beatae! Dignissimos aliquamdolore fugiat suscipit. Quis totam, et reprehenderit at quiadeserunt harum possimus vitae fugiat, voluptate suscipit velitrepellendus ea praesentium sapiente maxime. Dolore.",
  },
  {
    id: 3,
    icon: suszarkaImg,
    title: "Pielęgnacja",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At culpaconsequuntur iure enim magni perferendis quos sequi! Repellendustotam eum officia magni explicabo, a beatae! Dignissimos aliquamdolore fugiat suscipit. Quis totam, et reprehenderit at quiadeserunt harum possimus vitae fugiat, voluptate suscipit velitrepellendus ea praesentium sapiente maxime. Dolore.",
  },
  {
    id: 4,
    icon: farbaImg,
    title: "Koloryzacja",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At culpaconsequuntur iure enim magni perferendis quos sequi! Repellendustotam eum officia magni explicabo, a beatae! Dignissimos aliquamdolore fugiat suscipit. Quis totam, et reprehenderit at quiadeserunt harum possimus vitae fugiat, voluptate suscipit velitrepellendus ea praesentium sapiente maxime. Dolore.",
  },
  {
    id: 5,
    icon: grzebienImg,
    title: "Upięcia okolicznościowe",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At culpaconsequuntur iure enim magni perferendis quos sequi! Repellendustotam eum officia magni explicabo, a beatae! Dignissimos aliquamdolore fugiat suscipit. Quis totam, et reprehenderit at quiadeserunt harum possimus vitae fugiat, voluptate suscipit velitrepellendus ea praesentium sapiente maxime. Dolore.",
  },
];

export const priceData = {
  strzyzenie: {
    items: [
      {
        id: 1,
        name: "męskie krótkie",
        price: 30,
      },
      {
        id: 2,
        name: "damskie krótkie",
        price: 50,
      },
      {
        id: 3,
        name: "męskie długie",
        price: 40,
      },
      {
        id: 4,
        name: "damskie długie",
        price: 60,
      },
      {
        id: 5,
        name: "chłopca do lat 8",
        price: 20,
      },
      {
        id: 6,
        name: "dziewczynki do lat 8",
        price: 25,
      },
    ],
  },
  koloryzacja: {
    items: [
      {
        id: 1,
        name: "koloryzacja na jeden kolor",
        price: 150,
      },
      {
        id: 2,
        name: "dekoloryzacja + farba",
        price: 350,
      },
      {
        id: 3,
        name: "baleyage",
        price: 200,
      },
      {
        id: 4,
        name: "baleyage + odrost",
        price: 300,
      },
      {
        id: 5,
        name: "refleksy",
        price: 100,
      },
      {
        id: 6,
        name: "podjaśnienie odrostu",
        price: 100,
      },
      {
        id: 7,
        name: "ombre",
        price: 250,
      },
      {
        id: 8,
        name: "ombre + farba",
        price: 330,
      },
    ],
  },
  upiecia: {
    items: [
      {
        id: 1,
        name: "francuz",
        price: 30,
      },
      {
        id: 2,
        name: "fryzura ślubna",
        price: 300,
      },
      {
        id: 3,
        name: "loki / fale",
        price: 150,
      },
      {
        id: 4,
        name: "fryzura okolicznościowa",
        price: 100,
      },
    ],
  },
  pielegnacja: {
    items: [
      {
        id: 1,
        name: "mycie + modelowanie",
        price: 50,
      },
      {
        id: 2,
        name: "mycie + prostowanie",
        price: 50,
      },
      {
        id: 3,
        name: "odsiwianie",
        price: 60,
      },
      {
        id: 4,
        name: "przedłużanie włosów",
        price: 1000,
      },
      {
        id: 5,
        name: "kuracja kreatynowa",
        price: 80,
      },
    ],
  },
};
