import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto grid items-start gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <Badge>About Me</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            A Brief Introduction
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m a final year Computer Science Engineering student at VTU,
            passionate about building robust and scalable applications. My
            journey into tech has been fueled by an internship at Signiwis
            Technologies where I honed my skills in real-world projects.
          </p>
        </div>
        <div className="space-y-4">
          <Badge>Experience</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            My Journey So Far
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-lg font-bold text-primary">W</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">AWS 10-Day Workshop</h3>
                <p className="text-sm text-muted-foreground">
                  Completed an intensive workshop covering core AWS services and
                  cloud architecture principles.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-lg font-bold text-primary">I</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Professional Internship
                </h3>
                <p className="text-sm text-muted-foreground">
                  Gained hands-on experience in a professional environment,
                  contributing to live projects and collaborating with a team of
                  developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
