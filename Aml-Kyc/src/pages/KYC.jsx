import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileCheck, ChevronRight } from 'lucide-react';

const KYC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    email: '',
    nationality: '',
    occupation: '',
    annual_income: '',
    image: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Extract the fields except for the image
    const { image, ...dataToSubmit } = formData;
  
    try {
      const response = await fetch('https://international-kyc-template-7usb-l2tw9oxzb-krnkiran22s-projects.vercel.app/api/users/submit-kyc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Log success message
        navigate('/profile'); // Navigate to the profile page
      } else {
        const errorData = await response.json();
        console.error('Failed to submit data:', errorData.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) =>
      name === 'image' && files
        ? { ...prev, [name]: files[0] }
        : { ...prev, [name]: value }
    );
  };

 
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <FileCheck className="mx-auto h-12 w-12 text-indigo-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">Complete Your KYC</h2>
          <p className="mt-2 text-sm text-gray-400">
            Please provide your details for verification
          </p>
        </div>

        <div className="bg-gray-800 shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                {[1, 2].map((num) => (
                  <div key={num} className="flex items-center">
                    <div
                      className={`rounded-full h-8 w-8 flex items-center justify-center ${
                        step >= num ? 'bg-indigo-600' : 'bg-gray-700'
                      }`}
                    >
                      {num}
                    </div>
                    {num === 1 && (
                      <ChevronRight className="h-5 w-5 text-gray-500 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <InputField
                      label="First Name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Last Name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <InputField
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="flex justify-end">
                    <Button onClick={() => setStep(2)}>Next</Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <InputField
                    label="Nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="Occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                  />
                  <InputField
                    label="Annual Income"
                    name="annual_income"
                    type="number"
                    value={formData.annual_income}
                    onChange={handleInputChange}
                  />
                  <FileUploadField
                    label="Upload DL/Passport"
                    name="image"
                    onChange={handleInputChange}
                  />
                  <div className="flex justify-between">
                    <Button onClick={() => setStep(1)} variant="secondary">
                      Back
                    </Button>
                    <Button type="submit">Submit</Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type = 'text', value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-700 text-white shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      required
    />
  </div>
);

const FileUploadField = ({ label, name, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300">{label}</label>
    <input
      type="file"
      name={name}
      onChange={onChange}
      accept="image/*"
      className="mt-1 block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
      required
    />
  </div>
);

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md ${
      variant === 'primary'
        ? 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
        : 'text-white bg-gray-700 hover:bg-gray-600 focus:ring-gray-500'
    }`}
  >
    {children}
  </button>
);

export default KYC;
