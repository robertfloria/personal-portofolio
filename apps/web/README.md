# Portfolio Web Application

A modern, production-ready Next.js portfolio application with clean architecture, type safety, and excellent user experience.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## ✨ Features

### Core Functionality

- 📧 **Contact Form** with email integration and toast notifications
- 🎨 **Dark Mode** with system preference detection
- 📱 **Fully Responsive** design
- ♿ **Accessible** with ARIA labels and reduced motion support
  - 🔔 **Toast Notifications** for user feedback (Context-based)
- ⚡ **Optimized Performance** with React Query caching

### Sections

- Hero section with animated introduction
- About section with personal information
- Skills showcase with proficiency levels
- Project portfolio with detailed views
- Professional timeline
- Certificates display
- Contact form with validation

## 🏗️ Architecture

This application follows **clean architecture principles**:

```
Presentation → Business Logic → Data Layer
  (Components)    (Hooks/Services)  (Types/Validators)
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation.

### Key Patterns

- **Component Composition**: Atomic design with reusable components
- **Custom Hooks**: Encapsulated logic for reusability
- **Service Layer**: Clean API abstraction
- **State Management**: React Context for lightweight UI state, React Query for server state
- **Type Safety**: Full TypeScript coverage

## 📦 Tech Stack

### Frontend

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations

-### State Management

- **React Context** - Lightweight UI state (theme, menus, notifications)
- **React Query** - Server state and caching
- **React Query** - Server state and caching

### Form & Validation

- **Zod** - Runtime type validation
- Custom validation hooks

### UI Components

- **Lucide React** - Icon library
- **next-themes** - Dark mode support
- **class-variance-authority** - Component variants

## 📂 Project Structure

```
apps/web/
├── app/              # Next.js pages and layouts
├── components/       # React components
│   ├── common/      # Reusable UI components
│   └── sections/    # Page sections
├── hooks/           # Custom React hooks
├── services/        # API services
├── (no store/)      # UI state managed via React Context; Redux removed
├── lib/             # Utilities and helpers
├── types/           # TypeScript definitions
└── public/          # Static assets
```

## 🎯 Component Usage Examples

### Toast Notifications

```typescript
import { useNotifications } from '@/components/contexts/notification-context';

const { addNotification } = useNotifications();

addNotification({ type: 'success', message: 'Operation completed!', duration: 5000 });
```

### Custom Hooks

```typescript
// Email sending with automatic notifications
const { mutate: sendEmail, isPending } = useSendEmail();

sendEmail(formData, {
  onSuccess: () => resetForm(),
});
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Docs](https://tanstack.com/query/latest)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Detailed architecture documentation

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies**
