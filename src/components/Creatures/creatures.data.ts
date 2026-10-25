import wispa from "../../assets/images/creatures/Wispa.webp";
import avalon from "../../assets/images/creatures/Avalon.webp";
import brenn from "../../assets/images/creatures/Brenn.webp";
import cameo from "../../assets/images/creatures/Cameo.webp";
import gelsey from "../../assets/images/creatures/Gelsey.webp";
import kaida from "../../assets/images/creatures/Kaida.webp";

import flannery from "../../assets/images/creatures/Flannery.webp";
import aristotleAndSkye from "../../assets/images/creatures/Aristotle_and_Skye.webp";

export type Creature = {
  id: string;
  name: string;
  image: string;
  position: string;
  alt: string;
  fit?: "cover" | "contain";
};

export const creatures: Creature[] = [
  {
    id: "wispa",
    name: "Wispa",
    image: wispa,
    position: "50% 18%",
    alt: "Wispa, a handmade fairy with purple and gold braids, a grey pointed hat and delicate dark wings",
  },
  {
    id: "avalon",
    name: "Avalon",
    image: avalon,
    position: "50% 27%",
    alt: "Avalon, a handmade woodland creature with pale curls, a blue pointed hat and a tiny silver lantern",
  },
  {
    id: "aristotle-and-skye",
    name: "Aristotle and Skye",
    image: aristotleAndSkye,
    position: "72% 35%",
    alt: "Aristotle and Skye, a purple-haired handmade fairy sitting on a pearly pink dragon with translucent purple wings",
  },
  {
    id: "brenn",
    name: "Brenn",
    image: brenn,
    position: "50% 25%",
    alt: "Brenn, a handmade fairy in an amber outfit with colourful braids, translucent wings and a staff",
  },
  {
    id: "kaida",
    name: "Kaida",
    image: kaida,
    position: "50% 45%",
    alt: "Kaida, a small handmade green dragon with purple wings and a little brown hat, sitting on moss",
  },
  {
    id: "cameo",
    name: "Cameo",
    image: cameo,
    position: "50% 22%",
    alt: "Cameo, a handmade fairy in a green pointed hat and coat, with translucent wings and a golden key",
  },
  {
    id: "gelsey",
    name: "Gelsey",
    image: gelsey,
    position: "50% 28%",
    alt: "Gelsey, a handmade fairy with pale hair, a stitched brown hat and outfit, and sparkling translucent wings",
  },
  {
    id: "flannery",
    name: "Flannery",
    image: flannery,
    position: "50% 18%",
    alt: "Flannery, a handmade golden dragon with little horns, purple wings and a large dark key, sitting on moss",
  },
];
