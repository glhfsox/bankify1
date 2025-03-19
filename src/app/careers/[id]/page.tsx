import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Details | Bankify",
  description: "View job details and apply for open positions at Bankify.",
};

type Props = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' }
  ];
}

export default function JobDetailPage({ params }: Props) {
  return (
    <main>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-6">Job Details: {params.id}</h1>
        <p className="text-muted-foreground mb-4">
          This is a detailed page for job with ID: {params.id}
        </p>
        <div className="p-6 border rounded-lg bg-muted/50">
          <p>Job content would be loaded here based on the job ID.</p>
        </div>
      </div>
    </main>
  );
}
