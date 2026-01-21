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
    title: 'AdSync:Personalized ads by Eye-Tracking',
    description:
      'An innovative system using eye tracking via webcam to personalize ad content in real-time. Built with Python, SQLite, HTML, CSS, and JavaScript.',
    image: PlaceHolderImages.find((p) => p.id === 'project-1'),
    tags: ['Python', 'SQLite', 'HTML', 'CSS', 'JS'],
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
          <Badge variant="outline">Projects</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
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
              className="group flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]"
            >
              {project.image && (
                <div className="overflow-hidden border-b-2 border-border">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    data-ai-hint={project.image.imageHint}
                    width={600}
                    height={400}
                    className="aspect-video w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
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
                  className="group/link inline-flex items-center gap-2 font-semibold text-primary"
                  prefetch={false}
                >
                  View Project{' '}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
