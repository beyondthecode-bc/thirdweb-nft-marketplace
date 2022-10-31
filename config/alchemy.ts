import { Alchemy, Network } from "alchemy-sdk";
import { ChainId } from "@thirdweb-dev/sdk";
import { targetChainId } from "./targetChainConfig";

/***
 * Alchemy has different naming conventions, so need to convert from chain ID to their constant
 * @param chainId: as specified in the config from the ChainID's imported from ThirdWeb's SDK
 */
const getAlchemyNetwork = (chainId: ChainId) => {
  let alchemyTargetNetwork: Network;
  switch (chainId) {
    case ChainId.Mainnet:
      alchemyTargetNetwork = Network.ETH_MAINNET;
      break;

    case ChainId.Goerli:
      alchemyTargetNetwork = Network.ETH_GOERLI;
      break;

    case ChainId.Polygon:
      alchemyTargetNetwork = Network.MATIC_MAINNET;
      break;

    case ChainId.Mumbai:
      alchemyTargetNetwork = Network.MATIC_MUMBAI;
      break;

    default:
      throw new Error(
        "Target Chain configuration is not set up for Alchemy. Please add it here."
      );
  }
  return alchemyTargetNetwork;
};

const settings = {
  apiKey: 'r30uR6ia2n8_SrE86H3YWpCT9s5qPx0i',
  network: getAlchemyNetwork(targetChainId),
  maxRetries: 10,
};

export const alchemy = new Alchemy(settings);
