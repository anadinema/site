import type { Photo } from "@/types";

export function getPhotos(): Photo[] {
  return [
    {
      id: "sthlm1",
      src: "https://picsum.photos/seed/sthlm1/600/900",
      width: 600,
      height: 900,
      caption: "Gamla Stan in January",
      location: "stockholm",
      tall: true,
    },
    {
      id: "sthlm3",
      src: "https://picsum.photos/seed/sthlm3/600/400",
      width: 600,
      height: 400,
      caption: "First snow",
      location: "djurgården",
    },
    {
      id: "sthlm5",
      src: "https://picsum.photos/seed/sthlm5/600/400",
      width: 600,
      height: 400,
      caption: "Morning ferry",
      location: "södermalm",
    },
    {
      id: "sthlm9",
      src: "https://picsum.photos/seed/sthlm9/600/900",
      width: 600,
      height: 900,
      caption: "Alley off Hornsgatan",
      location: "stockholm",
      tall: true,
    },
    {
      id: "sthlm11",
      src: "https://picsum.photos/seed/sthlm11/600/400",
      width: 600,
      height: 400,
      caption: "Market day",
      location: "östermalm",
    },
    {
      id: "sthlm13",
      src: "https://picsum.photos/seed/sthlm13/600/400",
      width: 600,
      height: 400,
      caption: "Late light",
      location: "lidingö",
    },
    {
      id: "sthlm15",
      src: "https://picsum.photos/seed/sthlm15/600/400",
      width: 600,
      height: 400,
      caption: "Rainy platform",
      location: "t-centralen",
    },
    {
      id: "sthlm17",
      src: "https://picsum.photos/seed/sthlm17/600/400",
      width: 600,
      height: 400,
      caption: "Archipelago",
      location: "vaxholm",
    },
  ];
}

export function getStripPhotos(): Photo[] {
  return getPhotos()
    .filter((p) => !p.tall)
    .slice(0, 4)
    .map((p) => ({
      ...p,
      src: p.src.replace("600/400", "400/300"),
      width: 400,
      height: 300,
    }));
}
