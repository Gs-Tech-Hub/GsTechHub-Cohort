import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ApplyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted/50">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">Apply Now</h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Take the first step towards accelerating your startup's growth
            </p>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20">
        <div className="container">
          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle>Application Form</CardTitle>
              <CardDescription>
                Please fill out the form below to apply for our accelerator program.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Company Name
                  </label>
                  <input
                    className="w-full rounded-md border bg-background px-3 py-2"
                    id="name"
                    placeholder="Enter your company name"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="website">
                    Website
                  </label>
                  <input
                    className="w-full rounded-md border bg-background px-3 py-2"
                    id="website"
                    placeholder="https://"
                    type="url"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Contact Email
                  </label>
                  <input
                    className="w-full rounded-md border bg-background px-3 py-2"
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="stage">
                    Company Stage
                  </label>
                  <select
                    className="w-full rounded-md border bg-background px-3 py-2"
                    id="stage"
                  >
                    <option value="">Select stage</option>
                    <option value="idea">Idea Stage</option>
                    <option value="mvp">MVP</option>
                    <option value="early">Early Traction</option>
                    <option value="growth">Growth Stage</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="description">
                    Company Description
                  </label>
                  <textarea
                    className="min-h-[100px] w-full rounded-md border bg-background px-3 py-2"
                    id="description"
                    placeholder="Tell us about your company and what you're building..."
                  ></textarea>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="problem">
                    Problem & Solution
                  </label>
                  <textarea
                    className="min-h-[100px] w-full rounded-md border bg-background px-3 py-2"
                    id="problem"
                    placeholder="What problem are you solving and how are you solving it?"
                  ></textarea>
                </div>
                <Button className="w-full" size="lg" type="submit">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}