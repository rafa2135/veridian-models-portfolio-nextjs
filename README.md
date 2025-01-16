# Veridian Models - Portfolio Website (Work in Progress)

This repository contains the code for a test/portfolio website for a fictional modeling agency called Veridian Models. It's a work in progress and showcases basic website structure, responsive design, and some basic styling.

## Technologies Used

- **Next.js:** A React framework for building server-side rendered and statically generated web applications.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Project Structure

The project is structured as a standard Next.js application:

- `app/`: Contains the application's pages and components.
  - `components/`: Reusable React components.
    - `About.js`: The "About Us" section.
    - `Card.js`: A reusable card component for displaying images.
    - `Contac.js`: (Likely intended for a Contact section, but currently empty/missing).
    - `Footer.js`: The website footer.
    - `Header.js`: The website header, including the logo and navigation.
    - `Hero.js`: The hero section with a large background image and title.
    - `Logo.js`: The website logo component.
    - `Models.js`: (Likely intended for a Models section, but currently empty/missing).
    - `Nav.js`: The navigation component with mobile and desktop versions.
  - `globals.css`: Global CSS styles.
  - `layout.js`: The root layout component that wraps all pages.
  - `page.js`: The home page component.
- `public/`: Static assets such as images (logo.png, hero.jpg, menu.png).

## Key Features (Current)

- **Reusable Card Component:** The `Card` component allows for consistent display of images across the site.
- **Responsive Design:** The layout adapts to different screen sizes using Tailwind CSS's responsive modifiers.
- **Navigation:** A basic navigation menu with mobile and desktop versions. The mobile menu uses a state-based approach for showing/hiding on click.
- **Hero Section:** A visually appealing hero section with a large background image and text overlay.
- **About Section:** A basic "About Us" section with placeholder text.
- **Font Integration:** Uses Google Fonts (Montserrat Alternates) for consistent typography.
- **Image Optimization:** Uses Next.js's `Image` component for optimized image loading.

## To Run Locally

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/](https://github.com/)[your-username]/[your-repo-name].git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd [your-repo-name]
    ```

3.  **Install dependencies:**

    ```bash
    npm install or yarn install or pnpm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev or yarn dev or pnpm dev
    ```

5.  **Open your browser and visit:** `http://localhost:3000`

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

(Add a license if applicable, e.g., MIT License)
