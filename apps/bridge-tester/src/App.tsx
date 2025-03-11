import './bridge-widget.css'
import './index.css'
import { MultiChain } from '@aptos-labs/aptos-bridge-widget'
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react'

function App() {
  return (
    <AptosWalletAdapterProvider>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <MultiChain />
        </main>
      </div>
    </AptosWalletAdapterProvider>
  )
}

export default App 