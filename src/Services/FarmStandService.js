/* 

getAllFarmStands: Fetches all farm stands from the API
getFarmStandById: Get a specific farm stand by ID from the API
createFarmStand: Creates a new farm stand
updateFarmStand: Updates an existing farm stand
deleteFarmStand: Deletes an existing farm stand.

*/

// Mockapi.io API endpoint for farm stand image, name, location, address
const API_ENDPOINT = 'https://65566a0384b36e3a431fb814.mockapi.io/farmstand/v1';

// Helper function for making the API requests
async function makeRequest(url, method = 'GET', data = null) {
  // Define common headers for API requests
  const headers = {
    'Content-Type': 'application/json', //JSON
  };

  // Configuration object for the fetch API
  const config = {
    method,
    headers,
  };

  // Include request body if data is provided
  if (data) {
    config.body = JSON.stringify(data); 
  }
  try {
    // Perform the API request using fetch
    const response = await fetch(url, config);

    // Throw an error if response status is okay
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } 


    // Parse and return the JSON response
    return response.json();
  } catch (error) {
    // Handle errors during the API request, log the error, and rethrow
    console.error('Error during API request:', error);
    throw error;
  }
}



// FarmStandService object with CRUD operations
export default function FarmStandService() {
  return {
    // Get all farm stands from the API
    getAllFarmStands: async () => {
      const url = `${API_ENDPOINT}/FarmStand`;
      return makeRequest(url);
    },

    // Get a specific farm stand by ID from the API
    getFarmStandById: async (id) => {
      const url = `${API_ENDPOINT}/FarmStand/${id}`;
      return makeRequest(url);
    },

    // Create a new farm stand using POST request
    createFarmStand: async (farmStand) => {
      const url = `${API_ENDPOINT}/FarmStand`;
      return makeRequest(url, 'POST', farmStand);
    },

    // Update an existing farm stand using PUT request
    updateFarmStand: async (farmStand) => {
      const url = `${API_ENDPOINT}/FarmStand/${farmStand.id}`;
      return makeRequest(url, 'PUT', farmStand);
    },

    // Delete a farm stand by ID using DELETE request
    deleteFarmStand: async (id) => {
      const url = `${API_ENDPOINT}/FarmStand/${id}`;
      return makeRequest(url, 'DELETE');
    },
  };
}
