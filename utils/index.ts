export async function fetchCars() {
  const headers = {
      'X-RapidAPI-Key': 'adb2be8597mshe0e0403c11a441cp1f919cjsna3e48edbd0da',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
    headers: headers
  });
  
  const result = await response.json()

  return result
}