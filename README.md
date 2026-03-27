# The Rabbit Hole

Interactive playground exploring physics-driven motion and tactile UI (Vite + React).

## Development

```bash
npm install
npm run dev
```

## 1. Core Tech Stack

**React:** For the component-based architecture and state management.

**Framer Motion:** The engine behind every movement. We used:

- **useScroll** & **useTransform** for scroll-linked animations.
- **useSpring** to create "weight" and inertia in the cursor and scroll.
- **useMotionValue** for real-time physics tracking.
- **AnimatePresence** for smooth mounting/unmounting of the Easter egg overlay.

**Tailwind CSS:** For the "Mint UI" aesthetic, handling the light green palette and responsive layouts.

**Lucide React:** For the clean, minimal iconography.

## 2. Key Interaction Techniques

**Magnetic Physics:** We used a custom `MagneticElement` wrapper that calculates the distance between the cursor and an element's center, "pulling" the UI toward the mouse.

**X-Ray Masking:** The gallery uses a dynamic `clipPath` (SVG circle) synchronized with the mouse position. When you hover, the primary content is hidden (opacity/scale) while the "internal" data is revealed.

**Spring-Pop Animations:** The rabbits in the gallery use high-stiffness springs to feel energetic when they enter the viewport.

**Rhythmic Interaction:** A state-based counter tracks clicks on the central Egg to trigger the "Hatch" event, which transforms the entire site theme.

## 3. Design Principles

**Smoothness over Speed:** We used custom cubic-bezier easing and spring damping to make the interface feel "expensive" and deliberate.

**Visual Hierarchy:** Large fluid typography (`12vw`) combined with a soft mint-green background to keep the focus on motion experiments.


## GitHub Pages

The repo includes a workflow (`.github/workflows/deploy-pages.yml`) that builds on every push to `main` and publishes the `dist` folder.

1. Push this repo to GitHub (see your remote setup).
2. In the repository: **Settings → Pages → Build and deployment**.
3. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
4. Push to `main` (or run the workflow manually under **Actions**). After it finishes, the site URL appears in the workflow run and in **Pages** settings.

For a normal project repo, the app is served at `https://<username>.github.io/<repo>/`. The Vite `base` path is set automatically in CI from `GITHUB_REPOSITORY`. For a user/org site repo named `<username>.github.io`, assets use `/` as the base.

To test a subpath build locally: `GITHUB_REPOSITORY=you/rabbit-hole npm run build && npm run preview`.
