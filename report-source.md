# Reversible Device Showcase Motion Research

Audience: SplitEase product/design engineering  
Date: 2026-09-08  
Scope: Redesign the homepage device showcase as a three-device arrival followed by reversible, scroll-scrubbed glass-fragment transitions. Desktop is the primary canvas; mobile and reduced-motion modes must preserve readable content without excessive movement.

## Executive answer

Use one normalized section `scrollYProgress` value as the source of truth for every phase: staged device-card arrival, first-slide reveal, two shatter transitions, and subsequent slide holds. Represent each fracture as a small, fixed set of percentage-based CSS polygon masks and animate only each fragment's transform and opacity. This makes scrolling upward reconstruct the exact same geometry without direction detection or imperative animation reversal. Keep semantic text and links outside the fragment tree and provide opacity-only transitions when reduced motion is requested.

## Design and implementation decisions

- Extend the sticky section to roughly 520–560vh so the entrance, three reading pauses, and two transitions each have enough scroll distance.
- Use deterministic phase ranges rather than threshold-driven `activeIndex` swaps. Motion's `useScroll` supplies normalized target progress and `useTransform` maps that progress into multiple output ranges.
- Show three compact device cards falling into an overview composition during the opening phase; converge and fade that composition before the detailed first slide.
- Render 10–12 static polygon fragments only during each outgoing transition. Repeat the same visual inside each clipped layer, keep masks static, and move the layers outward with translate/rotate/opacity.
- Keep text, feature bullets, and links as a single semantic copy per slide. Fragment duplicates are decorative, unfocusable, `aria-hidden`, and use empty alt text.
- Prefer transforms and opacity for per-frame work. Avoid animated layout properties, polygon-point morphing, displacement filters, or runtime randomness.
- For `prefers-reduced-motion`, remove falling and shattering transforms and retain short opacity crossfades/static composition.

## Material limitations and reconciliation

Motion's current documentation says `clipPath` can be GPU animated, while Google's broader rendering guidance only consistently recommends transform and opacity as compositor-friendly. The conservative implementation therefore keeps clip paths static and animates only transform/opacity. There is no universal safe shard count; 10–12 desktop fragments is a bounded starting point requiring visual/runtime testing. Polygon seams can occur from subpixel antialiasing, so the visual should retain a dark backing layer and slight polygon overlap where needed.

## Claim-to-source ledger

1. A target-scoped normalized scroll value can drive scroll-linked effects and compose with transformed values. Source: **useScroll | React scroll-linked animations**, Motion, current documentation, accessed 2026-09-08. https://motion.dev/docs/react-use-scroll
2. One MotionValue can map across ordered input/output ranges and easing, enabling deterministic choreography. Source: **useTransform | Composable React animation values**, Motion, current documentation, accessed 2026-09-08. https://motion.dev/docs/react-use-transform
3. Scroll-linked animation progress naturally advances, pauses, and rewinds with the user's scroll. Source: Bramus, **CSS scroll-triggered animations are coming!**, Chrome for Developers, 2025-12-12, accessed 2026-09-08. https://developer.chrome.com/blog/scroll-triggered-animations
4. Transform and opacity are the most consistently performant animation properties; layout- and paint-triggering properties should be avoided. Source: Kayce Basques and Rachel Andrew, **How to create high-performance CSS animations**, web.dev/Google, updated 2020-10-06, accessed 2026-09-08. https://web.dev/articles/animations-guide
5. CSS `clip-path: polygon()` defines percentage-based clipped regions and is broadly available; polygon interpolation has matching-point constraints. Sources: MDN contributors, **clip-path** and **Introduction to CSS clipping**, current documentation, accessed 2026-09-08. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/clip-path and https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Masking/Clipping
6. Non-essential interaction-triggered motion should be disable-able, and reduced-motion modes should replace large transforms with gentler alternatives. Sources: W3C WAI, **Understanding SC 2.3.3 Animation from Interactions**, current WCAG 2.2 guidance, and Motion, **useReducedMotion**, accessed 2026-09-08. https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions and https://motion.dev/docs/react-use-reduced-motion
7. Decorative duplicate fragments should not create repeated accessible content; `aria-hidden` must not contain focusable descendants. Source: MDN contributors, **ARIA: aria-hidden attribute**, current documentation, accessed 2026-09-08. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden

## Search coverage and stopping rationale

Research covered Motion's official scroll/mapping/accessibility APIs, W3C interaction-motion guidance, MDN clipping and ARIA behavior, and Google rendering-performance guidance. Two focused research lanes independently converged on deterministic progress mapping and fixed masks with transformed fragments. Additional results were mostly visual demos without stronger implementation or accessibility evidence, so further discovery was unlikely to change the design decision.
