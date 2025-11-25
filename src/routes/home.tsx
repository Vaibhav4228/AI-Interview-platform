import {
  Bell,
  ClipboardCheck,
  Code2,
  Command,
  Download,
  GitBranch,
  Network,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

const iconButtons = [
  { icon: Sparkles, label: "Ideate" },
  { icon: Code2, label: "Build" },
  { icon: Wand2, label: "Refine" },
  { icon: ClipboardCheck, label: "Review" },
  { icon: GitBranch, label: "Iterate" },
  { icon: Network, label: "Collaborate" },
  { icon: Command, label: "Automate" },
];

const heroScreenshot =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24 bg-gradient-to-b from-slate-50 via-white to-white">
      <Container className="space-y-16 pt-10 pb-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Prepwise Platform
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
              Prepwise is the agentic interview studio for ambitious teams.
            </h1>
            <p className="text-lg text-slate-600 md:max-w-2xl">
              Flow from prompt to polished mock interviews in minutes. Prepwise
              blends Clerk authentication with Firebase data so every session
              stays personal, verifiable, and ready to share.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-6 py-3 text-base">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 py-3 text-base"
              >
                <Bell className="h-4 w-4" />
                Notify me
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-10 text-sm text-slate-500">
              <div>
                <p className="text-3xl font-semibold text-slate-900">24k+</p>
                <p>Interviews simulated</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">98%</p>
                <p>Confidence lift after two sessions</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
              <div className="rounded-2xl bg-slate-900/90 p-6 text-white">
                <p className="text-sm uppercase tracking-wide text-slate-300">
                  Prepwise session
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug">
                  Auto-orchestrated mock panel with live scoring.
                </h3>
                <p className="mt-3 text-base text-slate-200">
                  Agents draft prompts, calibrate tone, and log every response
                  back to your workspace.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                  <div className="rounded-xl bg-slate-800/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Focus
                    </p>
                    <p className="text-lg font-semibold">System Design</p>
                  </div>
                  <div className="rounded-xl bg-slate-800/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      Status
                    </p>
                    <p className="text-lg font-semibold">Active</p>
                  </div>
                </div>
              </div>

              <img
                src={heroScreenshot}
                alt="Prepwise workspace preview"
                className="mt-6 h-64 w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 rounded-[40px] border border-slate-100 bg-white px-4 py-6 shadow-sm">
          {iconButtons.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-slate-50 text-slate-700 shadow-inner"
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              For developers
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900">
              Achieve new heights with agent-first prep.
            </h3>
            <p className="mt-4 text-slate-600">
              Capture prompts, synthesize answers, and export your progress in a
              click. Prepwise keeps the flow live as you iterate.
            </p>
            <Button className="mt-6 rounded-full px-6 py-3 text-base">
              Download
            </Button>
          </div>
          <div className="rounded-[32px] border border-dashed border-slate-200 bg-slate-50 p-8 shadow-inner">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Coming soon
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-slate-900">
              Level up your entire organization.
            </h3>
            <p className="mt-4 text-slate-600">
              Share agent templates, enforce rubrics, and verify interviews with
              centralized analytics.
            </p>
            <Button
              variant="outline"
              className="mt-6 rounded-full px-6 py-3 text-base"
            >
              Notify me
            </Button>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              An AI IDE Core
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Higher-level abstractions, grounded in evidence.
            </h2>
            <p className="text-lg text-slate-600">
              Monitor agent activity with task-based cards, verification
              snapshots, and transparent progress updates. Prepwise keeps human
              reviewers in the loop while letting AI do the heavy lifting.
            </p>
            <Link to={"/generate"}>
              <Button variant="link" className="px-0 text-base">
                Explore the studio →
              </Button>
            </Link>
          </div>
          <div className="rounded-[32px] border border-slate-100 bg-white p-6 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80"
              alt="Prepwise dashboard mock"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
