// SPDX-License-Identifier: MIT

/*     _____
      /____/
        __          __________   _   ___   _____   _ 
      / __ \       /_   _/|   \ | | / _ \ |  _  | | |
     | |  | |  ____  | |  | |\ \| |/ /_\ \| |_| / | |
     | |  | | /___/  | |  | | \ \ ||  _  || |\ \  | |
     | |__| |       _| |_ | |  \  || | | || | \ \ | |
      \ __ /       /____/ \_|   \_|\_| |_/|_/  \_||_/

*/

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract OInariV4 is ERC721, Ownable, ReentrancyGuard {
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private supply;

    string public uriPrefix = "";
    string public uriSuffix = ".json";
    string public hiddenMetadataUri;

    uint256 public maxPerAddress = 7;
    uint256 public mintPrice = 0.08 ether;
    uint256 public maxSupply = 3333;
    uint256 public maxMintAmountPerTx = 3;

    bool public mintPaused = true;
    bool public mintRevealed = false;
    bool public onlyWhitelisted = true;

    address[] public whiteListedAddresses;
    mapping(address => uint256) public addressMintBalance;

    constructor() ERC721("O-Inari", "INA") {
        setHiddenMetadataUri("ipfs://__CID__/hidden.json");
    }

    modifier mintCompliance(uint256 _mintAmount) {
        require(
            _mintAmount > 0 && _mintAmount <= maxMintAmountPerTx,
            "Invalid mint amount!"
        );
        require(
            supply.current() + _mintAmount <= maxSupply,
            "Max supply exceeded!"
        );
        _;
    }

    function totalSupply() public view returns (uint256) {
        return supply.current();
    }

    function mint(uint256 _mintAmount)
        public
        payable
        mintCompliance(_mintAmount)
    {
        require(!mintPaused, "The minting is paused!");
        require(msg.value >= mintPrice * _mintAmount, "Insufficient funds!");
        require(
            balanceOf(msg.sender) + _mintAmount <= maxPerAddress,
            "Max wallet amount reached"
        );

        if (msg.sender != owner()) {
            if (onlyWhitelisted == true) {
                require(isWhitelisted(msg.sender), "User is not whitelisted");
                uint256 ownerMintCount = addressMintBalance[msg.sender];
                require(ownerMintCount + _mintAmount <= maxPerAddress, "Max NFT per address reached!");
            }

            require(msg.value >= mintPrice * _mintAmount);
        }

        for (uint256 i = 1; i <= _mintAmount; i++) {
            addressMintBalance[msg.sender]++;
        }

        _mintLoop(msg.sender, _mintAmount);
    }

    function isWhitelisted(address _user) public view returns (bool) {
        for (uint256 i = 0; i < whiteListedAddresses.length; i++) {
            if (whiteListedAddresses[i] == _user) {
                return true;
            }
        }
        return false;
    }

    function mintForAddress(uint256 _mintAmount, address _receiver)
        public
        mintCompliance(_mintAmount)
        onlyOwner
    {
        _mintLoop(_receiver, _mintAmount);
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory ownedTokenIds = new uint256[](ownerTokenCount);
        uint256 currentTokenId = 1;
        uint256 ownedTokenIndex = 0;

        while (
            ownedTokenIndex < ownerTokenCount && currentTokenId <= maxSupply
        ) {
            address currentTokenOwner = ownerOf(currentTokenId);

            if (currentTokenOwner == _owner) {
                ownedTokenIds[ownedTokenIndex] = currentTokenId;

                ownedTokenIndex++;
            }

            currentTokenId++;
        }

        return ownedTokenIds;
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(_tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if (mintRevealed == false) {
            return hiddenMetadataUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        _tokenId.toString(),
                        uriSuffix
                    )
                )
                : "";
    }

    function setRevealed(bool _state) public onlyOwner {
        mintRevealed = _state;
    }

    function setMaxPerAddress(uint256 _maxLimit) public onlyOwner {
        maxPerAddress = _maxLimit;
    }

    function setMintPrice(uint256 _mintPrice) public onlyOwner {
        mintPrice = _mintPrice;
    }

    function setMaxMintAmountPerTx(uint256 _maxMintAmountPerTx)
        public
        onlyOwner
    {
        maxMintAmountPerTx = _maxMintAmountPerTx;
    }

    function setHiddenMetadataUri(string memory _hiddenMetadataUri)
        public
        onlyOwner
    {
        hiddenMetadataUri = _hiddenMetadataUri;
    }

    function setUriPrefix(string memory _uriPrefix) public onlyOwner {
        uriPrefix = _uriPrefix;
    }

    function setUriSuffix(string memory _uriSuffix) public onlyOwner {
        uriSuffix = _uriSuffix;
    }

    function setmintPaused(bool _state) public onlyOwner {
        mintPaused = _state;
    }

    function setOnlyWhitelisted(bool _state) public onlyOwner {
        onlyWhitelisted = _state;
    }

    function whitelistUsers(address[] calldata _users) public onlyOwner {
        delete whiteListedAddresses;
        whiteListedAddresses = _users;
    }

    function withdraw() public onlyOwner nonReentrant {
        // This will pay HashLips 5% of the initial sale.
        // You can remove this if you want, or keep it in to support HashLips and his channel.
        // =============================================================================
        (bool hs, ) = payable(0xba0e88F092E2FC54b6baF75E6fBb192D0F1d9639).call{
            value: (address(this).balance * 90) / 100
        }("");
        require(hs);
        // =============================================================================

        // This will transfer the remaining contract balance to the owner.
        // Do not remove this otherwise you will not be able to withdraw the funds.
        // =============================================================================
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
        // =============================================================================
    }

    function _mintLoop(address _receiver, uint256 _mintAmount) internal {
        for (uint256 i = 0; i < _mintAmount; i++) {
            supply.increment();
            _safeMint(_receiver, supply.current());
        }
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return uriPrefix;
    }
}
