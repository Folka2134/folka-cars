
# Folka Cars

Folka Cars is an online platform where users can rent cars for up to 7 days. The project offers CRUD (Create, Read, Update, Delete) functionality, allowing users to browse available cars, place rental orders, and manage their bookings. It integrates Stripe for payment processing, ensuring secure and seamless transactions for car rentals.
## Demo
https://folka-cars.vercel.app/
## Usage/Examples

Purchase items through stripe.

Email: test@gmail.com\
Card Number: 4242 4242 4242 4242\
Exp Date: 02 / 42\
CVC: 424\
Country or Region: United Kingdom\
Postcode: 424242


![App Screenshot](https://raw.githubusercontent.com/Folka2134/folka-market/main/public/assets/images/stripe_test.jpg)


## Features

- CRUD functionality
- Purchase through stripe
- Retrieve orders from Mongodb


## Run Locally

Clone the project

```bash
  git clone https://github.com/Folka2134/folka-cars
```

Go to the project directory

```bash
  cd folka-cars
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Create .env.local

```
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=[NEXT_PUBLIC_CLERK_KEY]
CLERK_SECRET_KEY=[CLERK_SECRET_KEY]

WEBHOOK_SECRET=[WEBHOOK_SECRET]

MONGODB_URI=[MONGODB_URI]

NEXT_PUBLIC_RAPID_API_KEY=[NEXT_PUBLIC_RAPID_API_KEY]

NEXT_PUBLIC_IMAGIN_API_KEY=[NEXT_PUBLIC_IMAGIN_API_KEY]

NEXT_PUBLIC_STRIPE_PUBLIC_KEY=[STRIPE_PUBLIC_KEY]
STRIPE_SECRET_KEY=[STRIPE_SECRET_KEY]

NEXT_PUBLIC_SERVER_URL=[NEXT_PUBLIC_SERVER_URL]
```
