# Price_Consumer_Project

A React-based decentralized application (DApp) that retrieves cryptocurrency conversion rates using Chainlink's Price Feeds on the Ethereum Sepolia test network. This project demonstrates the integration of smart contracts with a user-friendly frontend interface.

---

## Features
- Fetches real-time cryptocurrency price conversions using Chainlink oracles.
- Supports multiple conversion pairs:
  - BTC/USD
  - ETH/USD
  - LINK/USD
  - BTC/ETH
- Fully decentralized integration with Ethereum smart contracts.
- Interactive and responsive user interface built with React and React-Bootstrap.
- Smart contract deployed on the Sepolia test network.

---

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **React-Bootstrap**: For styling and layout.
- **Ethers.js**: To interact with the Ethereum blockchain.
- **dotenv**: For managing environment variables.

### Backend
- **Hardhat**: Development environment for deploying and testing Ethereum smart contracts.
- **Chainlink Price Feeds**: To fetch decentralized price data.

---

## Smart Contract Details
The smart contract is written in Solidity and deployed on the Sepolia test network. It uses Chainlink's AggregatorV3Interface to fetch cryptocurrency prices.

### Contract Address:
`<Your Contract Address>` (Replace with actual address)

### Functions:
- **getLatestPrice(feedID)**: Fetches the latest price for a given feed ID.
- **Supported Feeds**:
  - BTC/USD (Feed ID: 1)
  - ETH/USD (Feed ID: 2)
  - LINK/USD (Feed ID: 3)
  - BTC/ETH (Feed ID: 4)

---

## Setup and Installation

### Prerequisites
1. Node.js installed on your machine.
2. A MetaMask wallet connected to the Sepolia test network.
3. An Alchemy account to access the Sepolia network.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/Price_Consumer_Project.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Price_Consumer_Project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
  *  Create a `.env` file for frontend in the root directory and add the following:
   ```env
   REACT_APP_CONTRACT_ADDRESS=<Your Deployed Contract Address>
   REACT_APP_ALCHEMY_SEPOLIA_URL=<Your Alchemy Sepolia URL>
   ```
 *  Create a `.env` file for the backend in the root directory and add the following:
   ```env
   ALCHEMY_SEPOLIA_URL=<Your Alchemy Sepolia URL>
   ACCOUNT_PRIVATE_KEY =<Your Wallet Private Key> MetaMask extension could be a good choice
   ```
5. Start the frontend:
   ```bash
   npm start
   ```

---

## Usage
1. Connect your MetaMask wallet to the Sepolia test network.
2. Open the application in your browser (default: `http://localhost:3000`).
3. Select a conversion pair and click "Get Conversion From Price Oracle" to fetch the latest price.

---

## Project Structure
```
Price_Consumer_Project/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── PriceConsumer.js
│   │   ├── abi.json
│   │   └── index.js
│   ├── .env
│   ├── package.json
│   └── README.md
├── contracts/
│   └── PriceConsumerV3.sol
├── scripts/
│   └── deploy.js
├── hardhat.config.js
└── package.json
```

---

## Logo
!Logo URL (https://seeklogo.com/images/C/chainlink-logo-B072B6B9FE-seeklogo.com.png)  


---

## License
This project is licensed under the [MIT License](MITLICENSE). See the LICENSE file for details.


---

## Acknowledgments
- [Chainlink Documentation](https://docs.chain.link/)
- [Hardhat Documentation](https://hardhat.org/docs/)
- [React](https://reactjs.org/)

---

Feel free to contribute or report issues in the repository. Happy coding!

