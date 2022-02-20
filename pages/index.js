import Head from 'next/head'
import Image from 'next/image'
import React, {useState, useEffect} from 'react';
let Web3 = require('web3');

export default function Home() {
  return (
    <div>
      <Head>
        <title>SwayFit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="/logo.svg" alt="SwayFit Logo" width={683} height={400} />
      </main>
    </div>
  )
}
