export async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw new Error("failed to fetch vans.");
  }
  const data = await res.json();
  return data.vans;
}
