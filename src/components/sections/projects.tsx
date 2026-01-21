import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AI Eye-Tracking Ad Personalization',
    description:
      'An innovative system using AI-powered eye tracking via webcam to personalize ad content in real-time. Built with Supabase for the backend.',
    image: PlaceHolderImages.find((p) => p.id === 'project-1'),
    tags: ['AI', 'React', 'Supabase', 'TypeScript'],
    link: '#',
  },
  {
    title: 'EduShare Portal',
    description:
      'A collaborative platform for students to share educational resources, notes, and previous year papers. Features real-time updates with Firebase.',
    image: PlaceHolderImages.find((p) => p.id === 'project-2'),
    tags: ['Firebase', 'Next.js', 'Education', 'P2P'],
    link: '#',
  },
  {
    title: 'Big Data Analytics Platform',
    description:
      'A scalable platform for processing and analyzing large datasets to derive business insights. Showcases proficiency in data handling and visualization.',
    image: PlaceHolderImages.find((p) => p.id === 'project-3'),
    tags: ['Big Data', 'Python', 'Data Viz'],
    link: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge>Projects</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            My Featured Work
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I&apos;m proud of. Each one represents
            a challenge I was excited to tackle.
          </p>
        </div>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col overflow-hidden border-2 border-border shadow-[8px_8px_0px_0px_hsl(var(--border))] transition-shadow duration-300 hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]"
            >
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  data-ai-hint={project.image.imageHint}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                />
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 font-semibold text-primary"
                  prefetch={false}
                >
                  View Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
