This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

RegisterKaro - Next.js Project
This project is a Next.js application built using create-next-app. It's designed for displaying company registration information with logos and dynamic data fetched from a database.

Features :

Display a list of companies registered with their logos.
Responsive design optimized for different screen sizes.
Fetch company data dynamically from a PostgreSQL database.
Optimized image loading using Next.js Image component.
Detailed view of selected company with information like tagline, headquarters, locations, directors, and more.


## Getting Started

First, run the development server:

1. Clone the repository
To get started, clone this repository to your local machine:

bash
Copy code
git clone https://github.com/OmkarTidke8080/registerKaroAssessment.git

2. Install dependencies
Install the required dependencies using either npm, yarn, or pnpm:

3. Set up PostgreSQL Database
Make sure to set up and configure your PostgreSQL database to work with the application. Update the connection details in utils/postgres.js to match your local or cloud database setup.

4. Run the Development Server
Once the dependencies are installed and your database is set up, run the development server:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev

5. Open in Browser
Navigate to http://localhost:3000 in your browser to view the app. The page will auto-update as you modify the code.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Project Structure
app/: Contains the core pages and components, including CompanyList and page.tsx for displaying the home page and company details.
public/: Contains static files like images, including company logos.
utils/: Contains utility functions, including the PostgreSQL database connection setup (postgres.js).

6. Vercel Deployed Link
