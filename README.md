# 📚 StudyNook - Frontend

A modern, responsive Next.js application for booking library study rooms. Built with Next.js 16.2, Hero UI, and better-auth for a seamless user experience.

## 👨‍💻 Developer Information

**Name:** Abdur Rahman Adil  
**GitHub:** [@SyntaxAdil](https://github.com/SyntaxAdil)  
**Batch:** Programming Hero - Batch 13  
**Assignment:** Assignment 09

---

## 🌐 Live Demo

**Live Site:** [https://studynook-bd.vercel.app](https://studynook-bd.vercel.app)  
**GitHub Repository:** [https://github.com/SyntaxAdil/StudyNook-client](https://github.com/SyntaxAdil/StudyNook-client)

---

---

## 📸 Screenshots

### Home Page
![Home Page Banner](/public/screenshots/home-banner.png)
*Hero section with call-to-action and featured rooms*

### All Rooms with Filters
![Rooms Page](/public/screenshots/rooms-page.png)
*Search and filter functionality with beautiful card grid*

### Room Details & Booking
![Room Details](/public/screenshots/room-details.png)
*Complete room information with booking modal*

### My Bookings Dashboard
![My Bookings](/public/screenshots/my-bookings.png)
*User's booking history with cancel option*

### My Listing Dashboard
![My Bookings](/public/screenshots/my-listings.png)
*User's listed study rooms with update and delete management options*

### Dark Mode
![Dark Theme](/public/screenshots/dark-mode.png)
*Beautiful dark theme for comfortable browsing*

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- **Secure Authentication:** Integrated better-auth with email/password and Google OAuth
- **HTTP-only Cookies:** JWT tokens stored securely in cookies for maximum security
- **Protected Routes:** Automatic redirect for unauthorized access
- **Persistent Sessions:** Users remain logged in across page reloads

### 🏠 Room Management
- **Browse Rooms:** View all available study rooms with beautiful card layouts
- **Add Your Room:** List your own study rooms for others to book
- **Edit & Delete:** Full control over your room listings (owner-only)
- **My Listings:** Dedicated dashboard to manage all your rooms

### 📅 Smart Booking System
- **Real-time Conflict Detection:** Prevents double bookings automatically
- **Date & Time Selection:** Intuitive date picker with hourly time slots
- **Cost Calculator:** Automatic total cost calculation based on duration
- **My Bookings:** Track all your current and past bookings
- **Cancel Bookings:** Easy cancellation with confirmation modal

### 🔍 Advanced Search & Filter
- **Search by Name:** Find rooms quickly with instant search
- **Filter by Amenities:** Wi-Fi, Projector, Whiteboard, and more
- **Price Range Filter:** Set minimum and maximum hourly rates
- **Real-time Results:** Filters apply instantly without page reload

### 🎨 Modern UI/UX
- **Hero UI Components:** Beautiful, accessible components from Hero UI v3
- **Dark/Light Theme:** Toggle between themes with next-themes
- **Responsive Design:** Perfect experience on mobile, tablet, and desktop
- **Smooth Animations:** Powered by Framer Motion for delightful interactions
- **Toast Notifications:** Non-intrusive feedback with react-hot-toast

---

## 🛠️ Technology Stack

### Core Technologies
- **Framework:** Next.js 16.2 (App Router)
- **React:** React 19.2.4
- **Language:** JavaScript/JSX
- **Styling:** Tailwind CSS

### UI & Design
- **Component Library:** Hero UI v3.0.5
- **Icons:** React Icons v5.6.0
- **Theme Management:** next-themes v0.4.6
- **Animations:** Framer Motion v12.38.0

### Authentication & Database
- **Auth:** better-auth v1.6.11 with MongoDB adapter
- **Database Driver:** MongoDB v7.2.0
- **Session Management:** HTTP-only cookies with JWT

### User Experience
- **Notifications:** react-hot-toast v2.6.0
- **Form Handling:** Built-in validation
- **State Management:** React Context API

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or Atlas)
- Google OAuth credentials (for social login)

### 1. Clone the Repository
```bash
git clone https://github.com/SyntaxAdil/StudyNook-client.git
cd StudyNook-client
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
StudyNook-client/
├── app/
│   ├── (auth)/
│   │   ├── login/          # Login page
│   │   └── register/       # Registration page
│   ├── rooms/
│   │   ├── [id]/           # Room details page
│   │   └── page.js         # All rooms page
│   ├── add-room/           # Add new room (protected)
│   ├── my-listing/         # User's rooms (protected)
│   ├── my-bookings/        # User's bookings (protected)
│   ├── api/
│   │   └── auth/           # Better-auth API routes
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Footer.jsx          # Footer component
│   ├── RoomCard.jsx        # Room display card
│   └── ...
├── lib/
│   ├── auth.js             # Better-auth configuration
│   └── auth-client.js      # Client-side auth helper
├── public/                 # Static assets
└── tailwind.config.js      # Tailwind configuration
```

---

## 🎯 Key Pages & Features

### 🏠 Home Page (`/`)
- **Hero Banner:** Eye-catching banner with call-to-action
- **Featured Rooms:** Latest 6 rooms displayed in grid layout
- **Two Extra Sections:** Additional engaging content sections
- **Responsive Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile)

### 🏢 All Rooms (`/rooms`)
- **Complete Room Listings:** All available rooms with search & filters
- **Search Bar:** Real-time search by room name
- **Amenity Filters:** Checkbox filters for amenities
- **Price Range Slider:** Min/max hourly rate filters
- **Uniform Cards:** Equal height/width for visual consistency

### 🔍 Room Details (`/rooms/[id]`)
- **Complete Information:** All room details with high-quality images
- **Booking Count Badge:** Shows total confirmed bookings
- **Book Now Button:** Opens booking modal (login required)
- **Owner Controls:** Edit/Delete buttons (visible to owner only)
- **Special Notes Section:** Additional room information

### ➕ Add Room (`/add-room`) - Protected
- **Comprehensive Form:** All room details in one place
- **Image Upload:** Direct image URL input
- **Amenities Selection:** Multiple checkbox options:
  - Whiteboard
  - Projector
  - Wi-Fi
  - Power Outlets
  - Quiet Zone
  - Air Conditioning
- **Validation:** Client-side validation before submission

### 📋 My Listings (`/my-listing`) - Protected
- **Room Management Dashboard:** All your listed rooms
- **Quick Actions:** Edit or delete any room
- **Statistics:** View booking counts per room
- **Empty State:** Friendly message when no rooms listed

### 📅 My Bookings (`/my-bookings`) - Protected
- **Booking History:** All current and past bookings
- **Status Badges:** Visual indicators (confirmed/cancelled)
- **Cancel Option:** Cancel future bookings with confirmation
- **Room Details:** Linked room information with images
- **Date & Time Display:** Clear booking schedule

---

## 🔐 Authentication Flow

### Registration Process
1. User fills registration form (name, email, photo URL, password)
2. Password validation:
   - Minimum 6 characters
   - At least one uppercase letter
   - At least one lowercase letter
3. Account created and stored in MongoDB
4. Success toast shown → Redirect to login

### Login Process
1. User enters email and password (or clicks Google OAuth)
2. Better-auth verifies credentials
3. JWT generated and stored in HTTP-only cookie
4. User redirected to home page or intended route
5. Protected routes become accessible

### Protected Routes
```javascript
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  ...(user
    ? [
        { href: "/add-room", label: "Add Room" },
        { href: "/my-listing", label: "My Listing" },
        { href: "/my-bookings", label: "My Bookings" },
      ]
    : []),
];
```

---

## 🎨 UI Design Highlights

### Design Principles
- ✅ **Unique Design:** Custom layout, not copied from templates
- ✅ **Consistent Typography:** Same heading styles across all pages
- ✅ **Uniform Cards:** Equal height and width in grid layouts
- ✅ **Proper Spacing:** Balanced padding and margins throughout
- ✅ **Modern Icons:** React Icons with latest X logo (not Twitter bird)
- ✅ **Accessibility:** Hero UI components built with a11y in mind

### Responsive Breakpoints
```css
Mobile:  < 768px  (1 column)
Tablet:  768-1024px  (2 columns)
Desktop: > 1024px  (3 columns)
```

### Theme Toggle
- **Dark Mode:** Easy on the eyes for night browsing
- **Light Mode:** Clear and bright for daytime use
- **Persistence:** Theme choice saved in localStorage
- **Smooth Transition:** Animated theme switching

---

## 📡 API Integration

### Base Configuration
```javascript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// All requests include credentials for cookies
fetch(`${API_BASE_URL}/rooms`, {
  credentials: 'include', // Important for cookies
  headers: {
    'Content-Type': 'application/json',
  },
});
```

### Key Endpoints Used

#### Public Endpoints
- `GET /rooms` - Fetch all rooms with filters
- `GET /featured-rooms` - Get 6 latest rooms
- `GET /rooms/:id` - Get single room details

#### Protected Endpoints (require authentication)
- `POST /rooms` - Create new room
- `PATCH /rooms/:id` - Update room
- `DELETE /rooms/:id` - Delete room
- `POST /book-room` - Create booking
- `GET /my-bookings` - Get user's bookings
- `PATCH /book-room/:id/cancel` - Cancel booking
- `GET /my-listing` - Get user's rooms

---

## 🚨 Error Handling & Validation

### Form Validation
- **Required Fields:** All essential fields marked and validated
- **Email Format:** Email regex validation
- **Password Strength:** Real-time password requirement checking
- **Image URLs:** Valid URL format verification

### Error Messages
- **Toast Notifications:** User-friendly error messages
- **No Alerts:** Never using default `alert()` function
- **Inline Errors:** Form field-specific error displays
- **Network Errors:** Graceful handling of API failures

### Loading States
- **Spinner:** Centered loading spinner during data fetch
- **Skeleton Loaders:** Content placeholder for better UX
- **Disabled Buttons:** Prevent double submissions

---

## 🎯 Assignment Requirements Met

### ✅ Basic Requirements
- [x] Minimum 15 GitHub commits on client side
- [x] Meaningful README.md with live URL
- [x] Five bullet points highlighting features
- [x] No Lorem ipsum text anywhere
- [x] No default alert() for errors/success
- [x] Hosted on Vercel with proper routing
- [x] No errors on route reload
- [x] Logged-in users stay logged in on reload

### ✅ Layout & Navigation
- [x] Public/Private navbar with dynamic links
- [x] Footer with social icons (including new X logo)
- [x] Protected routes properly implemented
- [x] Profile dropdown with logout option

### ✅ Authentication
- [x] Email/Password registration with validation
- [x] Google OAuth integration
- [x] JWT with HTTP-only cookies
- [x] Redirect to intended route after login
- [x] Toast notifications for all auth actions

### ✅ Room Management (CRUD)
- [x] Create room with comprehensive form
- [x] Read all rooms with search & filter
- [x] Update room (owner only)
- [x] Delete room with confirmation (owner only)
- [x] My Listings page

### ✅ Booking System
- [x] Book room with date/time picker
- [x] Conflict detection prevents double bookings
- [x] My Bookings page with cancel option
- [x] Status badges (confirmed/cancelled)
- [x] Cancel only future bookings

### ✅ Advanced Features
- [x] Search by room name ($regex)
- [x] Filter by amenities ($in operator)
- [x] Price range filter ($gte, $lte)
- [x] Booking count display
- [x] Dynamic page titles
- [x] Loading spinners everywhere

### ✅ UI/UX Requirements
- [x] Completely unique design
- [x] Responsive (mobile, tablet, desktop)
- [x] Consistent heading styles
- [x] Uniform card dimensions
- [x] Proper spacing and alignment
- [x] New X logo (not Twitter bird)

---

## 🔧 Configuration Files

### `tailwind.config.js`
```javascript
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("@heroui/theme/plugin")],
};
```

### `next.config.js`
```javascript
module.exports = {
  images: {
    domains: ['your-image-domains.com'],
  },
};
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@better-auth/mongo-adapter": "^1.6.11",
    "@heroui/react": "^3.0.5",
    "@heroui/styles": "^3.0.5",
    "better-auth": "^1.6.11",
    "mongodb": "^7.2.0",
    "motion": "^12.38.0",
    "next": "16.2.6",
    "next-themes": "^0.4.6",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.6.0"
  }
}
```

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

3. **Environment Variables on Vercel:**
   - Add all variables from `.env.local`
   - Make sure `BETTER_AUTH_URL` points to your Vercel URL
   - Set `NODE_ENV=production`

4. **Custom Domain (Optional):**
   - Add your custom domain in Vercel settings
   - Update DNS records as instructed

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** Cookies not being sent to backend
```javascript
// Solution: Ensure credentials are included
fetch(url, { credentials: 'include' })
```

**Issue:** Theme not persisting
```javascript
// Solution: Check next-themes setup in layout
import { ThemeProvider } from 'next-themes'
```

**Issue:** Protected routes not working
```javascript
// Solution: Verify better-auth session check
const session = await auth.api.getSession({ headers });
```

**Issue:** Images not loading
```javascript
// Solution: Add domain to next.config.js
images: { domains: ['your-domain.com'] }
```

---

## 🤝 Contributing

This is an assignment project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is created for educational purposes as part of Programming Hero's Web Development Course (Batch 13 - Assignment 09).

---

##  Acknowledgments

- **Programming Hero** - For the comprehensive web development course
- **Hero UI Team** - For the beautiful component library
- **Better-auth** - For the excellent authentication solution
- **Vercel** - For seamless deployment platform

---

## 📞 Contact

**Abdur Rahman Adil**  
- GitHub: [@SyntaxAdil](https://github.com/SyntaxAdil)
- Live Site: [StudyNook](https://studynook-bd.vercel.app)
- Assignment: Programming Hero Batch 13 - Assignment 09



<div align="center">

**Made with ❤️ by Abdur Rahman Adil**

⭐ **[Visit Live Site](https://studynook-bd.vercel.app)** ⭐

If you found this project helpful, please consider giving it a star on GitHub!

</div>