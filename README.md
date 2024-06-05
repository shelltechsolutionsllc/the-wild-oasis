# The Wild Oasis

**This Project is meant to show case development concepts, good practices, etc. _It's not being used by real users_**

The Wild Oasis is a comprehensive web application designed to manage hotel operations efficiently. It allows hotel employees to handle bookings, manage cabins, and oversee guest information seamlessly.

You can check this beautiful application on production right here! Enjoy!
👉 [The Wild Oasis](https://the-wild-oasis-by-sts-llc.vercel.app)

## Table of Contents

- [Key Features](#key-features)

- [Technologies and Frameworks](#technologies-and-frameworks)

- [Design Patterns](#design-patterns)

- [Installation](#installation)

- [Usage](#usage)

## Key Features

**User Authentication and Profile Management**

- Secure login for hotel employees.

- Profile management including avatar upload and password changes.

**Cabin Management**

- CRUD operations for cabin details including photo uploads.

**Booking Management**

- Manage bookings with statuses, guest data, and payment confirmations.

- Filter bookings by status (unconfirmed, checked in, checked out).

**Dashboard**

- Displays key metrics such as recent bookings, sales, check-ins, and occupancy rates.

- Provides data visualizations for sales and stay durations.

**Dark Mode**

- Enhances user experience in low-light environments.

## Technologies and Frameworks

### Frontend

- **React**: For building the user interface.

- **JavaScript**: Core programming language used in the project.

- **Tailwind CSS**: Utility-first CSS framework for styling.

- **React Query**: For data fetching and caching.

- **React Router**: For client-side routing.

- **React Hook Form**: For managing forms and validation.

- **Styled Components**: For styling React components.

- **Recharts**: For creating charts and data visualizations.

- **React Hot Toast**: For notifications.

### Backend

- **Supabase**: Backend as a Service providing authentication and other backend services.

### Build Tools

- **Vite**: A build tool for faster development.

- **ESLint**: For linting and maintaining code quality.

- **Prettier**: For code formatting.

### Deployment

- **Vercel**: For hosting and deployment.

## Design Patterns

- **Higher-Order Components (HOCs)**: For reusing component logic.

- **Compound Component Pattern**: To create flexible and reusable components.

- **Context API**: For state management across the application.

- **Custom Hooks**: For encapsulating reusable logic.

- **Module-based Architecture**: Organizing code into modules for better maintainability.

## Installation

1.  **Clone the repository:**

```bash
git clone https://github.com/shelltechsolutionsllc/the-wild-oasis.git

cd the-wild-oasis
```

2.  **Install dependencies:**

```bash
npm install
```

3.  **Set up environment variables:** Create a `.env` file in the root directory and add your environment variables (e.g., Supabase credentials).

4.  **Run the development server:**

```bash
npm run dev
```

## Usage

To start using the application, navigate to `http://localhost:3000` in your web browser. Sign up or log in as a hotel employee to access the full functionality of the app.
