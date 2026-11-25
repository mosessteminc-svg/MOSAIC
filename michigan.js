/* ==========================================================================
   MOSAIC Interactive Check-In — EDITION CONTENT FILE
   Edition: Michigan SCECH Edition
   "More Fish, Less Food? The Mystery of Lake Superior's Zombie Fish"

   This file holds ONLY content: phenomenon, evidence, sources, and the four
   activities for each module. The engine (index.html) is shared by every
   state edition. To build a new edition, copy this file, rename it
   (e.g. colorado.js), replace the content, and point index.html to it.

   Scoring rule used by the engine: every sorted item, matched row,
   evaluated statement, and scenario question is worth 1 point.
   Each module below totals 20 points.

   © 2026 MosesSTEMinc L3C. MOSAIC Framework™ is a trademark of MosesSTEMinc L3C.
   ========================================================================== */
window.MOSAIC_EDITION = {
  id: "michigan",
  course: "More Fish, Less Food? The Mystery of Lake Superior’s Zombie Fish",
  editionLabel: "Michigan SCECH Edition",
  salt: "MOSAIC-MI-2027",
  sheetUrl: "https://script.google.com/macros/s/AKfycbzU70Oy_hMpIHxJIUACK-eKPe6S2zA60zvEw3vc_90-Y7afmavwFe2Y8dC2qwH7vJM/exec",
  sheetKey: "MOSAIC-MI-2027-key",
  mastery: 0.8,

  sources: {
    dnr0608: {
      short: "Michigan DNR news release, June 8, 2026",
      label: "Michigan Department of Natural Resources. (2026, June 8). Researchers head to Superior Maximus to investigate ‘zombie’ fish [News release].",
      url: "https://www.michigan.gov/dnr/about/newsroom/releases/2026/06/08/researchers-head-to-superior-maximus-to-investigate-zombie-fish"
    },
    dnr0430: {
      short: "Michigan DNR news release, April 30, 2026",
      label: "Michigan Department of Natural Resources. (2026, April 30). Conducting superior Great Lakes research: RV Lake Char beginning spring surveys on Lake Superior [News release].",
      url: "https://www.michigan.gov/dnr/about/newsroom/releases/2026/04/30/rv-lake-char-beginning-spring-surveys-on-lake-superior"
    },
    toolkit: {
      short: "MOSAIC Framework™ Science Instruction Toolkit",
      label: "Moses-Williams, N. N. (2026). MOSAIC Framework™ Science Instruction Toolkit, Sections 1–6. MosesSTEMinc L3C.",
      url: "https://www.mosesscience.net"
    },
    course: {
      short: "MOSAIC Michigan Edition course resources",
      label: "MosesSTEMinc L3C. (2026). MOSAIC Michigan Edition course resources: Application organizers 1–6; Lesson 4.2 Examining Student Models; Lesson 5.1 Driving Question Board; Six Talk Moves; Scientific Model Gallery Walk and Peer Feedback Protocol.",
      url: "https://www.mosesscience.net"
    }
  },

  modules: {

    /* ====================================================== MODULE 1 */
    m1: {
      number: 1, focus: "Modeling",
      title: "Module 1 Check-In: Modeling",
      assignment: "Assignment 1.5 — Initial Model Task, Prompt and Partial Exemplar",
      intro: "Check your understanding of scientific models before you design your initial modeling task.",
      sources: ["toolkit", "course", "dnr0608"],
      activities: [
        { type: "sort", tag: "Sort", title: "Descriptive or explanatory?",
          prompt: "A scientific model explains how the parts of a system interact, not just what the system looks like. Tap a representation, then tap the box it fits (or drag it).",
          illustrative: "Illustrative representations created for professional learning.",
          bins: [
            { id: "D", name: "Descriptive", hint: "Shows what the system looks like or where something was observed" },
            { id: "E", name: "Explanatory", hint: "Shows how or why, with relationships and a possible mechanism" }],
          items: [
            { t: "A drawing of a thin siscowet labeled “thin body” and “sunken belly.”", a: "D",
              fb: "Labels describe the fish’s condition but say nothing about how or why it happened." },
            { t: "A map marking where thin siscowet were caught, from about 600 to 1,320 feet deep.", a: "D",
              fb: "A map of observations is useful evidence, but it shows where, not how or why." },
            { t: "A labeled sketch of siscowet anatomy: fins, gills, and fat stores.", a: "D",
              fb: "Parts shown in isolation, with no relationships, describe the system." },
            { t: "A diagram with labeled arrows: prey availability → energy intake → body condition, captioned as one possible explanation to test.", a: "E",
              fb: "Labeled arrows show how components interact, and the caption keeps the idea testable." },
            { t: "A diagram showing two possible pathways to poor body condition (low food; a pathogen), each arrow marked with a question mark.", a: "E",
              fb: "It represents competing mechanisms and the uncertainty around them." },
            { t: "A model showing energy moving from prey into the siscowet, and what happens when energy taken in is less than energy used.", a: "E",
              fb: "It represents an unseen process (energy transfer), which is what makes a model explanatory." }]},

        { type: "match", tag: "Match", title: "Models and modeling tools in a MOSAIC sequence",
          prompt: "Choose the purpose that fits each model or tool.",
          pairs: [
            { l: "Initial model", r: "Makes current thinking visible right after the phenomenon, before evidence or instruction",
              fb: "Initial models are read for ideas to build on. They are not corrected yet." },
            { l: "Revised model", r: "Uses evidence to change, add, or remove ideas, with each change marked and justified",
              fb: "Each revision is tied to the evidence that caused it." },
            { l: "Consensus model", r: "Records what the class can explain with current evidence, plus the questions that remain",
              fb: "Agreement comes from evidence, not a majority vote." },
            { l: "Partial exemplar", r: "Shows labels, arrows, and relationships without giving the complete scientific explanation",
              fb: "It makes features of a strong model visible while leaving the explanation to students." },
            { l: "Gotta-Have Checklist", r: "Lists the ideas a complete model must show, written as ideas rather than nouns",
              fb: "Written as ideas (“shows where the energy comes from”), it avoids becoming a label hunt." }]},

        { type: "evaluate", tag: "Model evaluation", title: "Evaluate an initial student model",
          prompt: "Select every statement that is an accurate evaluation of this initial model.",
          illustrative: "Illustrative student model created for professional learning; not actual student work.",
          stimulus: { kind: "models", items: [
            { label: "Initial model", chain: ["Prey fish", "Siscowet", "Thin siscowet"], arrows: ["eaten by", ""],
              caption: "Student caption: “The siscowet are starving because there is no more food in Lake Superior.”" }]},
          options: [
            { t: "The model links prey to the siscowet’s condition, which is a productive idea to build on.", c: true,
              fb: "Yes. Start with what the student already connects." },
            { t: "The caption states a cause as settled. The DNR describes low food as a believed explanation, and a pathogen is still being investigated.", c: true,
              fb: "Accurate. The cause has not been confirmed, so the idea should stay open to testing." },
            { t: "“No more food in Lake Superior” is supported by the DNR survey evidence.", c: false,
              fb: "Not supported. The survey documented thin siscowet in deep offshore waters. It did not measure food across the lake." },
            { t: "The unlabeled arrow is a place to press: “What does this arrow carry?”", c: true,
              fb: "Yes. Asking what moves along an arrow pushes toward the mechanism." },
            { t: "The teacher should correct this model before students gather evidence.", c: false,
              fb: "Initial models are read for ideas, not corrected. Evidence will do the work of revision." }]},

        { type: "scenario", tag: "Scenario", title: "Choose the instructional move",
          illustrative: "Hypothetical classroom scenarios.",
          questions: [
            { q: "Students see images of thin siscowet and ask you to tell them why it happened. What is the best move?",
              options: [
                { t: "Explain the DNR’s food-limitation idea so students start with the right answer.", c: false, fb: "This tells the explanation before students think, and presents an unconfirmed cause as the answer." },
                { t: "Have students draw an initial model first and ask, “What is happening that we can’t observe?”", c: true, fb: "Yes. Students show their current thinking before any explanation is offered." },
                { t: "Give students a finished model to copy into their notebooks.", c: false, fb: "Copying removes the thinking the model is meant to make visible." },
                { t: "Skip modeling until students have read about lake trout.", c: false, fb: "Initial models come before instruction so you can see where students start." }]},
            { q: "A student’s model shows prey, siscowet, and deep water as separate pictures with no arrows. What is the best response?",
              options: [
                { t: "Ask how one part affects another, and require a label on every arrow.", c: true, fb: "Yes. This targets relationships, the missing feature." },
                { t: "Draw the arrows for the student.", c: false, fb: "That does the reasoning for the student." },
                { t: "Praise the detail and move on.", c: false, fb: "Detailed parts without relationships are still a description." },
                { t: "Mark the model incorrect.", c: false, fb: "Initial models capture current thinking. They are not graded for correctness." }]},
            { q: "Which partial exemplar best fits Section 5 of the Module 1 organizer?",
              options: [
                { t: "A complete, labeled consensus model of the siscowet phenomenon.", c: false, fb: "A complete model gives away the explanation." },
                { t: "A model with components and labeled arrows, with the mechanism left for students to explain.", c: true, fb: "Yes. It shows features of a strong model without the full explanation." },
                { t: "A finished diagram with a fill-in sentence and a word bank.", c: false, fb: "This is the counterexample in the toolkit. It can be completed without causal reasoning." },
                { t: "A photo of a siscowet with its body parts labeled.", c: false, fb: "That is descriptive and shows no relationships." }]},
            { q: "After examining evidence, a student adds more labels but doesn’t change any ideas. What is the best move?",
              options: [
                { t: "Accept it, since more labels show more learning.", c: false, fb: "More labels are not deeper understanding." },
                { t: "Ask what the new evidence challenged, and have the student mark each change in a new color with the evidence named.", c: true, fb: "Yes. A revision log makes changes in thinking visible." },
                { t: "Give the student the consensus model to compare.", c: false, fb: "This replaces the student’s reasoning with yours." },
                { t: "Assign a vocabulary review.", c: false, fb: "The need is connecting evidence to ideas, not vocabulary." }]}]}
      ]
    },

    /* ====================================================== MODULE 2 */
    m2: {
      number: 2, focus: "Observation",
      title: "Module 2 Check-In: Observation",
      assignment: "Assignment 2.5 — Evidence Organizer and Model Annotation",
      intro: "Check your understanding of observations, inferences, and evidence before you build your evidence organizer.",
      sources: ["dnr0608", "dnr0430", "toolkit"],
      activities: [
        { type: "sort", tag: "Evidence classification", title: "Observation, inference, or not supported?",
          prompt: "Each statement relates to the Michigan DNR’s June 2026 report on “zombie” siscowet. Sort each one.",
          bins: [
            { id: "O", name: "Observation", hint: "Reported from survey data" },
            { id: "I", name: "Inference or possible explanation", hint: "Proposed but not confirmed" },
            { id: "N", name: "Not supported", hint: "Contradicted by or goes beyond the evidence" }],
          items: [
            { t: "Thin, “zombie-like” siscowet were documented in offshore Michigan waters from about 600 to 1,320 feet deep.", a: "O",
              fb: "The DNR documented this in its deepwater surveys." },
            { t: "The share of “zombie” siscowet in deep water rose from about 3% in 2015 to about 20% in 2024 and 2025.", a: "O",
              fb: "These are reported survey results." },
            { t: "At Superior Maximus, 11 of the siscowet captured in 2024 (37%) were classified as “zombies.”", a: "O",
              fb: "A reported count from the 2024 survey." },
            { t: "The condition is a natural ecological phenomenon caused by a lack of food in deep water.", a: "I",
              fb: "The DNR says this is believed. It is a possible explanation, not a confirmed cause." },
            { t: "A fish pathogen may be causing the emaciated appearance.", a: "I",
              fb: "Researchers planned testing to investigate this possibility." },
            { t: "Half of all fish in Lake Superior are “zombies.”", a: "N",
              fb: "DNR biologist Shawn Sitar said claims like this are “absolutely not the case.”" }]},

        { type: "evaluate", tag: "Data interpretation", title: "Interpret the survey data",
          prompt: "Select every interpretation the data support.",
          stimulus: { kind: "table", caption: "Siscowet classified as “zombies” (highly emaciated) in Michigan DNR deepwater surveys",
            head: ["Where", "Year", "Reported result"],
            rows: [
              ["Deep water (offshore Michigan)", "2015", "about 3%"],
              ["Deep water (offshore Michigan)", "2024 and 2025", "about 20%"],
              ["Superior Maximus (about 1,320 ft)", "2024", "37% (11 fish)"],
              ["Superior Maximus (about 1,320 ft)", "2025", "54% (15 fish)"]],
            source: "dnr0608" },
          options: [
            { t: "Among siscowet captured at Superior Maximus, the share classified as “zombies” was higher in 2025 than in 2024.", c: true,
              fb: "Correct: 54% in 2025 compared with 37% in 2024." },
            { t: "More than half of the siscowet in Lake Superior were “zombies” in 2025.", c: false,
              fb: "The 54% describes fish captured at one site, not the whole lake." },
            { t: "The Superior Maximus percentages come from small numbers of fish, so a few fish can change the percentage a lot.", c: true,
              fb: "Yes. 11 and 15 fish are small counts, which limits how far the pattern can be generalized." },
            { t: "The data show that a lack of food caused the increase.", c: false,
              fb: "The data show a pattern. They do not identify a cause." },
            { t: "The deepwater results show a pattern over time that raises questions to investigate.", c: true,
              fb: "Yes. Patterns lead to questions, not conclusions about cause." }]},

        { type: "match", tag: "Match", title: "Food web relationships and energy transfer",
          prompt: "Match each term to its meaning in the siscowet phenomenon.",
          pairs: [
            { l: "Top predator", r: "The siscowet’s role in the deepest parts of the lake: it feeds on other organisms",
              fb: "The DNR describes the siscowet as “the top predator out there.”" },
            { l: "Low productivity", r: "Little new energy and organic matter is produced, so less energy is available to move through the food web",
              fb: "The DNR describes these waters as having very low productivity and few species." },
            { l: "Energy transfer", r: "Energy moves from prey to predator when it is eaten, and only part of it is available to the next level",
              fb: "A general ecological principle: energy is used and lost at each level of a food web." },
            { l: "Adapted to low food", r: "The siscowet can live in areas of the lake with very low food resources",
              fb: "From the DNR release. It is a trait of this deepwater form of lake trout." },
            { l: "Emaciated", r: "Extremely thin and undernourished, an observed condition rather than a cause",
              fb: "Emaciation is what was observed. Its cause is still being investigated." }]},

        { type: "scenario", tag: "Model revision", title: "Which revision does the evidence support?",
          illustrative: "Student ideas are illustrative examples created for professional learning.",
          questions: [
            { q: "A student’s initial model says: “The lake trout population exploded, so they ate all the food.” After reading the DNR report, what revision does the evidence support?",
              options: [
                { t: "Keep the food idea as a possible explanation marked “untested.” The report describes more thin fish, not a population count.", c: true, fb: "Yes. The report documents body condition, not population size." },
                { t: "Add a “population boom” arrow, since thin fish prove overpopulation.", c: false, fb: "The report gives no population data." },
                { t: "Remove the food idea, because disease has been confirmed.", c: false, fb: "No cause has been confirmed. Food and a pathogen are both still possible." },
                { t: "Make no changes, since initial models are final.", c: false, fb: "Revision with evidence is expected scientific work." }]},
            { q: "The DNR planned to test whether a fish pathogen is involved. How should students show this on their models?",
              options: [
                { t: "Add “pathogen?” as a competing pathway with a question mark, and cite the planned testing.", c: true, fb: "Yes. This represents a competing explanation and its uncertainty." },
                { t: "Replace the food pathway with “pathogen,” since it is newer information.", c: false, fb: "A planned test is not a result. Both ideas remain possible." },
                { t: "Leave it off, since it has not been proven.", c: false, fb: "Unproven explanations belong on the model as possibilities to test." },
                { t: "Add “contagious disease spread by biting.”", c: false, fb: "The DNR states the fish aren’t thought to spread a contagious disease by biting." }]},
            { q: "Which question best helps students tell observation from inference?",
              options: [
                { t: "“Which statements in the DNR report describe what researchers measured, and which describe what they think might explain it?”", c: true, fb: "Yes. It asks students to separate the two directly." },
                { t: "“Do you agree with the scientists?”", c: false, fb: "A yes-or-no opinion question doesn’t separate observation from inference." },
                { t: "“What does emaciated mean?”", c: false, fb: "This is a definition question." },
                { t: "“How deep is Superior Maximus?”", c: false, fb: "This recalls a fact." }]},
            { q: "Which statement best records what remains uncertain?",
              options: [
                { t: "Whether low food, a pathogen, or something else explains the poor condition. Testing is underway.", c: true, fb: "Yes. It names competing explanations and what is still being tested." },
                { t: "Whether the DNR has proven the cause is food.", c: false, fb: "The DNR has not proven a cause, so this misstates the situation." },
                { t: "Whether siscowet live in Lake Superior.", c: false, fb: "This is established in the report." },
                { t: "Nothing; the data answer the question.", c: false, fb: "The data show a pattern, not a cause." }]}]}
      ]
    },

    /* ====================================================== MODULE 3 */
    m3: {
      number: 3, focus: "Scaffolding",
      title: "Module 3 Check-In: Scaffolding",
      assignment: "Assignment 3.5 — Instructional Scaffold and Removal Rationale",
      intro: "Check your understanding of scaffolds and gradual release before you design your scaffold.",
      sources: ["toolkit", "dnr0608"],
      activities: [
        { type: "sort", tag: "Sort", title: "Scaffold or reduced demand?",
          prompt: "A scaffold gives every student access to the same rigorous thinking. Sort each support.",
          illustrative: "Illustrative supports created for professional learning.",
          bins: [
            { id: "S", name: "Scaffold", hint: "Same thinking, better access" },
            { id: "R", name: "Reduces cognitive demand", hint: "Removes the thinking" }],
          items: [
            { t: "Modeling Support Cards for prey, energy, and siscowet, with blank arrows students must label.", a: "S",
              fb: "Students still decide how parts connect and what each arrow means." },
            { t: "An evidence organizer with columns for data source, pattern, and how it relates to the claim.", a: "S",
              fb: "Students still select and interpret the evidence." },
            { t: "Think-write-pair before discussion, with starters such as “I noticed ___, so I think ___.”", a: "S",
              fb: "It supports entering the conversation without supplying the idea." },
            { t: "A finished food-web diagram with the sentence “Siscowet get thin because ___” and a word bank.", a: "R",
              fb: "It can be completed without causal reasoning, and it assumes a single cause." },
            { t: "Giving students the DNR’s possible explanation to copy as their claim.", a: "R",
              fb: "Copying removes the reasoning and presents an unconfirmed idea as the answer." },
            { t: "Replacing the modeling task with a vocabulary matching worksheet.", a: "R",
              fb: "Students no longer explain a mechanism, so the task is easier, not supported." }]},

        { type: "match", tag: "Match", title: "Match the barrier to the scaffold",
          prompt: "Name the barrier first, then choose the support that removes it and nothing more.",
          pairs: [
            { l: "Describes what happened but not why", r: "Guiding questions or a partially completed model",
              fb: "The barrier is moving from observation to mechanism." },
            { l: "Makes a claim with no evidence", r: "Evidence organizer or evidence sorting mat",
              fb: "The barrier is selecting relevant evidence." },
            { l: "Lists evidence but doesn’t connect it", r: "Reasoning prompts",
              fb: "The barrier is linking evidence to scientific ideas." },
            { l: "Uses everyday words for scientific ideas", r: "Targeted word bank with visuals",
              fb: "The barrier is academic language." },
            { l: "Stays quiet in discussion", r: "Sentence starters and think-write-pair before talk",
              fb: "The barrier is entering the conversation." }]},

        { type: "evaluate", tag: "Evaluate supports", title: "Evaluate visual, language, and modeling supports",
          prompt: "Select every statement that accurately evaluates the support.",
          options: [
            { t: "A word bank paired with images of siscowet and prey supports academic language, as long as students still explain the relationships themselves.", c: true,
              fb: "Yes. Visuals and vocabulary give access without doing the reasoning." },
            { t: "A diagram with every arrow already labeled is a strong modeling scaffold because students can’t get it wrong.", c: false,
              fb: "Pre-labeled arrows remove the reasoning. That is the risk named in the scaffold menu." },
            { t: "A partially completed model with blank arrows keeps the reasoning with the student.", c: true,
              fb: "Yes. Students still decide what each relationship is." },
            { t: "The starter “Siscowet are thin because they don’t have enough food” is a useful explanation scaffold.", c: false,
              fb: "It completes the idea for the student and states an unconfirmed cause as fact." },
            { t: "Any scaffold can be tested by asking: could a student complete it correctly without understanding the science?", c: true,
              fb: "Yes. If the answer is yes, revise the scaffold." }]},

        { type: "scenario", tag: "Gradual release", title: "Maintain, reduce, or remove?",
          illustrative: "Student responses are illustrative examples created for professional learning.",
          questions: [
            { q: "A student writes: “The fish got thinner.” What is the best decision?",
              options: [
                { t: "Maintain support. Help the student identify evidence and consider possible causes.", c: true, fb: "Yes. An observation alone shows the student still needs support to reach a mechanism." },
                { t: "Remove all supports so the student works independently.", c: false, fb: "The work shows the student isn’t ready." },
                { t: "Give the student the explanation.", c: false, fb: "This removes the thinking." },
                { t: "Move the student to a different, easier task.", c: false, fb: "Scaffolds give access to the same task." }]},
            { q: "A student writes: “They are thin because they’re getting less energy from food,” but cites no data. What is the best decision?",
              options: [
                { t: "Reduce selectively. Ask the student to point to the measurements that support the idea.", c: true, fb: "Yes. The student has a mechanism and needs to connect it to evidence." },
                { t: "Remove all supports, since the explanation is correct.", c: false, fb: "The cause isn’t confirmed, and no evidence is cited." },
                { t: "Maintain every support at the same level.", c: false, fb: "The student has moved beyond an observation." },
                { t: "Mark it complete.", c: false, fb: "A claim without evidence is not a complete explanation." }]},
            { q: "A student’s claim and evidence are strong without starters, but the reasoning is missing. What is the best decision?",
              options: [
                { t: "Remove the claim and evidence starters and keep one reasoning prompt.", c: true, fb: "Yes. Fade by evidence, one support at a time." },
                { t: "Keep all starters for consistency.", c: false, fb: "Supports the student no longer needs limit independence." },
                { t: "Remove every support at once.", c: false, fb: "The student still needs help with reasoning." },
                { t: "Add more claim starters.", c: false, fb: "The claim is already strong." }]},
            { q: "When should a scaffold be removed?",
              options: [
                { t: "After a fixed number of lessons.", c: false, fb: "Gradual release follows student evidence, not a calendar." },
                { t: "When student work shows evidence, a mechanism, and justification with fewer prompts.", c: true, fb: "Yes. Readiness is shown in student work." },
                { t: "When most of the class has finished the task.", c: false, fb: "Pace is not evidence of independent reasoning." },
                { t: "At the end of the unit.", c: false, fb: "Waiting too long limits independent reasoning." }]}]}
      ]
    },

    /* ====================================================== MODULE 4 */
    m4: {
      number: 4, focus: "Assessment",
      title: "Module 4 Check-In: Assessment",
      assignment: "Assignment 4.5 — Student-Model Rubric and Scoring Commentary",
      intro: "Check your scoring and feedback decisions before you build your student-model rubric.",
      sources: ["course", "toolkit", "dnr0608"],
      activities: [
        { type: "sort", tag: "Evidence of thinking", title: "What does the student work reveal?",
          prompt: "Sort each student statement by what it shows about the student’s thinking.",
          illustrative: "Student statements are illustrative examples created for professional learning.",
          bins: [
            { id: "O", name: "Observation only", hint: "Describes what was seen" },
            { id: "C", name: "Claim without evidence", hint: "Proposes a cause, no data" },
            { id: "E", name: "Evidence without reasoning", hint: "Cites data, no explanation" },
            { id: "X", name: "Explanation linked to evidence", hint: "Connects data, mechanism, and uncertainty" }],
          items: [
            { t: "“The siscowet looks thin and not healthy.”", a: "O", fb: "This describes the condition only. It matches Model A in Lesson 4.2." },
            { t: "“They’re thin because there are fewer prey.”", a: "C", fb: "It proposes a cause but cites no data." },
            { t: "“They are sick from a disease.”", a: "C", fb: "A possible cause stated without evidence." },
            { t: "“About 20% of deepwater siscowet were thin in 2024 and 2025.”", a: "E", fb: "Accurate data with no connection to an explanation." },
            { t: "“In 2025, 54% of siscowet captured at Superior Maximus were thin, more than in 2024.”", a: "E", fb: "It describes a pattern but doesn’t explain it." },
            { t: "“Fewer prey could mean less energy, which could lead to weight loss. The rising share of thin fish fits this, but I haven’t ruled out disease.”", a: "X", fb: "It links evidence to a mechanism and names uncertainty." }]},

        { type: "match", tag: "Rubric scoring", title: "Calibrate scores using shared criteria",
          prompt: "Use the Lesson 4.2 models and the 4.5 rubric levels: Developing (1), Progressing (2), Proficient (3). Choose a level for each row.",
          illustrative: "Illustrative student models from Lesson 4.2, created for professional learning; not actual student work.",
          stimulus: { kind: "models", items: [
            { label: "Model A", chain: ["Thin siscowet"], arrows: [], caption: "“The siscowet looks thin and not healthy.”" },
            { label: "Model B", chain: ["Fewer prey?", "Less food and energy", "Thin siscowet"], arrows: ["", ""], caption: "“The siscowet may not be getting enough food.”" },
            { label: "Model C", chain: ["Fewer prey in the lake", "Less food (lower energy)", "Thin siscowet (lower body condition)"], arrows: ["", "may lead to weight loss"],
              caption: "Possible explanation (a hypothesis to test). Other possibilities: change in water temperature? changes in prey quality? disease? Need more evidence: prey data over time, water temperature, and fish health records." }]},
          options: ["Developing (1)", "Progressing (2)", "Proficient (3)"],
          pairs: [
            { l: "Model A: Mechanism", r: "Developing (1)", fb: "Model A labels the fish’s condition and shows no mechanism." },
            { l: "Model B: Overall level shown in Lesson 4.2", r: "Progressing (2)", fb: "Model B connects limited prey to reduced food intake, but doesn’t yet explain how reduced energy affects body condition or cite supporting evidence." },
            { l: "Model B: Use of evidence", r: "Developing (1)", fb: "Model B cites no data supporting reduced prey. This matches the 4.5 sample commentary." },
            { l: "Model C: Uncertainty", r: "Proficient (3)", fb: "Model C labels its explanation as a hypothesis, lists alternatives, and names the evidence still needed." },
            { l: "Model C: Overall level shown in Lesson 4.2", r: "Proficient (3)", fb: "Model C represents prey, energy intake, and body condition while identifying uncertainties." }]},

        { type: "evaluate", tag: "Feedback", title: "Select feedback that supports revision",
          prompt: "Select every feedback statement for Model B that supports revision without supplying the answer.",
          options: [
            { t: "“You connected food intake to body condition. What evidence would support or challenge this possible explanation?”", c: true,
              fb: "Yes. It names a strength and asks for evidence. This is the 4.5 sample feedback." },
            { t: "“Incorrect. The real cause is a pathogen.”", c: false,
              fb: "It gives an answer, and the cause has not been established." },
            { t: "“What additional data would you need to test whether prey declined?”", c: true,
              fb: "Yes. It moves the student toward an investigation." },
            { t: "“Add more details.”", c: false,
              fb: "This feedback stalls: it gives the student no direction." },
            { t: "“Look at your arrow from ‘less food’ to ‘thin siscowet.’ What happens to energy between those two boxes?”", c: true,
              fb: "Yes. It presses for the mechanism without giving it." }]},

        { type: "scenario", tag: "Scenario", title: "Scoring and next-step decisions",
          illustrative: "Hypothetical scoring scenarios.",
          questions: [
            { q: "Two teachers score the same model two levels apart. What should happen?",
              options: [
                { t: "Average the two scores.", c: false, fb: "Averaging hides the disagreement instead of resolving it." },
                { t: "The higher score stands only if that scorer can point to the feature that earns it.", c: true, fb: "Yes. This is the calibration rule in the toolkit." },
                { t: "The more experienced teacher’s score stands.", c: false, fb: "Calibration rests on evidence, not seniority." },
                { t: "Use the lower score to be safe.", c: false, fb: "Scores should match the evidence in the work." }]},
            { q: "A model uses the term “energy transfer” but never shows what it means. How should the mechanism be scored?",
              options: [
                { t: "High, because the student used the correct vocabulary.", c: false, fb: "Correct vocabulary often inflates mechanism scores." },
                { t: "Ask the student to point to where the model explains the term, then score what the model shows.", c: true, fb: "Yes. Score the explanation, not the term." },
                { t: "Zero, because vocabulary doesn’t count.", c: false, fb: "Score what the model explains, not whether vocabulary appears." },
                { t: "Skip the mechanism criterion.", c: false, fb: "Every criterion should be scored." }]},
            { q: "Most models in a class propose a cause but cite no measurements. What is the best next step?",
              options: [
                { t: "Reteach the whole unit.", c: false, fb: "Respond to the specific need the work reveals." },
                { t: "An evidence selection activity connecting specific survey data to the explanation.", c: true, fb: "Yes. It targets the pattern in the student work." },
                { t: "Give everyone the consensus model.", c: false, fb: "This removes the reasoning." },
                { t: "Move on to the next topic.", c: false, fb: "The evidence shows a need to address first." }]},
            { q: "Which success criterion assesses reasoning rather than completion?",
              options: [
                { t: "My model is neat and labeled.", c: false, fb: "This rewards appearance." },
                { t: "I used all the vocabulary words.", c: false, fb: "This rewards terms without meaning." },
                { t: "My model shows how prey availability, energy intake, and body condition are connected, with a label on every arrow and evidence placed on the model.", c: true, fb: "Yes. It describes the quality of the thinking." },
                { t: "I wrote a CER paragraph.", c: false, fb: "This rewards completion." }]}]}
      ]
    },

    /* ====================================================== MODULE 5 */
    m5: {
      number: 5, focus: "Inquiry",
      title: "Module 5 Check-In: Inquiry",
      assignment: "Assignment 5.5 — Investigation Design and Data Analysis",
      intro: "Check your understanding of investigable questions and evidence before you design your investigation.",
      sources: ["dnr0608", "dnr0430", "course", "toolkit"],
      activities: [
        { type: "sort", tag: "Sort", title: "Investigable or not?",
          prompt: "Sort each student question about the siscowet phenomenon.",
          illustrative: "Student questions are illustrative examples.",
          bins: [
            { id: "Y", name: "Investigable", hint: "Can be answered with evidence we could collect or analyze" },
            { id: "N", name: "Not investigable as written", hint: "Opinion, value judgment, or quick fact" }],
          items: [
            { t: "Did the share of thin siscowet captured at Superior Maximus change between 2024 and 2025?", a: "Y",
              fb: "It can be answered with DNR survey data." },
            { t: "Do siscowet caught in deeper water show poor body condition more often than those caught in shallower water?", a: "Y",
              fb: "It can be answered by comparing survey data across depths." },
            { t: "Is a pathogen present in thin siscowet that is absent in siscowet with normal appearance?", a: "Y",
              fb: "It can be tested. The DNR and MSU fish pathologists planned this testing." },
            { t: "Are zombie fish creepy?", a: "N", fb: "This is an opinion." },
            { t: "Should people be scared of Lake Superior fish?", a: "N", fb: "This is a value judgment. The DNR described the trend as cause for investigation, not alarm." },
            { t: "What is a siscowet?", a: "N", fb: "This is a fact question. Answer it quickly with a reading." }]},

        { type: "match", tag: "Match", title: "Components of a scientific investigation",
          prompt: "Match each investigation component to the siscowet example.",
          pairs: [
            { l: "Investigable question", r: "Has the share of thin siscowet in deepwater surveys changed over time?",
              fb: "It can be answered with data." },
            { l: "Evidence source", r: "Michigan DNR results from the multiagency, lakewide triennial deepwater survey",
              fb: "The DNR credits its Superior Maximus data to this survey." },
            { l: "Pattern to analyze", r: "Percent of captured siscowet classified as “zombies,” by year and location",
              fb: "The variable students compare." },
            { l: "Limitation", r: "Small numbers of fish at one site, which may not represent the whole lake",
              fb: "It limits how far conclusions can reach." },
            { l: "Additional evidence needed", r: "Prey data over time, water temperature, and fish health records",
              fb: "These are named in Lesson 4.2 Model C as the evidence needed to test explanations." }]},

        { type: "evaluate", tag: "Evidence and limitations", title: "Evaluate evidence and competing explanations",
          prompt: "Select every statement that is a reasonable conclusion or limitation.",
          stimulus: { kind: "table", caption: "Siscowet captured at Superior Maximus classified as “zombies”",
            head: ["Survey year", "Reported result"],
            rows: [["2024", "37% (11 fish)"], ["2025", "54% (15 fish)"]], source: "dnr0608" },
          options: [
            { t: "The reported percentages describe samples at this location, not the entire lake.", c: true,
              fb: "Yes. This is the key limitation named in the 5.5 reference example." },
            { t: "The data do not establish a cause.", c: true,
              fb: "Yes. A pattern in body condition doesn’t identify why it occurred." },
            { t: "The rise from 37% to 54% proves the siscowet population is starving.", c: false,
              fb: "This overgeneralizes the sample and assumes a cause." },
            { t: "Food limitation and a pathogen both remain possible explanations, and the DNR planned pathogen testing.", c: true,
              fb: "Yes. Competing explanations stay open until evidence distinguishes them." },
            { t: "Because the DNR said the trend is “not cause for alarm,” no further investigation is needed.", c: false,
              fb: "The DNR said the trend is cause for further investigation." }]},

        { type: "scenario", tag: "Scenario", title: "Driving questions and investigation decisions",
          illustrative: "Hypothetical classroom scenarios.",
          questions: [
            { q: "Which is the strongest driving question for this sequence?",
              options: [
                { t: "Are siscowet zombies?", c: false, fb: "A yes-or-no question." },
                { t: "What is causing poor body condition in some Lake Superior siscowet?", c: true, fb: "Yes. It invites explanation and matches the Lesson 5.1 Driving Question Board." },
                { t: "What is a siscowet?", c: false, fb: "A definition question." },
                { t: "How deep is Lake Superior?", c: false, fb: "A fact question." }]},
            { q: "After analyzing the survey data, the class’s food question is only partly answered. What should happen on the Driving Question Board?",
              options: [
                { t: "Remove the question, since it was discussed.", c: false, fb: "Open questions stay visible." },
                { t: "Move it to “Answered.”", c: false, fb: "The data do not answer it." },
                { t: "Move it to “Partly answered,” record the evidence, and add new questions the data raised.", c: true, fb: "Yes. Students can point to the evidence behind each move." },
                { t: "Replace it with the teacher’s question.", c: false, fb: "Student questions drive the storyline." }]},
            { q: "A student proposes: “Maybe the deep water got warmer.” What is the best move?",
              options: [
                { t: "Tell the student temperature isn’t involved.", c: false, fb: "No evidence rules it out. Lesson 4.2 lists it as an uncertain possibility." },
                { t: "Ask what evidence would test it, such as deepwater temperature records over the same years, and add it to the board.", c: true, fb: "Yes. It turns an idea into an investigable question." },
                { t: "Accept it as the explanation.", c: false, fb: "It is a possibility, not a conclusion." },
                { t: "Park it as outside the storyline.", c: false, fb: "Environmental conditions are part of this storyline (Lesson 5.1)." }]},
            { q: "New evidence challenges a student’s model. What should the student do?",
              options: [
                { t: "Keep the model unchanged to stay consistent.", c: false, fb: "Revision is expected scientific work." },
                { t: "Revise the model, mark the change, and name the evidence that caused it.", c: true, fb: "Yes. This is the model revision expectation in 5.5." },
                { t: "Delete the model and start over with the teacher’s model.", c: false, fb: "This loses the record of changing thinking." },
                { t: "Ignore the evidence if it’s from a small sample.", c: false, fb: "Weigh limitations, but don’t ignore the evidence." }]}]}
      ]
    },

    /* ====================================================== MODULE 6 */
    m6: {
      number: 6, focus: "Collaboration",
      title: "Module 6 Check-In: Collaboration",
      assignment: "Assignment 6.5 — Integrated Instructional Sequence and Reflection",
      intro: "Check your understanding of discourse, peer feedback, and consensus building before you finalize your integrated sequence.",
      sources: ["course", "toolkit", "dnr0608"],
      activities: [
        { type: "sort", tag: "Sort", title: "Does this move advance scientific discourse?",
          prompt: "Sort each teacher statement from a discussion of siscowet models.",
          illustrative: "Hypothetical teacher statements.",
          bins: [
            { id: "A", name: "Advances discourse", hint: "Makes reasoning visible and keeps talk on evidence" },
            { id: "S", name: "Shuts down reasoning", hint: "Ends thinking or replaces evidence" }],
          items: [
            { t: "“So you’re suggesting that fewer prey could mean less energy for the siscowet?”", a: "A", fb: "Revoicing makes the idea available to the class." },
            { t: "“What evidence supports that idea?”", a: "A", fb: "Pressing for evidence keeps the discussion on data." },
            { t: "“Who has a different interpretation of the Superior Maximus data?”", a: "A", fb: "It invites another perspective." },
            { t: "“Good, that’s the right answer. Let’s move on.”", a: "S", fb: "It ends the reasoning before the evidence is examined." },
            { t: "“Let’s vote on which model is correct.”", a: "S", fb: "Consensus comes from evidence, not votes." },
            { t: "“That’s wrong. It’s a disease.”", a: "S", fb: "It shuts down the idea and asserts an unconfirmed cause." }]},

        { type: "match", tag: "Match", title: "Talk moves and their purposes",
          prompt: "Match each of the Six Talk Moves to its instructional purpose.",
          pairs: [
            { l: "Revoice: “So you’re suggesting that…”", r: "Checks understanding and makes a student’s idea available to the class", fb: "Revoicing makes reasoning visible." },
            { l: "Press for evidence: “What evidence supports that idea?”", r: "Keeps claims tied to data", fb: "It keeps the discussion focused on evidence." },
            { l: "Compare reasoning: “How is your explanation similar to or different from this model?”", r: "Surfaces differences between explanations", fb: "Comparison shows where the models disagree." },
            { l: "Invite another perspective: “Who has a different interpretation?”", r: "Brings alternative interpretations into the discussion", fb: "It widens the set of ideas considered." },
            { l: "Connect ideas: “How does that idea connect to what we observed?”", r: "Links an idea back to observations", fb: "It ties explanations to the phenomenon." },
            { l: "Encourage revision: “Would you change anything in your model after hearing this?”", r: "Prompts students to revise models after discussion", fb: "It supports revision and collective sensemaking." }]},

        { type: "evaluate", tag: "Gallery walk", title: "Evaluate peer feedback from a gallery walk",
          prompt: "Select every sticky note that follows the Structured Peer Feedback Protocol (I Notice · I Wonder · Evidence Connection · Revision Suggestion).",
          illustrative: "Illustrative peer feedback created for professional learning.",
          options: [
            { t: "“I notice your model connects prey availability to body condition.”", c: true, fb: "I Notice: it identifies a relationship in the model." },
            { t: "“I wonder how a pathogen would fit into your model?”", c: true, fb: "I Wonder: it asks about a possible mechanism." },
            { t: "“Nice drawing!”", c: false, fb: "Praise for appearance doesn’t advance scientific thinking." },
            { t: "“The DNR reported that the share of thin siscowet in deep water rose from about 3% in 2015 to about 20% in 2024 and 2025. Your model doesn’t use this yet.”", c: true, fb: "Evidence Connection: it names evidence the model could use." }]},

        { type: "scenario", tag: "Scenario", title: "Consensus and integration decisions",
          illustrative: "Hypothetical classroom scenarios.",
          questions: [
            { q: "Most students favor the food model. A few raise the pathogen idea. What is the best consensus move?",
              options: [
                { t: "Adopt the food model, since most students agree.", c: false, fb: "Consensus comes from evidence, not majority." },
                { t: "Keep the relationships the evidence supports, and record both food and a pathogen as open questions on the Driving Question Board.", c: true, fb: "Yes. The evidence hasn’t yet distinguished between them." },
                { t: "Drop the pathogen idea, since fewer students hold it.", c: false, fb: "Minority ideas stay in play when evidence hasn’t ruled them out." },
                { t: "Tell students the answer to end the debate.", c: false, fb: "This removes the sensemaking." }]},
            { q: "What should the class consensus model include?",
              options: [
                { t: "Every idea any student proposed.", c: false, fb: "Keep only relationships the evidence supports, and question the rest." },
                { t: "Relationships supported by current evidence, plus a list of the questions that remain.", c: true, fb: "Yes. It records what the class can explain now." },
                { t: "The teacher’s model.", c: false, fb: "The consensus model is built from student models." },
                { t: "Only the final answer, with no uncertainty.", c: false, fb: "Open questions are part of the consensus model." }]},
            { q: "In Section 3 of Assignment 6.5, which pairing correctly places a MOSAIC component?",
              options: [
                { t: "Inquiry: scientific model rubric and actionable feedback", c: false, fb: "That is Assessment (Module 4)." },
                { t: "Scaffolding: instructional supports and gradual removal rationale", c: true, fb: "Yes. This is Module 3." },
                { t: "Observation: discourse, peer feedback, and consensus model development", c: false, fb: "That is Collaboration (Module 6)." },
                { t: "Assessment: investigable question and investigation plan", c: false, fb: "That is Inquiry (Module 5)." }]},
            { q: "Which structure best ensures every student has an idea before whole-group talk?",
              options: [
                { t: "Whole-class discussion led by volunteers.", c: false, fb: "Volunteers alone leave some voices out." },
                { t: "Think-write-pair-share.", c: true, fb: "Yes. Students think and write alone first, then talk." },
                { t: "The teacher presents the model, then takes questions.", c: false, fb: "This centers the teacher’s thinking." },
                { t: "Cold-calling one student per group.", c: false, fb: "This doesn’t give every student think time first." }]}]}
      ]
    }
  }
};
