import wispa from "../../assets/images/creatures/Wispa.webp";
import avalon from "../../assets/images/creatures/Avalon.webp";
import brenn from "../../assets/images/creatures/Brenn.webp";
import cameo from "../../assets/images/creatures/Cameo.webp";
import gelsey from "../../assets/images/creatures/Gelsey.webp";
import kaida from "../../assets/images/creatures/Kaida.webp";

export const creatures = [
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
    id: "brenn",
    name: "Brenn",
    image: brenn,
    position: "50% 25%",
    alt: "Brenn, a handmade fairy in an amber outfit with colourful braids, translucent wings and a staff",
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
    id: "kaida",
    name: "Kaida",
    image: kaida,
    position: "50% 45%",
    alt: "Kaida, a small handmade green dragon with purple wings and a little brown hat, sitting on moss",
  },
];
export type Creature = (typeof creatures)[number];
