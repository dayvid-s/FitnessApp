export function discoverAnimation(index: number) {
  return index % 2 === 0 ? "fade-up-right" : "fade-up-left"
  // if it is even, make the animation coming from the left, and vice versa
}
