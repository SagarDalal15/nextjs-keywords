export async function getAllRecords() {
  const response = await fetch(
    "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
  );
  const data = await response.json();

  return data;
}
