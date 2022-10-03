import truncateEthAddress from "truncate-eth-address";
import {
  useMetamask,
  useAddress,
  useDisconnect,
} from "@thirdweb-dev/react";

const ConnectWallet = () => {
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const address = useAddress();

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
        <button className="btn" onClick={() => connectWithMetamask()}>
          Connect
        </button>
      </div>
    );
  }
};

export default ConnectWallet;
