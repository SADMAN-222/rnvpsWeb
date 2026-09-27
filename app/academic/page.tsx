import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageFrame, EmptyState } from "@/components/site";
import { programs } from "@/data/content";

export default function AcademicPage() { return <PageFrame eyebrow="Academic life" title="Learning with purpose." intro="Explore academic levels and find official routines and documents in one place."><div className="featurelist">{programs.map(program => <article className="featurecard" key={program.label}><span className="eyebrow">{program.label}</span><h3>{program.title}</h3><p>{program.description}</p><div className="chips">{program.subjects.map(subject => <span key={subject}>{subject}</span>)}</div></article>)}</div><div className="resource-links"><Link href="/calendar">Academic calendar <ArrowUpRight size={16} /></Link><Link href="/downloads">Routines and documents <ArrowUpRight size={16} /></Link></div><EmptyState title="Published routines and syllabus">The school office will place approved class routines, exam routines and syllabus documents in the Downloads section.</EmptyState></PageFrame>; }
