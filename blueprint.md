
# Accelerator Program App Blueprint

## Overview

A visually appealing and modern web application for an accelerator program. The application will showcase the program, mentors, and provide an application form for startups.

## Design and Style

*   **Theme:** Dark, modern, and professional.
*   **Fonts:** "Inter" for body text, "Poppins" for headings.
*   **Colors:** A vibrant palette with a dark background, and bright accent colors for interactive elements.
*   **Layout:** Clean, spacious, and responsive.
*   **Components:** Reusable components for cards, buttons, and other UI elements.
*   **Iconography:** Use of modern icons to enhance user understanding.

## Features

*   **Navigation:** A clear and intuitive navigation bar.
*   **Hero Section:** An engaging hero section with a strong call to action.
*   **About Us:** A section describing the accelerator program.
*   **Programs:** A section detailing the different programs offered.
*   **Mentors:** A section showcasing the program's mentors with profile cards.
*   **Application Form:** A form for startups to apply to the program.
*   **Footer:** A footer with relevant links and social media icons.

## Plan

1.  **Styling:** Update `src/app/globals.css` with a new dark theme, fonts, and modern styling.
2.  **Layout:** Modify `src/app/layout.tsx` to include the new theme and a consistent layout structure.
3.  **Components:** Create the following reusable components:
    *   `src/components/Header.tsx`: The main navigation bar.
    *   `src/components/Footer.tsx`: The application footer.
    *   `src/components/Card.tsx`: A card component for displaying mentors and programs.
    *   `src/components/Button.tsx`: A reusable button component.
4.  **Home Page:** Build the main page (`src/app/page.tsx`) with the following sections:
    *   Hero Section
    *   About Us
    *   Programs
    *   Mentors
    *   Application Form
5.  **Assets:** Add necessary images and icons to the `public` directory.
6.  **Linting:** Run `npm run lint -- --fix` to ensure code quality.
