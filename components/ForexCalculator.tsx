import React, { useState, useEffect, useRef } from 'react';

// Using a reliable public API for real-time exchange rates
const API_URL = "https://open.er-api.com/v6/latest/USD";

interface RatesData {
  [key: string]: number;
}

const ForexCalculator: React.FC = () => {
  const [rates, setRates] = useState<RatesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  // Initialized with empty string so user doesn't have to backspace a '0'
  const [amount, setAmount] = useState<number | string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('INR');
  const [result, setResult] = useState<number | null>(null);
  
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<number | null>(null);

  // Fetch rates from real-world API
  const fetchRates = async () => {
    try {
      // Don't show full loading screen on background refreshes to avoid UX flicker
      if (!rates) setIsLoading(true);
      
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch live rates");
      
      const data = await response.json();
      setRates(data.rates);
      setLastUpdated(new Date().toLocaleTimeString());
      setError(null);
    } catch (err: any) {
      console.error("Forex Fetch Error:", err);
      setError("Unable to connect to live exchange. Using cached rates.");
      // Fallback to basic rates if the first fetch fails
      if (!rates) {
        setRates({ USD: 1, INR: 83.50, EUR: 0.92, GBP: 0.79, AED: 3.67 });
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch and setup periodic refresh (every 2 minutes)
  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, 120000);
    return () => clearInterval(interval);
  }, []);

  // Calculation Logic: Corrected for Base-Relative Rates
  // Most APIs provide rates relative to a base (e.g., 1 USD = X Currency)
  // Conversion: (Amount / Rate_From) * Rate_To
  const calculateResult = () => {
    if (!rates) return;

    const numericAmount = typeof amount === 'number' 
        ? amount 
        : parseFloat(amount as string) || 0;

    if (numericAmount <= 0) {
      setResult(0);
      return;
    }

    const rateFrom = rates[fromCurrency];
    const rateTo = rates[toCurrency];

    if (rateFrom && rateTo) {
      // (Amount in From) -> Convert to USD -> Convert to To
      const convertedValue = (numericAmount / rateFrom) * rateTo;
      setResult(convertedValue);
    }
  };

  // Recalculate whenever inputs change
  useEffect(() => {
    calculateResult();
  }, [amount, fromCurrency, toCurrency, rates]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    setIsTyping(true);
    typingTimeoutRef.current = window.setTimeout(() => setIsTyping(false), 300);

    if (rawValue === '') {
      setAmount('');
      return;
    }

    const value = parseFloat(rawValue);
    if (!isNaN(value)) {
      setAmount(Math.max(0, value));
    }
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const currencyOptions = rates ? Object.keys(rates).sort() : ['USD', 'INR', 'EUR', 'GBP', 'AED'];
  // Limit selection to most common if list is too long, or keep full
  const commonCurrencies = ['USD', 'INR', 'EUR', 'GBP', 'AED', 'CAD', 'AUD', 'SGD', 'JPY', 'CNY'];
  const filteredOptions = currencyOptions.filter(c => commonCurrencies.includes(c) || c === fromCurrency || c === toCurrency);

  const exchangeRateDisplay = (rates && rates[fromCurrency] && rates[toCurrency])
    ? (rates[toCurrency] / rates[fromCurrency]).toFixed(4)
    : '...';

  return (
    <>
      <div className="w-full max-w-md bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-xl mx-auto my-4 transition-all duration-500 hover:shadow-2xl">
        {/* Header with Live Status */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-extrabold text-[#111814]">Live Currency Converter</h3>
            {lastUpdated && (
              <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                Last Updated: {lastUpdated}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2 text-xs font-bold">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping`}></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-green-600">LIVE</span>
          </div>
        </div>
        
        <div className="space-y-6">
          {error && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center text-amber-700 text-xs font-medium animate-pulse">
              {error}
            </div>
          )}

          {/* Amount Input */}
          <div className="space-y-2">
            <label htmlFor="amount-input" className="text-xs font-bold text-gray-400 uppercase tracking-tight">Amount</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary font-bold">
                payments
              </span>
              <input
                id="amount-input"
                className="w-full h-14 bg-gray-50 border-2 border-transparent rounded-xl pl-11 pr-4 text-[#111814] font-mono text-xl focus:border-primary/30 focus:bg-white outline-none transition-all placeholder:text-gray-300"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0.00"
                onFocus={(e) => e.target.select()}
              />
            </div>
          </div>
          
          {/* Currency Controls */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-3 items-end">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-tight">From</label>
              <select
                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-3 text-sm font-bold text-[#111814] outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                disabled={isLoading}
              >
                {filteredOptions.map((curr) => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}
              </select>
            </div>
            
            <button
              onClick={handleSwap}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-xl">swap_horiz</span>
            </button>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-tight">To</label>
              <select
                className="w-full h-12 bg-gray-50 border border-gray-100 rounded-xl px-3 text-sm font-bold text-[#111814] outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                disabled={isLoading}
              >
                {filteredOptions.map((curr) => (
                  <option key={curr} value={curr}>{curr}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Result Area */}
          <div className={`relative mt-4 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 transition-all duration-300 ${isTyping ? 'scale-[1.02]' : 'scale-100'}`}>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Total</p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-4xl font-black text-[#111814]">
                {isLoading ? '...' : result?.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
              </h4>
              <span className="text-lg font-bold text-primary">{toCurrency}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <p className="text-[10px] font-bold text-gray-400">1 {fromCurrency} = {exchangeRateDisplay} {toCurrency}</p>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-75"></div>
                <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse delay-150"></div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => window.open('https://wa.me/919447113009?text=Hi, I want to check the latest forex rates for ' + fromCurrency + ' to ' + toCurrency, '_blank')}
            className="w-full py-4 rounded-xl bg-[#25D366] text-white font-black text-sm shadow-lg shadow-green-200 flex items-center justify-center gap-2 hover:brightness-105 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            Lock This Rate via WhatsApp
          </button>
        </div>
      </div>

      <style>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </>
  );
};

export default ForexCalculator;