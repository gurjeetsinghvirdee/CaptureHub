import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignupValidation } from "src/lib/validation";



const SignupForm = () => {

  // Define your form
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: "",
    },
  })

  // Define a submit handler
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values)
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
                <Input placeholder="username" {...field} />
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
  )
}

export default SignupForm