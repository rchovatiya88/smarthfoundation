Strategic Plan for Samarthfoundation NGO Website
I'll create a comprehensive plan for an AI agent to build this website. Let me break this down into clear, actionable phases.
Project Overview
Organization: Samarthfoundation
Leader: Siddhrajsinh Zala
Mission: Helping homeless individuals with food and shelter in Ahmedabad
Primary Color: Green theme
Design Reference: Warm, compassionate nonprofit design with wavy sections

Phase 1: Planning & Architecture
1.1 Technical Stack Recommendation

Frontend: React.js or Next.js for modern, responsive UI
Backend: Node.js with Express or Firebase for rapid development
Database: PostgreSQL or MongoDB for rescue records
Authentication: Firebase Auth or Auth0 for admin panel
Payment Gateway: Razorpay (India-specific) or Stripe
PDF Generation: jsPDF or PDFKit
Hosting: Vercel/Netlify (frontend) + Railway/Render (backend)

1.2 Site Structure
Homepage
├── Hero Section (Landing & Helping Hand)
├── About Us (Siddhrajsinh Zala's story)
├── Our Mission
├── Live Rescue Tracker
├── Impact Statistics
├── How We Help (Services sections)
├── Success Stories
├── Donate Section
├── Contact Form
└── Footer

Admin Dashboard
├── Login/Authentication
├── Add New Rescue
├── View All Rescues
├── Edit/Update Records
├── Generate Reports
├── Donation Management
└── Analytics

Public Pages
├── Rescue Stories (filterable/searchable)
├── Impact Map
├── Donation Page
└── PDF Reports

Phase 2: Core Features Specification
2.1 Rescue Management System
Database Schema for Rescued Individuals:
javascript{
  rescueId: "unique-id",
  personalInfo: {
    name: "string (optional/anonymous)",
    age: "number",
    gender: "string",
    photo: "url (with consent)"
  },
  rescueDetails: {
    date: "timestamp",
    location: "address in Ahmedabad",
    condition: "description",
    immediateNeeds: ["food", "shelter", "medical"]
  },
  assistance: {
    foodProvided: "details",
    shelterArranged: "details",
    medicalCare: "details",
    duration: "time period"
  },
  status: "active/completed",
  followUp: "notes",
  createdAt: "timestamp",
  updatedBy: "admin-id"
}
2.2 Live Tracking Dashboard
Public-Facing Features:

Real-time counter: "Currently helping X individuals"
Recent rescues (last 7 days) with privacy-conscious details
Monthly/yearly statistics
Interactive map of Ahmedabad showing general areas served
Success metrics: meals served, shelter nights provided

Admin Features:

Quick entry form for new rescues
Bulk import for historical data
Photo upload with compression
Status updates (in-progress → completed)

2.3 PDF Generation System
Individual PDF Report Should Include:

Samarthfoundation header with logo
Rescue ID and date
Individual's details (anonymized if needed)
Services provided timeline
Photos (before/after with consent)
Follow-up notes
Footer with foundation contact

Batch Reports:

Monthly summary of all rescues
Annual impact report
Donor reports showing impact

2.4 Donation System
Features Needed:

Multiple donation amounts (₹500, ₹1000, ₹5000, custom)
Recurring donation option
Purpose selection: "Food", "Shelter", "Medical", "General"
Razorpay integration for Indian payments
UPI, Card, Net Banking, Wallet options
Automated receipt generation (80G tax exemption if registered)
Donor wall (optional public recognition)
Progress bars for campaigns


Phase 3: Design Specifications
3.1 Color Scheme (Green Theme)
cssPrimary Green: #2d7a4f (deep green)
Secondary Green: #52b788 (vibrant green)
Accent Orange: #f77f00 (call-to-action)
Dark Background: #1b4332 (for contrast sections)
Light Background: #f8f9fa
Text: #212529 (dark gray)
```

### 3.2 Page-by-Page Design

**Homepage Hero:**
- Full-width hero with wavy bottom border (green)
- Image: Siddhrajsinh helping someone
- Headline: "Lending a Helping Hand" / "समर्थ से सेवा"
- Subtext: Mission statement
- CTA: "Donate Now" + "Our Impact"

**About Section:**
- Left: Photo of Siddhrajsinh with rescued individuals
- Right: Story, mission, vision
- Instagram feed integration
- Wavy section dividers (alternating green/white)

**Live Impact Dashboard:**
- Animated counters
- "Currently Helping: [X] Individuals"
- "Total Rescued: [X]"
- "Meals Served: [X]"
- Recent rescue cards (last 3-5)

**How We Help (Services):**
- Three circular icons with green backgrounds
- "Rescue & Outreach", "Food & Nutrition", "Shelter & Support"
- Brief descriptions

**Success Stories:**
- Grid of rescue cards
- Filter by: Date, Type of help, Location
- "Load More" pagination
- Click to view full PDF report

**Donation Section:**
- Prominent green CTA button
- Impact messaging: "₹500 provides meals for 10 people"
- Secure payment badges
- Testimonials from donors

**Contact Form:**
- Name, Email, Phone, Message
- "Volunteer", "Donate", "Report Someone in Need" options
- WhatsApp quick contact button

---

## Phase 4: Admin Panel Detailed Spec

### 4.1 Authentication
- Email/password login
- Role-based access (Admin, Volunteer, Viewer)
- Password reset functionality

### 4.2 Dashboard Home
- Today's rescues
- Pending updates
- Quick stats
- Donation summary

### 4.3 Add New Rescue Flow
```
Step 1: Basic Information
- Date & time of rescue
- Location (address + map pin)
- How discovered

Step 2: Individual Details
- Name (optional)
- Approximate age
- Gender
- Physical condition
- Immediate needs

Step 3: Assistance Provided
- Food details
- Shelter arrangement
- Medical care
- Other services

Step 4: Documentation
- Photo upload (with consent checkbox)
- Additional notes
- Follow-up plan

Step 5: Review & Submit
- Preview PDF
- Save to database
- Option to print immediately
```

### 4.4 View All Rescues
- Sortable table: Date, Name, Location, Status
- Search functionality
- Filter by date range, status, location
- Bulk export to Excel/CSV
- Quick actions: Edit, View PDF, Delete

### 4.5 PDF Export Options
- Single rescue PDF
- Date range report
- Monthly summary
- Annual impact report
- Custom filtered reports

---

## Phase 5: Implementation Roadmap for AI Agent

### Sprint 1: Foundation (Week 1)
1. Set up project structure (Next.js + Node.js)
2. Initialize database with schema
3. Create admin authentication system
4. Build basic admin dashboard layout

### Sprint 2: Core Functionality (Week 2)
1. Implement rescue data entry form
2. Create database CRUD operations
3. Build rescue listing page (admin)
4. Add search and filter functionality

### Sprint 3: Public Website (Week 3)
1. Design and implement homepage
2. Create about section with Instagram integration
3. Build live stats dashboard
4. Implement rescue stories public page

### Sprint 4: PDF & Advanced Features (Week 4)
1. Implement PDF generation for individual rescues
2. Create batch PDF reports
3. Add photo upload and compression
4. Build impact analytics page

### Sprint 5: Donation Integration (Week 5)
1. Integrate Razorpay payment gateway
2. Create donation page with multiple options
3. Implement receipt generation
4. Add donor management system

### Sprint 6: Polish & Deploy (Week 6)
1. Responsive design refinement
2. Performance optimization
3. SEO implementation
4. Testing and bug fixes
5. Deployment to production

---

## Phase 6: Detailed Prompts for AI Agent

### Prompt 1: Project Setup
```
Create a Next.js project for "Samarthfoundation" NGO website with:
- TypeScript for type safety
- Tailwind CSS for styling (green theme: primary #2d7a4f, secondary #52b788)
- Firebase for authentication and database
- Folder structure: /components, /pages, /lib, /styles, /public
- Environment variables setup for Firebase and Razorpay
- Basic layout component with header and footer
```

### Prompt 2: Database Schema
```
Design a Firebase Firestore database structure for an NGO rescue tracking system with collections:

1. "rescues" collection with fields:
   - rescueId, date, location, personalInfo (name, age, gender),
   - assistanceProvided (food, shelter, medical), status, photos, notes

2. "donations" collection with fields:
   - donorName, amount, date, purpose, transactionId, receiptUrl

3. "users" collection for admin access control

Include security rules for admin-only write access to rescues.
```

### Prompt 3: Homepage Hero Section
```
Create a React component for the hero section with:
- Full-width background image (person helping homeless)
- Wavy bottom border using SVG (green color #2d7a4f)
- Centered text: "Lending a Helping Hand to the Homeless"
- Subheading about mission in Ahmedabad
- Two CTA buttons: "Donate Now" (orange #f77f00), "See Our Impact" (green)
- Responsive design (mobile-first)
- Smooth scroll animation on load
```

### Prompt 4: Admin Rescue Entry Form
```
Build a multi-step form component for adding rescue records:

Step 1: Date/time picker, location input with Google Maps autocomplete
Step 2: Personal details (name-optional, age, gender dropdowns)
Step 3: Checkboxes for assistance type, text areas for details
Step 4: Image upload with preview, additional notes textarea
Step 5: Review summary with "Submit" and "Generate PDF" buttons

Include form validation, loading states, and success/error notifications.
Save data to Firebase on submit.
```

### Prompt 5: Live Impact Dashboard
```
Create a public-facing impact dashboard component showing:
- Animated counter for "Currently Helping" (real-time from database)
- Total rescues counter (all-time)
- Meals served, shelter nights provided counters
- Recent rescues section: 5 most recent cards with photo, date, brief description
- "View All Stories" button linking to full archive
- Use Intersection Observer for count-up animation when scrolling into view
- Fetch data from Firebase and update every 30 seconds
```

### Prompt 6: PDF Generation System
```
Implement a PDF generation feature using jsPDF that:
- Takes a rescue record ID as input
- Fetches data from Firebase
- Generates a formatted PDF with:
  * Samarthfoundation header with logo
  * Rescue details in organized sections
  * Embedded photos (if available)
  * Footer with contact information
- Provides "Download" and "Print" options
- Generates filename: "Rescue_[ID]_[Date].pdf"
- Include function to generate monthly summary PDFs with all rescues
```

### Prompt 7: Donation Page with Razorpay
```
Build a donation page component with:
- Preset amounts (₹500, ₹1000, ₹5000) + custom input
- Purpose dropdown (Food, Shelter, Medical, General)
- Donor information form (name, email, phone, PAN for 80G)
- Razorpay payment integration
- Success page with downloadable receipt
- Option for recurring monthly donations
- Impact messaging: "₹500 = 10 meals"
- Use green theme for primary buttons
```

### Prompt 8: Admin Dashboard
```
Create an admin dashboard with:
- Left sidebar navigation: Dashboard, Add Rescue, All Rescues, Donations, Reports, Settings
- Top bar with user profile and logout
- Dashboard home showing:
  * Today's rescues count
  * This month's stats
  * Recent donation list
  * Quick action buttons
- Protected route requiring authentication
- Responsive layout for mobile admin access
```

### Prompt 9: Rescue Stories Public Page
```
Design a public rescue stories page with:
- Masonry grid layout of rescue cards
- Each card: photo, date, location (general), brief story, "Read More"
- Filters: Date range, type of assistance, location area
- Search by keyword
- Infinite scroll or "Load More" pagination
- Privacy-conscious: no full names without consent
- Share buttons for social media
- Link to donate with relevant context
```

### Prompt 10: Historical Data Import
```
Create an admin tool to bulk import historical rescue data:
- CSV upload functionality
- Column mapping interface (CSV headers to database fields)
- Data validation and error checking
- Preview before final import
- Progress bar during import
- Summary report after completion
- Option to download import log
- Handles missing data gracefully with defaults

Phase 7: Privacy & Ethics Considerations
Data Protection

Obtain written consent before photographing individuals
Anonymize sensitive personal information
Secure admin panel with strong authentication
HTTPS encryption for all data transmission
Regular security audits

Dignity-Centered Design

Avoid "poverty porn" imagery
Focus on empowerment and success stories
Use people-first language
Highlight individual agency and resilience
Provide option for complete anonymity

Legal Compliance

Register for 80G tax exemption (if not already done)
FCRA compliance for foreign donations (if applicable)
Data privacy policy compliant with Indian IT Act
Clear terms of use and privacy policy
Cookie consent banner