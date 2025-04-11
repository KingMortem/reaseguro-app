export class ContractService {
    constructor(repository) {
      this.repository = repository;
    }
  
    async getAllContracts() {
      return this.repository.findAll();
    }
  
    async addContract(contractData) {
      if (!contractData.name || !contractData.premium) {
        throw new Error("Name and premium are required");
      }
  
      if (contractData.premium <= 0) {
        throw new Error("Premium must be greater than zero");
      }
  
      return this.repository.save(contractData);
    }
  }