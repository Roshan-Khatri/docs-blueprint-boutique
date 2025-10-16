# FoneRoute - Telecommunications Solutions Website

This repository contains the source code for the FoneRoute website, a professional telecommunications solutions provider. The frontend is built with React, Vite, and Tailwind CSS, and it is integrated with Sanity CMS for content management.

## Technology Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn-ui](https://shadcn.com/ui)
- **Content Management**: [Sanity](https://www.sanity.io/)

## Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_GIT_URL>
    cd <YOUR_PROJECT_NAME>
    ```

2.  **Install dependencies:**
    This project uses `bun` as the package manager.
    ```sh
    bun install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the necessary Sanity environment variables. See `.env.example` for the required variables.

4.  **Run the development server:**
    ```sh
    bun run dev
    ```
    The application will be available at `http://localhost:5173`.

## Sanity Studio

The Sanity Studio for this project is located in the `/studio` directory.

1.  **Navigate to the studio directory:**
    ```sh
    cd studio
    ```

2.  **Install studio dependencies:**
    ```sh
    bun install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the `studio` directory and add your Sanity project ID and dataset. See `studio/.env.example` for details.

4.  **Run the studio:**
    ```sh
    bun run dev
    ```
    The Sanity Studio will be available at `http://localhost:3333`.

## Deployment

This application can be deployed to any modern hosting provider that supports Node.js environments, such as Vercel, Netlify, or AWS Amplify.

### Build Command

To create a production build, run the following command:

```sh
bun run build
```

This will generate a `dist` directory with the optimized static assets for deployment.