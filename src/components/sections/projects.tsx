import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AdSync:Personalized ads by Eye-Tracking',
    description:
      'An innovative system using eye tracking via webcam to personalize ad content in real-time. Built with Python, SQLite, HTML, CSS, and JavaScript.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyZXRybyUyMHRlY2h8ZW58MHx8fHwxNzcwMjEzMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageDescription: 'AdSync: Personalized ads by Eye-Tracking',
    imageHint: 'retro tech',
    tags: ['Python', 'SQLite', 'HTML', 'CSS', 'JS'],
    link: '#',
  },
  {
    title: 'EduShare Portal',
    description:
      'A collaborative platform for students to share educational resources, notes, and previous year papers. Features real-time updates with Firebase.',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzdHVkZW50JTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NzAyMTMwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageDescription: 'EduShare Portal',
    imageHint: 'student collaboration',
    tags: ['Firebase', 'Next.js', 'Education', 'P2P'],
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
            Here are some of the projects I'm proud of. Each one represents
            a challenge I was excited to tackle.
          </p>
        </div>
        <div className="grid gap-8 py-12 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]"
            >
              {project.imageUrl && (
                <div className="overflow-hidden border-b-2 border-border">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageDescription}
                    data-ai-hint={project.imageHint}
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
