type ImageMemeType = {
  src: string;
  alt: string;
}

export const images = [
  {
    src: "/memes/meme1.png",
    alt: "meme 1",
  },
  {
    src: "/memes/meme2.png",
    alt: "meme 2",
  },
  {
    src: "/memes/meme3.png",
    alt: "meme 3",
  },
  {
    src: "/memes/meme4.png",
    alt: "meme 4",
  },
  {
    src: "/memes/meme5.png",
    alt: "meme 5",
  },

];

export const getRandomImage = (imagesArray: ImageMemeType[]) => {
  const randomIndex: number = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
}