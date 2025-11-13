import { Button } from '@/components/ui/Button';
          
          export default function Home() {
            return (
              <main className="container mx-auto px-4 py-12">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="mb-6 text-center text-4xl font-bold">
                    Next.js Starter Template
                  </h1>
                  <p className="mb-6 max-w-2xl text-center text-gray-600 dark:text-gray-300">
                    A modern, production-ready Next.js template with Tailwind CSS,
                    and best practices for responsive design and accessibility.
                  </p>
                  <div className="flex gap-4">
                    <Button href="/docs">Documentation</Button>
                    <Button href="https://github.com/yourusername/nextjs-starter" variant="outline">
                      GitHub
                    </Button>
                  </div>
                </div>
              </main>
            );
          }