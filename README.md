# MySQL Portfolio with Next.js

This project is a portfolio website built with Next.js and MySQL. It includes features such as user authentication, a blog, and a portfolio showcase.

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following environment variables to the `.env.local` file:
     ```
     DATABASE_URL=mysql://user:password@localhost:3306/database
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your_secret
     ```

4. Run database migrations:
   ```sh
   npx prisma migrate dev
   ```

## Running the Project

1. Start the development server:
   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. You should see the portfolio website running locally.
