import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import React from "react";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import Link from 'next/link'

const style = {
searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,}
export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
      <Link href="/">
        <div style={{cursor:"pointer"}}>
          <Image src={'/logo copy.png'} height={40} width={40} />
          <div style={{fontSize:20,color:"#C42BB8"}}>APP</div>
        </div>
        </Link>
      </div>

      {/* <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        </div>   */}
         <div >
           <a href='' >Swap </a>
           </div>
        <div >
        <a href='' > Shop </a>
        </div>

        <div >
        <a href='' > More </a>
            </div>
        
       
      
      <div className={styles.right}>
        {address ? (
          <>
            <a
              className={styles.secondaryButton}
              onClick={() => disconnectWallet()}
            >
              Disconnect Wallet
            </a>
            <p style={{ marginLeft: 8, marginRight: 8, color: "grey" }}>|</p>
            <p>{address.slice(0, 6).concat("...").concat(address.slice(-4))}</p>
          </>
        ) : (
          <a
            className={styles.mainButton}
            onClick={() => connectWithMetamask()}
          >
            Connect Wallet
          </a>
        )}
      </div>
      </div>
  );
}