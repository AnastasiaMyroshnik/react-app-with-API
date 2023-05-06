class Service {
  getData = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error (`Coulg not fetch ${url}, status: ${res.status}`)
    }
    return await res.json();
  }
  getAllItems = async (request, page = 1, pageSize) => {
return await this.getData(`https://anapioficeandfire.com/api/${request}/?page=${page}&pageSize=${pageSize}`)
  }
  getOneBook = async (id) => {
    return await this.getData(`https://anapioficeandfire.com/api/books/${id}`)
  }
  getRequest = async  (url) => {
    return await this.getData(url)
  }
}

export default Service;