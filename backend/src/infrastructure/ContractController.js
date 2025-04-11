export class ContractController {
    constructor(contractService) {
      this.contractService = contractService;
    }
  
    async getContracts(req, res) {
      try {
        const contracts = await this.contractService.getAllContracts();
        res.json(contracts.map(contract => contract.toJSON()));
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
    async createContract(req, res) {
      try {
        const contract = await this.contractService.addContract(req.body);
        res.status(201).json(contract.toJSON());
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }