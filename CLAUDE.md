# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **React 18 + Vite** application built with **JavaScript (JSX)**, using the **@base44/sdk** framework. The project features a modern UI built with **Radix UI** components styled with **Tailwind CSS** (shadcn/ui component library). It includes Stripe payment integration, React Query for data fetching, and react-hook-form with Zod validation.

## Development Commands

### Package Management
- `npm install` or `yarn install` - Install dependencies
- `npm ci` or `yarn install --frozen-lockfile` - Install dependencies for CI/CD
- `npm update` or `yarn upgrade` - Update dependencies

### Build Commands
- `npm run dev` - Start Vite development server with hot reload
- `npm run build` - Build the project for production using Vite
- `npm run preview` - Preview production build locally

### Code Quality Commands
- `npm run lint` - Run ESLint for code linting (scoped to src/components, src/pages, Layout.jsx)
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run typecheck` - Run JSConfig type checking (validates @/* path aliases)

## Technology Stack

### Core Technologies
- **React 18.2** - UI library with hooks and functional components
- **JavaScript (JSX)** - Primary language (no TypeScript in this project)
- **Vite 6.1** - Build tool and development server
- **Node.js** - Runtime environment
- **npm** - Package management

### UI & Styling
- **Radix UI** - Unstyled, accessible component primitives (@radix-ui/react-*)
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Pre-built accessible components using Radix UI + Tailwind
- **Framer Motion 11** - Animation library
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

### State & Data Management
- **@tanstack/react-query 5.84** - Server state management and data fetching
- **React Router DOM 6.26** - Client-side routing
- **react-hook-form 7.54** - Form state management
- **Zod 3.24** - Schema validation

### Key Dependencies
- **@base44/sdk 0.8** - Core framework SDK
- **@base44/vite-plugin** - Vite plugin for Base44 integration
- **@stripe/react-stripe-js** - Stripe payment integration
- **recharts** - Chart library
- **react-markdown** - Markdown rendering
- **date-fns** - Date utility library

### Code Quality Tools
- **ESLint 9.19** - JavaScript linter with React plugins
- **eslint-plugin-unused-imports** - Remove unused imports
- **ESLint plugins**: react, react-hooks, react-refresh

## Project Structure Guidelines

### File Organization
```
src/
├── components/
│   ├── ui/              # shadcn/ui components (accordion, button, dialog, etc.)
│   └── marketing/       # Marketing page components (Navbar, Footer, HeroSection, etc.)
├── pages/               # React Router page components (Home.jsx, PrivacyPolicy.jsx)
├── hooks/               # Custom React hooks (use-mobile.jsx)
├── lib/                 # Utilities and context (AuthContext, utils.js, query-client.js)
├── api/                 # Base44 API integration (base44Client.js, entities.js, integrations.js)
├── assets/              # Static assets (images, SVGs)
├── App.jsx              # Main app component
├── Layout.jsx           # App layout wrapper
├── main.jsx             # React entry point
└── pages.config.js      # Page configuration
```

### Path Aliases
- **@/*** - Configured in jsconfig.json to map to `./src/*`
- Example: `import { Button } from "@/components/ui/button"`

### Naming Conventions
- **Files**: Use PascalCase for components (`HeroSection.jsx`), kebab-case for utilities (`use-mobile.jsx`)
- **Components**: Use PascalCase for component names (`HeroSection`, `ContactSection`)
- **Functions**: Use camelCase for function names (`getUserData`, `fetchIntegrations`)
- **Constants**: Use UPPER_SNAKE_CASE for constants (`API_BASE_URL`)

## JavaScript Guidelines (No TypeScript)

### Code Quality
- This project uses **JavaScript (JSX)**, not TypeScript
- Use JSDoc comments for complex functions and component props
- Enable `checkJs: true` in jsconfig.json for basic type checking
- Leverage ESLint for catching common errors
- Use PropTypes if needed for runtime prop validation (currently disabled in ESLint)

### Best Practices
- Prefer functional components with hooks
- Use destructuring for props and state
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use meaningful variable and function names

## Code Quality Standards

### ESLint Configuration
- ESLint configured with flat config format (eslint.config.js)
- Scoped to: `src/components/**/*.jsx`, `src/pages/**/*.jsx`, `src/Layout.jsx`
- **Active rules**:
  - `unused-imports/no-unused-imports`: error - Auto-remove unused imports
  - `unused-imports/no-unused-vars`: warn - Flag unused variables (ignore vars starting with `_`)
  - `react/prop-types`: off - PropTypes disabled
  - `react/react-in-jsx-scope`: off - React import not required (React 18+)
  - `react-hooks/rules-of-hooks`: error - Enforce hooks rules
  - Custom: Ignore `cmdk-input-wrapper` and `toast-close` unknown properties

### Code Formatting
- **No Prettier config currently exists** - Consider adding .prettierrc if auto-formatting is desired
- Follow existing code style: 2 space indentation, semicolons
- ESLint handles basic formatting rules

### Testing (Not Currently Set Up)
- **No testing framework is installed** (no Jest, Vitest, Cypress, etc.)
- No test files exist in the project
- Consider adding Vitest if testing is needed in the future

## Performance Optimization

### Bundle Optimization (Vite)
- Vite automatically handles code splitting and tree shaking
- Use dynamic imports for lazy loading: `const Component = lazy(() => import('./Component'))`
- Optimize images and assets before importing
- Analyze bundle size with: `npm run build` (check dist/ folder)

### Runtime Performance
- Use React.memo for expensive components to prevent unnecessary re-renders
- Use useMemo for expensive calculations
- Use useCallback for functions passed to child components
- Implement proper error boundaries for better UX
- Consider React Query's built-in caching for API calls

## Security Guidelines

### Dependencies
- Regularly audit dependencies with `npm audit`
- Keep dependencies updated
- Use lock files (`package-lock.json`, `yarn.lock`)
- Avoid dependencies with known vulnerabilities

### Code Security
- Sanitize user inputs
- Use HTTPS for API calls
- Implement proper authentication and authorization
- Store sensitive data securely (environment variables)
- Use Content Security Policy (CSP) headers

## React & UI Component Guidelines

### Using shadcn/ui Components
- **Import from @/components/ui/**: All shadcn components are in `src/components/ui/`
- **Example**: `import { Button } from "@/components/ui/button"`
- **Customization**: Modify Tailwind classes directly on components
- **Available components**: accordion, alert-dialog, avatar, button, card, checkbox, dialog, dropdown-menu, form, input, label, popover, select, separator, sheet, switch, tabs, toast, tooltip, and more

### Using Radix UI
- All shadcn/ui components are built on Radix UI primitives
- Radix provides accessibility, keyboard navigation, and focus management
- Can use Radix primitives directly if needed for custom components

### Tailwind CSS Best Practices
- Use utility classes for styling: `className="flex items-center gap-4"`
- Use theme colors: `bg-primary`, `text-foreground`, `border-border`
- Dark mode: `dark:bg-slate-800` (configured with next-themes)
- Responsive: `sm:`, `md:`, `lg:`, `xl:` prefixes
- Custom config in `tailwind.config.js` includes theme extensions

### React Query Usage
- Query client configured in `src/lib/query-client.js`
- Use `useQuery` for fetching data
- Use `useMutation` for updates
- Queries automatically handle caching, refetching, and loading states

### Forms with react-hook-form + Zod
- Use `useForm` hook from react-hook-form
- Define schemas with Zod for validation
- Use `@hookform/resolvers/zod` for integration
- Leverage shadcn/ui Form components for consistent UX

## Development Workflow

### Before Starting
1. Check Node.js version compatibility
2. Install dependencies with `npm install`
3. Set up environment variables if needed (check for .env.example)
4. Start dev server: `npm run dev`

### During Development
1. Use ESLint auto-fix for code quality: `npm run lint:fix`
2. Follow existing component patterns in `src/components/`
3. Use @/ path alias for imports
4. Leverage React Query for all API calls
5. Use shadcn/ui components for consistent UI

### Before Committing
1. Check linting: `npm run lint`
2. Fix any linting errors: `npm run lint:fix`
3. Verify build works: `npm run build`
4. Test the app: `npm run preview` (after build)