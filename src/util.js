const formatDate = (date = new Date()) => {
  let data = new Date(date);
  let dia  = data.getDate().toString().padStart(2, '0');
  let mes  = (data.getMonth()+1).toString().padStart(2, '0');
  let ano  = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

export default {
  formatDate
}