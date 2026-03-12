# Tanya's Blog Admin

A modern admin dashboard for **Tanya's Blog**, built with Next.js 14. This application serves as the command center for managing blog posts, newsletters, and subscribers.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Authentication:** [Lucia Auth](https://lucia-auth.com/) (Argon2 hashing)
- **Editor:** [Tiptap](https://tiptap.dev/) (Rich Text Editor)
- **Background Jobs:** [Trigger.dev](https://trigger.dev/)
- **Email:** [Resend](https://resend.com/)

## ✨ Features

- **Dashboard Analytics:** Overview of subscribers and recent activities.
- **Rich Text Blog Editor:** Create and edit articles with Tiptap, featuring syntax highlighting, tables, and media support.
- **Subscriber Management:** View and manage newsletter subscribers.
- **Newsletter Automation:** Automated email workflows using Trigger.dev and Resend.
- **Secure Authentication:** Robust login and password reset flows with secure session management.
- **Responsive Design:** Fully responsive UI with a dark mode aesthetic.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL Database
- Trigger.dev Account
- Resend API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TanyaMushonga/tanyas-blog-admin.git
   cd tanyas-blog-admin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/thecypherhub"
   
   # Auth
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   
   # Trigger.dev
   TRIGGER_API_KEY="tr_dev_..."
   TRIGGER_API_URL="https://api.trigger.dev"
   
   # Resend
   RESEND_API_KEY="re_..."
   ```

4. **Initialize Database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

6. **Run Trigger.dev agent (in a separate terminal)**
   ```bash
   npx trigger.dev dev
   ```

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.