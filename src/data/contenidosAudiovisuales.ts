export interface IContenidoAudiovisual {
  id: number;
  nombre: string;
  descripcion: string;
  generos: number[];
  tipoId: number;
  imageUrl: string;
}

export const contenidosAudiovisuales: IContenidoAudiovisual[] = [
  {
    id: 1,
    nombre: "Breaking Bad",
    descripcion:
      "Un profesor de química se convierte en fabricante de metanfetaminas.",
    generos: [1, 3, 10],
    tipoId: 1,
    imageUrl: "https://place-hold.it/400x600",
  },
  {
    id: 2,
    nombre: "Stranger Things",
    descripcion:
      "Un grupo de niños se enfrenta a fuerzas sobrenaturales en su ciudad.",
    generos: [1, 4, 8],
    tipoId: 1,
    imageUrl: "https://place-hold.it/400x600",
  },
  {
    id: 3,
    nombre: "Friends",
    descripcion:
      "Seis amigos viven las altas y bajas de la vida en Nueva York.",
    generos: [2, 1],
    tipoId: 1,
    imageUrl: "https://place-hold.it/400x600",
  },
  {
    id: 4,
    nombre: "The Office",
    descripcion:
      "La vida cotidiana en una oficina de papel con mucho humor absurdo.",
    generos: [2],
    tipoId: 1,
    imageUrl: "https://place-hold.it/400x600",
  },
];