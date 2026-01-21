import { Badge } from '@/components/ui/badge';

export function About() {
  return (
    <section id="about" className="w-full bg-card py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid justify-items-center gap-10 px-4 text-center md:px-6 lg:gap-16">
        <div className="space-y-4">
          <Badge variant="outline">About Me</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            A Brief Introduction
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m a final year Computer Science Engineering student at VTU,
            passionate about building robust and scalable applications. My
            journey into tech has been fueled by an internship at Signiwis
            Technologies where I honed my skills in real-world projects.
          </p>
        </div>
        <div className="w-full max-w-3xl space-y-4">
          <Badge variant="outline">Experience</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Journey So Far
          </h2>
          <div className="space-y-6 text-left">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-lg font-bold">W</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">AWS 10-Day Workshop</h3>
                <p className="text-sm text-muted-foreground">
                  Completed an intensive workshop covering core{' '}
                  <strong className="font-bold text-primary">AWS</strong>{' '}
                  services and cloud architecture principles.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="text-lg font-bold">I</span>
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
