class TheCatApi {
  static baseURL = 'https://api.thecatapi.com/v1/';

  static headers = {
    'Content-type': 'application/json; charset=UTF-8',
    'x-api-key': 'a4c3c9b5-0a05-4a8e-81d8-e05013b6595d',
  };

  static getAllBreeds = async () => fetch(`${this.baseURL}breeds`, {
    method: 'GET',
    headers: this.headers,
  }).then(async (response) => {
    if (response.status === 200) {
      return response.json();
    }
    return null;
  });

  static getCarouselForBreed = async ({ breedID }) => fetch(`${this.baseURL}images/search?breed_id=${breedID}&limit=8`, {
    method: 'GET',
    headers: this.headers,
  }).then(async (response) => {
    if (response.status === 200) {
      const data = await response.json();
      const requiredData = [];
      data.forEach((value) => {
        requiredData.push(value.url);
      });
      return requiredData;
    }
    return null;
  });
}

export default TheCatApi;
