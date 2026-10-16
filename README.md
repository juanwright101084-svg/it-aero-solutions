# Marconi IT & Aerospace Solutions ✈️

**Prime Solutions of Tomorrow.**

Official website of Marconi IT & Aerospace Solutions, a technology and aerospace consultancy based in El Salvador.

🌐 **Live Website:** https://marconiitaero.netlify.app/  
💻 **GitHub Repository:** https://github.com/juanwright101084-svg/it-aero-solutions

## 📌 Project Overview

This project is a bilingual corporate website designed to present Marconi IT & Aerospace Solutions, its services, technical expertise, and business capabilities in the aviation, aerospace, and information technology sectors.

The website provides Spanish and English content, company information, service descriptions, contact pages, and an aviation and technology news integration.

## 🚀 Features

- **Bilingual interface:** Spanish and English versions.
- **Corporate website:** Company profile, services, and business information.
- **Dynamic news integration:** Aviation, defense, drones, aerospace technology, and artificial intelligence news.
- **Serverless architecture:** Netlify Functions for backend operations.
- **Email integration configuration:** Environment variables and Netlify Functions configuration for email-related functionality.
- **Responsive web design:** Intended for access across desktop and mobile devices.
- **Clean URL routing:** Custom redirects for language-specific pages.
- **Cloud deployment:** Hosted on Netlify and connected to a GitHub repository.

## 🧰 Technologies and Tools

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Visual presentation and styling |
| JavaScript | Client-side functionality and API integration |
| Node.js | Runtime for serverless functions |
| Netlify Functions | Serverless backend endpoints |
| Netlify | Hosting, deployment, redirects, and environment variables |
| NewsAPI | External news data provider |
| Git | Version control |
| GitHub | Source code repository and project collaboration |

## 🔌 APIs and Integrations

### 1. NewsAPI

The website integrates with NewsAPI to retrieve news articles related to aviation, defense, unmanned aerial vehicles, artificial intelligence, and aerospace technology.

**API endpoint:**

`https://newsapi.org/v2/everything`

**Implementation:**

The Netlify serverless function queries NewsAPI using a search expression covering relevant aerospace and technology topics. It requests Spanish-language results, sorted by publication date, with a maximum of six articles per request.

**Backend function:**

`netlify/functions/news.js`

**Required environment variable:**

`NEWSAPI_KEY`

The API key is read on the server side rather than being hardcoded into the frontend.

Documentation: https://newsapi.org/docs

### 2. Netlify Functions

Netlify Functions provides the serverless backend used to execute JavaScript code without maintaining a dedicated server.

The project includes a `netlify/functions/` directory for backend functions.

The news function retrieves external API data and returns a JSON response to the website.

Documentation: https://docs.netlify.com/build/functions/overview/

### 3. Email-related configuration

The Netlify environment includes the following variables:

- `NETLIFY_EMAILS_DIRECTORY`
- `NETLIFY_EMAILS_SECRET`

These variables are configured in the deployment environment. Their exact purpose depends on the email-related implementation and should be verified against the corresponding function code and service documentation.

**Security note:** Secret values must never be committed to the public repository or exposed in client-side JavaScript.

## 📁 Project Structure

```text
it-aero-solutions/
├── en/                     # English website
├── es/                     # Spanish website
├── netlify/
│   └── functions/          # Serverless backend functions
│       └── news.js         # NewsAPI integration
├── index.html              # Language entry point
└── netlify.toml             # Netlify deployment configuration
```

## ⚙️ Deployment and Configuration

The website is configured for deployment through Netlify.

The `netlify.toml` file defines the publishing directory, serverless functions directory, and language-specific redirects.

### Environment variables

Configure the required variables in the Netlify dashboard under **Project configuration → Environment variables**.

| Variable | Purpose |
|---|---|
| `NEWSAPI_KEY` | Authentication key for NewsAPI |
| `NETLIFY_EMAILS_DIRECTORY` | Email integration configuration |
| `NETLIFY_EMAILS_SECRET` | Email integration secret |

Use the actual values supplied by the corresponding services. Never place credentials directly in the README.

### Local development

1. Clone the repository:

   ```bash
   git clone https://github.com/juanwright101084-svg/it-aero-solutions.git
   ```

2. Navigate to the project directory:

   ```bash
   cd it-aero-solutions
   ```

3. Open the project using a local static web server or a code editor with a local preview extension.

4. To test Netlify Functions locally, install a supported Node.js version and the Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

5. Configure the required environment variables locally, without committing secrets, and start the local Netlify development environment:

   ```bash
   netlify dev
   ```

The project is a static HTML website with serverless functions; a frontend framework build step is not indicated by the current deployment configuration.

## 🔐 Security Considerations

- Store API keys and secrets as environment variables.
- Keep private credentials out of Git history.
- Perform external API requests requiring secrets through serverless functions.
- Review error handling and access controls before deploying changes.
- Restrict permissive cross-origin access where appropriate for the intended deployment.

## 🌎 Business and Technical Focus

Marconi IT & Aerospace Solutions brings together aviation experience and technology-oriented initiatives, with an interest in:

- Aviation maintenance and avionics.
- Aerospace systems and technical consulting.
- Information technology and software solutions.
- Unmanned aerial systems and emerging technologies.
- Cybersecurity and digital innovation.
- Flight simulation and technical training.

## 🔗 Links

- **Official Website:** https://marconiitaero.netlify.app/
- **GitHub Repository:** https://github.com/juanwright101084-svg/it-aero-solutions
- **NewsAPI Documentation:** https://newsapi.org/docs
- **Netlify Documentation:** https://docs.netlify.com/
- **Netlify Functions Documentation:** https://docs.netlify.com/build/functions/overview/

## 👨‍💻 Maintainer

**Juan Guzmán**  
Founder — Marconi IT & Aerospace Solutions  
El Salvador

---

*Marconi IT & Aerospace Solutions — Prime Solutions of Tomorrow.*

 
