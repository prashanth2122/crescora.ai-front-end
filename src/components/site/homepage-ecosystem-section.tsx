import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Database,
  Globe2,
  Headphones,
  MessageCircle,
  MessageSquareText,
  Phone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SiGooglecalendar, SiInstagram, SiWhatsapp } from "react-icons/si";
import type { IconType } from "react-icons";

import { SectionHeading } from "@/components/site/section-heading";

type EcosystemNode = {
  id: string;
  title: string;
  description: string;
};

type HomepageEcosystemSectionProps = {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    coreLabel: string;
    coreTitle: string;
    coreDescription: string;
    nodes: readonly EcosystemNode[];
    principles: readonly string[];
  };
};

const nodeIcons: Record<string, LucideIcon> = {
  crm: Database,
  voice: Phone,
  whatsapp: MessageCircle,
  team: Headphones,
  sms: MessageSquareText,
  web: Globe2,
  calendar: CalendarDays,
  outcomes: BarChart3,
};

const nodeBrandIcons: Partial<Record<string, { brand: string; Icon?: IconType }>> = {
  crm: { brand: "zoho" },
  whatsapp: { brand: "whatsapp", Icon: SiWhatsapp },
  web: { brand: "instagram", Icon: SiInstagram },
  calendar: { brand: "google-calendar", Icon: SiGooglecalendar },
};

const connections = [
  "M 465 288 C 372 257 270 179 202 134",
  "M 520 204 C 520 161 520 122 520 82",
  "M 575 288 C 668 257 770 179 838 134",
  "M 398 320 C 306 320 214 320 150 320",
  "M 642 320 C 734 320 826 320 890 320",
  "M 465 352 C 372 383 270 461 202 506",
  "M 520 436 C 520 479 520 518 520 558",
  "M 575 352 C 668 383 770 461 838 506",
];

export function HomepageEcosystemSection({ copy }: HomepageEcosystemSectionProps) {
  return (
    <section className="homepage-ecosystem mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="panel">
        <div className="heading">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
            align="center"
            tone="inverse"
          />
        </div>

        <div className="diagram">
          <svg
            className="connections"
            viewBox="0 0 1040 640"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <g className="connectionLines">
              {connections.map((path) => (
                <path key={path} d={path} />
              ))}
            </g>
            <g className="signalLines">
              {connections.map((path) => (
                <path key={path} d={path} />
              ))}
            </g>
          </svg>

          <div className="core">
            <div className="coreOrbit" aria-hidden="true" />
            <div className="coreBadge">
              <span className="coreMark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>{copy.coreLabel}</span>
            </div>
            <div className="coreIcon" aria-hidden="true">
              <Workflow />
            </div>
            <h3>{copy.coreTitle}</h3>
            <p>{copy.coreDescription}</p>
          </div>

          <ul className="nodes" aria-label="Connected customer touchpoints">
            {copy.nodes.map((node, index) => {
              const Icon = nodeIcons[node.id] ?? ArrowRight;
              const brandIcon = nodeBrandIcons[node.id];
              const BrandIcon = brandIcon?.Icon;

              return (
                <li
                  className="node"
                  key={node.id}
                  data-node={node.id}
                  data-brand={brandIcon?.brand}
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span className="nodeIcon" aria-hidden="true">
                    {brandIcon?.brand === "zoho" ? (
                      <span className="nodeBrandWordmark">Zoho</span>
                    ) : BrandIcon ? (
                      <BrandIcon />
                    ) : (
                      <Icon />
                    )}
                  </span>
                  <span className="nodeCopy">
                    <span className="nodeTitle">{node.title}</span>
                    <span className="nodeDescription">{node.description}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="principles">
          {copy.principles.map((principle, index) => (
            <div className="principle" key={principle}>
              <span className="principleIndex">0{index + 1}</span>
              <span>{principle}</span>
              {index < copy.principles.length - 1 ? (
                <ArrowRight className="principleArrow" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
