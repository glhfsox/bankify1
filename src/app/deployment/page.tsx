import { DeploymentClient } from "./deployment-client";

export const metadata = {
  title: "Deployment Status - Bankify",
  description: "View the current deployment status of Bankify on Vercel",
};

export default function DeploymentPage() {
  return <DeploymentClient />;
}
