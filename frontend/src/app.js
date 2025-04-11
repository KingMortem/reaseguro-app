class ContractApiClient {
    constructor(baseUrl = 'http://localhost:3000/api') {
      this.baseUrl = baseUrl;
    }
  
    async getAllContracts() {
      const response = await fetch(`${this.baseUrl}/contracts`);
      if (!response.ok) {
        throw new Error('Failed to fetch contracts');
      }
      return response.json();
    }
  
    async addContract(contract) {
      const response = await fetch(`${this.baseUrl}/contracts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contract)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add contract');
      }
      
      return response.json();
    }
  }
  
  class App {
    constructor() {
      this.apiClient = new ContractApiClient();
      this.initElements();
      this.loadContracts();
      this.setupEventListeners();
    }
  
    initElements() {
      this.contractForm = document.getElementById('contractForm');
      this.nameInput = document.getElementById('name');
      this.premiumInput = document.getElementById('premium');
      this.contractsTableBody = document.querySelector('#contractsTable tbody');
    }
  
    setupEventListeners() {
      this.contractForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }
  
    async loadContracts() {
      try {
        const contracts = await this.apiClient.getAllContracts();
        this.renderContracts(contracts);
      } catch (error) {
        this.showError(error.message);
      }
    }
  
    renderContracts(contracts) {
      this.contractsTableBody.innerHTML = '';
      
      contracts.forEach(contract => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = contract.name;
        
        const premiumCell = document.createElement('td');
        premiumCell.textContent = `$${contract.premium.toLocaleString()}`;
        
        row.appendChild(nameCell);
        row.appendChild(premiumCell);
        
        this.contractsTableBody.appendChild(row);
      });
    }
  
    async handleFormSubmit(event) {
      event.preventDefault();
      
      const name = this.nameInput.value.trim();
      const premium = parseFloat(this.premiumInput.value);
      
      try {
        await this.apiClient.addContract({ name, premium });
        this.loadContracts();
        this.contractForm.reset();
      } catch (error) {
        this.showError(error.message);
      }
    }
  
    showError(message) {
      alert(`Error: ${message}`);
    }
  }
  
  // Initialize the application when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    new App();
  });