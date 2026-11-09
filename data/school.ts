export const school = {
  name: "Raniganj National Bidyapith",
  nameBn: "রানীগঞ্জ ন্যাশনাল বিদ্যাপীঠ",
  shortName: "RNB",
  established: "1999",
  eiin: "[Pending School Confirmation]",
  tagline: "Knowledge, discipline and humanity",
  taglineBn: "জ্ঞান, শৃঙ্খলা ও মানবিকতার পথে",
  description:
    "A thoughtful learning community shaped by academic purpose, character and a clear sense of belonging.",
  address: "Binnagari Road, Raniganj, Ghoraghat, Dinajpur",
  phone: "01719-512515",
  email: "1999rnb@gmail.com",
  officeHours: "8:00 AM – 4:00 PM, Saturday – Thursday (Office)",
  whatsapp: "", // Pending official number
  socials: {
    facebook: "https://www.facebook.com/p/Ranigonj-National-BidyapithDinajpur-100063935141541/",
    youtube: "", // Pending official link
  },
  mapsUrl: "https://maps.app.goo.gl/pwKq1os2aij9wNPj7",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Ranigonj%20National%20Bidyapith&center=25.305570%2C89.219798&z=17&output=embed",
  principal: {
    name: "Md. Mamunur Rashid",
    role: "Director 3 & Principal",
    bio: "Guiding academic standards, student development, and residential campus administration.",
    photo: "/images/school-logo.jpg",
  },
  director: {
    name: "Md. Mahbubur Rahman Chowdhury",
    role: "Director 1",
  },
  directors: [
    {
      name: "Md. Mahbubur Rahman Chowdhury",
      role: "Director 1",
    },
    {
      name: "Md. Hafizur Rahman",
      role: "Director 2",
    },
    {
      name: "Md. Mamunur Rashid",
      role: "Director 3 & Principal",
    },
  ],
  mission:
    "To nurture curious, capable and considerate learners through purposeful education and a disciplined, welcoming environment.",
  vision:
    "A school community where every learner grows with confidence, integrity and a lifelong appetite for learning.",
};

export type SchoolInfo = typeof school;
