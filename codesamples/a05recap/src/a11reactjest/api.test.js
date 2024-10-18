import { fetchMedications } from './api';

global.fetch = jest.fn(); // Mock the global fetch function

describe('fetchMedications', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear any previous mock data
  });

  test('fetches successfully from the API', async () => {
    const medicationsData = [
      { id: 1, name: 'Aspirin' },
      { id: 2, name: 'Ibuprofen' },
    ];

    // Mock the fetch response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(medicationsData),
    });

    const data = await fetchMedications();
    expect(data).toEqual(medicationsData);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/medications');
  });

  test('handles API errors', async () => {
    // Mock a failed fetch response
    fetch.mockResolvedValueOnce({ ok: false });

    await expect(fetchMedications()).rejects.toThrow('Network response was not ok');
  });
});


/*

Mocking Fetch:

We use global.fetch = jest.fn(); to mock the fetch function, allowing us to simulate API calls without hitting a real endpoint.
Successful API Call:

In the first test, we mock a successful response from the API using fetch.mockResolvedValueOnce, providing a mock response object that simulates a successful fetch.
We then call fetchMedications and verify that the returned data matches our mock data.
Error Handling:

In the second test, we mock a failed fetch response by returning an object with ok: false.
We check that calling fetchMedications in this scenario throws an error with the expected message.

*/