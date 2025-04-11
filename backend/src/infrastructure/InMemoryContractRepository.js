import { Contract } from "../domain/Contract.js";
import { ContractRepository } from "../domain/ContractRepository.js";


// Tuve que recuerrir a este metodo de simular la bas de datos ya que la base me estaba arrojando puro timeout
// se me ocurrio implementar este workaround para entregar algo funcional en el tiempo que tenia.
// de igual forma aqui tendria que ir la implementacion de los metodos para la base de datos de PostgreSQL
export class InMemoryContractRepository extends ContractRepository {
  constructor() {
    super();
    this.contracts = [
      new Contract(1, "Contrato de Reaseguro A", 50000),
      new Contract(2, "Contrato de Reaseguro B", 75000),
      new Contract(3, "Contrato de Reaseguro C", 100000)
    ];
    this.nextId = 4;
  }

  findAll() {
    return Promise.resolve([...this.contracts]);
  }

  save(contract) {
    const newContract = new Contract(
      this.nextId++,
      contract.name,
      contract.premium
    );
    this.contracts.push(newContract);
    return Promise.resolve(newContract);
  }
}