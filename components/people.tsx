import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { peopleCategories, peopleProfiles, type PeopleCategory } from "@/data/people";
import { PageFrame } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";

function ProfileCards({ category }: { category: PeopleCategory }) {
  return (
    <AnimateIn stagger variant="up" className="profilegrid" as="div">
      {peopleProfiles[category].map((profile) => (
        <article className="profilecard" key={profile.name}>
          <Image src={profile.image} alt={profile.name} width={520} height={620} />
          <div>
            <span className="eyebrow">{profile.designation}</span>
            <h2>{profile.name}</h2>
            <p>
              {category === "teachers" || category === "staff"
                ? "Verified profiles will be published here with the school community's confirmed information."
                : "Part of the leadership team at Raniganj National Bidyapith."}
            </p>
          </div>
        </article>
      ))}
    </AnimateIn>
  );
}

export function PeopleOverview() {
  return (
    <PageFrame
      eyebrow="Our people"
      title="The people who make learning human."
      intro="Choose a team to explore the people, roles and stories that shape everyday life at Raniganj National Bidyapith."
    >
      <AnimateIn stagger variant="up" className="peoplelinks" as="div">
        {peopleCategories.map((category) => (
          <Link className="peoplelink" href={category.href} key={category.value}>
            <span className="eyebrow">{category.label}</span>
            <strong>Explore {category.label.toLowerCase()}</strong>
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </AnimateIn>
    </PageFrame>
  );
}

export function PeopleCategoryPage({ category }: { category: PeopleCategory }) {
  const label = peopleCategories.find((item) => item.value === category)?.label ?? "Our people";
  return (
    <PageFrame
      eyebrow={`Our people / ${label}`}
      title={`${label} at Raniganj National Bidyapith.`}
      intro={`Meet the ${label.toLowerCase()} who help our school community learn, grow and belong.`}
    >
      <ProfileCards category={category} />
    </PageFrame>
  );
}
