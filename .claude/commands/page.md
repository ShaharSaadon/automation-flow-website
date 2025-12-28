# React Router Page Generator

Create a new React Router page: $ARGUMENTS

## Task

I'll help you create new pages for React Router by:

1. Creating the page component in `src/pages/`
2. Following existing page patterns (Home.jsx, PrivacyPolicy.jsx)
3. Integrating with React Router in the appropriate config file
4. Setting up proper layout and navigation
5. Adding metadata and SEO considerations

## Process

I'll follow these steps:

1. Examine existing pages in `src/pages/` to understand patterns
2. Check `src/pages.config.js` or routing configuration
3. Create new page component with proper structure
4. Use Layout.jsx wrapper if appropriate
5. Import and use shadcn/ui components for UI
6. Add proper navigation links if needed
7. Ensure responsive design with Tailwind CSS

## Page Structure Template

Pages should follow this structure:
- Functional component using React hooks
- Import shadcn/ui components from @/components/ui/
- Use Tailwind CSS for styling
- Include proper semantic HTML
- Add meta information for SEO
- Use responsive design patterns

## Integration with React Router

- Check how routes are defined (likely in App.jsx or pages.config.js)
- Add new route entry
- Update navigation components if needed (src/components/marketing/Navbar.jsx)
- Ensure proper path and component mapping

## Important Notes

- Follow existing naming conventions (PascalCase for page files)
- Use @/ path alias for imports
- Leverage existing marketing components if building marketing pages
- Ensure dark mode compatibility
- Add proper accessibility attributes
- Keep pages responsive across all screen sizes
