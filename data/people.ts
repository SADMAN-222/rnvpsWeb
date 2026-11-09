import { school } from "@/data/school";

export const peopleCategories = [
  { value: "directors", label: "Directors", href: "/people/directors" },
  { value: "principal", label: "Principal", href: "/people/principal" },
  { value: "teachers", label: "Teachers", href: "/people/teachers" },
  { value: "staff", label: "Staff", href: "/people/staff" },
] as const;

export type PeopleCategory = (typeof peopleCategories)[number]["value"];

export type PersonProfile = {
  id: string;
  name: string;
  designation: string;
  image: string;
  department?: string;
  note?: string;
};

export const peopleProfiles: Record<PeopleCategory, PersonProfile[]> = {
  directors: [
    {
      id: "director-1",
      name: "Md. Mahbubur Rahman Chowdhury",
      designation: "Director 1",
      image: "/images/people/director.jpg",
      department: "Governing Body",
      note: "Governing Board Member & Leadership at Raniganj National Bidyapith.",
    },
    {
      id: "director-2",
      name: "Md. Hafizur Rahman",
      designation: "Director 2",
      image: "/images/school-logo.jpg",
      department: "Governing Body",
      note: "Governing Board Member & Leadership at Raniganj National Bidyapith.",
    },
    {
      id: "director-3",
      name: "Md. Mamunur Rashid",
      designation: "Director 3 & Principal",
      image: "/images/school-logo.jpg",
      department: "Governing Body & Principal",
      note: "Governing Board Member, Director & Principal at Raniganj National Bidyapith.",
    },
  ],
  principal: [
    {
      id: "principal-1",
      name: "Md. Mamunur Rashid",
      designation: "Principal & Director 3",
      image: "/images/school-logo.jpg",
      department: "Executive Academic Leadership",
      note: "Principal & academic head steering educational excellence, residential student guidance, and institutional administration.",
    },
  ],
  teachers: [
    {
      id: "teacher-1",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Faculty Member 01",
      note: "Faculty member skeleton profile. Ready to update with subject specialization and credentials.",
    },
    {
      id: "teacher-2",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Faculty Member 02",
      note: "Faculty member skeleton profile. Ready to update with subject specialization and credentials.",
    },
    {
      id: "teacher-3",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Faculty Member 03",
      note: "Faculty member skeleton profile. Ready to update with subject specialization and credentials.",
    },
    {
      id: "teacher-4",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Faculty Member 04",
      note: "Faculty member skeleton profile. Ready to update with subject specialization and credentials.",
    },
    {
      id: "teacher-5",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Faculty Member 05",
      note: "Faculty member skeleton profile. Ready to update with subject specialization and credentials.",
    },
    {
      id: "teacher-6",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Faculty Member 06",
      note: "Faculty member skeleton profile. Ready to update with subject specialization and credentials.",
    },
    {
      id: "teacher-7",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Faculty Member 07",
      note: "Faculty member skeleton profile. Ready to update with subject specialization and credentials.",
    },
    {
      id: "teacher-8",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Faculty Member 08",
      note: "Faculty member skeleton profile. Ready to update with subject specialization and credentials.",
    },
  ],
  staff: [
    {
      id: "staff-1",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Staff Member 01",
      note: "Staff member skeleton profile. Ready to update with departmental responsibilities and contact info.",
    },
    {
      id: "staff-2",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Staff Member 02",
      note: "Staff member skeleton profile. Ready to update with departmental responsibilities and contact info.",
    },
    {
      id: "staff-3",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Staff Member 03",
      note: "Staff member skeleton profile. Ready to update with departmental responsibilities and contact info.",
    },
    {
      id: "staff-4",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Staff Member 04",
      note: "Staff member skeleton profile. Ready to update with departmental responsibilities and contact info.",
    },
    {
      id: "staff-5",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Staff Member 05",
      note: "Staff member skeleton profile. Ready to update with departmental responsibilities and contact info.",
    },
    {
      id: "staff-6",
      name: "Name",
      designation: "Designation",
      image: "/images/school-logo.jpg",
      department: "Staff Member 06",
      note: "Staff member skeleton profile. Ready to update with departmental responsibilities and contact info.",
    },
  ],
};
