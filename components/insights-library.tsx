"use client";

import { useState } from "react";

const filterTopics = [
  "All topics",
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Technology",
] as const;

type FilterTopic = (typeof filterTopics)[number];

type Article = {
  id: string;
  topic: Exclude<FilterTopic, "All topics">;
  title: string;
  summary: string;
  meta: string;
};

const summary =
  "[Short summary. Imagery is optional; typography can carry the card.]";

const articles: Article[] = [
  { id: "a1", topic: "Design", title: "[Article Title]", summary, meta: "[Date] · [Read time]" },
  { id: "a2", topic: "Development", title: "[Article Title]", summary, meta: "[Date] · [Read time]" },
  { id: "a3", topic: "Marketing", title: "[Article Title]", summary, meta: "[Date] · [Read time]" },
  { id: "a4", topic: "Business", title: "[Article Title]", summary, meta: "[Date] · [Read time]" },
  { id: "a5", topic: "Technology", title: "[Article Title]", summary, meta: "[Date] · [Read time]" },
  { id: "a6", topic: "Development", title: "[Article Title]", summary, meta: "[Date] · [Read time]" },
];

export function TopicPill({ label }: { label: string }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5">
      <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.5px] text-orange">
        {label}
      </span>
    </span>
  );
}

export function InsightsLibrary() {
  const [selected, setSelected] = useState<FilterTopic>("All topics");
  const visible =
    selected === "All topics"
      ? articles
      : articles.filter((article) => article.topic === selected);

  return (
    <div className="flex flex-col gap-6">
      <div
        role="tablist"
        aria-label="Filter insights by topic"
        className="-mx-2 flex items-center gap-1.5 overflow-x-auto p-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {filterTopics.map((topic) => {
          const active = selected === topic;
          return (
            <button
              key={topic}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setSelected(topic)}
              className={`h-[30px] shrink-0 cursor-pointer rounded-[15px] px-3.5 text-sm transition-colors duration-200 ${
                active
                  ? "bg-orange font-medium text-black"
                  : "text-white hover:text-orange"
              }`}
            >
              {topic}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col gap-4 rounded-[4px] border border-[#293137] bg-[#0f1417] p-6 transition-colors duration-200 hover:border-[#424a50]"
          >
            <TopicPill label={article.topic} />
            <h3 className="text-[18px] font-bold leading-6 text-[#f2f2f0]">
              {article.title}
            </h3>
            <p className="text-[13px] leading-[19px] text-[#9fa4ab]">
              {article.summary}
            </p>
            <div className="mt-auto flex items-center justify-between gap-4 pt-4 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
              <span className="font-mono text-[10px] tracking-[0.5px] text-[#747d81]">
                {article.meta}
              </span>
              <a
                href="#contact"
                className="text-[13px] font-bold text-orange transition-transform duration-200 group-hover:translate-x-0.5"
              >
                Read Article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
