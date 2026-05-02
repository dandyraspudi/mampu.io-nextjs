const colors = [
  "bg-blue-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-green-600",
  "bg-orange-500",
  "bg-cyan-600",
  "bg-indigo-600",
  "bg-rose-600",
  "bg-emerald-600",
  "bg-yellow-500",
];

export function getAvatarColor(seed: string) {
  const index =
    seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;

  return colors[index];
}
