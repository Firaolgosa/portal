# Authentication Pages

This project now includes login and forgot password pages based on the Grade Central and EduPortal designs:

## Available Pages

### 1. Standard Login Page
- **Location**: `app/login/page.tsx`
- **URL**: `http://localhost:3001/login`
- **Description**: A standard Next.js route for the login page

### 2. Auth Slot Login Page
- **Location**: `app/@auth/page.tsx`
- **URL**: Accessible as a parallel route/slot (requires layout configuration)
- **Description**: Login page in the @auth folder for parallel routing

### 3. Forgot Password Page
- **Location**: `app/forgot-password/page.tsx`
- **URL**: `http://localhost:3001/forgot-password`
- **Description**: Password reset page accessible from login pages

### 4. Auth Slot Forgot Password Page
- **Location**: `app/@auth/forgot-password/page.tsx`
- **URL**: Accessible as a parallel route/slot (requires layout configuration)
- **Description**: Forgot password page in the @auth folder for parallel routing

### 5. First-Time Password Change Page
- **Location**: `app/first-time-password-change/page.tsx`
- **URL**: `http://localhost:3001/first-time-password-change`
- **Description**: Password change page for users with temporary passwords (Academix design)

## Features

### Login Pages Include:
- ✅ "Grade Central" header with dropdown icon
- ✅ "Welcome back" title
- ✅ Username input field (pre-filled with "oriD")
- ✅ Password input field
- ✅ "Forgot password?" link (integrated with forgot password page)
- ✅ Blue "Login" button
- ✅ Responsive design
- ✅ Accessibility features (screen reader labels)
- ✅ Form validation
- ✅ Hover and focus states

### Forgot Password Pages Include:
- ✅ "EduPortal" header with dropdown icon
- ✅ "Forgot your password?" title
- ✅ Descriptive instructions text
- ✅ Email or Username input field
- ✅ Blue "Submit" button
- ✅ "Remember your password? Sign in" link (back to login)
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Form validation
- ✅ Hover and focus states

### First-Time Password Change Page Includes:
- ✅ "Academix" header with full navigation (Dashboard, Courses, Grades, Attendance, Messages)
- ✅ User profile avatar in header
- ✅ "Change Your Password" title with security message
- ✅ Temporary Password input field
- ✅ New Password input field
- ✅ Confirm New Password input field
- ✅ Password requirements display
- ✅ Real-time password validation
- ✅ Error message display
- ✅ Success message with countdown
- ✅ Automatic redirect to login page after success
- ✅ Manual "Go to Login Now" button
- ✅ Responsive design and accessibility features

## Design Details

The login pages match the provided design with:
- Clean white background
- Centered form layout
- Proper spacing and typography
- Blue accent color for the login button
- Gray color scheme for text and borders
- Rounded input fields and button

## Usage

To access the authentication pages, start the development server:

```bash
npm run dev
```

Then navigate to:
- **Login page**: `http://localhost:3001/login`
- **Forgot password page**: `http://localhost:3001/forgot-password`
- **First-time password change**: `http://localhost:3001/first-time-password-change`
- For @auth slots: Configure parallel routing in your layout

## Navigation Flow

1. **Login Page** → Click "Forgot password?" → **Forgot Password Page**
2. **Forgot Password Page** → Click "Remember your password? Sign in" → **Login Page**
3. **First-Time Password Change** → After successful change → **Automatic redirect to Login Page** (5-second countdown)
4. **First-Time Password Change** → Click "Go to Login Now" → **Immediate redirect to Login Page**

## Customization

You can customize the login pages by:
- Modifying the form validation logic
- Adding authentication integration
- Updating the styling in the Tailwind classes
- Adding additional form fields
- Implementing forgot password functionality
