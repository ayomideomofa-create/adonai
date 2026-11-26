/* =====================================================================
   CONTENT FILE — the only file you need to edit to update the website.
   ---------------------------------------------------------------------
   • SITE ......... your name, email, social links, form service
   • STATS ........ leave empty until you have real figures
   • SERVICES ..... service cards (used on Home + Services pages)
   • PORTFOLIO .... your projects (add / edit / remove objects)
   • TESTIMONIALS . genuine client feedback only
   Save the file and refresh the browser — no redesign needed.
   ===================================================================== */

window.SITE = {
  brand: "ÉCRIVELLE",                        // studio / brand name shown in header + footer
  monogram: "É",                             // letter shown in the round logo mark
  person: "Adeyanju Joy Omofa",              // your full name (About page)
  role: "Literary & Editorial Studio",
  shortBio: "A literary and editorial studio helping authors, entrepreneurs and businesses turn ideas into polished, publication-ready work.",
  email: "joyomofaadeyanju71@gmail.com",
  // Contact buttons. Delete a line to hide that button. Use full URLs.
  channels: [
    { label: "Email me",        icon: "mail", url: "mailto:joyomofaadeyanju71@gmail.com", note: "joyomofaadeyanju71@gmail.com" },
    { label: "Write from Gmail", icon: "chat", url: "https://mail.google.com/mail/?view=cm&fs=1&to=joyomofaadeyanju71@gmail.com&su=Project%20enquiry", note: "Opens a new Gmail message" }
    // Add more, e.g. { label: "Hire me on Upwork", icon: "briefcase", url: "https://www.upwork.com/freelancers/YOUR-PROFILE", note: "Verified 5.0 reviews" }
  ],
  socials: [
    // Add your links, e.g. { label: "LinkedIn", url: "https://www.linkedin.com/in/your-name" }
  ],
  // CONTACT FORM: create a free form at formspree.io (or web3forms.com) and paste
  // the endpoint here, e.g. "https://formspree.io/f/abcdwxyz".
  // Currently set to FormSubmit, which emails enquiries straight to your Gmail.
  // The FIRST time someone submits, FormSubmit sends you a confirmation email; click it once.
  formEndpoint: "https://formsubmit.co/ajax/joyomofaadeyanju71@gmail.com",
  responseTime: "I reply to every enquiry within one business day."
};

/* Real numbers only. Example: { value: 120, suffix: "+", label: "Manuscripts edited" }
   While this list is empty, the statistics band is hidden everywhere. */
window.STATS = [];

/* ---------------------------------------------------------------------
   SERVICES — category must be one of: writing, editing, publishing, extra
   icon names: feather, mask, book, books, spark, pen, globe, compass,
   layers, mark, search, eye, check, device, print, kdp, file, pdf,
   tag, user, map, chat
   --------------------------------------------------------------------- */
window.SERVICES = [
  // WRITING
  { id:"ghostwriting", category:"writing", icon:"mask", title:"Ghostwriting",
    problem:"You have the story, the expertise or the message — but not the time or the craft to put it on the page.",
    help:"I interview you, study your voice and write the book in it. You stay the author; I stay invisible.",
    deliverable:"A complete manuscript in your voice, written chapter by chapter with your review at every stage." },
  { id:"fiction-writing", category:"writing", icon:"feather", title:"Fiction Writing",
    problem:"Your plot is clear in your head but the scenes fall flat, or the middle sags.",
    help:"I write character-led fiction with tension, texture and pacing built for your genre’s readers.",
    deliverable:"Original chapters, short stories or a full novel draft, with an outline you approve first." },
  { id:"nonfiction-writing", category:"writing", icon:"book", title:"Nonfiction Writing",
    problem:"You know your subject deeply, but turning knowledge into a readable book is a different skill.",
    help:"I structure your ideas into a clear argument, with stories and examples that keep readers turning pages.",
    deliverable:"A structured nonfiction manuscript — memoir, self-help, business, faith or how-to." },
  { id:"ebook-writing", category:"writing", icon:"device", title:"Ebook Writing",
    problem:"You need a lead magnet, course companion or short ebook that looks and reads professionally.",
    help:"I write focused, skimmable ebooks that deliver on their promise and reflect your brand.",
    deliverable:"A finished ebook manuscript, ready for formatting or delivered as a designed file." },
  { id:"book-writing", category:"writing", icon:"books", title:"Book Writing",
    problem:"You want a full-length book but don’t know where to start or how to keep going.",
    help:"From concept and outline to the last page, I carry the project forward with you on a clear schedule.",
    deliverable:"A full-length book manuscript, plus the outline and chapter plan behind it." },
  { id:"creative-writing", category:"writing", icon:"spark", title:"Creative Writing",
    problem:"You need words with personality — a story, a speech, a tribute, a personal piece that moves people.",
    help:"I write with imagery, rhythm and emotional truth, tailored to the occasion and the audience.",
    deliverable:"Polished creative pieces: stories, scripts, tributes, family histories or anthology entries." },
  { id:"content-writing", category:"writing", icon:"globe", title:"Content Writing",
    problem:"Your website, blog or newsletter needs consistent, credible writing that sounds like you.",
    help:"I write researched, reader-first content with clear structure and a consistent brand voice.",
    deliverable:"Articles, blog posts, web pages or newsletters, edited and ready to publish." },
  // EDITING
  { id:"developmental-editing", category:"editing", icon:"compass", title:"Developmental Editing",
    problem:"Something isn’t working in the manuscript — structure, pacing, character or argument — and you can’t see what.",
    help:"I assess the book as a whole and show you what to change, where, and why, with a revision plan.",
    deliverable:"A detailed editorial letter plus margin comments throughout the manuscript." },
  { id:"copy-editing", category:"editing", icon:"check", title:"Copy Editing",
    problem:"Inconsistencies, grammar slips and style drift make your book look less professional than it is.",
    help:"I correct grammar, usage and consistency and build a style sheet so every detail matches.",
    deliverable:"A tracked-changes manuscript and a style sheet for names, spellings and conventions." },
  { id:"line-editing", category:"editing", icon:"pen", title:"Line Editing",
    problem:"The story is there, but the sentences are wordy, repetitive or flat.",
    help:"I work sentence by sentence on rhythm, clarity and voice — tightening prose without replacing your style.",
    deliverable:"A tracked-changes manuscript with explanatory comments on recurring patterns." },
  { id:"proofreading", category:"editing", icon:"mark", title:"Proofreading",
    problem:"Typos and small errors slip through even after editing, and readers notice them in reviews.",
    help:"A careful final pass for spelling, punctuation, spacing and formatting errors before publication.",
    deliverable:"A clean, corrected manuscript or marked-up proof, ready to publish." },
  { id:"manuscript-evaluation", category:"editing", icon:"search", title:"Manuscript Evaluation",
    problem:"You want an honest, professional verdict before investing in a full edit.",
    help:"I read the full manuscript and give you a clear assessment of strengths, gaps and market readiness.",
    deliverable:"A written evaluation report with prioritised recommendations." },
  { id:"beta-reading", category:"editing", icon:"eye", title:"Beta Reading",
    problem:"Friends and family are too kind. You need to know how a real reader experiences your book.",
    help:"I read as your target reader and report where I was hooked, confused, bored or moved.",
    deliverable:"A structured beta reading report with chapter-by-chapter reactions." },
  // FORMATTING & PUBLISHING
  { id:"ebook-formatting", category:"publishing", icon:"device", title:"Ebook Formatting",
    problem:"Your ebook looks broken on Kindle, with stray spacing, odd fonts or a missing table of contents.",
    help:"I build clean, reflowable ebooks with working navigation that read well on every device.",
    deliverable:"Validated ebook files with a linked table of contents, tested on common readers." },
  { id:"paperback-formatting", category:"publishing", icon:"books", title:"Paperback Formatting",
    problem:"Your interior looks like a Word document, not a book on a bookshop shelf.",
    help:"I typeset the interior with proper margins, chapter openers, headers and professional typography.",
    deliverable:"A print interior laid out to your trim size, plus the editable source file." },
  { id:"kdp-formatting", category:"publishing", icon:"kdp", title:"KDP Formatting",
    problem:"Amazon KDP keeps rejecting your files, or the preview doesn’t match what you expected.",
    help:"I prepare interiors and ebooks to KDP specifications and guide you through upload.",
    deliverable:"KDP-compliant ebook and print files that pass the KDP previewer." },
  { id:"manuscript-formatting", category:"publishing", icon:"file", title:"Manuscript Formatting",
    problem:"Agents, publishers and contests expect a standard manuscript format — and yours isn’t there yet.",
    help:"I format your manuscript to industry-standard or submission-specific guidelines.",
    deliverable:"A correctly formatted .docx manuscript ready for submission." },
  { id:"epub-formatting", category:"publishing", icon:"layers", title:"EPUB Formatting",
    problem:"You need an ebook that works on Apple Books, Kobo, Google Play and other stores.",
    help:"I build standards-compliant EPUB files with clean code, embedded metadata and accessible structure.",
    deliverable:"A validated EPUB file ready for any major ebook store." },
  { id:"print-ready-pdf", category:"publishing", icon:"pdf", title:"Print-Ready PDF Preparation",
    problem:"Your printer or IngramSpark needs a print-ready PDF and the technical requirements are confusing.",
    help:"I prepare PDFs with correct trim, bleed, fonts and image resolution for your printer’s specs.",
    deliverable:"A print-ready PDF that meets your printer’s technical requirements." },
  // EXTRA
  { id:"book-descriptions", category:"extra", icon:"tag", title:"Book Descriptions",
    problem:"Your blurb summarises the plot but doesn’t make anyone want to buy the book.",
    help:"I write back-cover and online descriptions that hook, set expectations and sell the experience.",
    deliverable:"A polished book description in two lengths, ready for your cover and retailer pages." },
  { id:"author-bios", category:"extra", icon:"user", title:"Author Bios",
    problem:"Writing about yourself is awkward, and your bio undersells you.",
    help:"I write bios that build credibility and connection in the right tone for your readers.",
    deliverable:"Short, medium and long bios for book covers, websites and media kits." },
  { id:"book-outlining", category:"extra", icon:"map", title:"Book Outlining",
    problem:"You have ideas and notes everywhere but no clear shape for the book.",
    help:"I turn your material into a chapter-by-chapter roadmap you can write from with confidence.",
    deliverable:"A detailed outline with chapter summaries, key points and story beats." },
  { id:"writing-consultation", category:"extra", icon:"chat", title:"Writing Consultation",
    problem:"You’re stuck, unsure of next steps, or deciding between publishing routes.",
    help:"A focused one-to-one session on your manuscript, process or publishing plan.",
    deliverable:"A consultation call and written summary with practical next steps." }
];

window.SERVICE_CATEGORIES = {
  writing:    { title: "Writing services",           intro: "Original words, written for your readers and in your voice." },
  editing:    { title: "Editing services",           intro: "From big-picture structure to the final comma." },
  publishing: { title: "Formatting and publishing",  intro: "Interiors and files that look professional and pass platform checks." },
  extra:      { title: "Additional services",        intro: "The pieces around the book that help it find readers." }
};

/* ---------------------------------------------------------------------
   PORTFOLIO
   To add a project: copy one { ... } block, paste it, change the text.
   To remove: delete its block. Order here = order on the page.
   - categories: any of the filters listed in PORTFOLIO_FILTERS
   - cover.image: put a file in assets/img/portfolio/ and write its path,
     e.g. "assets/img/portfolio/my-book.jpg". Leave "" to show a styled
     book mockup using cover.colour.
   - sample.kind: "excerpt" | "before-after" | "edits" | "images" | "link"
     "edits" = a list of { before, after, note } line edits
   - review: optional — the project title of a testimonial to show inside the project
   - placeholder: true marks the project as an illustrative sample (not
     client work). Set false (or delete the line) on your real projects.
   --------------------------------------------------------------------- */
window.PORTFOLIO_FILTERS = ["Fiction","Nonfiction","Line Editing","Copy Editing","Proofreading","Book Formatting"];

window.PORTFOLIO = [
  {
    id: "blackthorns-last-witch",
    title: "Blackthorn’s Last Witch",
    format: "Dark paranormal romance, line edit",
    categories: ["Fiction","Line Editing"],
    cover: { image: "", colour: "ink", byline: "A novella" },
    summary: "A full line edit of a dual first-person paranormal romance novella. Alongside sentence-level polish, I tracked continuity across every scene: who is in the room, what time of day it is, which jokes have already landed, so the story reads as one seamless draft.",
    role: "Line editor",
    work: ["653 tracked changes across the manuscript","66 explanatory comments for the author","Timeline and continuity checks","Restored scrambled scenes to the correct order","Dialogue punctuation made consistent"],
    tools: ["Line editing","Continuity tracking","Microsoft Word Track Changes"],
    sample: { kind: "edits", items: [
      { before: "Three faint lines of light appeared in the dust, each joining the next until they made a small, steady circle.",
        after:  "Three faint arcs of light appeared in the dust, each joining the next until they made a small, steady circle.",
        note:   "Straight lines can’t form a circle, but curved arcs can. This makes the picture easy to see." },
      { before: "I knelt beside her. She gave me the shears without triumph, as though my cooperation had always been possible.",
        after:  "I knelt beside her and handed her the shears. She took them without triumph, as though my cooperation had always been possible.",
        note:   "Evelyn has just asked Lucian to hand her the shears, so he should be giving them to her, not the other way round." },
      { before: "For once, he almost laughed. Then the air changed.",
        after:  "For once, he nearly smiled. Then the air changed.",
        note:   "“He almost laughed” comes back at the end of the chapter, where Evelyn reacts to it. Changing it here saves that moment so it lands fully the second time." }
    ]}
  },
  {
    id: "stuck-on-my-exs-ranch",
    title: "Stuck On My Ex’s Ranch",
    format: "Small-town romance, line edit and proofread",
    categories: ["Fiction","Line Editing","Proofreading"],
    cover: { image: "", colour: "coral", byline: "A second-chance romance" },
    summary: "A line edit and proofread of a ~50,000-word second-chance romance, told in alternating first-person chapters. The focus was clean, readable prose and flawless dialogue punctuation, while keeping the author’s voice, humor and pacing exactly as she wrote them.",
    role: "Line editor and proofreader",
    work: ["Line edit, chapter by chapter","Full proofread","Dialogue and quotation-mark corrections","Repetition and word-choice fixes","A plain-language comment on every change"],
    tools: ["Line editing","Proofreading","Microsoft Word Track Changes"],
    sample: { kind: "edits", items: [
      { before: "I dig into the food. I’ve never seen a burger before. The soft bun, the warm patty, the melted cheese.",
        after:  "I dig into the food like I’ve never seen a burger before. The soft bun, the warm patty, the melted cheese.",
        note:   "Some words dropped out of this line. As it stands, it says Victoria has never seen a burger in her life. Adding back “like” restores the joke." },
      { before: "“I nod.” “I’ve known her longer.” We both look at Victoria’s house.",
        after:  "I nod. “I’ve known her longer.” We both look at Victoria’s house.",
        note:   "“I nod” is an action, not speech, so it shouldn’t be inside quotation marks." },
      { before: "My daughter bubbles with energy. She rushes into the backseat, smiling widely.",
        after:  "My daughter bubbles with energy. She rushes into the back seat, smiling widely.",
        note:   "“Back seat” is two words when used as a noun. “Backseat” is only for describing something, as in “backseat driver.”" }
    ]}
  },
  {
    id: "one-ghetto-day-at-a-time",
    title: "One Ghetto Day at a Time",
    format: "Self-help nonfiction, copyedit",
    categories: ["Nonfiction","Copy Editing"],
    cover: { image: "", colour: "purple", byline: "A 30-day guide" },
    summary: "A copyedit of a ~26,000-word, 30-day guide written by a licensed therapist. The brief was to tighten grammar, punctuation and consistency without sanding down the author’s candid, funny, deeply personal voice.",
    role: "Copyeditor",
    work: ["Full copyedit of the manuscript","Grammar, punctuation and consistency","Front matter review","Voice preserved throughout"],
    tools: ["Copyediting","Style consistency","Microsoft Word"],
    review: "Copyediting for a ~26,000-Word Nonfiction Manuscript",
    sample: { kind: "excerpt", label: "From the edited preface", text:
      "A lot of the therapists I know have at least one piece of writing tucked away that’s part clinical insight, part internal processing. This collection started as that. But the more I wrote, the more it evolved. It became less about sorting my own thoughts and more about offering something real, digestible, and gently challenging for the people I care about, including clients, colleagues, friends, and folks who might never sit on a therapist’s couch but are still doing the work of healing." }
  },
  {
    id: "hallway-unit",
    title: "The Hallway Unit and the EcoFlow Heist",
    format: "Middle grade mystery, expansion, line edit and formatting",
    categories: ["Fiction","Line Editing","Book Formatting"],
    cover: { image: "assets/img/portfolio/hallway-p7.jpg", colour: "cobalt", byline: "Book 1" },
    summary: "Book one of a middle grade mystery series. I worked with the author from draft to print: expanding the manuscript with more character interaction, line editing it, then designing a 5×8 print interior with illustrated, tech-themed chapter openers.",
    role: "Developmental writer, line editor and book formatter",
    work: ["Manuscript expanded from ~28,000 to ~40,000 words","Line edit with author revisions","5×8 KDP print interior with bleed","Image-background chapter-opener pages","KDP-ready PDF plus editable Word file"],
    tools: ["Character voice work","Line editing","KDP print formatting","Microsoft Word"],
    sample: { kind: "images", label: "Pages from the formatted interior", images: [
      "assets/img/portfolio/hallway-p6.jpg",
      "assets/img/portfolio/hallway-p7.jpg","assets/img/portfolio/hallway-p8.jpg","assets/img/portfolio/hallway-p13.jpg" ] }
  }
];

/* ---------------------------------------------------------------------
   TESTIMONIALS — genuine feedback only.
   Copy a block, fill in the details, and set placeholder: false.
   photo is optional: "assets/img/testimonials/name.jpg"
   rating is optional (1–5). Leave it out if the client didn't give one.
   --------------------------------------------------------------------- */
window.TESTIMONIALS = [
  { project: "Developmental Editor Needed for Manuscript Review",
    quote: "Adeyanju was professional and adept at book edits. She was also receptive and responsive to […] requests and timely in delivering products. She worked tirelessly to ensure I was happy […]",
    name: "Upwork client", detail: "Developmental editing", date: "Feb 2026", rating: 5, source: "Upwork",
    tags: ["Reliable","Collaborative","Committed to Quality","Clear Communicator","Detail Oriented"], photo: "" },
  { project: "Copyediting for a ~26,000-Word Nonfiction Manuscript",
    quote: "Adeyanju was an absolute pleasure to work with. Her communication was clear, thoughtful, and consistent from start to finish, and her turnaround time was impressively quick. She was thorough without being heavy-handed, and her edits really strengthened the manuscript while still preserving my voice. If anything, the process took longer on my end due to my own delays. I’m genuinely pleased with both the quality of her work and the care she put into her feedback, and I would highly recommend her to anyone looking for a skilled and reliable copyeditor.",
    name: "Upwork client", detail: "Nonfiction copyediting", date: "Mar 2026", rating: 5, source: "Upwork", featured: true,
    tags: ["Reliable","Collaborative","Committed to Quality","Clear Communicator","Detail Oriented"], photo: "" },
  { project: "Book Editor & Proofreader Needed for Polished Manuscript",
    quote: "Adeyanju delivered thorough, thoughtful editing with excellent attention to detail. Her feedback was clear and actionable, and she respected the manuscript’s voice while strengthening its clarity. Professional communication throughout.",
    name: "Upwork client", detail: "Editing and proofreading", date: "Jan 2026", rating: 5, source: "Upwork",
    tags: ["Clear Communicator","Accountable for Outcomes","Detail Oriented","Professional"], photo: "" }
  // To add a review: copy a block above. Only include a client's real name with their permission.
];
