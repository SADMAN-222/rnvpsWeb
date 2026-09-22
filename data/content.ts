export type Notice = {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  content: string;
};

export type EventItem = {
  id: string;
  date: string;
  month: string;
  title: string;
  location: string;
  summary: string;
};

export const notices: Notice[] = [
  {
    id: "welcome",
    date: "01 Sep 2026",
    category: "General",
    title: "Welcome to the new school website",
    summary: "Our public digital home is taking shape. Official updates will be shared here.",
    content: "This website is being prepared as a clear, accessible source for school notices, academic information and community updates.",
  },
  {
    id: "admission",
    date: "15 Aug 2026",
    category: "Admission",
    title: "Admission information will be published soon",
    summary: "Please check this space for verified admission dates and requirements.",
    content: "Admission guidance will be updated here once the school confirms the relevant dates, eligibility details and document list.",
  },
  {
    id: "routine",
    date: "20 Jul 2026",
    category: "Academic",
    title: "Academic routines and calendars",
    summary: "Class routines and examination information will be added as they are confirmed.",
    content: "The academic section is being organized to make routines and important dates easy for families to find.",
  },
];

export const events: EventItem[] = [
  { id: "orientation", date: "2026-09-26", month: "SEP", title: "New session orientation", location: "School campus", summary: "A placeholder for the next verified school gathering." },
  { id: "sports", date: "2026-10-16", month: "OCT", title: "Annual activities day", location: "School campus", summary: "Details will be published after official confirmation." },
  { id: "cultural", date: "2026-11-21", month: "NOV", title: "Cultural programme", location: "School auditorium", summary: "A future space for community performances and celebration." },
];

export const programs = [
  { label: "Primary", title: "Foundations for a lifelong journey", description: "A nurturing stage for curiosity, confidence and strong learning habits.", subjects: ["Language", "Mathematics", "Environment"] },
  { label: "Secondary", title: "Depth, discipline and direction", description: "A focused environment for expanding knowledge and independent thinking.", subjects: ["Sciences", "Humanities", "Mathematics"] },
  { label: "Future pathways", title: "Information coming soon", description: "Verified academic level information will be added here as it becomes available.", subjects: ["To be confirmed"] },
];

export const values = [
  ["01", "Purposeful learning", "Build understanding that stays useful beyond the classroom."],
  ["02", "Character first", "Make integrity, empathy and responsibility part of everyday learning."],
  ["03", "A disciplined welcome", "Create a calm, orderly environment where learners can belong."],
  ["04", "Community minded", "Grow through the shared work of students, families and educators."],
];
