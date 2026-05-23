import type { Photo } from "@/types";

const ASSET_BASE_URL = "/bucket/photos";

export function getPhotos(): Photo[] {
  return [
    {
      id: "stockholm-city-line",
      src: `${ASSET_BASE_URL}/stockholm-city-line.jpeg`,
      width: 4032,
      height: 2268,
      caption: "City/shore line - Stockholm, Sweden",
      location: "stockholm",
    },
    {
      id: "stockholm-autumn",
      src: `${ASSET_BASE_URL}/stockholm-autumn.jpeg`,
      width: 2268,
      height: 4032,
      caption: "Autumn leaves - Stockholm, Sweden",
      location: "stockholm",
      tall: true,
    },
    {
      id: "bali-kelingking-beach",
      src: `${ASSET_BASE_URL}/bali-kelingking-beach.jpeg`,
      width: 2161,
      height: 3841,
      caption: "Kelingking Beach - Nusa Penida, Bali, Indonesia",
      location: "bali",
      tall: true,
    },
    {
      id: "bali-ulun-danu-bratan-temple",
      src: `${ASSET_BASE_URL}/bali-ulun-danu-bratan-temple.jpeg`,
      width: 3838,
      height: 2159,
      caption: "Ulun Danu Bratan Temple - Bali, Indonesia",
      location: "bali",
    },
    {
      id: "budapest-fisherman-chalet",
      src: `${ASSET_BASE_URL}/budapest-fisherman-chalet.jpeg`,
      width: 3024,
      height: 4032,
      caption: "Fisherman's Bastion - Budapest, Hungary",
      location: "budapest",
      tall: true,
    },
    {
      id: "budapest-st-stephens-basilica",
      src: `${ASSET_BASE_URL}/budapest-st-stephens-basilica.jpeg`,
      width: 2268,
      height: 4032,
      caption: "St. Stephen's Basilica - Budapest, Hungary",
      location: "budapest",
      tall: true,
    },
    {
      id: "kiruna-church-tower",
      src: `${ASSET_BASE_URL}/kiruna-church-tower.jpeg`,
      width: 2226,
      height: 3958,
      caption: "Church tower - Kiruna, Sweden",
      location: "kiruna",
      tall: true,
    },
    {
      id: "lulea-outskirts",
      src: `${ASSET_BASE_URL}/lulea-outskirts.jpeg`,
      width: 3024,
      height: 4032,
      caption: "City outskirts - Luleå, Sweden",
      location: "lulea",
      tall: true,
    },
  ];
}

export function getStripPhotos(): Photo[] {
  return getPhotos().slice(0, 4);
}
