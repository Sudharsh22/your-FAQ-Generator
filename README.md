# YOUR FAQ Generator

Strict FAQ Generator is a frontend-focused web application that helps generate accurate, source-grounded FAQs from documents. The goal of this project is to reduce hallucination in AI-generated answers by ensuring that every FAQ is directly tied to the original source content.

This project was built with an emphasis on clarity, trust, and usability rather than just output generation. The interface is designed to make users feel confident that the answers they see are reliable and traceable.

---

## Why this project exists

Many AI-powered FAQ tools generate answers that *sound* correct but are not always grounded in the source material. This becomes a serious issue in areas like documentation, compliance, and internal knowledge bases.

Strict FAQ Generator addresses this problem by focusing on:
- Source traceability
- Clear answer grounding
- A transparent and user-friendly interface

The project currently focuses on the frontend experience and architecture, with the design structured to easily support backend or AI integration in the future.

---

## What the application does

The application presents a clean landing interface where users can initiate FAQ generation from documents. The experience is intentionally simple and guided, reducing cognitive overload while maintaining a strong visual identity.

Key capabilities include:
- Generating FAQs based on user-provided content
- Ensuring answers remain locked to source material
- Providing a clear and readable FAQ presentation flow
- Offering a modern, visually engaging UI that does not compromise readability

---

## Key features

- Source-grounded FAQ generation  
- Zero-hallucination focused design philosophy  
- Clean and intuitive user flow  
- Cyberpunk-inspired animated background  
- Component-based architecture for scalability  
- Built with accessibility-aware UI libraries  

---

## Tech stack

- **React + TypeScript** for type-safe, maintainable frontend development  
- **Vite** for fast development and optimized builds  
- **Tailwind CSS** for consistent styling and rapid UI iteration  
- **Radix UI** for accessible and composable UI components  
- **Material UI (MUI)** for icons and structured interface elements  

---

## Project structure

src/
├── app/
│ └── components/
│ ├── CyberpunkBackground.tsx
│ ├── VaporwaveBackground.tsx
│ └── Reusable UI components
├── styles/
│ ├── tailwind.css
│ ├── theme.css
│ └── fonts.css
├── App.tsx
├── main.tsx
└── index.html


The project is structured to keep visual components, styles, and application logic clearly separated, making the codebase easier to understand and extend.

---

## Getting started

### Prerequisites
- Node.js (LTS version recommended)
- npm

### Install dependencies

npm install


### Run the application locally : npm run dev


Once the server starts, open your browser and visit: http://localhost:5173

---

## Design approach

The UI design focuses on balancing aesthetics with usability. While the cyberpunk-style background adds visual identity, care has been taken to ensure text readability, contrast, and layout clarity.

Rather than overwhelming users with options, the interface guides them toward a single, clear action. This makes the experience approachable even for non-technical users.

---

## Current limitations

This project currently focuses on the frontend experience. Backend logic for document ingestion and AI-based FAQ generation is planned but not implemented yet. The existing structure is intentionally designed to support these additions without major refactoring.

---

## Potential future improvements

- Backend integration for document processing  
- AI-powered FAQ generation logic  
- Source highlighting for each answer  
- Exporting FAQs as Markdown or JSON  
- User authentication and saved sessions  

---

## Author

**Sudharsshana R**  
Computer Science Engineering student with an interest in frontend systems, AI-assisted tools, and building reliable user-focused applications.

