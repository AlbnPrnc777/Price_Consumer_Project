import React, { useState } from "react";
import { BrowserProvider, Contract, formatUnits } from "ethers";
import abi from "../abi.json";
import { Container, Card, Form, Button } from "react-bootstrap";

const PriceConsumer = () => {
  const [price, setPrice] = useState(null);
  const [feedID, setFeedID] = useState("1"); 

  const pairs = {
    "1": "BTC/USD",
    "2": "ETH/USD",
    "3": "LINK/USD",
    "4": "BTC/ETH",
  };

  const fetchPrice = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const contract = new Contract(process.env.REACT_APP_CONTRACT_ADDRESS, abi, provider);

      const latestPrice = await contract.getLatestPrice(feedID);
      setPrice(formatUnits(latestPrice, 8)); 
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <div className="d-flex align-items-center mb-3">
          <img
            src="https://seeklogo.com/images/C/chainlink-logo-B072B6B9FE-seeklogo.com.png"
            alt="Chainlink Logo"
            width="300"
            className="me-3"
          />
        </div>
        <hr />
        <Card.Body>
          <Card className="mb-4">
            <Card.Header>
              <h4 className="d-flex align-items-center mb-3">Conversion Pair</h4>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Check
                  type="radio"
                  label="BTC/USD"
                  name="conversionPair"
                  value="1"
                  checked={feedID === "1"}
                  onChange={(e) => setFeedID(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="ETH/USD"
                  name="conversionPair"
                  value="2"
                  checked={feedID === "2"}
                  onChange={(e) => setFeedID(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="LINK/USD"
                  name="conversionPair"
                  value="3"
                  checked={feedID === "3"}
                  onChange={(e) => setFeedID(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="BTC/ETH"
                  name="conversionPair"
                  value="4"
                  checked={feedID === "4"}
                  onChange={(e) => setFeedID(e.target.value)}
                />
              </Form.Group>
              <div className="text-center mt-3">
                <Button variant="primary" onClick={fetchPrice}>
                  Get Conversion From Price Oracle
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <h5 className="text-center">Result</h5>
            </Card.Header>
            <Card.Body className="text-center">
              {price ? (
                <h5>{`${pairs[feedID]} ➡ $${price}`}</h5>
              ) : (
                <p>No price fetched yet.</p>
              )}
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PriceConsumer;
