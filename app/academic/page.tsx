import { PageFrame } from "@/components/site";
import { programs } from "@/data/content";

export default function AcademicPage() { return <PageFrame eyebrow="Academic life" title="Make learning feel possible." intro="A clear home for academic programmes, subjects, routines and examination information."><div className="featurelist">{programs.map(program => <article className="featurecard" key={program.label}><span className="eyebrow">{program.label}</span><h3>{program.title}</h3><p>{program.description}</p><div className="chips">{program.subjects.map(subject => <span key={subject}>{subject}</span>)}</div></article>)}</div><h2>Routines and calendars</h2><p>Class routines, academic calendars and examination information will be published here once officially confirmed.</p></PageFrame>; }
