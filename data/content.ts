export type Notice = { id: string; date: string; category: string; title: string; summary: string; content: string };
export type EventItem = { id: string; date: string; month: string; title: string; location: string; summary: string; time?: string; category?: string };

export const notices: Notice[] = [
  { id: "welcome", date: "01 Sep 2026", category: "General", title: "Welcome to the new school website", summary: "Official school updates will be shared here.", content: "This website is being prepared as a clear, accessible source for official school notices, academic information and community updates." },
  { id: "admission", date: "15 Aug 2026", category: "Admission", title: "Admission information", summary: "The school office will publish confirmed admission dates and requirements here.", content: "Please contact the school office for the latest verified admission information until the current session notice is published." },
  { id: "routine", date: "20 Jul 2026", category: "Academic", title: "Academic routines and calendars", summary: "Published routines and important dates will be available in the academic section.", content: "The academic section is organised to make class routines, examination information and important dates easy for families to find." },
];

export const events: EventItem[] = [
  { id: "orientation", date: "2026-09-26", month: "SEP", title: "New session orientation", location: "School campus", time: "To be confirmed", category: "Academic", summary: "The school office will publish confirmed participation details before the event." },
  { id: "sports", date: "2026-10-16", month: "OCT", title: "Annual activities day", location: "School campus", time: "To be confirmed", category: "Co-curricular", summary: "Full event information will be published after school confirmation." },
];

export const programs = [
  { label: "Primary", title: "Foundations for a lifelong journey", description: "A nurturing stage for curiosity, confidence and strong learning habits.", subjects: ["Language", "Mathematics", "Environment"] },
  { label: "Secondary", title: "Depth, discipline and direction", description: "A focused environment for expanding knowledge and independent thinking.", subjects: ["Sciences", "Humanities", "Mathematics"] },
];

export const values = [["01", "Purposeful learning", "Build understanding that stays useful beyond the classroom."], ["02", "Character first", "Make integrity, empathy and responsibility part of everyday learning."], ["03", "A disciplined welcome", "Create a calm, orderly environment where learners can belong."], ["04", "Community minded", "Grow through the shared work of students, families and educators."]];

export const documentCategories = ["Admission", "Academic calendar", "Class routine", "Exam routine", "Syllabus", "Notices", "Policies"];
