import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Cloud,
  Code,
  Coffee,
  Clapperboard,
  FileCode,
  DraftingCompass,
  Paintbrush,
  Scissors,
  Flame,
  Figma,
} from 'lucide-react';

const skills = [
  {
    name: 'C Programming',
    icon: <Code className="h-10 w-10" />,
    highlighted: true,
  },
  { name: 'Java', icon: <Coffee className="h-10 w-10" />, highlighted: true },
  {
    name: 'AWS Basics',
    icon: <Cloud className="h-10 w-10" />,
    highlighted: true,
  },
  {
    name: 'Firebase',
    icon: <Flame className="h-10 w-10" />,
    highlighted: true,
  },
  {
    name: 'HTML',
    icon: <FileCode className="h-10 w-10" />,
    highlighted: true,
  },
  {
    name: 'CSS',
    icon: <Paintbrush className="h-10 w-10" />,
    highlighted: true,
  },
  {
    name: 'Figma',
    icon: <Figma className="h-10 w-10" />,
    highlighted: true,
  },
  {
    name: 'Canva',
    icon: <DraftingCompass className="h-10 w-10" />,
    highlighted: true,
  },
  {
    name: 'DaVinci Resolve (Basics)',
    icon: <Clapperboard className="h-10 w-10" />,
    highlighted: true,
  },
  {
    name: 'Capcut',
    icon: <Scissors className="h-10 w-10" />,
    highlighted: true,
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
          {skills.map((skill: {name: string, icon: JSX.Element, highlighted?: boolean}) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <div
                className={cn(
                  'flex h-24 w-24 items-center justify-center border-2 border-border bg-card shadow-[4px_4px_0px_0px_hsl(var(--border))] transition-all duration-300 hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))]',
                  skill.highlighted &&
                    'shadow-[6px_6px_0px_0px_hsl(var(--primary))] text-primary'
                )}
              >
                {skill.icon}
              </div>
              <p
                className={cn(
                  'text-lg font-semibold',
                  skill.highlighted && 'text-primary'
                )}
              >
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
