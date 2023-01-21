import React from "react";
import Image from "next/image";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const Title = styled.h1`
  text-decoration: none;
  text-align: center;
  font-size: 2.1em;
  padding-bottom: 3rem;
  color: orangered;
`;

const index = () => {
  return (
    <>
      <Head>
        <title>Ō-Inari | NFTs </title>
        <meta name="description" content="Welcome to the Den" />
        <link rel="icon" href="/Ō-Inari.ico" />
      </Head>
      <div className="layout">
        <Title>Ō-INARI NFT Hub</Title>
        <div className="boxcontainer">
          <Link href="/nfts/staking">
            <div className="link1">
              <Image
                src={"/money-bag.gif"}
                alt="Staking"
                width={100}
                height={125}
                objectFit="contain"
              />
              <p>Staking</p>
            </div>
          </Link>
          <Link href="/nfts/gallery">
            <div className="link2">
              <Image
                src={"/exhibition.gif"}
                alt="Gallery"
                width={100}
                height={125}
                objectFit="contain"
              />
              <p>Gallery</p>
            </div>
          </Link>
          <Link href="nfts/wallet">
            <div className="link3">
              <Image
                src={"/wallet.gif"}
                alt="Gallery"
                width={100}
                height={125}
                objectFit="contain"
              />
              <p>Wallet</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
