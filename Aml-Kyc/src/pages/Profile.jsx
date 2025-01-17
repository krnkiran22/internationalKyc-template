import React, { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Profile() {
  const [userData, setUserData] = useState(null);
 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://international-kyc-template.vercel.app/user-profile`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-gray-700" />
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    {userData.first_name} {userData.last_name}
                    <span className="ml-2 flex items-center text-green-500">
                      <CheckCircle className="h-5 w-5" />
                      <span className="ml-1 text-sm font-medium">KYC Verified</span>
                    </span>
                  </h2>
                  <p className="text-gray-400">{userData.email}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-400">Nationality</dt>
                  <dd className="mt-1 text-lg text-white">{userData.nationality}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-400">Occupation</dt>
                  <dd className="mt-1 text-lg text-white">{userData.occupation}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-400">Annual Income</dt>
                  <dd className="mt-1 text-lg text-white">{userData.annual_income}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
