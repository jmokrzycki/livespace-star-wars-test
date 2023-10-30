import { fetchData, fetchArrayData } from '../functions';

describe('fetchData function', () => {
  it('should fetch data and return JSON when response is successful', async () => {
    const mockResponse = { data: 'test' };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const data = await fetchData('https://example.com/api/data');

    expect(data).toEqual(mockResponse);
  });

  it('should return null when the response is not successful', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
    });

    const data = await fetchData('https://example.com/api/data');

    expect(data).toBeNull();
  });
});

describe('fetchArrayData function', () => {
  it('should fetch array data and return an array of JSON objects', async () => {
    const mockResponses = [
      { data: 'item1' },
      { data: 'item2' },
    ];
    const mockUrlsList = ['https://example.com/api/item1', 'https://example.com/api/item2'];
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponses[0],
    }).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponses[1],
    });

    const data = await fetchArrayData(mockUrlsList);

    expect(data).toEqual(mockResponses);
  });

  it('should return an empty array when the URLs list is empty', async () => {
    const data = await fetchArrayData([]);

    expect(data).toEqual([]);
  });

  it('should return an empty array when the URLs list is null', async () => {
    const data = await fetchArrayData(null);

    expect(data).toEqual([]);
  });
});




