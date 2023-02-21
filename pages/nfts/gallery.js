import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Select from "react-select";

const gallery = () => {
  const getUsers = async () => {
    const res = await fetch(
      "https://api.jsonbin.io/v3/b/63db0326ebd26539d073179e"
    );
    const data = await res.json();

    return data;
  };

  getUsers(getUsers)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log("rejected:", err.message));

  return (
    <>
      <Head>
        <title>Ō-Inari | NFTs </title>
        <meta name="description" content="Welcome to the Den" />
        <link rel="icon" href="/Ō-Inari.ico" />
      </Head>
      <>
        <div className="gallery">
          <div className="sidebar">
            <div className="search">
              <h2 className="category">Find by ID</h2>
              <input
                type="search"
                id="fox-id"
                className="searchbar"
                placeholder="Enter Fox ID"
              ></input>
            </div>
            <h2 className="category">Traits</h2>
            {/* <div>
              <h4>Fox</h4>
              <Select
                isMulti
                name="foxes"
                options={data}
                className="multiselect"
                classNamePrefix="Fox"
              ></Select>
            </div> */}
          </div>

          <div className="nfts">
            <div className="nftgrid">
              <div className="pics">
                <img
                  src={
                    "https://arweave.net/ulHP94lz8gH9c07B6D2hz1NpBUnJ_Ozw3kcZBZ2FwPg/unrevealedFox.png"
                  }
                  alt="Fox"
                  width={175}
                  height={175}
                />
                <p>Fox #1</p>
              </div>
              <div className="pics"></div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default gallery;
