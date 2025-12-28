# Form Generator (react-hook-form + Zod)

Create forms with react-hook-form and Zod validation: $ARGUMENTS

## Task

I'll help you create forms with proper validation by:

1. Setting up react-hook-form with useForm hook
2. Creating Zod schemas for validation
3. Integrating with shadcn/ui Form components
4. Implementing error handling and user feedback
5. Adding submit handlers and mutation hooks

## Process

I'll follow these steps:

1. Define the form fields and validation requirements
2. Create Zod schema for validation rules
3. Set up useForm hook with zodResolver
4. Build form UI using shadcn/ui form components
5. Implement submit handler (often with React Query mutation)
6. Add error display and loading states
7. Include success feedback (toast notifications)

## Form Structure Template

```javascript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values) {
    // Handle form submission
    console.log(values);
    toast.success("Form submitted successfully!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

## Common Zod Validations

- `z.string()` - String validation
- `.min(n)`, `.max(n)` - Length constraints
- `.email()` - Email validation
- `.url()` - URL validation
- `.regex(pattern)` - Custom regex validation
- `z.number()`, `.int()`, `.positive()` - Number validation
- `z.boolean()` - Boolean validation
- `z.date()` - Date validation
- `z.enum([...])` - Enum validation
- `z.object({ ... })` - Object validation
- `z.array(...)` - Array validation
- `.optional()`, `.nullable()` - Optional fields

## Available Form Components

From `@/components/ui/form`:
- Form - Wrapper component
- FormField - Field wrapper with controller
- FormItem - Individual form item
- FormLabel - Accessible label
- FormControl - Input wrapper
- FormDescription - Help text
- FormMessage - Error message display

From `@/components/ui/`:
- Input - Text input
- Textarea - Multi-line text
- Select - Dropdown select
- Checkbox - Checkbox input
- Radio Group - Radio buttons
- Switch - Toggle switch
- Calendar + Popover - Date picker
- Input OTP - OTP input

## Important Notes

- Always use zodResolver for Zod schema integration
- Leverage FormMessage for automatic error display
- Use toast notifications (sonner) for user feedback
- Integrate with React Query mutations for API submissions
- Handle loading states during submission
- Implement proper accessibility with FormLabel and FormDescription
- Use controlled components pattern with react-hook-form
