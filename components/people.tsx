import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Users, Shield, GraduationCap, Briefcase } from "lucide-react";
import { peopleCategories, peopleProfiles, type PeopleCategory } from "@/data/people";
import { PageFrame } from "@/components/site";
import { AnimateIn } from "@/components/animate-in";

const categoryIcons: Record<PeopleCategory, React.ElementType> = {
  directors: Shield,
  principal: GraduationCap,
  teachers: Users,
  staff: Briefcase,
};

function ProfileCards({ category }: { category: PeopleCategory }) {
  const profiles = peopleProfiles[category] || [];

  return (
    <AnimateIn stagger variant="up" className="profilegrid" as="div">
      {profiles.map((profile, idx) => {
        const isLogo = profile.image.includes("school-logo");
        const isSkeleton = profile.name === "Name" && profile.designation === "Designation";

        return (
          <article
            className={`profilecard ${isSkeleton ? "is-skeleton-card" : ""}`}
            key={profile.id || `${category}-${idx}`}
          >
            <div className={`profilecard-media ${isLogo ? "is-logo-placeholder" : ""}`}>
              <Image
                src={profile.image}
                alt={profile.name}
                width={400}
                height={400}
                className={isLogo ? "profilecard-logo" : "profilecard-photo"}
                priority={idx < 3}
              />
              {isLogo && (
                <span className="profile-placeholder-tag">
                  {isSkeleton ? "Profile Slot" : "Official Crest"}
                </span>
              )}
            </div>
            <div className="profilecard-body">
              {profile.department && (
                <span className="profilecard-badge">{profile.department}</span>
              )}
              <h2 className="profilecard-name">{profile.name}</h2>
              <div className="profilecard-role">{profile.designation}</div>
              <p className="profilecard-note">
                {profile.note ||
                  (category === "teachers" || category === "staff"
                    ? "Verified profile will be published with official credentials and photo."
                    : "Part of the leadership team at Raniganj National Bidyapith.")}
              </p>
            </div>
          </article>
        );
      })}
    </AnimateIn>
  );
}

export function PeopleOverview() {
  return (
    <PageFrame
      eyebrow="Our People"
      title="The people who make learning human."
      intro="Explore our leadership team, distinguished educators, and dedicated support staff who guide students at Raniganj National Bidyapith."
    >
      <AnimateIn stagger variant="up" className="peoplelinks" as="div">
        {peopleCategories.map((category) => {
          const Icon = categoryIcons[category.value];
          const count = peopleProfiles[category.value]?.length || 0;

          return (
            <Link className="peoplelink" href={category.href} key={category.value}>
              <div className="peoplelink-top">
                <span className="eyebrow">{category.label}</span>
                {Icon && <Icon size={20} className="peoplelink-icon" />}
              </div>
              <strong>Explore {category.label.toLowerCase()}</strong>
              <span className="peoplelink-count">{count} {count === 1 ? "profile" : "profiles"}</span>
              <span className="peoplelink-cta">
                View section <ArrowUpRight size={15} />
              </span>
            </Link>
          );
        })}
      </AnimateIn>
    </PageFrame>
  );
}

export function PeopleCategoryPage({ category }: { category: PeopleCategory }) {
  const current = peopleCategories.find((item) => item.value === category);
  const label = current?.label ?? "Our people";
  const isSkeletonCategory = category === "teachers" || category === "staff";

  return (
    <PageFrame
      eyebrow={`Our People / ${label}`}
      title={`${label} at Raniganj National Bidyapith.`}
      intro={`Meet the ${label.toLowerCase()} who help our school community learn, grow, and belong with purpose and character.`}
    >
      <div className="people-nav-bar">
        <div className="people-nav-tabs">
          {peopleCategories.map((item) => (
            <Link
              key={item.value}
              href={item.href}
              className={`people-nav-tab ${item.value === category ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/teachers" className="people-overview-link">
          ← All Teams
        </Link>
      </div>

      {isSkeletonCategory && (
        <div className="people-skeleton-notice">
          <div className="skeleton-notice-dot" />
          <p>
            <strong>Modular Skeleton Roster:</strong> Ready for faculty updates. Edit{" "}
            <code>data/people.ts</code> to add verified names, academic credentials, and official photographs.
          </p>
        </div>
      )}

      <ProfileCards category={category} />
    </PageFrame>
  );
}
