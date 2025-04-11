import express from 'express';
import cors from 'cors';
import { InMemoryContractRepository } from './infrastructure/InMemoryContractRepository.js';
import { ContractService } from './application/ContractService.js';
import { ContractController } from './infrastructure/ContractController.js';

const app = express();
app.use(cors());
app.use(express.json());

// Injeccion de dependencias
const repository = new InMemoryContractRepository();
const service = new ContractService(repository);
const controller = new ContractController(service);

// Rutas
app.get('/api/contracts', (req, res) => controller.getContracts(req, res));
app.post('/api/contracts', (req, res) => controller.createContract(req, res));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});