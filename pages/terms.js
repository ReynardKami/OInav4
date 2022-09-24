import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  overflow-x: hidden;

  background: linear-gradient(rgba(255, 255, 255, 1), transparent);
  background-color: white;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  padding-top: 5%;
  padding-bottom: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: xx-large;
  text-transform: capitalize;
  width: 100%;
  color: goldenrod;
  align-self: flex-start;
  text-align: left;
  flex-direction: column;
  padding: 1.3rem;

  text-shadow: 1px 2px 1px #000000;
  text-decoration-line: underline;

  overflow-x: hidden;
`;

const SubText = styled.h3`
  font-size: larger;
  width: 90%;
  color: #000000;
  flex-direction: column;
  align-self: flex-start;
  text-align: left;
  line-height: 2.5rem;
  padding: 1rem;
  font-weight: 300;

  overflow-x: hidden;
`;

const MidText = styled.h3`
  font-size: larger;
  width: 90%;
  color: orangered;
  flex-direction: column;
  align-self: flex-start;
  text-align: left;
  padding-left: 1.2rem;
  font-weight: 700;
  font-size: 1.4em;

  overflow-x: hidden;
`;

const TermsLink = styled.h1`
  font-size: 1.3em;
  font-family: "audiowide";
  color: floralwhite;
  transition: all 0.2s ease-in-out;

  padding-right: 1rem;
  padding-left: 1rem;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  text-align: center;

  border: 1px solid white;
  border-radius: 15px;
  box-shadow: 5px 7px 15px rgba(0, 0, 0, 0.75);

  background: linear-gradient(rgba(0, 0, 0, 1), transparent);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Terms = () => {
  return (
    <div>
      <Head>
        <title>Ō-Inari</title>
        <meta name="description" content="Welcome to the Den" />
        <link rel="icon" href="/Ō-Inari.ico" />
      </Head>
      <Section>
        <Container>
          <Title>Ō-Inari Terms & Conditions.</Title>

          <MidText>Ō-Inari NFTs Defined:</MidText>
          <SubText>
            “Ō-Inari NFT(s)” refers to a collection of digital artworks running
            on the Ethereum blockchain. Ō-Inari License Agreement: These terms
            and conditions (“Terms”) define the relationship between
            (“Ō-Inari”), and any person (“You”, “User”) interacting with: <br />
            <br />
            (i) Websites owned and operated by Ō-Inari; <br />
            <br />
            (ii) Social media accounts or pages operated by Ō-Inari; <br />
            <br />
            (iii) Ō-Inari operated smart contracts on the Ethereum network; or{" "}
            <br />
            <br />
            (iv) Any and all Ō-Inari operated services. Additionally, these
            terms and conditions define the relationship between Ō-Inari and any
            person who maintains ownership of any Ō-Inari NFTs (“owners”).{" "}
          </SubText>

          <MidText> Responsibility of Ownership:</MidText>
          <SubText>
            Owners recognize that they are solely responsible for the security
            of their Ō-Inari NFTs, as well as the safety, protection, and
            management of their Ethereum wallets, which includes any associated
            passwords, seed phrases, seed words, or private keys. Ō-Inari, shall
            not, in any event whatsoever, be held responsible for any risk
            associated with yours or another’s access and/or use of your
            Ethereum wallet whether through the interaction of a Ō-Inari
            operated service or otherwise. In the unfortunate event that your
            Ō-Inari NFT is lost, stolen, transferred, or otherwise remains
            inaccessible, Ō-Inari cannot retrieve it for you.{" "}
          </SubText>

          <Title> 1) Ownership: </Title>

          <SubText>
            A) By purchasing or lawfully receiving a Ō-Inari NFT, whether
            through a Ō-Inari operated website, or third-party website, and
            maintaining verifiable ownership of the Ethereum wallet in which the
            Ō-Inari NFT is associated you own the Ō-Inari NFT, as well as the
            Art, subject to the definitions and exceptions below. <br />
            <br />
            B) Personal Use: Subject to owners continued compliance with these
            Terms and the below defined Ownership Exceptions, Ō-Inari grants
            owners a worldwide, royalty-free license to use, copy, and display
            the Ō-Inari NFT owned, along with any extensions they choose to
            create or use, solely for the following purposes: <br />
            <br />
            (i) for your own personal, non-commercial use; <br />
            <br />
            (ii) as part of a marketplace that permits the purchase and sale of
            your Ō-Inari NFT, provided that the marketplace cryptographically
            verifies each Ō-Inari NFT owner’s rights to display the Art for
            their Ō-Inari NFT to ensure that only the actual owner can display
            the art; or <br />
            <br />
            (iii) as part of a third party website or application that permits
            the inclusion, involvement, or participation of your Ō-Inari NFT,
            provided that the website/application cryptographically verifies
            each Ō-Inari NFT owner’s rights to display the Art for their Ō-Inari
            NFT to ensure that only the actual owner can display the art, and
            provided that the Art is no longer visible once the owner of the
            Ō-Inari NFT leaves the website/application. <br />
            <br />
            C) Commercial Use: Subject to owners continued compliance with these
            Terms and the below defined Ownership Exceptions, Ō-Inari grants
            owners a worldwide license to use, copy, and display the purchased
            Art for the purpose of creating derivative works based upon the Art
            (“Commercial Use”). Examples of such ‘Commercial Use’ would be the
            use of the Art to produce and sell merchandise products (T-Shirts
            etc.) displaying copies of the Art. For the sake of clarity, nothing
            in this Section will be deemed to restrict you from: <br />
            (i) owning or operating a marketplace that permits the use and sale
            of Ō-Inari NFT generally, provided that the marketplace
            cryptographically verifies each Ō-Inari NFT owner’s rights to
            display the Art for their Ō-Inari NFT to ensure that only the actual
            owner can display the Art; <br />
            <br />
            (ii) owning or operating a third party website or application that
            permits the inclusion, involvement, or participation of Ō-Inari NFT
            generally, provided that the third party website or application
            cryptographically verifies each Ō-Inari NFT owner’s rights to
            display the Art for their Ō-Inari NFT to ensure that only the actual
            owner can display the Art, and provided that the Art is no longer
            visible once the owner of the Purchased Ō-Inari NFT leaves the
            website/application; or <br />
            <br />
            (iii) earning revenue from any of the foregoing. <br />
            <br />
            D) Ownership Exceptions: Both Personal Use and Commercial Use of
            each Ō-Inari NFT as defined above are subject to the following
            exceptions: <br />
            <br />
            (i) owners do not own individual traits as defined within the
            Ō-Inari NFT metadata e.g. “eyes”, “head”, “hands” etc. or any
            individual images, layers, or artworks used in the development of
            Ō-Inari NFTs; these individual traits may not be used exclusively,
            added to existing Ō-Inari NFTs, used to create derivative works, or
            altered i.e. the owner of the Ō-Inari NFT artwork owns the Ō-Inari
            NFT artwork and only the Ō-Inari NFT artwork; <br />
            <br />
            (ii) the use of artwork developed and distributed by Ō-Inari that
            are unowned by the individual shall not be used, including but not
            limited to: logos, marketing material, trademarks, and/or website
            material; <br />
            <br />
            (iii) owners shall not engage in any material, venture, product and/
            or service which is unlawful, fraudulent, libelous, defamatory,
            obscene, pornographic, profane, threatening, abusive, hateful,
            offensive, objectionable, or unreasonable at the discretion of
            Ō-Inari; or <br />
            <br />
            (iv) owners shall not infringe upon any intellectual property
            rights, proprietary rights or confidentiality obligations.
            Furthermore, owners shall indemnify and defend Ō-Inari from and
            against any and all claims, damages, proceedings, loss or costs
            arising from any such prohibited use. Owners shall not use the
            Ō-Inari NFTs in any way that could be construed as being adverse,
            negative, or derogatory to the image and/or reputation of Ō-Inari.
          </SubText>

          <Title> 2) Obligations: </Title>

          <SubText>
            As a holder/collector of Ō-Inari you are solely responsible for your
            own conduct while accessing or Ō-Inari’s Site and for any
            consequences thereof. You agree to use the Site, social medias, and
            digital assets only for purposes that are legal, proper and in
            accordance with these Terms and any applicable laws or regulations.
            By way of example, and not as a limitation, you may not, and may not
            allow any third party to: <br />
            <br />
            (i) send, upload, distribute or disseminate any unlawful,
            defamatory, harassing, abusive, fraudulent, hateful, violent,
            obscene, or otherwise objectionable content; <br />
            <br />
            (ii) distribute viruses, worms, defects, Trojan horses, corrupted
            files, hoaxes, or any other items of a destructive or deceptive
            nature; <br />
            <br />
            (iii) impersonate another person;
            <br />
            <br />
            (iv) upload, post, transmit or otherwise make available through the
            Site any content that infringes the intellectual property or
            proprietary rights of any party or otherwise violates the legal
            rights of others; <br />
            <br />
            (v) engage in, promote, or encourage illegal activity (including,
            without limitation, money laundering); <br />
            <br />
            (vi) interfere with other users' use of the Site; <br />
            <br />
            (vii) use the Site for any unauthorized commercial purpose; <br />
            <br />
            (viii) modify, adapt, translate, or reverse engineer any portion of
            the Site; <br />
            <br />
            (ix) remove any copyright, trademark or other proprietary rights
            notices contained in or on the Site or any part of it; <br />
            <br />
            (x) use any technology to collect information about the Site’s for
            any unauthorized purpose; <br />
            <br />
            (xi) access or use the Site for the purpose of creating a product or
            service that is competitive with any of our products or services. If
            you engage in any of the activities prohibited by this Section, we
            may, at our sole and absolute discretion, without notice to you, and
            without limiting any of our other rights or remedies at law or in
            equity, immediately suspend or terminate your user account.
          </SubText>

          <Title> 3. Fees and Payment </Title>

          <SubText>
            A. If you elect to purchase a Ō-Inari NFT, any financial
            transactions that you engage in will be conducted solely through the
            Ethereum network. We will have no insight into, or control over
            these payments or transactions. By consequence we do not have the
            ability to reverse any of these transactions. We will have no
            liability to you, or to any other third party, for any claims or
            damages that may arise as the result of any transactions that you
            engage on, or any other transactions that you conduct via the
            Ethereum network. <br />
            <br />
            B. Ethereum requires the payment of a transaction fee (a “Gas Fee”)
            for every transaction that occurs on the Ethereum network. The ‘Gas
            Fee’ funds the network of computers that run the decentralized
            Ethereum network. This means that you will need to pay a Gas Fee for
            each transaction.
          </SubText>

          <Title>4. Disclaimers </Title>

          <SubText>
            A. YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF
            THE SITE IS AT YOUR SOLE RISK, AND THAT THE SITE IS PROVIDED "AS IS"
            AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS
            OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE
            LAW, WE MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED
            WARRANTIES REGARDING THE SITE AND ANY PART OF IT (INCLUDING, WITHOUT
            LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES),
            INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY, OR
            RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE,
            OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT OR
            WARRANT TO YOU THAT: <br />
            <br />
            (I) YOUR ACCESS TO OR USE OF THE SITE WILL MEET YOUR REQUIREMENTS,{" "}
            <br />
            <br />
            (II) YOUR ACCESS TO OR USE OF THE SITE WILL BE UNINTERRUPTED,
            TIMELY, SECURE OR FREE FROM ERROR, <br />
            <br />
            (III) USAGE DATA PROVIDED THROUGH THE SITE WILL BE ACCURATE, <br />
            <br />
            (IV) THE SITE OR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE
            ON OR THROUGH THE SITE ARE FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS, OR <br />
            <br />
            (V) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU USE THE SITE WILL BE
            SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED
            WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE
            EXCLUSIONS MAY NOT APPLY TO YOU. <br />
            <br />
            B. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION
            AND DEALING ONLINE OVER THE INTERNET AND AGREE THAT WE HAVE NO
            LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS
            DUE TO OUR WILLFUL MISCONDUCT. <br />
            <br />
            C. WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU
            INCUR AS THE RESULT OF YOUR USE OF THE ETHEREUM NETWORK NOR DO WE
            HAVE NO CONTROL OVER AND MAKE NO GUARANTEES REGARDING ANY SMART
            CONTRACTS.
          </SubText>

          <Title> 5. Limitation of Liability </Title>

          <SubText>
            A. YOU UNDERSTAND AND AGREE THAT WE WILL NOT BE LIABLE TO YOU OR TO
            ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER
            CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT
            LIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR
            INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA,
            COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER
            INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
            SUCH DAMAGES. <br />
            <br />
            B. YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND
            ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS
            TO OR USE OF (OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE
            SITE, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER
            LEGAL THEORY, IS LIMITED TO THE GREATER OF (A) THE AMOUNTS YOU
            ACTUALLY PAID US UNDER THESE TERMS IN THE 12 MONTH PERIOD PRECEDING
            THE DATE THE CLAIM AROSE, OR (B) $500. <br />
            <br />
            C. YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE SITE AVAILABLE TO
            YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY
            DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN. WE WOULD
            NOT BE ABLE TO PROVIDE THE SITE TO YOU WITHOUT THESE LIMITATIONS.
          </SubText>

          <Title>6. Risk Assumption </Title>

          <SubText>
            You accept and acknowledge each of the following: <br />
            <br />
            A. To the extent that you sell your Ō-Inari NFT, please be aware
            that the prices of NFTs are extremely volatile and fluctuations in
            the prices of other NFTs and impact the price of your Ō-Inari NFT
            both positively and negatively. Given the volatility, NFTs such as
            Ō-Inari should not be considered an investment. You assume all risks
            in that connection. <br />
            <br />
            B. Ownership of a Ō-Inari NFT confers ownership of digital artwork
            only. Accordingly, no information on this Site (or any other
            documents mentioned therein) is or may be considered advice or an
            invitation to enter into an agreement for any investment purpose.
            Further, nothing on this Site qualifies or is intended to be an
            offering of securities in any jurisdiction nor does it constitute an
            offer or an invitation to purchase shares, securities, or other
            financial products. Due to the artistic nature of the project,
            Ō-Inari has not been registered with or approved by any regulator in
            any jurisdiction. It remains your sole responsibility to assure that
            the purchase of the Ō-Inari NFT and the associated art is compliant
            with laws and regulations in your jurisdiction. <br />
            <br />
            C. You assume all risks associated with using an Internet-based
            currency, including, but not limited to, the risk of hardware,
            software and Internet connections, the risk of malicious software
            introduction, and the risk that third parties may obtain
            unauthorized access to information stored within your wallet. <br />
            <br />
            D. NFTs, cryptocurrencies and blockchain technology are relatively
            new and the regulatory landscape is unsettled. New regulations could
            negatively impact such technologies impacting the value for your
            Ō-Inari NFT. You understand and accept all risk in that regard.
            <br />
            <br />
            E. You assume all responsibility for any adverse effects of
            disruptions or other issues impacting Ethereum or the Ethereum
            platform.
          </SubText>

          <Title>7. Indemnification</Title>

          <SubText>
            You agree to hold harmless and indemnify Ō-Inari and its
            subsidiaries, affiliates, officers, agents, employees, advertisers,
            licensors, suppliers or partners from and against any claim,
            liability, loss, damage (actual and consequential) of any kind or
            nature, suit, judgment, litigation cost, and reasonable attorneys'
            fees arising out of or in any way related to <br />
            <br />
            (i) your breach of these Terms, <br />
            <br />
            (ii) your misuse of the Site, or <br />
            <br />
            (iii) your violation of applicable laws, rules or regulations in
            connection with your access to or use of the Site.
          </SubText>

          <Title>8. Changes to the Terms and Conditions </Title>
          <SubText>
            We may make changes to the Terms at our discretion. Please check
            these Terms periodically for changes. Any changes to the Terms will
            apply on the date that they are made, and your continued access to
            or use after the Terms have been updated will constitute your
            binding acceptance of the updates. If you do not agree to any
            revised Terms, you may not access or use the Site.{" "}
          </SubText>

          <Title>9. Children </Title>
          <SubText>
            Our Site is not intended for children. You must be at least 18 years
            old to access this Site or purchase a Ō-Inari NFT. If you are under
            18 years old, you are not permitted to use this Site for any reason.
            By accessing the Site, you represent and warrant that you are at
            least 18 years of age.{" "}
          </SubText>

          <Title>10. Dispute Resolution; Arbitration</Title>
          <SubText>
            All disputes arising out of or in connection with these Terms,
            including without limitation your access or use of the Site, or to
            any products sold or distributed through the Site, will be referred
            to and finally resolved by arbitration under the rules of the
            American Arbitration Association. The case will be adjudicated by a
            single arbitrator and will be administered by the American
            Arbitration Association in accordance with its applicable rules.
            Each party will cover its own fees and costs associated with the
            arbitration proceedings. The place of arbitration will be New York,
            New York. The award of the arbitrator will be final and binding, and
            any judgment on the award rendered by the arbitrator may be entered
            in any court of competent jurisdiction. Notwithstanding the
            foregoing, we may seek and obtain injunctive relief in any
            jurisdiction in any court of competent jurisdiction. <br />
            <br />
            WITH RESPECT TO ANY DISPUTE ARISING OUT OF OR RELATED TO THESE
            TERMS, INCLUDING WITHOUT LIMITATION DISPUTES RELATED TO THE SITE OR
            ANY PRODUCTS SOLD OR DISTRIBUTED THROUGH THE SITE, OR THE SMART
            CONTRACTS: (I) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO HAVE A
            TRIAL BY JURY; AND (II) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO
            PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS IN ANY LAWSUIT,
            INCLUDING BUT NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY
            SUCH DISPUTE.
          </SubText>

          <Link
            href={
              "https://arweave.net/qBbaYDpbLNPktWKPhP8YTan6wAmkFAhKfE1dh35g2yM"
            }
            passHref
          >
            <StyledLink>
              <TermsLink>Download Terms</TermsLink>
            </StyledLink>
          </Link>
        </Container>
      </Section>
    </div>
  );
};

export default Terms;
