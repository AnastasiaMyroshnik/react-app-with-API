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
  getRequest = async (url) => {
    return await this.getData(url)
  }

  getPersonage = async (url) => {
    const res = await this.getData(url);
    return this.transformation(res)
  }

  transformation = async (item) => {
    let allegiance;
    if ((item.allegiances.length >= 1 && item.allegiances[0].length >= 1)) {
      await this.getRequest(item.allegiances).then(res => allegiance = res).catch();
    }

    return  {
      name: item.name,
      gender: item.gender,
      culture: item.culture,
      born: item.born,
      died: item.died,
      titles: item.titles,
      aliases: item.aliases,
      allegiances: allegiance,
      tvSeries: item.tvSeries,
      playedBy: item.playedBy
    }
  }
}

export default Service;