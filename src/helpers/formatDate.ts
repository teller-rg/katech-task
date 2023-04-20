export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${`${day < 10 ? "0" : ""}${day}`}.${`${month + 1 < 10 ? "0" : ""}${
    month + 1
  }`}.${year}`;
};

export const formatTime = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour}:${`${minute < 10 ? "0" : ""}${minute}`}`;
};
