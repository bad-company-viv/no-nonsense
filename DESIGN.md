```markdown
# Design System Specification: Editorial Authority

## 1. Overview & Creative North Star
**Creative North Star: The Sovereign Monolith**
This design system rejects the cluttered, "noisy" aesthetics of traditional marketing funnels in favor of a high-contrast, editorial experience that commands respect. It is built on the principle of **"Quiet Confidence"**—where trust is earned through generous whitespace, razor-sharp typography, and a refusal to use decorative crutches. 

We move beyond the "template" look by utilizing intentional asymmetry and a rigid adherence to tonal layering. By treating the digital canvas like a high-end broadsheet or a luxury architectural portfolio, we signal to the user that the content is authoritative and the brand is immovable.

---

## 2. Colors: Tonal Architecture
The palette is rooted in deep obsidian tones, punctuated by a high-energy "Electric Orange." We do not use color to decorate; we use it to direct.

### Core Palette
- **Surface (Background):** `#131313` – A deep, rich charcoal that provides more optical depth than pure black.
- **Primary (Accent):** `#FF6B35` (Electric Orange) – Reserved exclusively for the most critical calls to action.
- **On-Surface (Primary Text):** `#E8E8E8` – High-contrast off-white for maximum legibility.
- **Secondary Text:** `#ABABAB` – Used for meta-data and supporting descriptions to create hierarchy.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning. Traditional dividers create visual "stutter." Instead, define boundaries through:
- **Background Color Shifts:** Moving from `surface` to `surface-container-low` (`#1C1B1B`).
- **Spacious Padding:** Using the `120px` vertical section rule (Spacing Token `24` or `8.5rem`) to let the eye rest.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. To create depth without shadows:
1.  **Level 0 (Base):** `surface` (`#131313`)
2.  **Level 1 (Sections):** `surface-container-low` (`#1C1B1B`)
3.  **Level 2 (Cards/Inputs):** `surface-container-high` (`#2A2A2A`)

### Signature Textures
For hero sections or primary CTAs, use a subtle linear gradient: `primary` to `primary-container` (`#FF6B35` to `#832600`) at a 135-degree angle. This adds a "weighted" feel to the button, suggesting physical mass and premium quality.

---

## 3. Typography: Editorial Dominance
We use the **Inter** font stack to convey a modernist, no-nonsense personality.

- **Display & Headlines:** Weight 700 (Bold) with a line-height of **1.15**. The tight leading creates a "block" effect that feels like a newspaper headline, demanding immediate attention.
- **Body:** Weight 400 with a line-height of **1.6**. We prioritize readability in text-heavy sections.
- **Hierarchy as Trust:** By using a massive scale shift between `display-lg` (3.5rem) and `body-md` (0.875rem), we create a clear path for the user’s eye, reducing cognitive load and building trust through clarity.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are forbidden unless specified for floating overlays. Hierarchy must be achieved through **Tonal Layering**.

- **The Layering Principle:** Place a `surface-container-highest` (`#353534`) element on top of a `surface-container-low` (`#1C1B1B`) background to create a "lift" effect.
- **The "Ghost Border" Fallback:** If a container requires definition against a similar background, use the `outline-variant` (`#594139`) at **15% opacity**. This creates a "whisper" of an edge that preserves the minimalist aesthetic.
- **Glassmorphism:** For floating navigation bars, use `surface` at 70% opacity with a `20px` backdrop-blur. This integrates the UI into the content rather than sitting "on top" of it.

---

## 5. Components: Precision Primitives

### Buttons (The 4px Standard)
- **Primary:** Background `primary`, Text `on-primary` (`#5D1900`). 4px border radius (`DEFAULT`). No border.
- **Secondary:** Background `transparent`, Ghost Border (`outline` at 20%), Text `on-surface`.
- **Interactions:** On hover, the Primary button should shift to `primary-fixed-dim` (`#FFB59D`) with a slight upward translation of 2px.

### Input Fields
- **Container:** Background `#1A1A1A` with a `#333333` border. 
- **Focus State:** Border shifts to `primary` (`#FF6B35`) with no glow/shadow. High-contrast focus is a "trust" signal—it shows the system is responsive and secure.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines.
- **Separation:** Use vertical white space (Spacing Token `12` or `4rem`) or a subtle shift to `surface-container-lowest` (`#0E0E0E`) to group related items.

### Signature Component: The "Authority Stat"
A large `display-md` number paired with a `label-sm` caption in `primary` color. These should be placed with generous margins to validate claims and build immediate social proof.

---

## 6. Do’s and Don’ts

### Do:
- **Use Asymmetry:** Place a headline on the left with body text shifted to the right column to create an editorial, non-templated look.
- **Embrace the 120px Padding:** Use Spacing Token `24` between every major section. Whitespace is a luxury—use it.
- **Text-Heavy Layouts:** Treat copy as the hero. Use the typography scale to make reading feel effortless.

### Don't:
- **Don't use 1px dividers:** If you feel the need to separate, use a background color change or more space.
- **Don't use standard shadows:** If an element must float, the shadow must be a tinted `surface-container-lowest` color at 8% opacity with a 40px blur.
- **Don't soften the corners:** Stick strictly to the `4px` (0.25rem) radius. Anything rounder feels too "friendly" and loses the professional, "no-nonsense" edge.
- **Don't use pure white:** Always use `on-surface` (`#E8E8E8`) to reduce eye strain on the dark background.```