class Service {
  getData = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error (`Coulg not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
  }
  getAllItems = (request, page = 1, pageSize) => {
    return this.getData(`https://anapioficeandfire.com/api/${request}/?page=${page}&pageSize=${pageSize}`)
  }
  getAllBooks = (page = 1) => {
    return this.getData(`https://anapioficeandfire.com/api/books?page=${page}&pageSize=6`)
  }
  getRequest = (url) => {
    return this.getData(url)
  }
}

export default Service;