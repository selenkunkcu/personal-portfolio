# Personal Portfolio

A clean, modern personal portfolio built with React and Vite. It’s a single‑page site with smooth section transitions, active section highlighting, and a responsive UI that stays sharp across screen sizes.

## What’s Inside

- One‑page layout: Home, About, Experience, Skills, Projects, Contact.
- Active section tracking with `IntersectionObserver`.
- Top nav on desktop, bottom nav on mobile.
- Skills section with an horizontal carousel for services.
- Tailwind CSS for a fast, consistent design system.

## Stack

- React + Vite
- Tailwind CSS
- React Icons

## Getting Started

You’ll need Node.js installed.

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Project Structure

Key files and folders:

- `src/App.jsx`: Page layout and section order.
- `src/data/content.js`: Navigation, experience, skills, projects data.
- `src/components/`: Section components and shared UI pieces.
- `src/hooks/useActiveSection.js`: Active section logic.
- `src/assets/`: Images and static assets.

## Updating Content

Edit your info in:

- `src/data/content.js`

That’s where projects, experience, and skills live. Put any images in `src/assets/` and reference them in your components.

## License

This project was created for personal use. Add or update a license here if needed.
