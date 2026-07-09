"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  PlayCircle,
  Headset,
  type LucideIcon,
  Mail,
  Phone,
  X,
} from "lucide-react";

import { buildLocalizedHref, getLocaleCopy, getLocaleFromPath } from "@/lib/locales";

type SupportFloatingMenuProps = {
  bookCallHref: string;
  callHref: string | null;
  demoHref: string;
  supportEmailHref: string | null;
  whatsappHref: string | null;
};

type SupportAction = {
  href: string;
  id: string;
  label: string;
  tone: "brand" | "whatsapp";
  Icon?: LucideIcon;
  iconSrc?: string;
};

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function SupportActionLink({
  action,
  index,
  isInteractive,
  onSelect,
}: {
  action: SupportAction;
  index: number;
  isInteractive: boolean;
  onSelect: () => void;
}) {
  const wrapperClassName = `${isInteractive ? "pointer-events-auto" : "pointer-events-none"} flex items-center gap-3 transition-all duration-300`;
  const labelClassName =
    "relative inline-flex max-w-[min(14rem,calc(100vw-7rem))] items-center justify-end rounded-full bg-white px-5 py-3 text-right text-sm font-semibold text-slate-900 shadow-[0_14px_30px_rgba(15,23,42,0.12)] after:absolute after:-right-2 after:top-1/2 after:h-4 after:w-4 after:-translate-y-1/2 after:rotate-45 after:rounded-[4px] after:bg-white";
  const iconClassName =
    action.tone === "whatsapp"
      ? "flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_18px_36px_rgba(37,211,102,0.28)]"
      : "flex h-14 w-14 items-center justify-center rounded-full bg-[#407BFF] text-white shadow-[0_18px_36px_rgba(64,123,255,0.28)]";
  const sharedStyle = {
    transitionDelay: `${index * 45}ms`,
  };
  const icon = action.iconSrc ? (
    <Image
      src={action.iconSrc}
      alt=""
      aria-hidden="true"
      width={56}
      height={56}
      className="h-full w-full object-cover"
      unoptimized
    />
  ) : action.Icon ? (
    <action.Icon className="h-6 w-6" />
  ) : null;

  if (isExternalHref(action.href)) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noreferrer"
        data-analytics-area="support_widget"
        data-analytics-role="cta"
        data-contact-intent="true"
        data-contact-channel={action.id}
        className={wrapperClassName}
        style={sharedStyle}
        tabIndex={isInteractive ? 0 : -1}
        aria-hidden={!isInteractive}
        onClick={onSelect}
      >
        <span className={labelClassName}>{action.label}</span>
        <span className={iconClassName}>{icon}</span>
      </a>
    );
  }

  return (
    <Link
      href={action.href}
      data-analytics-area="support_widget"
      data-analytics-role="cta"
      data-contact-intent="true"
      data-contact-channel={action.id}
      className={wrapperClassName}
      style={sharedStyle}
      tabIndex={isInteractive ? 0 : -1}
      aria-hidden={!isInteractive}
      onClick={onSelect}
    >
      <span className={labelClassName}>{action.label}</span>
      <span className={iconClassName}>{icon}</span>
    </Link>
  );
}

export function WhatsAppFloatingButton({
  bookCallHref,
  callHref,
  demoHref,
  supportEmailHref,
  whatsappHref,
}: SupportFloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname ?? "/");
  const copy = getLocaleCopy(locale);
  const localizedBookCallHref = buildLocalizedHref(bookCallHref, locale);

  const actionCandidates: Array<SupportAction | null> = [
    whatsappHref
      ? {
          id: "whatsapp",
          label: copy.header.whatsappLabel,
          href: whatsappHref,
          iconSrc: "/whatsapp-icon.jpg",
          tone: "whatsapp",
        }
      : null,
    supportEmailHref
      ? {
          id: "email",
          label: copy.header.emailLabel,
          href: supportEmailHref,
          Icon: Mail,
          tone: "brand",
        }
      : null,
    callHref
      ? {
          id: "call",
          label: copy.header.callLabel,
          href: callHref,
          Icon: Phone,
          tone: "brand",
        }
      : null,
    {
      id: "demo",
      label: "Try Crescora AI Demo",
      href: buildLocalizedHref(demoHref, locale),
      Icon: PlayCircle,
      tone: "brand",
    },
    {
      id: "book_call",
      label: copy.header.bookCallLabel,
      href: localizedBookCallHref,
      Icon: CalendarDays,
      tone: "brand",
    },
  ];
  const actions = actionCandidates.filter(
    (action): action is SupportAction => action !== null,
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const root = menuRef.current;
      const target = event.target;

      if (!root || !(target instanceof Node) || root.contains(target)) {
        return;
      }

      setIsOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  if (actions.length === 0) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5"
    >
      <div
        aria-hidden={!isOpen}
        className={`flex flex-col items-end gap-4 transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {actions.map((action, index) => (
          <SupportActionLink
            key={action.id}
            action={action}
            index={index}
            isInteractive={isOpen}
            onSelect={() => setIsOpen(false)}
          />
        ))}
      </div>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-label={
          isOpen
            ? copy.header.closeSupportWidgetLabel
            : copy.header.openSupportWidgetLabel
        }
        data-analytics-area="support_widget"
        data-analytics-role="cta"
        className={`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full shadow-[0_18px_40px_rgba(15,23,42,0.14)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#407BFF] focus-visible:ring-offset-2 ${
          isOpen
            ? "bg-white text-slate-900 hover:bg-slate-50"
            : "bg-[#407BFF] text-white hover:-translate-y-0.5 hover:bg-[#356df0]"
        }`}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <Headset className="h-8 w-8" />
        )}
      </button>
    </div>
  );
}
