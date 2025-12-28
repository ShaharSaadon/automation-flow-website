# shadcn/ui Component Assistant

Add or customize shadcn/ui components: $ARGUMENTS

## Task

I'll help you work with shadcn/ui components by:

1. Identifying which shadcn/ui components exist in `src/components/ui/`
2. Creating new custom components using existing shadcn/ui primitives
3. Customizing existing shadcn/ui components with Tailwind classes
4. Composing complex UI patterns from multiple shadcn components
5. Ensuring accessibility and responsive design

## Process

I'll follow these steps:

1. Check `src/components/ui/` for existing shadcn components
2. Understand which Radix UI primitives are available
3. Design component structure following project patterns
4. Implement with proper Tailwind styling and dark mode support
5. Ensure accessibility attributes are present
6. Add responsive design considerations

## Available shadcn/ui Components

The project includes these pre-built components in `src/components/ui/`:
- accordion, alert-dialog, alert, aspect-ratio, avatar
- badge, breadcrumb, button
- calendar, card, carousel, chart, checkbox, collapsible, command, context-menu
- dialog, drawer, dropdown-menu
- form
- hover-card
- input, input-otp
- label
- menubar
- navigation-menu
- pagination, popover, progress
- radio-group, resizable
- scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch
- table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip
- use-toast (custom hook)

## Styling Guidelines

- Use Tailwind utility classes for all styling
- Follow theme colors: `bg-primary`, `text-foreground`, `border-border`, etc.
- Add dark mode variants: `dark:bg-slate-800`, `dark:text-white`
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Leverage className props for customization

## Important Notes

- All components use @/ path alias: `import { Button } from "@/components/ui/button"`
- Components are built on Radix UI primitives for accessibility
- Tailwind config includes custom theme extensions
- Dark mode is configured with next-themes
- Do not install new shadcn components without asking first
