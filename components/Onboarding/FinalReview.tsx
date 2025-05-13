import { Button } from "@nextui-org/react";
import { useAtom } from "jotai";

import {
  bankAtom,
  branchAtom,
  accountNameAtom,
  accountNumberAtom,
  proofFileAtom,
} from "@/state/bankState";

export const FinalReview = ({ onBack }: { onBack: () => void }) => {
  const [bank] = useAtom(bankAtom);
  const [branch] = useAtom(branchAtom);
  const [accountName] = useAtom(accountNameAtom);
  const [accountNumber] = useAtom(accountNumberAtom);
  const [proofFile] = useAtom(proofFileAtom);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Final Review</h2>
      <div className="bg-gray-50 rounded p-4 mb-4">
        <div className="mb-2">
          <span className="font-medium">Bank Name:</span>{" "}
          {bank || <span className="text-red-500">Not provided</span>}
        </div>
        <div className="mb-2">
          <span className="font-medium">Bank Branch Name:</span>{" "}
          {branch || <span className="text-red-500">Not provided</span>}
        </div>
        <div className="mb-2">
          <span className="font-medium">Account Name:</span>{" "}
          {accountName || <span className="text-red-500">Not provided</span>}
        </div>
        <div className="mb-2">
          <span className="font-medium">Account Name:</span>{" "}
          {accountName || <span className="text-red-500">Not provided</span>}
        </div>
        <div className="mb-2">
          <span className="font-medium">Account Number:</span>{" "}
          {accountNumber || <span className="text-red-500">Not provided</span>}
        </div>
        <div className="mb-2">
          <span className="font-medium">Proof of Bank Account:</span>{" "}
          {proofFile ? (
            <span>{proofFile.name}</span>
          ) : (
            <span className="text-red-500">Not uploaded</span>
          )}
        </div>
        <Button variant="bordered" onPress={onBack}>
          Back
        </Button>
      </div>
    </div>
  );
};
