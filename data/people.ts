import { school } from "@/data/school";

export const peopleCategories = [
  { value: "directors", label: "Directors", href: "/people/directors" },
  { value: "principal", label: "Principal", href: "/people/principal" },
  { value: "teachers", label: "Teachers", href: "/people/teachers" },
  { value: "staff", label: "Staff", href: "/people/staff" },
] as const;

export type PeopleCategory = (typeof peopleCategories)[number]["value"];

type PersonProfile = {
  name: string;
  designation: string;
  image: string;
};

export const peopleProfiles: Record<PeopleCategory, PersonProfile[]> = {
  directors: [
    {
      name: school.director.name,
      designation: "Director",
      image: "/images/people/director.jpg",
    },
  ],
  principal: [
    {
      name: school.principal.name,
      designation: "Principal",
      image: "/images/people/director.jpg",
    },
  ],
  teachers: [
    {
      name: "Teacher profiles",
      designation: "Official faculty details will be added soon",
      image: "/images/people/director.jpg",
    },
  ],
  staff: [
    {
      name: "Staff profiles",
      designation: "Official staff details will be added soon",
      image: "/images/people/director.jpg",
    },
  ],
};
