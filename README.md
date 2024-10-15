# URL Shortener

This project is a simple URL shortener application built with Next.js and PostgreSQL.

## Features

- Shorten long URLs to easily shareable short links
- Redirect users from short links to original long URLs
- PostgreSQL database for storing URL mappings

## Prerequisites

- Node.js (v14 or later)
- Git

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. Copy the `.env.sample` file to `.env.local` and fill in the required environment variables:
   ```
   cp .env.sample .env.local
   ```
   Make sure to set the `NEXT_PUBLIC_BASE_URL` to your local development URL (e.g., `http://localhost:3000`).

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Database Management

- PostgreSQL is running on port 54320

## Deployment

To deploy this application, make sure to update the `NEXT_PUBLIC_BASE_URL` in your production environment to match your domain.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
