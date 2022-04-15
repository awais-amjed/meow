class MeowFactApi {
  static baseURL = 'https://meowfacts.herokuapp.com/';

  static getMeowFact = async () => fetch(this.baseURL, {
    method: 'GET',
  }).then(async (response) => {
    if (response.status === 200) {
      const data = await response.json();
      return data.data[0];
    }
    return null;
  });
}

export default MeowFactApi;
