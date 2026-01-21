import { Badge } from '@/components/ui/badge';
import { Radio, BookOpen, BrainCircuit } from 'lucide-react';

const liveActivities = [
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: 'Currently thinking about',
    description: 'How to build more intuitive and helpful AI assistants.',
  },
  {
    icon: <Radio className="h-6 w-6 text-primary" />,
    title: 'Listening to',
    description: 'Lofi beats to code/relax to.',
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: 'Reading',
    description: '"Designing Data-Intensive Applications" by Martin Kleppmann.',
  },
];

export function Live() {
  return (
    <section id="live" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="outline">Live</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            What I'm Up To
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A real-time glimpse into my current activities and thoughts.
          </p>
        </div>
        <div className="mx-auto grid max-w-3xl gap-8 py-12 sm:grid-cols-1 md:gap-12">
          {liveActivities.map((activity) => (
            <div key={activity.title} className="flex items-start gap-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                {activity.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-headline">{activity.title}</h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
