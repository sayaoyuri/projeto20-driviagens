function formatDate (date) {
  const aux = date.split('-');

  const newDate = aux.reverse();
  return newDate.join('-');
};

export const utils = { formatDate };