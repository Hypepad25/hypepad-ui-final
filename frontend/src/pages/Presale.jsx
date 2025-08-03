// frontend/src/pages/Presale.jsx
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO.jsx';
import { useAccount, useBalance } from 'wagmi';
import { ConnectButton } from '../wallet/setup.jsx';

function Countdown({ target }) {
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()));
  useEffect(() => {
    const iv = setInterval(() => {
      setRemaining(Math.max(0, target - Date.now()));
    }, 1000);
    return () => clearInterval(iv);
  }, [target]);

  const toTime = (ms) => {
    const total = Math.floor(ms / 1000);
    const d = Math.floor(total / 86400);
    const h = Math.floor((total % 86400) / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

  return (
    <div className="text-center mb-6">
      <div className="text-sm uppercase text-gray-400 mb-1">Presale starts in</div>
      <div className="text-2xl font-semibold">{toTime(remaining)}</div>
    </div>
  );
}

export default function Presale() {
  const startTimestamp = Date.now() + 1000 * 60 * 60 * 24;
  const totalAllocation = 1000000;
  const [sold] = useState(250000);
  const progress = Math.min(1, sold / totalAllocation);
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address: address,
    watch: true,
  });

  return (
    <>
      <SEO title="Presale | HYPEPAD" description="Join the HYPEPAD presale. Secure, graduated launches with rug-proof intelligence." />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Presale</h1>
            <p className="text-gray-300">
              Participate in the upcoming presale. Secure your spot, view progress, and connect your wallet to join.
            </p>
          </div>
          <div>
            <ConnectButton />
          </div>
        </div>

        <Countdown target={startTimestamp} />

        <div className="bg-[#1f2237] rounded-lg p-6 mb-8">
          <div className="flex justify-between mb-2">
            <div>
              <div className="text-sm text-gray-400">Progress</div>
              <div className="text-xl font-semibold">{((progress * 100).toFixed(1))}%</div>
            </div>
            <div className="text-sm text-gray-400">
              Sold: {sold.toLocaleString()} / {totalAllocation.toLocaleString()}
            </div>
          </div>
          <div className="w-full bg-[#272f4a] rounded-full h-4 overflow-hidden">
            <div
              className="bg-accent h-full rounded-full transition-all"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          {isConnected ? (
            <div className="bg-[#1f2937] p-4 rounded-md">
              <div className="mb-2">
                Connected as <span className="font-mono">{address}</span>
              </div>
              <div className="mb-2">
                Balance: {balance ? balance.formatted + ' ' + balance.symbol : '...'}
              </div>
              <button
                className="px-6 py-3 bg-accent text-black font-semibold rounded-full"
                onClick={() => {
                  alert('Participate logic goes here');
                }}
              >
                Participate
              </button>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Connect your wallet to participate</p>
            </div>
          )}
        </div>

        <div className="text-xs text-gray-500">
          Note: This is a placeholder presale interface. Real fund handling logic must be implemented securely.
        </div>
      </div>
    </>
  );
}
