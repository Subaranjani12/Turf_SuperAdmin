// ================= LOGIN (SUPER ADMIN) =================
export const loginCredentials = {
  username: "superadmin",
  password: "123456",
};

// ================= EARNING CHART DATA =================
export const earningReportWeekly = [
  { label: "Monday", value: 30 },
  { label: "Tuesday", value: 50 },
  { label: "Wednesday", value: 40 },
  { label: "Thursday", value: 60 },
  { label: "Friday", value: 35 },
  { label: "Saturday", value: 55 },
  { label: "Sunday", value: 45 },
];

export const earningReportMonthly = [
  { label: "Feb", value: 40 },
  { label: "Mar", value: 80 },
  { label: "Apr", value: 60 },
  { label: "May", value: 100 },
  { label: "Jun", value: 230 },
  { label: "Jul", value: 60 },
  { label: "Aug", value: 110 },
  { label: "Sep", value: 70 },
  { label: "Oct", value: 50 },
  { label: "Nov", value: 80 },
  { label: "Dec", value: 95 },
  { label: "Jan", value: 110 },
];

export const earningReportYearly = [
  { label: "2016", value: 700 },
  { label: "2017", value: 850 },
  { label: "2018", value: 900 },
  { label: "2019", value: 950 },
  { label: "2020", value: 1000 },
  { label: "2021", value: 800 },
  { label: "2022", value: 1200 },
  { label: "2023", value: 950 },
  { label: "2024", value: 1100 },
  { label: "2025", value: 1050 },
];

// ================= DASHBOARD STATS =================
export const stats = [
  { value: "₹1,45,000", label: "Month/Oct" },
  { value: "50", label: "Pending" },
  { value: "1,045", label: "Active User" },
];

// ================= PAYMENTS =================
export const paymentList = Array(6).fill({
  name: "John to Turf 360",
  date: "Mar 4 at 6:00pm",
  amount: "₹120",
});

// ================= PENDING APPROVALS =================
export const pendingApprovals = [
  {
    turf: "Turf 1",
    owner: "John",
    phone: "8545652535",
    location: "Erode",
    date: "Mar 4 at 6:00pm",
  },
  {
    turf: "Turf 2",
    owner: "Lewis",
    phone: "8545652536",
    location: "Salem",
    date: "Mar 4 at 6:00pm",
  },
  {
    turf: "Turf 3",
    owner: "Hawks",
    phone: "8545652537",
    location: "Chennai",
    date: "Mar 4 at 6:00pm",
  },
];

// ================= STAR RATING DATA =================
export const starRatings = [1, 2, 3, 4, 5];

// ================= TURF LIST WITH OWNER DETAILS =================
export const turfList = [
  {
    id: 1,
    name: "Turf 1",
    since: "Since 12 Mar, 2024",
    location: "Erode, Thindal",
    sports: ["Football", "Cricket", "Basketball"],
    rating: 4,
    pricingType: "Per Hour",
    amenities: [
      "Drinking water",
      "Locker Room",
      "Parking area",
      "Scoreboard",
      "Café",
    ],
    availableDays: ["Wed", "Thu", "Fri", "Sat", "Sun"],
    address: `turf 1, 23B, N.S Road, Security House, 1st Floor,
Suite Number– 109, Kolkata–700 001, West Bengal, India.`,
    owner: {
      name: "John Doe",
      role: "Admin",
      phone: "+91 9876543211",
      turfs: [
        {
          name: "Turf 1",
          since: "Since 12 Mar, 2024",
          location: "Erode, Thindal",
          rating: 4,
          sports: ["Football", "Cricket", "Basketball"],
        },
        {
          name: "Turf 2",
          since: "Since 10 Jan, 2024",
          location: "Salem, Anna Nagar",
          rating: 5,
          sports: ["Football", "Cricket"],
        },
      ],
    },
  },

  {
    id: 2,
    name: "Turf 2",
    since: "Since 10 Jan, 2024",
    location: "Salem, Anna Nagar",
    sports: ["Football", "Cricket"],
    rating: 5,
    pricingType: "Per Hour",
    amenities: ["Parking area", "Locker Room"],
    availableDays: ["Mon", "Tue", "Wed", "Thu"],
    address: `turf 2, Some street, Salem, Anna Nagar, Tamil Nadu, India`,
    owner: {
      name: "Lewis",
      role: "Owner",
      phone: "+91 8545652536",
      turfs: [
        {
          name: "Turf 2",
          since: "Since 10 Jan, 2024",
          location: "Salem, Anna Nagar",
          rating: 5,
          sports: ["Football", "Cricket"],
        },
      ],
    },
  },

  {
    id: 3,
    name: "Turf 3",
    since: "Since 05 Feb, 2024",
    location: "Chennai, Adyar",
    sports: ["Football", "Cricket", "Badminton"],
    rating: 3,
    pricingType: "Per Hour",
    amenities: ["Café", "Drinking water"],
    availableDays: ["Fri", "Sat", "Sun"],
    address: `turf 3, Some street, Chennai, Adyar, Tamil Nadu, India`,
    owner: {
      name: "Hawks",
      role: "Owner",
      phone: "+91 8545652537",
      turfs: [
        {
          name: "Turf 3",
          since: "Since 05 Feb, 2024",
          location: "Chennai, Adyar",
          rating: 3,
          sports: ["Football", "Cricket", "Badminton"],
        },
      ],
    },
  },
];

// ================= TURF LIST HELPERS =================
export const days = ["Wed", "Thu", "Fri", "Sat", "Sun"];

export const slots = {
  Morning: [
    ["4 AM", "5 AM"],
    ["5 AM", "6 AM"],
    ["6 AM", "7 AM"],
    ["7 AM", "8 AM"],
  ],
  Evening: [
    ["12 PM", "1 PM"],
    ["1 PM", "2 PM"],
    ["2 PM", "3 PM"],
    ["3 PM", "4 PM"],
    ["4 PM", "5 PM"],
    ["5 PM", "6 PM"],
    ["6 PM", "7 PM"],
    ["7 PM", "8 PM"],
  ],
  Night: [
    ["8 PM", "9 PM"],
    ["9 PM", "10 PM"],
    ["10 PM", "11 PM"],
    ["11 PM", "12 AM"],
    ["12 AM", "1 AM"],
    ["1 AM", "2 AM"],
    ["2 AM", "3 AM"],
    ["3 AM", "4 AM"],
  ],
};

export const getPrice = (label: string, from: string) => {
  if (label === "Morning") return 600;
  if (label === "Evening")
    return ["4 PM", "5 PM", "6 PM", "7 PM"].includes(from) ? 800 : 600;
  if (label === "Night")
    return ["12 AM", "1 AM", "2 AM", "3 AM"].includes(from) ? 500 : 400;
  return 600;
};

export const accountDetails = {
  businessDetails: {
    businessPhone: "+91 9876543211",
    alternateNumber: "+91 9987656564",
    gstNumber: "08ABCDE9999F1Z8",
    businessMail: "johndoe_1234@gmail.com",
    businessAddress:
      "23B, N.S Road, Security House, 1st Floor,\nSuite Number-109, Kolkata-700 001,\nWest Bengal, India",
  },

  bankDetails: {
    accountNumber: "+91 9876543211",
    ifscCode: "johndoe_1234@gmail.com",
    panNumber: "ABCDE1234F",
    bankName: "IDFC Bank",
    accountHolderName: "Mohammed Anas R",
  },
};

// ================= VENDOR DATA =================

export type Vendor = {
  id: number;
  name: string;
  since: string;
  phone: string;
};

export const vendorList: Vendor[] = [
  {
    id: 1,
    name: "Vendor 1",
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  },
  {
    id: 2,
    name: "Vendor 2",
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  },
  {
    id: 3,
    name: "Vendor 3",
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  },
  {
    id: 4,
    name: "Vendor 4",
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  },
  {
    id: 5,
    name: "Vendor 5",
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  },
  {
    id: 6,
    name: "Vendor 6",
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  },
  {
    id: 7,
    name: "Vendor 7",
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  },
  {
    id: 8,
    name: "Vendor 8",
    since: "Since 12 Mar, 2024",
    phone: "+91 9845762545",
  },
];

// ================= USER DATA =================

export type User = {
  id: number;
  name: string;
  since: string;
  phone: string;
};

export const userList: User[] = [
  {
    id: 1,
    name: "User 1",
    since: "Joined on 12 Mar, 2024",
    phone: "+91 9876543210",
  },
  {
    id: 2,
    name: "User 2",
    since: "Joined on 08 Feb, 2024",
    phone: "+91 9988776655",
  },
  {
    id: 3,
    name: "User 3",
    since: "Joined on 21 Jan, 2024",
    phone: "+91 9123456789",
  },
  {
    id: 4,
    name: "User 4",
    since: "Joined on 05 Apr, 2024",
    phone: "+91 9090909090",
  },
  {
    id: 5,
    name: "User 5",
    since: "Joined on 18 Mar, 2024",
    phone: "+91 9345678123",
  },
  {
    id: 6,
    name: "User 6",
    since: "Joined on 30 Jan, 2024",
    phone: "+91 9876501234",
  },
  {
    id: 7,
    name: "User 7",
    since: "Joined on 14 Feb, 2024",
    phone: "+91 9001122334",
  },
  {
    id: 8,
    name: "User 8",
    since: "Joined on 01 Mar, 2024",
    phone: "+91 9887766554",
  },
];

export const userProfileData = [
  {
    id: 1,
    name: "John Doe",
    phone: "+91 9876543211",
    revenue: 145000,
    activeUsers: 374,
    bookings: [
      {
        id: 1,
        turfName: "Turf 1",
        since: "Since 12 Mar, 2024",
        sports: ["Football"],
        location: "Erode, Thindal",
        rating: 4,
        status: "verified",
      },
      {
        id: 2,
        turfName: "Turf 1",
        since: "Since 12 Mar, 2024",
        sports: ["Football", "Cricket", "Basketball"],
        location: "Erode, Thindal",
        rating: 4,
        status: "verified",
      },
      {
        id: 3,
        turfName: "Turf 1",
        since: "Since 12 Mar, 2024",
        sports: ["Football", "Cricket", "Basketball"],
        location: "Erode, Thindal",
        rating: 0,
        status: "pending",
      },
    ],
  },
  {
    id: 2,
    name: "Arun Kumar",
    phone: "+91 9123456789",
    revenue: 98000,
    activeUsers: 221,
    bookings: [
      {
        id: 1,
        turfName: "Green Turf",
        since: "Since 01 Jan, 2024",
        sports: ["Cricket"],
        location: "Salem",
        rating: 5,
        status: "verified",
      },
    ],
  },
];

/* ================= REPORT PAGES ================= */

import {
  IndianRupee,
  ClipboardList,
  Users,
  UserCircle,
} from "lucide-react";

/* ================= REPORT TABS ================= */

export const reportTabs = [
  { key: "payment", label: "Payment Report", icon: IndianRupee },
  { key: "booking", label: "Booking Report", icon: ClipboardList },
  { key: "vendor", label: "Vendor Report", icon: Users },
  { key: "user", label: "User Report", icon: UserCircle },
];

/* ================= BAR CHART DATA ================= */

export const reportChartData = {
  booking: {
    weekly: [
      { label: "Mon", value: 40 },
      { label: "Tue", value: 60 },
      { label: "Wed", value: 55 },
      { label: "Thu", value: 70 },
      { label: "Fri", value: 90 },
      { label: "Sat", value: 120 },
      { label: "Sun", value: 80 },
    ],
    monthly: [
      { label: "Feb", value: 40 },
      { label: "Mar", value: 80 },
      { label: "Apr", value: 60 },
      { label: "May", value: 100 },
      { label: "Jun", value: 235 },
      { label: "Jul", value: 65 },
      { label: "Aug", value: 110 },
      { label: "Sep", value: 75 },
      { label: "Oct", value: 55 },
      { label: "Nov", value: 80 },
      { label: "Dec", value: 95 },
      { label: "Jan", value: 120 },
    ],
    yearly: [
      { label: "2016", value: 800 },
      { label: "2017", value: 1100 },
      { label: "2018", value: 800 },
      { label: "2019", value: 1100 },
      { label: "2020", value: 1500 },
      { label: "2021", value: 1900 },
      { label: "2022", value: 800 },
      { label: "2023", value: 1100 },
      { label: "2024", value: 1500 },
      { label: "2025", value: 1900 },
    ],
  },

  payment: {
    weekly: [
      { label: "Mon", value: 50 },
      { label: "Tue", value: 70 },
      { label: "Wed", value: 65 },
      { label: "Thu", value: 90 },
      { label: "Fri", value: 120 },
      { label: "Sat", value: 160 },
      { label: "Sun", value: 100 },
    ],
    monthly: [
      { label: "Feb", value: 50 },
      { label: "Mar", value: 90 },
      { label: "Apr", value: 70 },
      { label: "May", value: 120 },
      { label: "Jun", value: 235 },
      { label: "Jul", value: 80 },
      { label: "Aug", value: 140 },
      { label: "Sep", value: 100 },
      { label: "Oct", value: 90 },
      { label: "Nov", value: 120 },
      { label: "Dec", value: 150 },
      { label: "Jan", value: 170 },
    ],
    yearly: [
      { label: "2016", value: 700 },
      { label: "2017", value: 1000 },
      { label: "2018", value: 800 },
      { label: "2019", value: 1100 },
      { label: "2020", value: 1400 },
      { label: "2021", value: 1700 },
      { label: "2022", value: 800 },
      { label: "2023", value: 1100 },
      { label: "2024", value: 1500 },
      { label: "2025", value: 1600 },
    ],
  },

  vendor: {
    weekly: [
      { label: "Mon", value: 15 },
      { label: "Tue", value: 20 },
      { label: "Wed", value: 18 },
      { label: "Thu", value: 25 },
      { label: "Fri", value: 40 },
      { label: "Sat", value: 60 },
      { label: "Sun", value: 45 },
    ],
    monthly: [
      { label: "Feb", value: 20 },
      { label: "Mar", value: 35 },
      { label: "Apr", value: 30 },
      { label: "May", value: 60 },
      { label: "Jun", value: 120 },
      { label: "Jul", value: 55 },
      { label: "Aug", value: 80 },
      { label: "Sep", value: 65 },
      { label: "Oct", value: 45 },
      { label: "Nov", value: 70 },
      { label: "Dec", value: 85 },
      { label: "Jan", value: 95 },
    ],
    yearly: [
      { label: "2016", value: 800 },
      { label: "2017", value: 1000 },
      { label: "2018", value: 800 },
      { label: "2019", value: 1100 },
      { label: "2020", value: 1200 },
      { label: "2021", value: 1700 },
      { label: "2022", value: 800 },
      { label: "2023", value: 1100 },
      { label: "2024", value: 1500 },
      { label: "2025", value: 1400 },
    ],
  },

  user: {
    weekly: [
      { label: "Mon", value: 80 },
      { label: "Tue", value: 100 },
      { label: "Wed", value: 95 },
      { label: "Thu", value: 120 },
      { label: "Fri", value: 150 },
      { label: "Sat", value: 180 },
      { label: "Sun", value: 140 },
    ],
    monthly: [
      { label: "Feb", value: 100 },
      { label: "Mar", value: 120 },
      { label: "Apr", value: 110 },
      { label: "May", value: 140 },
      { label: "Jun", value: 235 },
      { label: "Jul", value: 150 },
      { label: "Aug", value: 180 },
      { label: "Sep", value: 160 },
      { label: "Oct", value: 140 },
      { label: "Nov", value: 170 },
      { label: "Dec", value: 190 },
      { label: "Jan", value: 210 },
    ],
    yearly: [
      { label: "2016", value: 700 },
      { label: "2017", value: 1000 },
      { label: "2018", value: 800 },
      { label: "2019", value: 1100 },
      { label: "2020", value: 1400 },
      { label: "2021", value: 1700 },
      { label: "2022", value: 800 },
      { label: "2023", value: 1100 },
      { label: "2024", value: 1500 },
      { label: "2025", value: 1600 },
    ],
  },
};

/* ================= TOP TURFS ================= */

export const topTurfs = [
  {
    name: "Turf 1",
    since: "Since 12 Mar, 2024",
    location: "Erode, Thindal",
  },
  {
    name: "Turf 2",
    since: "Since 15 Apr, 2024",
    location: "Erode, Perundurai",
  },
  {
    name: "Turf 3",
    since: "Since 01 May, 2024",
    location: "Coimbatore",
  },
  {
    name: "Turf 4",
    since: "Since 20 Jun, 2024",
    location: "Salem",
  },
];

// ================= PAYMENT DATA =================

export const payment = [
  {
    id: 1,
    user: "John",
    turf: "Turf 360",
    date: "Mar 4",
    time: "6:00pm",
    amount: 120,
    status: "success",
    transactionId: "TXN1001",
    bookingId: "BK1001",
    paymentDateTime: "Mar 4, 6:00 PM",
    method: "UPI",
    gateway: "Google Pay",
    senderName: "John",
    senderMobile: "9876543210",
    vendorName: "Turf 360",
    vendorMobile: "9123456780",
  },
  {
    id: 2,
    user: "John",
    turf: "Turf 360",
    date: "Mar 4",
    time: "6:00pm",
    amount: 120,
    status: "pending",
    transactionId: "TXN1002",
    bookingId: "BK1002",
    paymentDateTime: "Mar 4, 6:10 PM",
    method: "Card",
    gateway: "Razorpay",
    senderName: "John",
    senderMobile: "9876543210",
    vendorName: "Turf 360",
    vendorMobile: "9123456780",
  },
  {
    id: 3,
    user: "John",
    turf: "Turf 360",
    date: "Mar 4",
    time: "6:00pm",
    amount: 120,
    status: "failed",
    transactionId: "TXN1003",
    bookingId: "BK1003",
    paymentDateTime: "Mar 4, 6:15 PM",
    method: "UPI",
    gateway: "PhonePe",
    senderName: "John",
    senderMobile: "9876543210",
    vendorName: "Turf 360",
    vendorMobile: "9123456780",
  },
];

// ================= SETTINGS DATA =================

export const pendingTurfs = [
  {
    id: 1,
    name: "Turf 1",
    since: "Since 12 Mar, 2024",
    date: "12 Mar, 2024",
    location: "Erode, Thindal",
    ownerName: "John",
    mobile: "+91 9987656564",
    mapLink: "@gmap",
    email: "johndoe_1234@gmail.com",
    address:
      "23B, N.S Road, Security House, 1st Floor,\nSuite Number-109, Kolkata-700 001,\nWest Bengal, India",
    photos: ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
    status: "pending",
  },
  {
    id: 2,
    name: "Turf 2",
    since: "Since 15 Mar, 2024",
    date: "15 Mar, 2024",
    location: "Erode, Thindal",
    ownerName: "Alex",
    mobile: "+91 9876543210",
    mapLink: "@gmap",
    email: "alex@gmail.com",
    address:
      "45A, Anna Nagar,\nChennai-600 040,\nTamil Nadu, India",
    photos: ["/img1.jpg", "/img2.jpg", "/img3.jpg"],
    status: "pending",
  },
];
