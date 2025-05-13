import {
  accountNameAtom,
  accountNumberAtom,
  bankAtom,
  branchAtom,
  proofFileAtom,
} from "@/state/bankState";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useAtom } from "jotai";
import React, { useState } from "react";

const banks = [
  { label: "Commercial Bank of Ethiopia", value: "cbe" },
  { label: "Awash Bank", value: "awash" },
  { label: "Dashen Bank", value: "dashen" },
  { label: "Nib International Bank", value: "nib" },
  { label: "Bank of Abyssinia", value: "abyssinia" },
  { label: "Wegagen Bank", value: "wegagen" },
  { label: "Oromia International Bank", value: "oromia" },
  { label: "United Bank", value: "united" },
  { label: "Zemen Bank", value: "zemen" },
  { label: "Lion International Bank", value: "lion" },
];

const branches = [
  { label: "Addis Ababa Main Branch", value: "addis-main" },
  { label: "Bole Branch", value: "bole" },
  { label: "Piassa Branch", value: "piassa" },
  { label: "Megenagna Branch", value: "megenagna" },
  { label: "Merkato Branch", value: "merkato" },
  { label: "Kazanchis Branch", value: "kazanchis" },
  { label: "CMC Branch", value: "cmc" },
  { label: "Gullele Branch", value: "gullele" },
  { label: "Sarbet Branch", value: "sarbet" },
  { label: "Mexico Branch", value: "mexico" },
];

export const FundWithdraw = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const [bank, setBank] = useAtom(bankAtom);
  const [branch, setBranch] = useAtom(branchAtom);
  const [accountName, setAccountName] = useAtom(accountNameAtom);
  const [accountNumber, setAccountNumber] = useAtom(accountNumberAtom);
  const [proofFile, setProofFile] = useAtom<File | null>(proofFileAtom);
  const [touched, setTouched] = useState({
    bank: false,
    branch: false,
    accountName: false,
    accountNumber: false,
    proofFile: false,
  });

  const isFormValid =
    bank && branch && accountName && accountNumber && proofFile;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Fund Withdraw</h2>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (isFormValid) onNext();
        }}
      >
        <Select
          label="Bank"
          placeholder="Select your bank"
          selectedKeys={bank ? [bank] : []}
          onChange={(e) => setBank(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, bank: true }))}
          isInvalid={touched.bank && !bank}
          errorMessage={touched.bank && !bank ? "Bank is required" : undefined}
        >
          {banks.map((b) => (
            <SelectItem key={b.value} value={b.value}>
              {b.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Branch"
          placeholder="Select branch"
          selectedKeys={branch ? [branch] : []}
          onChange={(e) => setBranch(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, branch: true }))}
          isInvalid={touched.branch && !branch}
          errorMessage={
            touched.branch && !branch ? "Branch is required" : undefined
          }
        >
          {branches.map((b) => (
            <SelectItem key={b.value} value={b.value}>
              {b.label}
            </SelectItem>
          ))}
        </Select>
        <Input
          label="Account Name"
          placeholder="Enter account name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, accountName: true }))}
          isInvalid={touched.accountName && !accountName}
          errorMessage={
            touched.accountName && !accountName
              ? "Account name is required"
              : undefined
          }
        />
        <Input
          label="Account Number"
          placeholder="Enter account number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          onBlur={() => setTouched((t) => ({ ...t, accountNumber: true }))}
          isInvalid={touched.accountNumber && !accountNumber}
          errorMessage={
            touched.accountNumber && !accountNumber
              ? "Account number is required"
              : undefined
          }
        />
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="proof">
            Proof of Bank Account
          </label>
          <input
            id="proof"
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) =>
              setProofFile(
                e.target.files && e.target.files[0] ? e.target.files[0] : null
              )
            }
            onBlur={() => setTouched((t) => ({ ...t, proofFile: true }))}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary-dark"
          />
          {touched.proofFile && !proofFile && (
            <span className="text-xs text-red-500">
              Proof of bank account is required
            </span>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <Button onClick={onBack} variant="bordered" type="button">
            Back
          </Button>
          <Button
            type="submit"
            disabled={!isFormValid}
            className="bg-primary-theme text-white"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};
