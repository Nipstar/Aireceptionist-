import {
  FAQ_SCHEMA,
  ORGANIZATION_SCHEMA,
  SERVICE_SCHEMA,
} from "@/lib/schema";

export default function JsonLd() {
  const blocks = [ORGANIZATION_SCHEMA, SERVICE_SCHEMA, FAQ_SCHEMA];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
