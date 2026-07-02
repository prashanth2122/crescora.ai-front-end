import { redirect } from "next/navigation";

export default function KycWorkflowRedirectPage() {
  redirect("/workflows/document-collection");
}
