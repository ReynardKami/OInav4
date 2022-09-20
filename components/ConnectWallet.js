import truncateEthAddress from "truncate-eth-address";
import { useMetamask, useAddress, useDisconnect, useChainId } from "@thirdweb-dev/react";
import { useState } from "react";

const changeNetwork = async ({ setError }) => {
  try {
    if (!window.ethereum) throw new Error("Error");
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
  } catch (err) {
    setError(err.message);
  }
};

const ConnectWallet = () => {
  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };

  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const currentChain = useChainId();
  const address = useAddress();
  const [error, setError] = useState();

  // If a wallet is connected, show address button

  if (address) {
    return (
      <div>
        <button className="btn" onClick={disconnectWallet}>
          {truncateEthAddress(address)}
          <br />
        </button>
      </div>
    );
  }
  // If no wallet is connected, show connect wallet
  else {
    return (
      <div>
        <button
          className="btn"
          onClick={() => connectWithMetamask()}
        >
          Connect
        </button>
      </div>
    );
  }

};

export default ConnectWallet;
