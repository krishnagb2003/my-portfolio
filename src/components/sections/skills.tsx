import { Badge } from '@/components/ui/badge';
import {
  Cloud,
  Code,
  Coffee,
  FileCode,
  Flame,
  Figma,
  Paintbrush,
  Palette,
  Scissors,
} from 'lucide-react';

const skills = [
  {
    name: 'C Programming',
    icon: <Code className="h-10 w-10" />,
  },
  { name: 'Java', icon: <Coffee className="h-10 w-10" /> },
  {
    name: 'AWS Basics',
    icon: <Cloud className="h-10 w-10" />,
  },
  {
    name: 'Firebase',
    icon: <Flame className="h-10 w-10" />,
  },
  {
    name: 'HTML',
    icon: <FileCode className="h-10 w-10" />,
  },
  {
    name: 'CSS',
    icon: <Paintbrush className="h-10 w-10" />,
  },
  {
    name: 'Figma',
    icon: <Figma className="h-10 w-10" />,
  },
  {
    name: 'Canva',
    icon: <Palette className="h-10 w-10" />,
  },
  {
    name: 'DaVinci Resolve (Basics)',
    icon: <Scissors className="h-10 w-10" />,
  },
  {
    name: 'Capcut',
    icon: <Scissors className="h-10 w-10" />,
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline">Skills</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            My Skills & Tools
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I have experience with a variety of modern technologies and creative
            tools to bring ideas to life.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-8 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-12">
          {skills.map((skill: { name: string; icon: JSX.Element }) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <div className="flex h-24 w-24 items-center justify-center border-2 border-border bg-card text-foreground shadow-[4px_4px_0px_0px_hsl(var(--border))] transition-colors hover:text-primary">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-foreground">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
