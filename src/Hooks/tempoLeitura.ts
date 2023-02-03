function calculateReadingTime(text:string) {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(' ').length;
  return Math.ceil(numberOfWords / wordsPerMinute);
}

export default calculateReadingTime;