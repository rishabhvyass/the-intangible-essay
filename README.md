# The Ethics of Blockchain — A Research Essay

An editorial, interactive web application presenting a detailed research essay on **The Ethics of Blockchain Technology and Cryptocurrency**. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

🌐 **Live Website**: [https://theethicsofblockchain.vercel.app/](https://theethicsofblockchain.vercel.app/)

---

## 📖 Overview of the Site

This website is designed as a digital editorial publication examining the primary ethical concerns surrounding blockchain and cryptocurrency, along with actionable, evidence-based solutions.

### Key Essay Topics Covered

1. **Introduction & Decentralization Dilemma**: Exploring how decentralization and pseudonymity provide freedom while creating ethical trade-offs.
2. **Environmental Impact of Proof-of-Work (PoW)**: Analyzing electricity consumption, carbon footprints, energy grids, e-waste, and fossil fuel reliance.
3. **Financial Crime & Investor Exploitation**: Detailing rug pulls, scams, ransomware, sanctions evasion, state-sponsored hacking (e.g., Chainalysis report data), and market volatility.
4. **Governance, Accountability & Inequality**: Examining DAOs, smart contract vulnerabilities, lack of legal recourse, and wealth concentration.
5. **Toward Ethical Solutions**: Highlighting Ethereum's transition to Proof-of-Stake (reducing energy use by >99%), KYC/AML regulations, disclosures, smart contract audits, and financial literacy.
6. **Conclusion**: A synthesis advocating for responsible engineering and balanced regulation.

---

## ✨ Features & Interactive Elements

- **Reading Progress Bar**: Dynamic top progress bar indicating reading completion based on scroll position.
- **Interactive Link Previews**: References automatically parse URLs and generate hoverable tooltip cards featuring domain icons and live website screenshot previews (via Microlink API).
- **Scroll Reveal Animations**: Smooth section fade-ins powered by `IntersectionObserver`.
- **Editorial Typography**: Custom integration of Google Fonts (`Space Grotesk` for headers/UI and `Newsreader` for body text).
- **Responsive Layout**: Tailored reading layout designed for readability across desktop, tablet, and mobile devices.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI & Logic**: React 19, TypeScript
- **Styling**: Tailwind CSS v4, PostCSS
- **Icons & UI Utilities**: Lucide React, Base UI, Shadcn UI
- **Analytics**: `@vercel/analytics`

---

## 📁 Project Structure

```text
the-intangible-essay/
├── app/
│   ├── globals.css         # Design tokens, typography variables, layout styles
│   ├── layout.tsx          # Root layout, Google Fonts integration & metadata
│   └── page.tsx            # Home page rendering the EssayPage component
├── components/
│   ├── essay-page.tsx      # Core interactive essay component (Sections, LinkPreview, ReadingProgress)
│   └── ui/                 # Reusable UI components (Button, etc.)
├── lib/
│   └── utils.ts            # Utility functions for class merges (`cn`)
├── public/
│   └── images/             # Visual illustrations for each essay section
├── next.config.mjs         # Next.js configuration & workspace path fixes
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd the-intangible-essay
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Production Build

To test or generate the production build:

```bash
npm run build
npm start
```

---

## 📝 License

This project is created for educational and research presentation purposes.
