export const metadata = {
              title: 'Documentation - Next.js Starter',
              description: 'Documentation for the Next.js starter template'
            };
            
            export default function DocsPage() {
              return (
                <div className="container mx-auto px-4 py-12">
                  <h1 className="mb-6 text-3xl font-bold">Documentation</h1>
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <h2>Getting Started</h2>
                    <p>
                      This starter template includes Tailwind CSS and a basic
                      component structure to help you get started with your Next.js project.
                    </p>
                    
                    <h2>Features</h2>
                    <ul>
                      <li>Next.js 14 with App Router</li>
                      <li>Tailwind CSS for styling</li>
                      <li>ESLint and Prettier for code quality</li>
                      <li>Reusable UI components</li>
                      <li>Responsive design</li>
                    </ul>
                  </div>
                </div>
              );
            }