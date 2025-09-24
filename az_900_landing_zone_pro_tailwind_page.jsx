'use client'
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Network, Layers, Rocket, Github, Terminal, Cloud, Settings2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Simple badge component
const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-foreground/90 shadow-sm backdrop-blur">
    {children}
  </span>
);

// Animated gradient background blob
const Blob = ({ className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 0.8, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className={`pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)] ${className}`}
  >
    <div className="absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-3xl" />
  </motion.div>
);

// Section wrapper with subtle enter animation
const Section = ({ children, className = "" }) => (
  <motion.section
    initial={{ y: 24, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/60 to-background text-foreground selection:bg-indigo-500/20">
      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-md">
              <Cloud className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-4">Landing Zone</p>
              <p className="text-xs text-muted-foreground">AZ‑900 Lab • Tailwind + React</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <Pill><Shield className="h-3.5 w-3.5"/> Policy</Pill>
            <Pill><Network className="h-3.5 w-3.5"/> Networking</Pill>
            <Pill><Layers className="h-3.5 w-3.5"/> RGs</Pill>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-xl">
              <Github className="mr-2 h-4 w-4"/> Repo
            </Button>
            <Button className="rounded-xl">
              <Rocket className="mr-2 h-4 w-4"/> Deploy
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative">
        <Blob />
        <Section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight md:text-5xl"
            >
              Azure <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">Landing Zone</span>
            </motion.h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
              A clean, professional starter for your AZ‑900 lab. Pre‑wired sections for Resource Groups, Networking,
              Identity, and Governance—styled with Tailwind and sprinkled with subtle motion.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button className="rounded-xl">
                <Rocket className="mr-2 h-4 w-4"/> Quick Start
              </Button>
              <Button variant="outline" className="rounded-xl">
                <Terminal className="mr-2 h-4 w-4"/> CLI Guide
              </Button>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {[
                "Hub‑and‑Spoke placeholder + address spaces",
                "Policy, RBAC, and tagging examples",
                "Bicep/ARM/TF entry points ready to link",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500"/>{t}</li>
              ))}
            </ul>
          </div>

          {/* Right hero card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="overflow-hidden rounded-2xl border bg-gradient-to-b from-muted/30 to-background shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 divide-x">
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Scope</p>
                    <h3 className="mt-1 text-lg font-semibold">Core Services</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><Network className="h-4 w-4"/> VNet / Subnets</li>
                      <li className="flex items-center gap-2"><Shield className="h-4 w-4"/> Policies & RBAC</li>
                      <li className="flex items-center gap-2"><Layers className="h-4 w-4"/> Resource Groups</li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Outputs</p>
                    <h3 className="mt-1 text-lg font-semibold">What You Get</h3>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><Settings2 className="h-4 w-4"/> Baseline Config</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> Validation Checks</li>
                      <li className="flex items-center gap-2"><Rocket className="h-4 w-4"/> Ready to Extend</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t p-4 text-xs text-muted-foreground">
                  Tip: Swap in your Bicep/ARM/Terraform links on the buttons to drive real deployments.
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Section>
      </div>

      {/* Features */}
      <Section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              icon: <Network className="h-5 w-5"/>,
              title: "Networking",
              text: "Hub‑spoke, address planning, UDR/NSG placeholders, and diagnostics wiring points.",
            },
            {
              icon: <Shield className="h-5 w-5"/>,
              title: "Governance",
              text: "Policy assignments, tagging standards, management group hierarchy examples.",
            },
            {
              icon: <Layers className="h-5 w-5"/>,
              title: "Resource Layout",
              text: "Workload/Shared RGs, naming conventions, identity boundaries (AAD/RBAC).",
            },
          ].map((f, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
              <Card className="rounded-2xl border shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Architecture Placeholder */}
      <Section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Reference Architecture</h2>
            <Pill>Diagram Placeholder</Pill>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Hub VNet</p>
              <p>Firewall / Bastion / Shared Services</p>
            </div>
            <div className="rounded-xl border p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Spoke VNets</p>
              <p>App / Data / Dev‑Test subnets</p>
            </div>
            <div className="rounded-xl border p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Identity & Governance</p>
              <p>RBAC roles, policy sets, tags</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="grid items-center gap-6 rounded-2xl border bg-gradient-to-br from-indigo-500/10 to-sky-500/10 p-8 shadow-md md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Ship your lab in minutes</h3>
            <p className="mt-2 text-sm text-muted-foreground">Connect the buttons to your scripts or templates and iterate safely in your sandbox subscription.</p>
          </div>
          <div className="flex flex-wrap justify-end gap-3">
            <Button className="rounded-xl">
              <Rocket className="mr-2 h-4 w-4"/> Deploy to Azure
            </Button>
            <Button variant="outline" className="rounded-xl">
              <Github className="mr-2 h-4 w-4"/> View Source
            </Button>
          </div>
        </div>
      </Section>

      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-4 text-xs text-muted-foreground">
          Built with Tailwind, Framer Motion, and shadcn/ui. Replace buttons with your AZ scripts or Bicep/TF templates.
        </div>
      </footer>
    </div>
  );
}
