# 🌍 UBUNTU CHAIN
### Sovereign Digital Identity & Microfinance Protocol for Africa

> "Umuntu ngumuntu ngabantu" — "I am because we are."

**UBUNTU CHAIN** is a sovereign digital identity and microfinance protocol built on Solana, designed from the ground up for the 1.4 billion people across Africa who remain unbanked, undocumented, and excluded from global economic systems.

---

## 📖 The Vision (Pitch Narrative)

Amara is a fabric trader in Lagos. She earns $8 a day and needs $200 to expand her business. Every bank says no—not because she isn't creditworthy, but because she lacks the formal identity and "paper trail" the system was built for. 

Ubuntu Chain changes the narrative. By leveraging community-verified identity (uID) and a trust-based reputation graph (uScore), Amara can get a micro-loan in 47 seconds, approved by the peers who know her best. 

We are not just building for Africa; we are building *with* Africa, unlocking a $2.7 trillion informal economy and bringing it on-chain.

---

## 🛑 The Core Problem
- **57% of adults** in Africa have no formal identity document.
- **66% are excluded** from traditional banking systems.
- **Identity Gap:** Existing solutions require government cooperation or high-end smartphones.
- **Connectivity Gap:** Rural areas lack stable internet and electricity.

---

## ✨ The Ubuntu Solution

1.  **Ubuntu ID (uID):** Compressed NFTs on Solana. Identity verified by 3 community "attestors" (elders, leaders) rather than state documents.
2.  **Ubuntu Credit Score (uScore):** A reputation score built from community behavior, peer attestations, and repayment history.
3.  **Ubuntu Micro-loans (uLend):** Peer-to-pool lending with loans as small as $5, accessible via USSD (feature phones).
4.  **Ubuntu Governance (uGov):** Community DAOs (ROSCAs/Collectives) that govern loan parameters and insurance.
5.  **Ubuntu Blinks:** Solana Actions for one-click community funding and emergency relief.
6.  **Ubuntu Utility Bridge:** Direct off-ramps to Mobile Money (M-Pesa, MoMo) and utility payments.

---

## 🏗️ Technical Architecture

```text
[ Feature Phone (USSD) ] <--> [ SMS Oracle (Node.js) ] <--> [ Solana Programs ]
                                        ^                          |
                                        |                          v
[ Mobile App (React Native) ] <---------+                [ Compressed NFTs (uID) ]
                                                                   |
                                                         [ IPFS (Biometric Hashes) ]
                                                                   |
[ Impact Investor / NGO ] <--> [ Solana Blinks ] <--> [ Community Pools ]
```

### Tech Stack
- **Blockchain:** Solana (Anchor Framework)
- **Identity:** Compressed NFTs (State Compression)
- **Frontend:** Next.js 14, Tailwind CSS, Framer Motion
- **Video:** Remotion (Cinematic Demo)
- **Oracle:** Node.js (USSD/SMS Bridge via Africa's Talking)
- **Database:** Supabase (Off-chain analytics & cache)

---

## 📂 Project Structure
```text
ubuntu-chain/
├── programs/         # Solana Anchor Programs
│   ├── identity/     # uID minting & community attestation
│   ├── score/        # uScore calculation logic
│   ├── lending/      # Peer-to-pool micro-loans
│   └── governance/   # Community DAOs & voting
├── app/              # Next.js 14 Web Dashboard
├── oracle/           # USSD/SMS Bridge Service
├── sdk/              # TypeScript SDK for integration
├── video/            # Remotion Cinematic Demo
└── brand/            # Visual Identity & Brand Assets
```

---

## ⚖️ Judge Talking Points
1.  **Economic Viability:** Micro-loans of $5 are only possible due to Solana's <$0.001 transaction fees.
2.  **Scale:** State Compression allows minting 10 million identities for less than $100.
3.  **Accessibility:** Works on a $20 feature phone via USSD—no smartphone required.
4.  **Cultural Resonance:** Built on the "Ubuntu" philosophy, turning traditional trust into on-chain data.
5.  **Hybrid Trust:** Combines biometric hashing (off-chain) with community co-signatures (on-chain).

---

## 🚀 Getting Started

### Prerequisites
- Solana CLI & Anchor
- Node.js 20+
- Vercel CLI (for deployment)

### Installation
```bash
# Clone the repository
git clone https://github.com/NeonTechno/ubuntu-chain.git

# Install dependencies
./setup.sh
```

---

## 🌍 Impact & Alignment
Aligned with **UN SDGs 1 (No Poverty), 8 (Decent Work), and 10 (Reduced Inequalities)**. Ubuntu Chain is the bridge between the informal economy and the global financial layer.

---
*Built for the Dev3Pack Hackathon 2025.*
