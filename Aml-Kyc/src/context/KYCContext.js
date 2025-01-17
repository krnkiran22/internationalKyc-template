// KYCContext.js
import React, { createContext, useState, useContext } from 'react';

const KYCContext = createContext();

export function useKYC() {
  return useContext(KYCContext);
}

export function KYCProvider({ children }) {
  const [kycData, setKycData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    email: '',
    nationality: '',
    occupation: '',
    annual_income: '',
    image: null,
  });

  return (
    <KYCContext.Provider value={{ kycData, setKycData }}>
      {children}
    </KYCContext.Provider>
  );
}
