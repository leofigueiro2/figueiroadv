function formatDate(dateString: string) {
  const date = new Date(dateString);
  date.setHours(date.getHours() - 4);
  return date.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}


export default formatDate;