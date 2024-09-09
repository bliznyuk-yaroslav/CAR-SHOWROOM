export default function formatFormVehicle(input) {
  const formatted = input.replace(/([a-z])([A-Z])/g, "$1 $2");
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
