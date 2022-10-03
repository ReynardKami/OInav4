// import React from "react";
// import styled from "styled-components";
// import { useState } from "react";
// import { ethers, BigNumber } from "ethers";
// import { motion } from "framer-motion";
// import oInariV2 from "../OInariV2.json";
// import { useChainId, ChainId, useAddress } from "@thirdweb-dev/react";

// const oInariV2Address = "0x9D90aCC426770491F684f87Cb72ed2162255f7B2";

// const Section = styled.section`
//   min-height: 100vh;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   background: linear-gradient(rgba(0, 0, 0, 1), transparent);
//   background-color: #ff4f00;
// `;
// const Container = styled.div`
//   width: 95%;
//   height: 95vh;
//   margin: 0 auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   padding-top: 2.5rem;
//   padding-bottom: 2.5rem;

//   @media (max-width: 64em) {
//     width: 90%;
//   }
// `;

// const Flex = styled.div`
//   justify-content: center;
//   align-items: center;
//   padding-bottom: 150px;
// `;

// const Info = styled.div`
//   width: 45%;
//   height: 45%;
//   display: inline-flex;
//   padding: 3rem;
//   border: 4px solid gold;
//   border-radius: 25px;
// `;

// const Text = styled.p`
//   font-size: ${(props) => props.theme.fontxl};
//   width: 80%;
//   color: #ffffff;
//   align-self: flex-start;
//   text-align: center;
//   margin: 1rem auto;
//   font-weight: 400;
//   text-shadow: 2px 1px 1px #000000;
// `;

// const SubText = styled.p`
//   font-size: ${(props) => props.theme.fontmd};
//   width: 80%;
//   color: orangered;
//   align-self: flex-start;
//   text-align: center;
//   margin: 1rem auto;
//   font-weight: 400;
//   text-shadow: 2px 1px 1px #000000;
// `;

// const SubText2 = styled.p`
//   font-size: ${(props) => props.theme.fontxl};
//   width: 80%;
//   color: orangered;
//   align-self: flex-start;
//   text-align: center;
//   margin: 1rem auto;
//   font-weight: 400;
//   text-shadow: 2px 1px 1px #000000;
// `;

// const SubText3 = styled.p`
//   font-size: ${(props) => props.theme.fontlg};
//   width: 80%;
//   color: goldenrod;
//   align-self: flex-start;
//   text-align: center;
//   margin: 1rem auto;
//   font-weight: 400;
//   text-shadow: 2px 1px 1px #000000;
// `;

// const Mint = () => {
//   const [mintAmount, setMintAmount] = useState(1);
//   const currentChain = useChainId();
//   const address = useAddress();

//   async function handleMint() {
//     if (window.ethereum) {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(
//         oInariV2Address,
//         oInariV2.abi,
//         signer
//       );
//       try {
//         const response = await contract.mint(BigNumber.from(mintAmount), {
//           value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
//         });
//         console.log("response: ", response);
//       } catch (err) {
//         console.log("error: ", err);
//       }
//     }
//   }

//   const handleDecrement = () => {
//     if (mintAmount <= 1) return;
//     setMintAmount(mintAmount - 1);
//   };

//   const handleIncrement = () => {
//     if (mintAmount >= 3) return;
//     setMintAmount(mintAmount + 1);
//   };

//   return (
//     <>
//       <Head>
//         <title>Ō-Inari</title>
//         <meta name="description" content="Welcome to the Den" />
//         <link rel="icon" href="/Ō-Inari.ico" />
//       </Head>
//       <motion.div
//         initial={{ y: 25, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{
//           delay: 0.45,
//           duration: 0.75,
//         }}
//       >
//         <Section>
//           <Container>
//             <Flex>
//               {currentChain === ChainId.Rinkeby ? (
//                 <div>
//                   <div>
//                     <br />
//                     <br />
//                     <Text>
//                       Mint Your Fox Familiars here before they're gone!
//                     </Text>
//                     <br />
//                     <Info>
//                       <SubText3>
//                         Foxes Minted:
//                         <br />
//                         <text>{}</text>/3333
//                       </SubText3>
//                     </Info>
//                     <SubText>
//                       You may get a Fox that's not quite like the others...
//                     </SubText>

//                     <Flex>
//                       <button className="btn2" onClick={handleDecrement}>
//                         -
//                       </button>

//                       <button className="btn2" onClick={handleIncrement}>
//                         +
//                       </button>
//                     </Flex>
//                   </div>
//                   <br />
//                   <br />
//                   <Flex>
//                     <button className="btn2" onClick={handleMint}>
//                       Mint Fox
//                     </button>
//                     <br />
//                   </Flex>
//                   <br />
//                   <text className="priceText">0.077 ETH per NFT + Gas</text>
//                 </div>
//               ) : (
//                 <SubText2>
//                   Please switch to Ethereum Mainnet and reconnect to mint!
//                   <br />
//                   <br />
//                 </SubText2>
//               )}
//             </Flex>
//           </Container>
//         </Section>
//       </motion.div>
//     </>
//   );
// };

// export default Mint;
