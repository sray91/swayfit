import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';

const supportedChainIds = [1,4];
const connectors = {
  injected: {}
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      supportedChainIds = {supportedChainIds}
      connectors = {connectors}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
