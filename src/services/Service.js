class Service {
  getData = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error (`Coulg not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
  }
  getAllPersonage = (page = 2) => {
    return this.getData(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=12`);
  }
  getAllHouses = (page = 1) => {
    return this.getData(`https://anapioficeandfire.com/api/houses/?page=${page}&pageSize=9`)
  }
  getAllBooks = (page = 1) => {
    return this.getData(`https://anapioficeandfire.com/api/books?page=${page}&pageSize=6`)
  }
  getRequest = (url) => {
    return this.getData(url)
  }
}

export default Service;