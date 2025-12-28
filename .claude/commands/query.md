# React Query Hook Generator

Create React Query hooks for API calls: $ARGUMENTS

## Task

I'll help you create React Query hooks for data fetching by:

1. Setting up useQuery or useMutation hooks
2. Integrating with @base44/sdk or custom API clients
3. Following existing patterns in `src/api/` directory
4. Implementing proper error handling and loading states
5. Configuring caching and refetching strategies

## Process

I'll follow these steps:

1. Examine existing API clients in `src/api/` (base44Client.js, entities.js, integrations.js)
2. Understand the data fetching requirements
3. Create appropriate useQuery or useMutation hook
4. Set up proper query keys for cache management
5. Implement error handling with try-catch or error boundaries
6. Configure loading and success states
7. Add TypeScript-style JSDoc comments for clarity

## React Query Configuration

- Query client is configured in `src/lib/query-client.js`
- Use `useQuery` for GET requests (data fetching)
- Use `useMutation` for POST/PUT/DELETE requests (data updates)
- Leverage automatic caching, background refetching, and stale data management

## Common Patterns

### useQuery Example
```javascript
import { useQuery } from '@tanstack/react-query';
import { fetchEntities } from '@/api/entities';

export function useEntities() {
  return useQuery({
    queryKey: ['entities'],
    queryFn: fetchEntities,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

### useMutation Example
```javascript
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEntity } from '@/api/entities';

export function useCreateEntity() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createEntity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['entities'] });
    },
  });
}
```

## Important Notes

- Place custom hooks in `src/hooks/` or create `src/queries/` directory
- Use descriptive query keys for cache management
- Implement optimistic updates for better UX when appropriate
- Handle errors gracefully with toast notifications (sonner)
- Consider pagination and infinite queries for large datasets
- Use React Query DevTools in development for debugging
