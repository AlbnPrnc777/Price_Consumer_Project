// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol"; //I changed the path to the correct one due to the version of chainlink (shared).


contract PriceConsumerV3 {
    struct FeedInfo {
        AggregatorV3Interface aggregator;
        string description;
    }

    mapping(uint => FeedInfo) public feeds;

    constructor() {
        feeds[1] = FeedInfo(
            AggregatorV3Interface(0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43),
            "BTC/USD"
        );
        feeds[2] = FeedInfo(
            AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306),
            "ETH/USD"
        );
        feeds[3] = FeedInfo(
            AggregatorV3Interface(0x8A6af2B75F23831ADc973ce6288e5329F63D86c6),
            "LINK/USD"
        );
        feeds[4] = FeedInfo(
            AggregatorV3Interface(0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22),
            "BTC/ETH"
        );
    }

    function getLatestPrice(uint feedID) external view returns (int) {
        require(address(feeds[feedID].aggregator) != address(0), "Feed not found");

        (, int price, , , ) = feeds[feedID].aggregator.latestRoundData();
        return price;
    }

    function getDetailedPrice(uint feedID)
        external
        view
        returns (
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        )
    {
        require(address(feeds[feedID].aggregator) != address(0), "Feed not found");

        (, price, startedAt, timeStamp, answeredInRound) = feeds[feedID].aggregator.latestRoundData();
        return (price, startedAt, timeStamp, answeredInRound);
    }


    function updateFeed(uint feedID, address newAddress, string calldata description) external {
        feeds[feedID] = FeedInfo(
            AggregatorV3Interface(newAddress),
            description
        );
    }
}
