---
name: suomikortit-card-generation
description: >
  Generate new Finnish sentence flashcards for the Suomikortit PWA. Use whenever the
  user asks for "new cards", "more sentences", or wants to extend opiskelensuomea-style
  card decks. Defines the card schema, the learning-science rationale, register/level
  rules, Finnish-accuracy requirements, and copyright limits. Cards are appended to
  window.CARDS in cards.js.
---

# Suomikortit — Card Generation Skill

## What this builds
A flashcard for the Suomikortit PWA. Front = one Finnish sentence. Back = its meaning
plus a structured "anatomy" of the sentence (the conjunction used, the grammar, the key
words/patterns), all explained in English.

## The learning-science contract (why each field exists)
The deck is built on three principles, already discussed in the 90-day plan:

1. **Active recall** — the front shows ONLY Finnish. The learner must produce the meaning
   *before* flipping. So: never put a translation on the front; never make the front trivial.
2. **Spaced repetition** — cards are atomic and self-contained so they can be reordered,
   shuffled, or exported to Anki without losing context. One idea per card.
3. **Feynman technique** — the back must *teach*. Each `parts` entry explains one element in
   plain, simple English, as if to a beginner. If an explanation needs jargon, define it.

## Card schema (exact)
```js
{
  id: <int, sequential>,
  fi: "<one Finnish sentence>",
  en: "<natural English translation>",
  level: "A2" | "B1" | "B2",
  register: "kirja" | "puhe",        // kirjakieli (written) or puhekieli (spoken)
  category: "conjunction" | "daily" | "idiom" | "proverb" | "quote",
  grammar: "<one-line focus, English>",   // the single most important point
  parts: [
    { k: "<Finnish key word / structure>", v: "<English explanation>" },
    // 2–4 entries: the conjunction/grammar/key vocab that actually appear in THIS sentence
  ]
}
```
Formatting inside `v` and `grammar`: wrap Finnish snippets in `backticks` (renders as code)
and use `**bold**` for emphasis. Nothing else.

## Content rules
- **Levels**: A2 = short, high-frequency, basic cases. B1 = real conjunctions, perfect tense,
  conditional. B2 = idioms, passive, participles, nominalisation, purpose clauses.
- **Register**: tag every card. If it's `puhe`, ALWAYS add a `parts` entry giving the
  `kirjakieli` equivalent (learners must see both). If `kirja`, no spoken form needed.
- **Categories** must stay balanced over a batch. A 30-card batch ≈ 9 conjunction / 8 daily
  / 7 idiom / 4 proverb / 2 quote. Adjust to the user's request.
- **`parts` explains what's IN the sentence** — the conjunction's use, the case/ending,
  the idiom's meaning, the tricky vocab. Don't explain things that aren't in the sentence.
- Every card teaches at least one transferable pattern (a case, a conjunction, a tense, an idiom).

## Finnish accuracy — non-negotiable
The user asked for zero mistakes. Before adding a card, check:
- **Case government (rektio)**: does the verb/postposition take the right case?
  (`auttaa` + partitive, `ilman` + partitive, `pitää` + elative, `tykätä` + elative…)
- **Partitive vs. accusative** objects (ongoing/partial vs. complete).
- **Agreement**: adjective–noun, subject–verb (esp. plural negatives `eivät ole`).
- **Idioms/proverbs must be real and standard** — use the established fixed form. If unsure
  whether an idiom is genuine or correctly spelled, don't invent one; pick a well-attested one.
- **Spelling/diacritics**: ä, ö, å exactly. Double letters (vowel/consonant length) matter.
When in doubt, choose a simpler sentence you are certain is correct over a clever one you aren't.

## Copyright limit
- **Proverbs / sananlaskut** are public-domain folk material — fine to use verbatim.
- **Original sentences** written for the deck — fine.
- **Short, well-known sayings / cultural phrases** — fine.
- **Do NOT reproduce song lyrics, poems, or other copyrighted authored text** in a card, even
  partially, even with a source credit. If the user wants a song-themed card, write an
  *original* sentence that teaches the same word/grammar, or describe the song in your own
  words. The learner can add their own lyric cards manually from a licensed source.

## How to add cards
1. Append new objects to the `window.CARDS` array in `cards.js`.
2. Keep `id` sequential (continue from the current max).
3. Keep the category grouping/comments tidy.
4. No build step — saving `cards.js` is enough; redeploy the folder.

## Worked example
```js
{ id:31, category:"conjunction", level:"B1", register:"kirja",
  fi:"Soitan sinulle, kunhan pääsen kotiin.",
  en:"I'll call you as soon as I get home.",
  grammar:"`kunhan` = **as soon as / provided that** — a conditional-temporal conjunction.",
  parts:[
    {k:"kunhan", v:"`as soon as / once` — sets a condition in time. Softer than `kun`."},
    {k:"pääsen kotiin", v:"`I get home` — `päästä` + `kotiin`."},
    {k:"soitan sinulle", v:"`soittaa` + allative `sinulle` (‘to you’) for calling someone."}
  ]}
```
