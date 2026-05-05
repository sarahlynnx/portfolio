import { renderToBuffer } from "@react-pdf/renderer";
import { ResumeDocument } from "@/app/resume/ResumeDocument";

export const runtime = "nodejs";

export async function GET() {
  const buffer = await renderToBuffer(<ResumeDocument />);

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="sarah-olson-resume.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
