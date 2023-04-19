export const formatDate = (date: any) => `${date.getDate()}.${((date.getMonth() < 10 ? "0" : "") + (date.getMonth() + 1))}.${date.getFullYear()}`;

export const formatTime  = (date: any) => `${date.getHours()}:${date.getMinutes()}`;