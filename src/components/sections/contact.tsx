'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { contactSchema } from '@/lib/schemas';

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: result.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <Badge>Contact</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 text-left"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        {...field}
                        className="border-2 shadow-[4px_4px_0px_0px_hsl(var(--border))]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        {...field}
                        className="border-2 shadow-[4px_4px_0px_0px_hsl(var(--border))]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        {...field}
                        className="min-h-[120px] border-2 shadow-[4px_4px_0px_0px_hsl(var(--border))]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full border-2 border-primary/50 shadow-[4px_4px_0px_0px_hsl(var(--primary))] transition-shadow duration-200 hover:shadow-none"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
          <div className="flex justify-center gap-6">
            <Link
              href="#"
              aria-label="GitHub"
              prefetch={false}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-8 w-8" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              prefetch={false}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-8 w-8" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              prefetch={false}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
