import React, { useState } from 'react';
import { FEATURED_BLOG_POST } from '../data/blogData';
import { SCHOOL_IMAGES } from '../assets/images';
import { SCHOOL_INFO } from '../data/schoolData';
import { BlogImageKey } from '../types';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  Clock,
  Link2,
  MapPin,
  Sparkles,
} from 'lucide-react';

interface BlogsPageProps {
  onOpenApply: () => void;
  onScrollTo: (id: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onOpenApply, onScrollTo }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const post = FEATURED_BLOG_POST;

  const getImageSrc = (key: BlogImageKey) => SCHOOL_IMAGES[key];

  const handleImageError = (key: string) => {
    setFailedImages((prev) => ({ ...prev, [key]: true }));
  };

  const handleCopyBlogLink = async () => {
    const shareUrl = `${window.location.origin}/blogs`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      }
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 3000);
    } catch {
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(`blog-chapter-${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderBoldLeadBullet = (text: string) => {
    const colonIndex = text.indexOf(':');
    if (colonIndex > 0 && colonIndex < 55) {
      const lead = text.slice(0, colonIndex + 1);
      const rest = text.slice(colonIndex + 1);
      return (
        <>
          <strong className="font-bold text-stone-950">{lead}</strong>
          <span>{rest}</span>
        </>
      );
    }
    return <span>{text}</span>;
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen py-10 sm:py-16 border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Breadcrumb & Back to Home Control */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200/90">
          <button
            type="button"
            onClick={() => onScrollTo('top')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1E3A8A] hover:text-[#F43F5E] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Little Nest Home</span>
          </button>

          <nav aria-label="Breadcrumb" className="text-xs font-semibold text-stone-500 flex items-center gap-2">
            <button
              type="button"
              onClick={() => onScrollTo('top')}
              className="hover:text-[#1E3A8A] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="font-bold text-stone-900">Blogs</span>
          </nav>
        </div>

        {/* Dedicated Blogs Page Header (Bold Headings) */}
        <header className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-widest text-stone-500 mb-3">
            <span className="text-[#F43F5E] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Little Nest Parent Journal</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>Early Years Advice</span>
            <span aria-hidden="true">·</span>
            <span>Islamabad &amp; Rawalpindi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E3A8A] tracking-tight leading-[1.15]">
            Montessori, Playgroup &amp; Preschool Parenting Blog — Islamabad &amp; Rawalpindi
          </h1>
          <p className="mt-3 text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            Practical parenting insights from Little Nest Montessori School in Sector I-14/3, Islamabad — helping families across Islamabad and Rawalpindi choose the best Playgroup, Nursery, and Kindergarten near you.
          </p>
        </header>

        {/* Two-Column Editorial Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Primary Long-Form Article */}
          <article
            className="lg:col-span-8 bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-10 lg:p-12"
            itemScope
            itemType="https://schema.org/BlogPosting"
          >
            <meta itemProp="datePublished" content={post.publishedDateISO} />
            <meta itemProp="dateModified" content={post.publishedDateISO} />
            <meta itemProp="inLanguage" content="en-PK" />

            {/* Clean Typographic Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200 text-xs font-semibold text-stone-500">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span className="uppercase tracking-wider text-amber-700 font-bold">
                  {post.category}
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-stone-400" />
                  <time dateTime={post.publishedDateISO}>{post.publishedDate}</time>
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyBlogLink}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E3A8A] hover:text-[#F43F5E] transition-colors cursor-pointer"
                aria-label="Copy link to this parenting article"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Link copied</span>
                  </>
                ) : (
                  <>
                    <Link2 className="w-3.5 h-3.5" />
                    <span>Share article</span>
                  </>
                )}
              </button>
            </div>

            {/* Article Bold Title & Lead Deck */}
            <div className="pt-7 pb-8">
              <h2
                itemProp="headline"
                className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-stone-950 leading-[1.2] tracking-tight"
              >
                {post.title}
              </h2>

              <p
                itemProp="description"
                className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-medium"
              >
                {post.subtitle}
              </p>

              {/* Author Byline */}
              <div
                className="mt-6 flex items-center gap-3 pt-5 border-t border-stone-100"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    src="/logo.jpeg"
                    alt="Little Nest Montessori School"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-xs leading-snug">
                  <div className="font-bold text-stone-900" itemProp="name">
                    {post.authorName}
                  </div>
                  <div className="text-stone-500">{post.authorRole}</div>
                </div>
              </div>
            </div>

            {/* Hero Cover Figure */}
            <figure className="mb-9">
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-amber-50 border border-stone-200 shadow-xs">
                {!failedImages[post.coverImage.key] ? (
                  <img
                    src={getImageSrc(post.coverImage.key)}
                    alt={post.coverImage.alt}
                    itemProp="image"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(post.coverImage.key)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-stone-500 text-sm p-6 text-center">
                    Warm morning welcome at Little Nest Montessori School, Sector I-14/3 Islamabad
                  </div>
                )}
              </div>
              <figcaption className="mt-2.5 text-xs text-stone-500 italic leading-relaxed">
                {post.coverImage.caption}
              </figcaption>
            </figure>

            {/* Opening Lead Excerpt & Article Body */}
            <div
              className="max-w-2xl text-stone-800 text-base sm:text-[17px] leading-[1.82] space-y-6"
              itemProp="articleBody"
            >
              <p className="text-stone-800 font-medium text-base sm:text-lg leading-[1.78] first-letter:text-4xl first-letter:font-extrabold first-letter:text-[#1E3A8A] first-letter:float-left first-letter:mr-2.5 first-letter:mt-1">
                {post.excerpt}
              </p>

              {/* Article Chapters with Bold Headings */}
              {post.sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={`blog-chapter-${section.id}`}
                  className="pt-7 scroll-mt-28 space-y-4 border-t border-stone-100"
                >
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-stone-400">
                    0{idx + 1} / Chapter
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E3A8A] leading-snug tracking-tight">
                    {section.heading}
                  </h3>

                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-stone-700 leading-[1.82]">
                      {para}
                    </p>
                  ))}

                  {section.pullQuote && (
                    <blockquote className="my-7 py-5 border-y border-stone-200 text-stone-900 text-lg sm:text-xl font-bold italic leading-relaxed text-center px-2">
                      “{section.pullQuote}”
                    </blockquote>
                  )}

                  {section.subheading && (
                    <h4 className="text-base sm:text-lg font-extrabold text-stone-950 pt-2">
                      {section.subheading}
                    </h4>
                  )}

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-3 pt-1 pb-2">
                      {section.bulletPoints.map((point, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-3 text-stone-700 leading-[1.75] bg-[#FFFDF9] border border-stone-200/80 rounded-2xl p-4 text-sm sm:text-[15px]"
                        >
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </span>
                          <span>{renderBoldLeadBullet(point)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.image && (
                    <figure className="my-7">
                      <div
                        className={`w-full ${
                          section.image.aspectClass || 'aspect-[4/3]'
                        } rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-xs`}
                      >
                        {!failedImages[section.image.key] ? (
                          <img
                            src={getImageSrc(section.image.key)}
                            alt={section.image.alt}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            onError={() => handleImageError(section.image!.key)}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-stone-500 text-sm p-6 text-center">
                            {section.image.alt}
                          </div>
                        )}
                      </div>
                      <figcaption className="mt-2.5 text-xs text-stone-500 italic leading-relaxed">
                        {section.image.caption}
                      </figcaption>
                    </figure>
                  )}
                </section>
              ))}

              {/* Warm Closing Invitation */}
              <div className="mt-10 pt-7 border-t border-stone-200 space-y-5">
                <h3 className="text-xl font-extrabold text-stone-950">
                  Come See the Classroom Yourself
                </h3>
                <p className="text-stone-800 font-medium leading-[1.82]">
                  {post.closingNote}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => onScrollTo('book-visit')}
                    className="px-6 py-3 rounded-full font-bold text-sm text-white bg-[#F43F5E] hover:bg-[#E11D48] transition-all shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book a Morning Visit</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenApply}
                    className="px-6 py-3 rounded-full font-bold text-sm text-[#1E3A8A] bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Apply for Session 2026</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sticky Editorial Margin Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Chapter Jump Guide */}
            <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-xs">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-stone-500 mb-4">
                In This Guide
              </h3>
              <nav aria-label="Article chapters" className="space-y-2.5">
                {post.sections.map((sec, i) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className="w-full text-left flex items-start gap-3 py-1.5 text-sm text-stone-700 hover:text-[#1E3A8A] transition-colors group cursor-pointer"
                  >
                    <span className="text-xs font-extrabold text-stone-400 group-hover:text-[#F43F5E] tabular-nums mt-0.5">
                      0{i + 1}
                    </span>
                    <span className="font-bold leading-snug group-hover:underline">
                      {sec.heading}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Parent Takeaways Summary */}
            <div className="bg-[#FFF9F0] rounded-3xl border border-amber-200/80 p-6 space-y-4">
              <h3 className="text-lg font-extrabold text-stone-950">
                {post.parentChecklistTitle}
              </h3>
              <ul className="space-y-3">
                {post.parentChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-amber-200/80 text-amber-950 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-extrabold">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Local Campus Context Card */}
            <div className="bg-sky-50/70 rounded-3xl border border-sky-200/80 p-6 space-y-3">
              <div className="text-xs font-extrabold uppercase tracking-widest text-sky-800">
                Observe a Live Morning Class
              </div>
              <h3 className="text-xl font-extrabold text-[#1E3A8A]">
                Little Nest Montessori Campus
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Serving Playgroup (2–3), Nursery (3–4), and Kindergarten (4–6) families across Sector I-14, I-15, I-16, H-13, G-13 Islamabad &amp; Rawalpindi.
              </p>
              <div className="pt-1 space-y-1.5 text-xs text-stone-700 font-medium">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#F43F5E] shrink-0 mt-0.5" />
                  <span>{SCHOOL_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                  <span>Mon–Fri · {SCHOOL_INFO.officeHours}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onScrollTo('book-visit')}
                className="mt-2 w-full py-2.5 px-4 rounded-full font-bold text-xs text-white bg-[#1E3A8A] hover:bg-blue-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Schedule Campus Tour</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
