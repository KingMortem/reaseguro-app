export class Contract {
    constructor(id, name, premium) {
      this._id = id;
      this._name = name;
      this._premium = premium;
    }
  
    get id() {
      return this._id;
    }
  
    get name() {
      return this._name;
    }
  
    get premium() {
      return this._premium;
    }
  
    toJSON() {
      return {
        id: this._id,
        name: this._name,
        premium: this._premium
      };
    }
  }