import { useState } from "react";
import "../Style/CodingLanguages.css";

const langs = [
  { name: "JavaScript", icon: "JS", color: "#f7df1e", text: "#000", tag: "web · scripting",      year: 1995, desc: "The language of the web. Runs natively in every browser and on the server via Node.js." },
  { name: "Python",     icon: "Py", color: "#3572A5", text: "#fff", tag: "data · ai · scripting", year: 1991, desc: "Readable, versatile, and beloved for data science, AI, automation, and web backends." },
  { name: "TypeScript", icon: "TS", color: "#3178c6", text: "#fff", tag: "typed · web",            year: 2012, desc: "A typed superset of JavaScript that compiles to plain JS. Loved by large teams." },
  { name: "Rust",       icon: "Rs", color: "#dea584", text: "#2b1200", tag: "systems · safe",      year: 2010, desc: "Blazing fast, memory-safe systems language. No garbage collector; zero-cost abstractions." },
  { name: "Go",         icon: "Go", color: "#00ADD8", text: "#fff", tag: "cloud · concurrency",    year: 2009, desc: "Simple, fast, and built for cloud-scale concurrency. Powers Docker and Kubernetes." },
  { name: "Java",       icon: "Jv", color: "#b07219", text: "#fff", tag: "enterprise · jvm",       year: 1995, desc: "Write once, run anywhere. Dominates enterprise backends and Android development." },
  { name: "C++",        icon: "C+", color: "#f34b7d", text: "#fff", tag: "systems · perf",         year: 1985, desc: "Extends C with OOP and abstractions while retaining raw performance and control." },
  { name: "C#",         icon: "C#", color: "#178600", text: "#fff", tag: ".net · unity",           year: 2000, desc: "Microsoft's elegant OO language. Powers .NET apps, games in Unity, and more." },
  { name: "Swift",      icon: "Sw", color: "#F05138", text: "#fff", tag: "ios · apple",            year: 2014, desc: "Apple's modern language for iOS and macOS. Fast, expressive, and safe by design." },
  { name: "Kotlin",     icon: "Kt", color: "#A97BFF", text: "#fff", tag: "android · jvm",          year: 2011, desc: "Concise, safe, and fully interoperable with Java. Google's preferred Android language." },
  { name: "PHP",        icon: "Ph", color: "#4F5D95", text: "#fff", tag: "web · server",           year: 1994, desc: "Powers a massive share of the web including WordPress. Mature ecosystem." },
  { name: "Ruby",       icon: "Rb", color: "#cc342d", text: "#fff", tag: "web · rails",            year: 1995, desc: "Developer happiness first. Ruby on Rails pioneered convention-over-configuration." },
  { name: "C",          icon: "C",  color: "#555555", text: "#fff", tag: "systems · embedded",     year: 1972, desc: "The grandfather of modern languages. Unmatched portability and low-level control." },
  { name: "Scala",      icon: "Sc", color: "#c22d40", text: "#fff", tag: "jvm · functional",       year: 2004, desc: "Functional and OOP on the JVM. Popular for big data pipelines with Apache Spark." },
  { name: "R",          icon: "R",  color: "#198CE7", text: "#fff", tag: "stats · data",           year: 1993, desc: "The go-to language for statistical computing, data analysis, and visualization." },
  { name: "Dart",       icon: "Dt", color: "#00B4AB", text: "#fff", tag: "flutter · ui",           year: 2011, desc: "Google's language behind Flutter. One codebase for mobile, web, and desktop." },
  { name: "Elixir",     icon: "Ex", color: "#6e4a7e", text: "#fff", tag: "functional · web",       year: 2011, desc: "Built on Erlang's VM for fault-tolerant, concurrent, distributed systems." },
  { name: "Haskell",    icon: "Hs", color: "#5e5086", text: "#fff", tag: "functional · pure",      year: 1990, desc: "Purely functional, lazy-evaluated, and famous for its powerful type system." },
  { name: "Lua",        icon: "Lu", color: "#000080", text: "#fff", tag: "embedded · scripting",   year: 1993, desc: "Lightweight scripting language embedded in games, routers, and software tools." },
  { name: "Julia",      icon: "Jl", color: "#9558B2", text: "#fff", tag: "scientific · fast",      year: 2012, desc: "High-performance scientific computing with Python-like syntax, near C speed." },
  { name: "Zig",        icon: "Zg", color: "#ec915c", text: "#fff", tag: "systems · new",          year: 2016, desc: "A modern low-level language aiming to replace C with better safety and simplicity." },
  { name: "Clojure",    icon: "Cl", color: "#5881d8", text: "#fff", tag: "lisp · jvm",             year: 2007, desc: "A modern Lisp that runs on the JVM. Emphasizes immutability and simplicity." },
];

const half = Math.ceil(langs.length / 2);
const row1 = langs.slice(0, half);
const row2 = langs.slice(half);

function LangCardComponent({ lang, onClick }) {
  return (
    <div className="cl-lang-card" onClick={() => onClick(lang)} title={lang.desc}>
      <span className="cl-lang-year">{lang.year}</span>
      <div
        className="cl-lang-icon"
        style={{ background: lang.color, color: lang.text }}
      >
        {lang.icon}
      </div>
      <span className="cl-lang-name">{lang.name}</span>
      <span className="cl-lang-tag">{lang.tag}</span>
    </div>
  );
}

export default function CodingLanguagesSlider() {
  const [selected, setSelected] = useState(null);

  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  return (
    <div className="cl-slider-root">
      {/* Header */}
      <div className="cl-slider-header">
        <h2>Programming languages</h2>
        <p>// hover any card to pause · click to explore</p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="cl-track-wrapper">
        <div className="cl-track">
          {row1Doubled.map((lang, i) => (
            <LangCardComponent
              key={`r1-${lang.name}-${i}`}
              lang={lang}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="cl-track-wrapper">
        <div className="cl-track cl-track-reverse">
          {row2Doubled.map((lang, i) => (
            <LangCardComponent
              key={`r2-${lang.name}-${i}`}
              lang={lang}
              onClick={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Selected language info */}
      {selected && (
        <div className="cl-selected-info">
          <p className="cl-sel-name">{selected.name}</p>
          <p className="cl-sel-desc">{selected.desc}</p>
        </div>
      )}

      {/* Quick-action buttons */}
      <div className="cl-controls">
        <button className="cl-ctrl-btn">JS history ↗</button>
        <button className="cl-ctrl-btn">first language? ↗</button>
        <button className="cl-ctrl-btn">Python vs Rust ↗</button>
      </div>
    </div>
  );
}