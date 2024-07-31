import cuteDog from "../assets/images/cute-dog.webp";
import cuteCat from "../assets/images/cute-cat.jpeg";
import textTestDocumento from "../assets/documents/Teste.txt";

type Image = {
  alt: string;
  url: string;
};

type TextFile = {
  url: string;
};

export type File = {
  name: string;
  type: Image | TextFile;
};

export const files: File[] = [
  {
    name: "cachorro_bonitinho.webp",
    type: { alt: "A really tiny cute dog", url: cuteDog },
  },
  {
    name: "gato_bonitinho.jpeg",
    type: { alt: "A really cute cat", url: cuteCat },
  },
  {
    name: "texto_de_teste.txt",
    type: { url: textTestDocumento },
  },
];
