// This function fetches data from a mock API
export const fetchMedications = async () => {
    const response = await fetch('https://api.example.com/medications');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };
  