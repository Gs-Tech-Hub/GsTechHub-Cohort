import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  const stats = [
    {
      title: 'Startups Accelerated',
      value: '100+',
      description: 'Successfully launched and scaled'
    },
    {
      title: 'Total Funding',
      value: '$50M+',
      description: 'Raised by our portfolio companies'
    },
    {
      title: 'Expert Mentors',
      value: '50+',
      description: 'Industry leaders and veterans'
    },
    {
      title: 'Success Rate',
      value: '85%',
      description: 'Still operating after 2 years'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We believe in pushing boundaries and embracing new ideas that can change the world.'
    },
    {
      title: 'Founder Focus',
      description: 'Our programs are designed around the needs of founders, providing personalized support and guidance.'
    },
    {
      title: 'Community Driven',
      description: 'We foster a strong community of founders, mentors, and industry experts who support each other.'
    },
    {
      title: 'Long-term Success',
      description: 'Our goal is to build sustainable businesses that create lasting impact, not just quick wins.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">About Us</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Empowering the next generation of startups through mentorship, resources, and community
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold">Our Mission</h2>
            <p className="mt-6 text-xl text-muted-foreground">
              We are dedicated to helping ambitious founders build exceptional companies. Our accelerator
              program provides the resources, mentorship, and network needed to transform innovative
              ideas into successful businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">{stat.value}</CardTitle>
                  <CardDescription className="text-lg font-medium">{stat.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center">Our Values</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {values.map((value, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold">Our Team</h2>
            <p className="mt-6 text-muted-foreground">
              Our team consists of experienced entrepreneurs, investors, and industry experts who are
              passionate about helping startups succeed. With decades of combined experience in building
              and scaling companies, we provide the guidance and support founders need at every stage
              of their journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}