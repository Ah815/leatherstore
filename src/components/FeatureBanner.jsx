import React from 'react';
import { Star, ShieldCheck, CheckCircle, PackageCheck } from 'lucide-react';

const FeatureBanner = () => {
  const features = [
    {
      icon: <Star className="w-10 h-10 text-amber-800" />,
      title: "80k+ Satisfied Customers",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-amber-800" />,
      title: "Secure Shopping & Payment",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-amber-800" />,
      title: "100% Real Leather",
    },
    {
      icon: <PackageCheck className="w-10 h-10 text-amber-800" />,
      title: "30 Days Return",
    },
  ];

  return (
    <div className="w-full bg-white py-8 border-t-4 border-b-4 mb-8 border-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;