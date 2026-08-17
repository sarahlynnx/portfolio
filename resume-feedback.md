Verdict
This resume isn't reading as entry-level — and that's actually working against you, not for you. It reads like a mid-level developer's resume, which means when it lands in an entry-level pile, my first instinct isn't "great, we're getting a bargain," it's "why is this person applying here, and is any of this real?" Then I start looking for corroboration, and the resume doesn't survive that look.

The three things that would get you screened out

1. The math doesn't work. The summary claims "3 years of experience." The only job listed is July 2025 – Present, which is 13 months. If I catch that in a 20-second scan — and I will, it's the first line — everything else on the page becomes suspect. Either add the work that makes up the other ~2 years, or change it to "13 months" / "over a year." Don't round 13 months up to 3.

2. The education section is empty. resume.md:84 lists a school and dates with no degree, no program, no field. A blank credential reads worse than no education section at all, because it looks like you're hiding something. Put the actual degree/diploma and field. If you didn't finish, either omit it or write "Coursework in [field]." There's also an unexplained 2017–2025 gap, which is fine — career changers are normal — but right now the resume doesn't tell me you're a career changer, so the gap just sits there unexplained.

3. Lynnx is your own company, and the resume doesn't say so. Everything points to it — lynnx.dev is in your contact line, the LynnX project is the company site. Hiring managers figure this out in about 15 seconds, and when it's presented as a straight employment entry, it feels like it was meant to slip past. Self-employment is a genuine asset for an entry-level candidate — you shipped real things for paying clients. But label it: "Founder & Full-Stack Developer, Lynnx (independent consultancy)." Owning it converts a credibility problem into a differentiator.

What's hurting you underneath that
Zero numbers, anywhere. Not one metric on the page. How many clients? How many users on PlayFlex? What was the load, the data volume, the revenue processed? "Multi-user booking platforms" tells me nothing — "handles 200+ bookings/week across 4 courts" tells me you shipped something real. Right now every claim is unfalsifiable, which is exactly the pattern that makes screeners discount a resume.

The language is overclaiming for the level. "Built to the standards of real business scale and sustainability," "choreographing agentic AI workflows with managed memory, deterministic pipelines, and session-agnostic context." That second phrase is three buzzwords stacked with no object. Senior candidates get some rope here because their track record backs it; entry-level candidates get penalized hard, because inflated language is the #1 signal of a thin portfolio. Cut the summary to three plain sentences about what you actually build.

"Architect config-driven platforms" — architect is a verb I expect from someone with 8 years. Say "built" or "designed." It'll read as more credible, not less impressive.

"Mnemosyme, Hermes agents" on resume.md:24. I don't recognize these, and neither will most screeners. (Also I think you mean Mnemosyne.) Listing obscure tools next to the Anthropic SDK looks like padding. Keep the Anthropic SDK, drop the rest.

Projects are prose paragraphs. I skim in an F-pattern. Those "Technical highlights:" run-ons are dense — the PlayFlex one is four technical claims in a single sentence. Break them into 2–3 bullets each. Same content, actually gets read.

AWS is listed but unbacked. "AWS" under Cloud & DevOps, and the only supporting cert is Cloud Practitioner Essentials — a course, not the certification. If you haven't deployed on AWS, remove it; it's the kind of thing that surfaces badly in an interview.

Minor: you spell it Lynnx, LynnX, and lynnx.dev on the same page — pick one. And the markdown table on resume.md:16-24 will likely mangle in ATS parsers; convert to plain Category: item, item, item lines before submitting anywhere with an upload form.

The strategic question
You have a genuine decision to make that's bigger than any line edit: are you actually targeting entry-level?

If yes — cut the summary to plain language, drop "architect," label Lynnx as self-employment, and lead with the projects. Your PlayFlex and Social Snout work is genuinely above the entry-level bar; PostGIS geospatial indexing and idempotent transactions under concurrency are things most junior applicants can't discuss. Let the projects do the impressing while the prose stays modest. That combination is very strong.

If you're undervaluing yourself, target mid-level roles instead — but then you need the missing two years of experience on the page, or the "3 years" claim collapses under the first recruiter phone screen.

Right now the resume is trying to do both and landing in the gap between them.

Want me to rewrite it for the entry-level target?
