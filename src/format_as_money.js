module.exports = function formatAsMoney(cents){
  return '$'+(cents/100).toFixed(2);
}