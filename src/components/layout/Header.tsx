"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SITE } from "@/content/site";

const nav = [
  { href: "/#features", label: "Features" },
  { href: "/#app-tour", label: "App tour" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/beta/", label: "Beta" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="cn-header"><div className="cn-header-inner"><Logo /><nav className="cn-nav" aria-label="Main navigation">{nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="cn-header-actions"><a className="cn-header-cta" href={SITE.playStoreUrl}>Get the app <ArrowUpRight size={16} aria-hidden="true" /></a><button type="button" className="cn-menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button></div></div>{open && <nav id="mobile-menu" className="cn-mobile-nav" aria-label="Mobile navigation">{nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} /></a>)}<a className="cn-mobile-download" href={SITE.playStoreUrl}>Get it on Google Play <ArrowUpRight size={16} /></a></nav>}</header>;
}
