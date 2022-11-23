const { RESTDataSource } = require('@apollo/datasource-rest');
const { Cards } = require('../graphql/resolvers/archive/Queries'); //nicht sicher warum ich das hier habe, aber nicht in DigimonAPI

class CardsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://digimoncard.io/api-public/';
  }

  getAll() {
    return this.get(`getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc`);
  }

  getCardsByName(name){
    return this.get(`search.php?n=${name}`);
  }
}

module.exports=CardsAPI;