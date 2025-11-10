import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden bg-background">
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Accelerate Your Startup's Growth
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Join our accelerator program and transform your startup idea into a thriving business.
            Get access to mentorship, funding, and resources.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/apply">
              <Button size="lg">Apply Now</Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline" size="lg">Learn More</Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-background to-background" />
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">About Our Program</h2>
            <p className="mt-4 text-muted-foreground">
              We provide a comprehensive accelerator program designed to help startups scale rapidly.
              Our program combines intensive mentoring, strategic resources, and access to a vast network.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Expert Mentorship",
                description: "Get guidance from industry veterans and successful entrepreneurs"
              },
              {
                title: "Funding Access",
                description: "Connect with investors and secure the capital you need to grow"
              },
              {
                title: "Network Growth",
                description: "Join a community of founders and industry experts"
              }
            ].map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container">
          <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">Our Programs</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Early Stage Program",
                description: "Perfect for startups in the ideation or MVP phase",
                features: ["3-month program", "Weekly mentoring", "Seed funding opportunities"]
              },
              {
                title: "Growth Stage Program",
                description: "For startups ready to scale their operations",
                features: ["6-month program", "Strategic partnerships", "Series A preparation"]
              }
            ].map((program, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="mb-6 space-y-2">
                    {program.features.map((feature, j) => (
                      <li key={j} className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/programs#${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="mt-auto w-full" variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-center text-3xl font-bold sm:text-4xl">Our Mentors</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Thompson",
                role: "Tech Veteran",
                image: "/mentor-placeholder.jpg"
              },
              {
                name: "Sarah Chen",
                role: "Growth Expert",
                image: "/mentor-placeholder.jpg"
              },
              {
                name: "Michael Rodriguez",
                role: "Investment Advisor",
                image: "/mentor-placeholder.jpg"
              }
            ].map((mentor, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full">
                      <div className="absolute inset-0 bg-primary/20" />
                    </div>
                  </div>
                  <CardTitle className="text-center">{mentor.name}</CardTitle>
                  <CardDescription className="text-center">{mentor.role}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/mentors">
              <Button variant="outline">View All Mentors</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Form CTA */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">Ready to Take the Next Step?</h2>
            <p className="mt-4 text-muted-foreground">
              Applications for our next cohort are now open. Join a community of innovative founders and start your journey to success.
            </p>
            <div className="mt-8">
              <Link href="/apply">
                <Button size="lg">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
