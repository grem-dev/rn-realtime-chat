export function generateUID() {
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;
  let left = ("000" + firstPart.toString(36)).slice(-3);
  let right = ("000" + secondPart.toString(36)).slice(-3);
  return left + right;
}