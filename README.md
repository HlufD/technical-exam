# Safaricom Partner Hub Technical Exam

This project is a modern, responsive onboarding and authentication web application built with Next.js, NextUI, and Tailwind CSS. It demonstrates best practices for multi-step forms, validation, and user experience, tailored for the Safaricom Partner Hub.

## Features

- **Responsive Login Page**

  - Username and password validation (with strong password rules)
  - Show/hide password toggle
  - User-friendly error messages
  - Login button disabled until all validations pass
  - Redirects to dashboard on successful login

- **Multi-Step Onboarding Wizard**

  - Steps: Check Merchant, Distribution Detail, Business Type, Business Detail, Business Owner, Fund Withdraw, Final Review
  - Each step validates input before proceeding
  - Visual stepper with progress, checkmarks, and connecting lines
  - Uses NextUI and Tailwind for a beautiful, modern UI

- **Fund Withdraw Step**

  - Ethiopian banks and branches dropdowns
  - Account name, account number, and proof of bank account file upload
  - Validation for all fields

- **Fund Review Step**
  - Reviews of All the user information entered so far

## Tech Stack

- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## Getting Started

1. **Install dependencies:**
   ```sh
   yarn install
   ```
2. **Run the development server:**
   ```sh
   yarn run dev
   ```
3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `components/Signin/` — Login form
- `components/Onboarding/OnboardingWizard.tsx` — Multi-step onboarding wizard
- `components/Onboarding/FundWithdraw.tsx` — Fund withdraw step form
- `components/Onboarding/FinalReview.tsx` — Final review form of information
- `app/` — Next.js app directory (routing, layouts, pages)
- `styles/` — Global styles

## Customization

- Update the list of banks/branches in `components/Onboarding/FundWithdraw.tsx` as needed.
- Adjust theme colors in `tailwind.config.js`.

## License

This project is for technical demonstration purposes only.
