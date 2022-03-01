import Head from 'next/head'
import Image from 'next/image'
import { useWeb3 } from '@3rdweb/hooks'
import "regenerator-runtime/runtime"

export default function Home() {
  const { address, chainId, connectWallet} = useWeb3();
  if (address) {
    return(
      <div className="bg-orange">
        <Head>
          <title>SwayFit</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col flex-1 min-h-screen justify-center items-center">
          <span>
            <Image src="/swayfit_logo.svg" alt="SwayFit Logo" width={653} height={400} />
          </span>
          <div className="inline-grid gap-8 justify-center items-center p-16">
            <p className="text-white font-bold text-lg bg-purple p-8 rounded-lg items-center justify-center">Address: {address}</p>
            <p className="text-white font-bold text-lg bg-purple p-8 rounded-lg items-center justify-center">ChainId: {chainId}</p>
          </div>
        </main>
      </div>
    )
  } else {
    return(
      <div className="bg-orange">
        <Head>
          <title>SwayFit</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col flex-1 min-h-screen justify-center items-center p-16 mx-auto">
          <span>
              <Image src="/swayfit_logo.svg" alt="SwayFit Logo" width={653} height={400} />
          </span>
          <button onClick={ () => connectWallet("injected")}
            className="h-11 border-0 w-auto px-40 rounded-md cursor-pointer text-base font-bold text-white bg-gradient-to-r from-lime-400 to-sky-800">
            Connect Wallet
          </button>
        </main>
      </div>
    )
  }
}
