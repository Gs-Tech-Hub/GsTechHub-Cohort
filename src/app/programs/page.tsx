import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function ProgramsPage() {
  const programs = [
    {
      id: 'early-stage-program',
      title: 'Early Stage Program',
      description: 'Perfect for startups in the ideation or MVP phase',
      duration: '3 months',
      features: [
        'Weekly mentoring sessions with industry experts',
        'Workshops on product development and market validation',
        'Access to seed funding opportunities',
        'Co-working space access',
        'Technical resources and cloud credits',
        'Demo day presentation opportunity'
      ],
      requirements: [
        'MVP or well-developed concept',
        'Full-time commitment from founders',
        'Based in or willing to relocate temporarily',
        'Strong growth potential'
      ]
    },
    {
      id: 'growth-stage-program',
      title: 'Growth Stage Program',
      description: 'For startups ready to scale their operations',
      duration: '6 months',
      features: [
        'Dedicated mentor team',
        'Strategic partnership opportunities',
        'Series A fundraising preparation',
        'International market access',
        'Advanced growth marketing workshops',
        'Enterprise customer introductions'
      ],
      requirements: [
        'Existing product with market traction',
        'Revenue generating or significant user base',
        'Strong team in place',
        'Clear scaling strategy'
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">Our Programs</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Choose the right program for your startup's stage and accelerate your growth
            </p>
          </div>
        </div>
      </section>

      {/* Programs Detail Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-20">
            {programs.map((program) => (
              <div key={program.id} id={program.id} className="scroll-mt-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">{program.title}</CardTitle>
                    <CardDescription className="text-lg">{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-xl font-semibold">Duration</h3>
                        <p className="mt-2 text-muted-foreground">{program.duration}</p>
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold">Program Features</h3>
                        <ul className="mt-2 space-y-2">
                          {program.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-muted-foreground">
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
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-heading text-xl font-semibold">Requirements</h3>
                        <ul className="mt-2 space-y-2">
                          {program.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-center text-muted-foreground">
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
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-6">
                        <Link href="/apply">
                          <Button size="lg" className="w-full">Apply Now</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}