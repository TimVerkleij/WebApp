module.exports = function generateId() {
  return Math.random().toString(36).substring(7);
}
