import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ThemeToggle } from '@/components/shared/theme-toggle';

export default function DemoPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header with Theme Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Component Demo</h1>
          <p className="text-muted-foreground mt-2">
            Showcasing Shadcn UI components with dark mode support
          </p>
        </div>
        <ThemeToggle />
      </div>

      {/* Typography Section */}
      <Card>
        <CardHeader>
          <CardTitle>Typography & Colors</CardTitle>
          <CardDescription>
            Inter font with slate-based color scheme
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Heading 2</h2>
            <h3 className="text-xl font-semibold">Heading 3</h3>
            <p className="text-base">
              This is body text with the Inter font family. It provides
              excellent readability for English learning content.
            </p>
            <p className="text-sm text-muted-foreground">
              Muted text for secondary information
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Button Variants */}
      <Card>
        <CardHeader>
          <CardTitle>Button Components</CardTitle>
          <CardDescription>Different button variants and sizes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </CardContent>
      </Card>

      {/* Input & Form Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Input Components</CardTitle>
          <CardDescription>Form input elements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium block mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="max-w-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium block mb-2"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="max-w-sm"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>

      {/* Table Component */}
      <Card>
        <CardHeader>
          <CardTitle>Table Component</CardTitle>
          <CardDescription>Sample data table</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of recent learning sessions</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Topic</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead className="text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  English Grammar Basics
                </TableCell>
                <TableCell>2025-11-10</TableCell>
                <TableCell>In Progress</TableCell>
                <TableCell className="text-right">85%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Vocabulary Building
                </TableCell>
                <TableCell>2025-11-12</TableCell>
                <TableCell>Completed</TableCell>
                <TableCell className="text-right">92%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Pronunciation Practice
                </TableCell>
                <TableCell>2025-11-15</TableCell>
                <TableCell>Not Started</TableCell>
                <TableCell className="text-right">0%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
            <CardDescription>Sample card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Cards are great for organizing content into distinct sections.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card 2</CardTitle>
            <CardDescription>Another card example</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              They work well in grid layouts for dashboard views.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Card 3</CardTitle>
            <CardDescription>Third card</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Responsive design with Tailwind breakpoints.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
