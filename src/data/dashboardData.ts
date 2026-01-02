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
