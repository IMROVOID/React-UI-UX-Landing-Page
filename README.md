# React UI/UX Landing Page

A modern, responsive, and visually rich landing page for a UI/UX design portfolio. This project is built from the ground up with a modern tech stack including **React, TypeScript, and Vite**, and features a dynamic 3D scene powered by **React Three Fiber**.

### [🚀 View Live Demo 🚀](https://imrovoid.github.io/React-UI-UX-Landing-Page/)

![React UI/UX Landing Page Screenshot](https://raw.githubusercontent.com/IMROVOID/React-UI-UX-Landing-Page/main/public/screenshot.png)

## ✨ Key Features

*   **Stunning 3D Scene:** An animated, gradient-colored 3D cursor that sits on a perspective grid, built with React Three Fiber and Lamina.
*   **Fully Responsive Design:** A fluid layout that adapts seamlessly from large desktops to mobile devices.
*   **Liquid Glass Mobile Menu:** A sleek, semi-transparent side menu on mobile, toggled by a smooth hamburger animation from `hamburger-react`.
*   **Animated Gradient Button:** A custom-built "liquid glass" button with a rotating "comet" gradient border effect created with pure CSS.
*   **Modern Tech Stack:** Built with Vite for lightning-fast development, React for the UI, and TypeScript for robust, type-safe code.
*   **Optimized for GitHub Pages:** Configured with `HashRouter` and a base path to ensure seamless deployment on static hosting.

## 📁 Project Structure

The project is organized into a clean and scalable structure to make navigation and modification intuitive.

```
/src
├── assets/         # Static assets like the .glb 3D model
├── components/     # Reusable React components (Header, Buttons, 3D Scenes)
│   ├── styles/     # Component-specific CSS modules
├── hooks/          # Custom React hooks (e.g., useMediaQuery)
├── pages/          # Main page components (e.g., LandingPage)
└── index.css       # Global styles and font imports
```

## ⚙️ How to Run the Project

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/IMROVOID/React-UI-UX-Landing-Page.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd React-UI-UX-Landing-Page
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

## 🔧 How to Modify the Page

This project was designed to be easily customizable. Here’s how you can modify its key parts:

*   **Hero Text & Content:** All text content and the main page layout can be found in `src/pages/LandingPage.tsx`.
*   **Header Navigation:** The header links and structure for both desktop and mobile are located in `src/components/Header.tsx`.
*   **3D Scenes:**
    *   The **3D Cursor** model and its animation logic are in `src/components/CursorScene.tsx`. You can change its colors and animation speed here.
    *   The **3D Grid Background** is in `src/components/GridBackground.tsx`. Its colors and position can be adjusted for both mobile and desktop.
*   **Animated Button:** The "Make your Dream Website" button is a dedicated component in `src/components/AnimatedBorderButton.tsx`. Its complex styling, including the gradient colors and "liquid glass" effect, is controlled in `src/components/styles/AnimatedBorderButton.css`.
*   **Styling & Theming:**
    *   Global styles, fonts, and the text selection color are in `src/index.css`.
    *   Responsive styles and media queries are located at the bottom of the CSS file for each respective component (e.g., `LandingPage.css`, `Header.css`).

## 🛠️ Technologies & Libraries Used

This project leverages several modern libraries and tools to achieve its functionality and appearance.

| Library | Link | Description |
| :--- | :--- | :--- |
| **Vite** | [vitejs.dev](https://vitejs.dev/) | A next-generation frontend tooling that provides a faster and leaner development experience. |
| **React** | [react.dev](https://react.dev/) | The library for web and native user interfaces. |
| **TypeScript** | [typescriptlang.org](https://www.typescriptlang.org/) | A strongly typed programming language that builds on JavaScript. |
| **React Three Fiber** | [docs.pmnd.rs/react-three-fiber](https://docs.pmnd.rs/react-three-fiber) | A React renderer for Three.js, making it easy to create 3D scenes declaratively. |
| **Drei** | [github.com/pmndrs/drei](https://github.com/pmndrs/drei) | A collection of useful helpers and abstractions for React Three Fiber. |
| **Lamina** | [github.com/pmndrs/lamina](https://github.com/pmndrs/lamina) | A library for creating layered materials in Three.js. |
| **Hamburger React** | [hamburger-react.netlify.app](https://hamburger-react.netlify.app/) | Animated hamburger menu icons for React. |
| **gh-pages** | [github.com/tschaub/gh-pages](https://github.com/tschaub/gh-pages) | A command-line utility to publish files to a `gh-pages` branch on GitHub. |

## 🚀 Deployment to GitHub Pages

This repository is pre-configured for easy deployment to GitHub Pages.

1.  **Set `homepage` and `base`:**
    *   In `package.json`, the `"homepage"` field is set to your GitHub Pages URL.
    *   In `vite.config.ts`, the `base` property is set to your repository name.
2.  **Run the deploy script:**
    This single command will build your project and push the `dist` folder to the `gh-pages` branch on your repository.
    ```sh
    npm run deploy
    ```
3.  **Configure GitHub Settings:**
    *   In your repository settings, navigate to the **Pages** tab.
    *   Set the **Source** to **"Deploy from a branch"**.
    *   Set the **Branch** to **`gh-pages`** with the `/root` folder.
    *   Save your changes. Your site will be live within a few minutes.

---

## 📜 License & Copyright

This project is completely open source and available to the public. You are free to use, modify, distribute, and fork this software for any purpose. No attribution is required, but it is appreciated.

---

## © About the Developer

This application was developed and is maintained by **Roham Andarzgou**.

I'm a passionate professional from Iran specializing in Graphic Design, Web Development, and cross-platform app development with Dart & Flutter. I thrive on turning innovative ideas into reality, whether it's a stunning visual, a responsive website, or a polished desktop app like this one. I also develop immersive games using Unreal Engine.

*   **Website:** [rovoid.ir](https://rovoid.ir)
*   **GitHub:** [IMROVOID](https://github.com/IMROVOID)
*   **LinkedIn:** [Roham Andarzgou](https://www.linkedin.com/in/roham-andarzgouu)

### 🙏 Support This Project

If you find this application useful, please consider a donation. As I am based in Iran, cryptocurrency is the only way I can receive support. Thank you!

| Cryptocurrency | Address |
| :--- | :--- |
| **Bitcoin** (BTC) | `bc1qd35yqx3xt28dy6fd87xzd62cj7ch35p68ep3p8` |
| **Ethereum** (ETH) | `0xA39Dfd80309e881cF1464dDb00cF0a17bF0322e3` |
| **USDT** (TRC20) | `THMe6FdXkA2Pw45yKaXBHRnkX3fjyKCzfy` |
| **Solana** (SOL) | `9QZHMTN4Pu6BCxiN2yABEcR3P4sXtBjkog9GXNxWbav1` |
| **TON** | `UQCp0OawnofpZTNZk-69wlqIx_wQpzKBgDpxY2JK5iynh3mC` |
