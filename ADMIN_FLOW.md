# Admin Flow Documentation

This document outlines the admin flow structure and features for the GradeCentral portal.

## Admin Structure

### Folder Organization

```
features/admin/                 # Admin features and components
├── components/                 # Shared admin components
│   ├── layout/                # Layout components
│   │   └── AdminHeader.tsx    # Main admin navigation header
│   └── ui/                    # Reusable UI components
│       ├── StatsCard.tsx      # Statistics display cards
│       └── ActivityItem.tsx   # Activity list items
└── features/                  # Individual admin features (to be added)

app/admin/                     # Admin routing structure
├── page.tsx                   # Admin root (redirects to dashboard)
└── dashboard/                 # Admin dashboard
    └── page.tsx              # Dashboard page
```

## Current Features

### ✅ Admin Dashboard
- **Location**: `app/admin/dashboard/page.tsx`
- **URL**: `http://localhost:3001/admin/dashboard`
- **Features**:
  - Academix header with navigation
  - Statistics cards (Total Courses, Instructors, Students)
  - Recent activities feed
  - Responsive design

### ✅ Admin Courses Management
- **Location**: `app/admin/courses/page.tsx`
- **URL**: `http://localhost:3001/admin/courses`
- **Features**:
  - Academix header with active navigation state
  - Courses table with Course Name, Code, Instructor columns
  - Edit and Delete actions for each course
  - Add Course button (routes to add course page)
  - Sample course data matching the design

### ✅ Add Course Page
- **Location**: `app/admin/courses/add/page.tsx`
- **URL**: `http://localhost:3001/admin/courses/add`
- **Features**:
  - Academix header with navigation
  - Add Course form with all required fields
  - Course Name, Course Code, Instructor dropdown, Course Description
  - Cancel and Save buttons
  - Form validation and routing back to courses list

### ✅ Admin Header Component
- **Location**: `features/admin/components/layout/AdminHeader.tsx`
- **Features**:
  - Academix branding
  - Navigation menu (Dashboard, Courses, Students, Instructors, Reports)
  - User profile avatar
  - Active navigation state highlighting
  - Two-way routing between pages
  - Hover effects and active states

### ✅ Reusable UI Components
- **StatsCard**: Display statistics with title and value
- **ActivityItem**: Display activity items with icons and timestamps
- **CoursesTable**: Display courses in a table format with actions
- **FormField**: Reusable form field component (text, textarea, select)

## Design Features Implemented

### Dashboard Page:
- ✅ "GradeCentral" header with navigation
- ✅ "Dashboard" page title
- ✅ Three statistics cards:
  - Total Courses: 120
  - Total Instructors: 45
  - Total Students: 1500
- ✅ "Recent Activities" section with:
  - New course added (2 hours ago)
  - Instructor assignment (4 hours ago)
  - Student enrollment (6 hours ago)
- ✅ Clean gray background for stats cards
- ✅ Proper spacing and typography
- ✅ Responsive grid layout

### Navigation:
- ✅ Dashboard (active)
- ✅ Courses
- ✅ Instructors
- ✅ Students
- ✅ Reports
- ✅ User profile avatar

### Courses Page:
- ✅ "Academix" header with navigation (Courses tab active)
- ✅ "Courses" page title with "Add Course" button
- ✅ Courses table with proper columns:
  - Course Name, Course Code, Instructor, Actions
- ✅ Sample course data:
  - Introduction to Psychology (PSY101) - Dr. Emily Carter
  - Calculus I (MATH101) - Dr. Robert Harris
  - World History (HIST101) - Dr. Olivia Bennett
  - Computer Science Fundamentals (CS101) - Dr. Ethan Clark
  - Organic Chemistry (CHEM201) - Dr. Sophia Turner
- ✅ Edit | Delete actions for each course
- ✅ Clean table design with hover effects
- ✅ Responsive layout

### Add Course Page:
- ✅ "Academix" header with navigation
- ✅ "Add Course" page title
- ✅ Form fields matching the design:
  - Course Name (text input with placeholder "e.g., IntroductiontoProgramming")
  - Course Code (text input with placeholder "e.g., CS101")
  - Instructor (dropdown with "Select" placeholder)
  - Course Description (textarea)
- ✅ Instructor dropdown with sample instructors
- ✅ Cancel and Save buttons (Cancel = gray, Save = blue)
- ✅ Form validation and required field indicators
- ✅ Routing: Cancel/Save returns to courses list
- ✅ Clean form layout with proper spacing

## Access URLs

- **Admin Root**: `http://localhost:3001/admin` (redirects to dashboard)
- **Admin Dashboard**: `http://localhost:3001/admin/dashboard`
- **Admin Courses**: `http://localhost:3001/admin/courses`
- **Add Course**: `http://localhost:3001/admin/courses/add`

## Future Admin Features

The admin structure is designed to accommodate additional features:

### Planned Features:
- **Courses Management**: `/admin/courses`
- **Instructors Management**: `/admin/instructors`
- **Students Management**: `/admin/students`
- **Reports & Analytics**: `/admin/reports`
- **Settings**: `/admin/settings`
- **User Management**: `/admin/users`

### Component Structure:
Each new admin feature will follow the pattern:
```
app/admin/[feature]/page.tsx           # Main feature page
features/admin/features/[feature]/     # Feature-specific components
├── components/                        # Feature components
├── hooks/                            # Feature hooks
└── types.ts                          # Feature types
```

## Technical Details

### Technologies Used:
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Components** for modularity

### Design Principles:
- **Modular**: Reusable components in features folder
- **Scalable**: Easy to add new admin features
- **Consistent**: Shared design system
- **Responsive**: Mobile-friendly interface
- **Accessible**: Proper semantic HTML and ARIA labels

## Usage

To access the admin dashboard:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3001/admin/dashboard`

3. The admin interface will load with the dashboard view

## Next Steps

Ready to implement additional admin features based on provided designs:
- Each new feature will be added to the `app/admin/` routing structure
- Shared components will be placed in `features/admin/components/`
- Feature-specific components will be organized in `features/admin/features/[feature-name]/`
