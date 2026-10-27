"use client";

import { useEffect, useRef } from "react";

/**
 * Right-hand animated agent demo, ported from the supplied hero page.
 * Content and timing mirror the original script; styles live in globals.css
 * under the `.agent-demo` scope.
 */
export function HeroRightAnimated() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const stage = root.querySelector<HTMLElement>(".stage");
    const aic = root.querySelector<HTMLElement>('[data-id="aic"]');
    if (!stage || !aic) return;

    const q = (id: string) => root.querySelector<HTMLElement>(`[data-id="${id}"]`);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- timeline ---------- */
    const DUR = [12.4, 13.6, 11.2, 10.4];
    const ST: number[] = [];
    let TOTAL = 0;
    DUR.forEach((d) => {
      ST.push(TOTAL);
      TOTAL += d;
    });

    const scs = Array.from(root.querySelectorAll<HTMLElement>(".sc"));

    const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
    const on = (el: HTMLElement | null | undefined, c: boolean) => {
      if (el) el.classList.toggle("on", !!c);
    };
    const setText = (el: HTMLElement | null | undefined, s: string) => {
      if (el && el.textContent !== s) el.textContent = s;
    };
    const typed = (text: string, c: number, start: number, cps: number) =>
      clamp(Math.floor((c - start) * cps), 0, text.length);

    /* ---------- agent cursor ---------- */
    let want: { el: HTMLElement; dx: number; dy: number; press: boolean } | null = null;
    let lastKey = "";

    const cur = (el: HTMLElement | null, dx = 0, dy = 0, press = false) => {
      want = el ? { el, dx, dy, press } : null;
    };

    const applyCursor = () => {
      if (!want?.el) {
        aic.classList.remove("show");
        lastKey = "";
        return;
      }
      aic.classList.add("show");
      aic.classList.toggle("press", want.press);

      const r = want.el.getBoundingClientRect();
      const b = stage.getBoundingClientRect();
      if (!r.width && !r.height) return;

      const x = Math.round(r.left - b.left + want.dx);
      const y = Math.round(r.top - b.top + want.dy);
      const key = `${x}:${y}`;
      if (key !== lastKey) {
        aic.style.transform = `translate(${x}px,${y}px)`;
        lastKey = key;
      }
    };

    /* ---------- scene 0: code ---------- */
    const CODE = [
      "export function checkout(cart) {",
      "  let total = 0;",
      "  for (const item of cart.items) {",
      "    total += item.price * item.qty;",
      "  }",
      "  total -= cart.discount;",
      "  return charge(cart.user, total);",
      "}",
    ];
    const FIX = "  total = Math.max(total, 0);";
    const BUG = 5;

    const hl = (s: string) =>
      s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/\b(export|function|let|const|for|of|return)\b/g, '<span class="kw">$1</span>')
        .replace(/\b(checkout|charge|Math|max)\b/g, '<span class="fn">$1</span>')
        .replace(/\b(\d+)\b/g, '<span class="nm">$1</span>');

    const ed = q("ed");
    const call0 = q("call0");
    const rws: HTMLElement[] = [];

    // Effects can run twice in dev Strict Mode; clear before rebuilding.
    ed?.querySelectorAll(".cl").forEach((n) => n.remove());

    if (ed && call0) {
      CODE.forEach((ln, i) => {
        const r = document.createElement("div");
        r.className = "cl";
        r.innerHTML = `<span class="n">${i + 1}</span><span class="c">${hl(ln)}</span>`;
        ed.insertBefore(r, call0);
        rws.push(r);
      });
    }

    const fixRow = document.createElement("div");
    fixRow.className = "cl add gone";
    fixRow.innerHTML = '<span class="n">+</span><span class="c"></span>';
    if (ed) ed.insertBefore(fixRow, rws[BUG + 1] ?? call0 ?? null);
    const fixC = fixRow.lastElementChild as HTMLElement | null;

    const tm0 = q("tm0");
    const tmL = tm0 ? (Array.from(tm0.children) as HTMLElement[]) : [];
    const ws0 = q("ws0");
    const toast0 = q("toast0");

    const u0 = (c: number) => {
      let scanI = -1;
      rws.forEach((r, k) => r.classList.toggle("show", c >= 0.25 + k * 0.07));
      fixRow.classList.toggle("show", c >= 5.0);
      if (c >= 0.9 && c < 3.3) scanI = Math.min(rws.length - 1, Math.floor((c - 0.9) / 0.3));
      rws.forEach((r, k) => {
        r.classList.toggle("scan", k === scanI);
        r.classList.toggle("bug", k === BUG && c >= 3.4 && c < 6.3);
      });
      fixRow.classList.toggle("gone", c < 5.0);
      const n = typed(FIX, c, 5.2, 34);
      if (fixC) fixC.innerHTML = hl(FIX.slice(0, n));
      fixRow.classList.toggle("typing", c >= 5.2 && n < FIX.length);
      if (rws[BUG] && call0) call0.style.top = `${Math.max(6, rws[BUG].offsetTop - 2)}px`;
      on(call0, c >= 3.5 && c < 5.0);
      tmL.forEach((l, k) => on(l, c >= 7.1 + k * 0.55));
      on(toast0, c >= 9.7);
      setText(ws0, c < 0.9 ? "Agent idle" : c < 3.3 ? "Reading repo" : c < 9.4 ? "Fixing" : "Shipped");
      ws0?.classList.toggle("live", c >= 0.9 && c < 9.4);
      if (c < 0.9) cur(rws[0], 250, 6);
      else if (c < 3.3) cur(rws[scanI < 0 ? 0 : scanI], 250, 8);
      else if (c < 5.0) cur(rws[BUG], 300, 8);
      else if (c < 7.1) cur(fixRow, 56 + Math.min(n, 40) * 7.6, 8);
      else if (c < 9.7) cur(tm0, 250, 18);
      else cur(toast0, -12, 20, c < 10.1);
    };

    /* ---------- scene 1: inbox ---------- */
    const MAILS: [string, string, string, string, string][] = [
      ["Northwind Co.", "Contract renewal question", "imp", "N", ""],
      ["Weekly Digest", "Top 10 productivity tips", "low", "W", "Newsletter"],
      ["Billing", "Invoice overdue: action needed", "imp", "B", ""],
      ["Flash Deals", "50% off today only", "low", "F", "Promo"],
      ["Sam · Ops", "Can you confirm Thursday?", "imp", "S", ""],
    ];

    const mlist = q("mlist");
    const mis: HTMLElement[] = [];
    const tags: HTMLElement[] = [];

    mlist?.replaceChildren();

    if (mlist) {
      MAILS.forEach((m) => {
        const li = document.createElement("li");
        li.className = "mi";
        li.innerHTML =
          `<span class="av">${m[3]}</span>` +
          `<span class="mt"><b>${m[0]}</b><em>${m[1]}</em></span>` +
          `<span class="tag ${m[2]}">${m[2] === "imp" ? "Important" : m[4]}</span>`;
        mlist.appendChild(li);
        mis.push(li);
        tags.push(li.lastElementChild as HTMLElement);
      });
    }

    const REPLY =
      "Hi Maya, yes, we can move the start date to the 1st. I have updated the agreement and attached it here.";
    const rh = q("rh");
    const rb = q("rb");
    const rt = q("rt");
    const reply = q("reply");
    const sendb = q("sendb");
    const read = q("read");
    const ws1 = q("ws1");

    if (rh) rh.innerHTML = "Contract renewal question<small>Maya Chen · Northwind Co.</small>";
    if (rb)
      rb.textContent =
        "Hi, quick question before we sign. Can we move the start date to the 1st of next month? Thanks, Maya";

    const REP: [number, number][] = [
      [0, 9.9],
      [2, 10.7],
      [4, 11.3],
    ];

    const u1 = (c: number) => {
      let scanI = -1;
      if (c >= 0.8 && c < 0.8 + MAILS.length * 0.55) scanI = Math.floor((c - 0.8) / 0.55);
      mis.forEach((li, i) => {
        li.classList.toggle("scan", i === scanI);
        li.classList.toggle("gone", MAILS[i][2] === "low" && c >= 4.6);
        li.classList.toggle("sel", i === 0 && c >= 5.3 && c < 10.4);
      });
      tags.forEach((t, i) => t.classList.toggle("on", c >= 0.8 + i * 0.55 + 0.3));
      REP.forEach((r) => {
        const t = tags[r[0]];
        if (!t) return;
        const done = c >= r[1];
        t.classList.toggle("rep", done);
        t.classList.toggle("imp", !done);
        setText(t, done ? "Replied ✓" : "Important");
      });
      read?.classList.toggle("vis", c >= 5.3);
      on(rh, c >= 5.5);
      on(rb, c >= 5.8);
      on(reply, c >= 6.4);
      const n = typed(REPLY, c, 6.7, 33);
      setText(rt, REPLY.slice(0, n));
      rt?.classList.toggle("typing", c >= 6.7 && n < REPLY.length);
      sendb?.classList.toggle("press", c >= 9.6);
      setText(sendb, c >= 9.9 ? "Sent ✓" : "Send");
      setText(ws1, c < 0.8 ? "Agent idle" : c < 5.3 ? "Sorting" : c < 11.4 ? "Replying" : "3 replies sent");
      ws1?.classList.toggle("live", c >= 0.8 && c < 11.4);
      if (c < 0.8) cur(mlist, 180, 20);
      else if (c < 0.8 + MAILS.length * 0.55)
        cur(mis[Math.max(0, Math.min(MAILS.length - 1, scanI))], 190, 14);
      else if (c < 5.3) cur(mis[2], 160, 16);
      else if (c < 9.6) cur(rt, 140, 14 + Math.min(3, Math.floor(n / 34)) * 18);
      else if (c < 10.3) cur(sendb, 22, 12, c < 10.0);
      else cur(tags[4], 16, 10);
    };

    /* ---------- scene 2: automation ---------- */
    const NODES: [string, string, string][] = [
      ["form", "New lead", "From your site"],
      ["spark", "AI qualifies", "Scores the fit"],
      ["db", "Update CRM", "Adds the contact"],
      ["bell", "Alert sales", "Pings the team"],
    ];
    const IC: Record<string, string> = {
      form: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
      spark:
        '<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>',
      db: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
      bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4"/>',
    };

    const row3 = q("row3");
    const nds: HTMLElement[] = [];
    const chs: HTMLElement[] = [];

    row3?.replaceChildren();

    if (row3) {
      NODES.forEach((nn, i) => {
        const d = document.createElement("div");
        d.className = "nd";
        d.innerHTML = `<svg class="ico" viewBox="0 0 24 24">${IC[nn[0]]}</svg><b>${nn[1]}</b><small>${nn[2]}</small>`;
        row3.appendChild(d);
        nds.push(d);
        if (i < NODES.length - 1) {
          const ch = document.createElement("span");
          ch.className = "ch";
          ch.innerHTML = '<svg viewBox="0 0 12 12"><path d="M4 2l4 4-4 4"/></svg>';
          row3.appendChild(ch);
          chs.push(ch);
        }
      });
    }

    const LEADS = ["Orion Ltd", "Acme Co", "Delta Labs"];
    const PK = [q("pk0"), q("pk1"), q("pk2")];
    const wnote = q("wnote");
    const handled = q("handled");
    const P0 = 2.9;
    const PGAP = 2.3;
    const PDUR = 3.1;

    const u2 = (c: number) => {
      const hit = [false, false, false, false];
      let done = 0;
      let note = "";
      let noteOn = false;

      nds.forEach((n, k) => n.classList.toggle("in", c >= 0.5 + k * 0.55));
      chs.forEach((h, k) => h.classList.toggle("in", c >= 0.5 + k * 0.55 + 0.4));

      for (let j = 0; j < PK.length; j++) {
        const el = PK[j];
        if (!el || !row3 || nds.length < 4) continue;
        const p = (c - (P0 + j * PGAP)) / PDUR;
        if (p >= 0 && p <= 1) {
          const x0 = nds[0].offsetLeft + nds[0].offsetWidth / 2;
          const x1 = nds[3].offsetLeft + nds[3].offsetWidth / 2;
          el.style.left = `${row3.offsetLeft + x0 + (x1 - x0) * p}px`;
          el.style.top = `${Math.max(16, row3.offsetTop - 16)}px`;
          el.style.opacity = "1";
          setText(el, LEADS[j]);
          for (let i = 0; i < 4; i++) if (Math.abs(p - i / 3) < 0.075) hit[i] = true;
        } else {
          el.style.opacity = "0";
        }
        if (p >= 1) done++;
        if (p >= 0.96 && p < 1.4) {
          noteOn = true;
          note = `Sales notified · ${LEADS[j]}`;
        }
      }

      nds.forEach((n, k) => n.classList.toggle("hit", hit[k]));
      on(wnote, noteOn);
      if (noteOn) setText(wnote, note);
      setText(handled, `Leads handled ${done}`);

      if (c < 0.5) cur(row3, 50, 26);
      else if (c < P0) cur(nds[Math.min(3, Math.floor((c - 0.5) / 0.55))], 60, 18);
      else {
        const f = Math.min(PK.length - 1, Math.max(0, Math.floor((c - P0) / PGAP)));
        const pp = clamp((c - (P0 + f * PGAP)) / PDUR, 0, 1);
        cur(nds[Math.min(3, Math.round(pp * 3))], 64, 58);
      }
    };

    /* ---------- scene 3: team ---------- */
    const msgs = [q("m0"), q("m1"), q("m2"), q("m3"), q("m4")];
    const dts = q("dts");
    const evt = q("evt");
    const cal = q("cal");

    const u3 = (c: number) => {
      on(msgs[0], c >= 0.8);
      on(msgs[1], c >= 2.6);
      on(dts, c >= 4.0 && c < 4.9);
      on(msgs[2], c >= 4.9);
      on(msgs[3], c >= 6.0);
      on(msgs[4], c >= 8.2);
      on(evt, c >= 6.4);
      evt?.classList.toggle("chk", c >= 7.0);
      cal?.classList.toggle("act", c >= 6.4 && c < 8.4);
      if (c < 0.8) cur(msgs[0], 110, 10);
      else if (c < 2.6) cur(msgs[0], 180, 22);
      else if (c < 6.0) cur(msgs[2], 150, 20);
      else if (c < 8.2) cur(evt, 120, 16);
      else cur(msgs[4], 100, 20);
    };

    const UP = [u0, u1, u2, u3];

    /* ---------- loop ---------- */
    let T = 0;
    let raf = 0;
    let prev = 0;
    let vis = true;
    let cs = -1;

    const render = (t: number) => {
      let i = DUR.length - 1;
      while (i > 0 && t < ST[i]) i--;
      if (i !== cs) {
        scs.forEach((s, k) => s.classList.toggle("on", k === i));
        cs = i;
      }
      want = null;
      UP[i](t - ST[i]);
      applyCursor();
    };

    const loop = (now: number) => {
      raf = 0;
      if (!vis) return;
      const dt = prev ? Math.min((now - prev) / 1000, 0.1) : 0;
      prev = now;
      T += dt;
      if (T >= TOTAL) T -= TOTAL;
      render(T);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!raf && vis && !reduce) {
        prev = 0;
        raf = requestAnimationFrame(loop);
      }
    };

    const onResize = () => {
      lastKey = "";
      render(T);
    };

    let observer: IntersectionObserver | null = null;

    if (reduce) {
      render(ST[0] + 11.5);
      aic.classList.remove("show");
    } else {
      render(0);
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver((es) => {
          vis = es[0].isIntersecting;
          if (vis) start();
        });
        observer.observe(stage);
      } else {
        start();
      }
      window.addEventListener("resize", onResize);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="border-t border-[#2a2d34] bg-deep px-[max(40px,calc((100%_-_1280px)_/_2))] py-16 max-[640px]:px-5 max-[640px]:py-[68px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10 max-[640px]:mb-8">
          <p className="eyebrow m-0">Automation categories</p>
          <h2 className="mt-3.5 mb-0 text-[clamp(40px,4vw,56px)] leading-[1.08] tracking-[-1.5px] max-[640px]:text-[36px] max-[640px]:tracking-[-0.8px]">
            What AI Can Automate
          </h2>
          <p className="mt-2 mb-0 text-[18px] text-[#9fa4ab] max-[640px]:text-[16px]">
            Different business processes AI can automate
          </p>
          <div className="mt-7 h-px w-[36%] min-w-24 bg-[#2a2d34]" aria-hidden="true" />
        </div>

        <div className="agent-demo relative w-full" ref={rootRef}>

        <div
          className="stage"
          role="img"
          aria-label="An AI agent at work: fixing code, sorting and answering email, running a lead automation, and messaging a team member to book a meeting."
        >
          <div className="sc" data-id="s0">
            <div className="win act">
              <div className="wh">
                <span className="wd">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="wt">checkout.ts</span>
                <span className="wst" data-id="ws0">
                  Agent idle
                </span>
              </div>
              <div className="ed" data-id="ed">
                <div className="call" data-id="call0">
                  Discount can push the total below zero
                </div>
              </div>
              <div className="tm" data-id="tm0">
                <div className="p1">$ npm test</div>
                <div className="ok">totals never go negative</div>
                <div className="ok">discounts apply once</div>
                <div className="ok">42 tests passed</div>
              </div>
              <div className="toast" data-id="toast0">
                Merged to main ✓
              </div>
            </div>
          </div>

          <div className="sc" data-id="s1">
            <div className="win act">
              <div className="wh">
                <span className="wd">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="wt">Inbox</span>
                <span className="wst" data-id="ws1">
                  Agent idle
                </span>
              </div>
              <div className="mail">
                <ul className="list" data-id="mlist" />
                <div className="read" data-id="read">
                  <div className="rh" data-id="rh" />
                  <div className="rb" data-id="rb" />
                  <div className="reply" data-id="reply">
                    <div className="rl">Drafted by your agent</div>
                    <div className="rt" data-id="rt" />
                    <span className="sendb" data-id="sendb">
                      Send
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sc" data-id="s2">
            <div className="win act">
              <div className="wh">
                <span className="wd">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="wt">Lead automation</span>
                <span className="wst live">Running</span>
              </div>
              <div className="wf">
                <div className="row3" data-id="row3" />
                <span className="pk" data-id="pk0" />
                <span className="pk" data-id="pk1" />
                <span className="pk" data-id="pk2" />
                <div className="wnote" data-id="wnote" />
              </div>
              <div className="wfoot">
                <b>Runs 24/7</b>
                <span data-id="handled">Leads handled 0</span>
              </div>
            </div>
          </div>

          <div className="sc" data-id="s3">
            <div className="duo">
              <div className="win act">
                <div className="wh">
                  <span className="wd">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="wt">Sam · Ops</span>
                  <span className="wst live">Texting</span>
                </div>
                <div className="msgs">
                  <div className="slot r">
                    <div className="bb me" data-id="m0">
                      Hi Sam, the Q3 report is due at 5 PM. Need anything from me?
                    </div>
                  </div>
                  <div className="slot l">
                    <div className="bb them" data-id="m1">
                      Can you pull the latest sales numbers?
                    </div>
                  </div>
                  <div className="slot r">
                    <span className="dts" data-id="dts">
                      <i />
                      <i />
                      <i />
                    </span>
                    <div className="bb me" data-id="m2">
                      Done. They are in your inbox now.
                    </div>
                  </div>
                  <div className="slot r">
                    <div className="bb me" data-id="m3">
                      I also booked 15 minutes at 4 PM to review it.
                    </div>
                  </div>
                  <div className="slot l">
                    <div className="bb them" data-id="m4">
                      Perfect, thanks!
                    </div>
                  </div>
                </div>
              </div>
              <div className="win" data-id="cal">
                <div className="wh">
                  <span className="wt">Today</span>
                </div>
                <div className="slots">
                  <div className="cr">
                    <span>9:00</span>
                    <div className="blk2">Team standup</div>
                  </div>
                  <div className="cr">
                    <span>11:00</span>
                    <div className="blk2">Client call</div>
                  </div>
                  <div className="cr">
                    <span>1:00</span>
                    <div className="blk2 free">Free</div>
                  </div>
                  <div className="cr">
                    <span>4:00</span>
                    <div className="blk2 new" data-id="evt">
                      <span>Q3 report review</span>
                      <u>✓</u>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="aic" data-id="aic" aria-hidden="true">
            <svg viewBox="0 0 28 28">
              <path d="M3 2l18 9-8 2.2L9.8 21z" />
            </svg>
            <b>AI</b>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
