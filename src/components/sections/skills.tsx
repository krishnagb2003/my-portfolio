import { Badge } from '@/components/ui/badge';
import { ReactIcon } from '../icons/react-icon';
import { Cloud, Coffee } from 'lucide-react';

const skills = [
  { name: 'Java', icon: <Coffee className="h-10 w-10" /> },
  { name: 'AWS', icon: <Cloud className="h-10 w-10" /> },
  { name: 'React', icon: <ReactIcon className="h-10 w-10" /> },
  {
    name: 'TypeScript',
    icon: (
      <span className="text-3xl font-bold text-muted-foreground">TS</span>
    ),
  },
  {
    name: 'Supabase',
    icon: (
      <span className="text-3xl font-bold text-muted-foreground">SB</span>
    ),
  },
  {
    name: 'Firebase',
    icon: (
      <span className="text-3xl font-bold text-muted-foreground">FB</span>
    ),
  },
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge>Skills</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Technologies I Work With
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I have experience with a variety of modern technologies for building
            web applications and backend systems.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-8 py-12 sm:grid-cols-3 md:gap-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-border bg-card shadow-lg transition-all duration-300 hover:border-primary hover:shadow-primary/20">
                {skill.icon}
              </div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
