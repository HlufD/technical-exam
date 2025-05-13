"use client";

import React, { useState } from "react";
import { Button, Card } from "@nextui-org/react";
import { FundWithdraw } from "./FundWithdraw";
import { FinalReview } from "./FinalReview";

// Step components (placeholders)
const CheckMerchant = ({ onNext }: { onNext: () => void }) => {
  // Add validation and form fields here
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Check Merchant</h2>
      {/* Form fields go here */}
      <div className="flex">
        <Button onClick={onNext} className="mt-4 text-primary-theme">
          Next
        </Button>
      </div>
    </div>
  );
};

const DistributionDetail = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Distribution Detail</h2>
    {/* Form fields go here */}
    <div className="flex gap-2 mt-4">
      <Button onClick={onBack} variant="bordered">
        Back
      </Button>
      <Button onClick={onNext} className="text-primary-theme">
        Next
      </Button>
    </div>
  </div>
);

const BusinessType = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Business Type</h2>
    {/* Form fields go here */}
    <div className="flex gap-2 mt-4">
      <Button onClick={onBack} variant="bordered">
        Back
      </Button>
      <Button onClick={onNext} className="text-primary-theme">
        Next
      </Button>
    </div>
  </div>
);

const BusinessDetail = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Business Detail</h2>
    {/* Form fields go here */}
    <div className="flex gap-2 mt-4">
      <Button onClick={onBack} variant="bordered">
        Back
      </Button>
      <Button onClick={onNext} className="text-primary-theme">
        Next
      </Button>
    </div>
  </div>
);

const BusinessOwner = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Business Owner</h2>
    {/* Form fields go here */}
    <div className="flex gap-2 mt-4">
      <Button onClick={onBack} variant="bordered">
        Back
      </Button>
      <Button onClick={onNext} className="text-primary-theme">
        Next
      </Button>
    </div>
  </div>
);

const steps = [
  "Check Merchant",
  "Distribution Detail",
  "Business Type",
  "Business Detail",
  "Business Owner",
  "Fund Withdraw",
  "Final Review",
];

const OnboardingWizard = () => {
  const [step, setStep] = useState(0);

  const goNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 py-8 px-2">
      <Card className="w-full p-6">
        <div className="flex items-center justify-between mb-6">
          {steps.map((label, idx) => (
            <React.Fragment key={label}>
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-full border-2 transition-all duration-200 ${
                    idx < step
                      ? "bg-primary-theme text-white border-primary-theme" // completed
                      : idx === step
                        ? "bg-white border-primary-theme text-primary-theme font-bold" // current
                        : "bg-gray-200 border-gray-300 text-gray-400" // upcoming
                  }`}
                >
                  {idx < step ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    idx + 1
                  )}
                </div>
                <span
                  className={`mt-2 text-xs ${idx === step ? "text-primary-theme font-semibold" : "text-gray-400"}`}
                >
                  {label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-1 ${idx < step ? "bg-primary-theme" : "bg-gray-200"}`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
        {step === 0 && <CheckMerchant onNext={goNext} />}
        {step === 1 && <DistributionDetail onNext={goNext} onBack={goBack} />}
        {step === 2 && <BusinessType onNext={goNext} onBack={goBack} />}
        {step === 3 && <BusinessDetail onNext={goNext} onBack={goBack} />}
        {step === 4 && <BusinessOwner onNext={goNext} onBack={goBack} />}
        {step === 5 && <FundWithdraw onNext={goNext} onBack={goBack} />}
        {step === 6 && <FinalReview onBack={goBack} />}
      </Card>
    </div>
  );
};

export default OnboardingWizard;
