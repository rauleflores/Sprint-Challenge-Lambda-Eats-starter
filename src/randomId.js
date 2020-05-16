export default function randomId() {
  const randID = Date.now() * Math.random();
  return randID;
}
