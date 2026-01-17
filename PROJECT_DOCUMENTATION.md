# Sarva Samarth Foundation - NGO Website

## Overview
A comprehensive NGO website for Sarva Samarth Foundation to help people in dire need - children, elderly, women, and vulnerable individuals in Ahmedabad, Gujarat.

## Features Implemented

### 1. **Logo & Branding**
- Official SS Foundation logo integrated throughout the site
- Consistent branding with green color scheme (#2d7a4f)
- Social media links (Facebook, Instagram, YouTube) in footer

### 2. **Public Pages**
- **Homepage**: Inclusive messaging, impact statistics, call-to-actions
- **About Us**: Foundation mission and vision
- **Live Impact**: Real-time dashboard showing rescue activities
- **Donate**: Multiple donation options with Razorpay integration (demo mode)
- **Contact**: Contact information and form

### 3. **Admin Panel** (`/admin`)
Comprehensive admin dashboard with the following sections:

#### Dashboard (`/admin/dashboard`)
- Overview statistics (Total Rescues, Active Cases, Donations, Completion Rate)
- Quick navigation cards
- Recent rescues and donations feed

#### Rescue Management
- **List All Rescues** (`/admin/rescues/list`): View all rescue records
- **Add New Rescue** (`/admin/rescues/add`): Comprehensive form with:
  - Location & rescuer information
  - Personal details (Name, Age, Gender, Contact Number)
  - Condition & medical history
  - Medical history notes
  - Immediate needs
  - Assistance provided (Food, Shelter, Medical)
  - Follow-up notes
  - Status tracking
- **PDF Generation**: Download detailed rescue reports

#### Donation Management (`/admin/donations`)
- View all donations
- Statistics (Total donations, monthly breakdown, donor count)
- Donation history with donor details

#### Reports & Analytics (`/admin/reports`)
- Total rescue statistics
- Demographics breakdown (by gender)
- Assistance type distribution
- Monthly performance comparison
- Growth rate calculations

### 4. **Database Schema**
Enhanced Rescue model with new fields:
- `contactNumber`: Contact information
- `medicalHistory`: Medical condition history
- `followUpNotes`: Notes for follow-up actions
- `rescuedBy`: Name of rescuer/volunteer

## Technology Stack
- **Framework**: Next.js 16.1.3 (React 19)
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth (credentials-based)
- **Styling**: TailwindCSS
- **PDF Generation**: jsPDF with autoTable
- **UI Components**: Radix UI
- **Icons**: Lucide React

## Admin Access
**Demo Credentials:**
- Email: `admin@samarth.org`
- Password: Any password (dev mode)

## API Endpoints
- `/api/rescues` - Create and fetch rescue records
- `/api/auth/[...nextauth]` - Authentication

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- Yarn package manager

### Installation
```bash
# Install dependencies
yarn install

# Generate Prisma Client
npx prisma generate

# Start development server
yarn dev
```

The application will be available at `http://localhost:3000`

## Key Features

### Multilingual Support
- **Status**: Not implemented (as per user request to skip)
- Can be added later using next-intl or react-i18next

### Donation Integration
- **Status**: Demo mode (Razorpay placeholder)
- Ready for live API keys integration

### PDF Reports
- Automated rescue report generation
- Includes all rescue details and assistance provided
- Professional formatting with foundation branding

### Responsive Design
- Mobile-friendly interface
- Touch-optimized navigation
- Accessible components

## File Structure
```
/app/
├── app/
│   ├── admin/          # Admin panel pages
│   │   ├── dashboard/
│   │   ├── rescues/
│   │   ├── donations/
│   │   ├── reports/
│   │   └── login/
│   ├── api/            # API routes
│   ├── about/          # Public pages
│   ├── contact/
│   ├── donate/
│   ├── live/
│   └── layout.tsx
├── components/
│   ├── layout/         # Navbar, Footer, AdminSidebar
│   └── ui/             # Reusable UI components
├── lib/
│   ├── actions.ts      # Server actions
│   ├── pdf-generator.ts
│   └── prisma.ts
├── prisma/
│   └── schema.prisma   # Database schema
└── public/
    └── logo.png        # SS Foundation logo
```

## Future Enhancements
- [ ] Add multilanguage support (English, Gujarati, Hindi)
- [ ] Integrate live Razorpay payment gateway
- [ ] Add image upload for rescue records
- [ ] Email notifications for donations
- [ ] Advanced filtering and search in admin panel
- [ ] Export reports to Excel/CSV
- [ ] Volunteer management system
- [ ] SMS notifications for rescue updates

## Support
For any questions or issues, please contact the development team or refer to the admin panel documentation.

---

**Built with ❤️ for Sarva Samarth Foundation**
