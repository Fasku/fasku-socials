export function playSound(sound, volume = 1) {
  const audio = new Audio(sound);
  audio.volume = volume;

  audio.play().catch((error) => {
    console.error('Could not play sound:', error);
  });
}
