import * as React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { AnimatedTextCycle } from '../components/AnimatedTextCycle'
import { Button } from '../components/ui/button'
import { cn } from '../lib/utils'

const WA_LINK = 'https://wa.me/972523518103?text=היי, הגעתי דרך האתר, אשמח לפרטים נוספים'

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.106 1.523 5.83L0 24l6.335-1.508A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.804 9.804 0 01-5.012-1.374l-.36-.213-3.76.896.947-3.663-.235-.376A9.804 9.804 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  )
}

/* ═══════════════════════════════════════
   1. HERO
═══════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(125% 125% at 50% 100%, transparent 0%, var(--background) 75%)' }}
      />
      <div className="pt-28 pb-0 md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="mx-auto mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-200/60 bg-amber-50/80 px-5 py-2 shadow-sm">
                <span className="text-sm font-medium tracking-wide text-amber-900/90">
                  רון סמרה &nbsp;·&nbsp; BAc Lic Ac &nbsp;·&nbsp; 35+ שנות ניסיון קליני
                </span>
              </div>

              <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight text-stone-900 md:text-6xl xl:text-7xl">
                <AnimatedTextCycle
                  words={['כאב', 'סטרס', 'שינה לא מאוזנת', 'מתח', 'חרדה', 'מיגרנות']}
                  interval={3000}
                  className="bg-gradient-to-l from-amber-700 via-amber-600 to-amber-500 bg-clip-text text-transparent"
                />
                <span className="text-stone-400">?</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-balance text-xl font-light leading-relaxed text-stone-600 md:text-2xl">
                טיפול מדויק שמכוון לשורש הבעיה — לא רק לסימפטום.
              </p>
              <p className="mx-auto mt-2 text-base text-stone-400">
                מודיעין מכבים רעות · מטפל מוסמך בכללית משלימה
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Button asChild size="lg" className="w-full rounded-2xl px-8 py-7 text-lg font-medium bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0 shadow-lg shadow-amber-500/25 sm:w-auto">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <WaIcon />
                  התייעצות חינם בוואטסאפ
                </a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="w-full rounded-2xl px-8 py-7 text-base font-normal text-stone-600 hover:bg-stone-100 sm:w-auto">
                <a href="#treatments">איך הטיפול עובד ←</a>
              </Button>
            </motion.div>

          </div>
        </div>

        {/* Hero image card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mt-16 overflow-hidden px-4 sm:mt-20"
        >
          <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-background" />
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-amber-200/40 bg-gradient-to-br from-amber-50/50 via-stone-50/50 to-amber-50/30 p-6 shadow-2xl shadow-amber-900/10">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-amber-100/60 bg-gradient-to-br from-amber-100/40 to-stone-100/40">
              <img
                src="/images/hero/ron-hero-mobile.jpg"
                alt="מרפאת רון סמרה"
                className="absolute inset-0 h-full w-full object-cover object-top"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              <div className="flex h-full items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl md:text-8xl">🌿</div>
                  <p className="text-stone-500 text-sm max-w-sm mx-auto">
                    רפואה סינית מסורתית ודיקור — טיפול הוליסטי מקצועי
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   2. TRUST BAR
═══════════════════════════════════════ */
function TrustBar() {
  const items = [
    { num: '35+',   label: 'שנות ניסיון קליני' },
    { num: 'אלפי', label: 'מטופלים' },
    { num: 'מייסד', label: 'האגודה לרפואה סינית בישראל' },
    { num: 'מרצה',  label: 'באוניברסיטה העברית' },
  ]
  return (
    <div className="border-y border-border bg-card py-6">
      <div className="mx-auto max-w-6xl px-6">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item, i) => (
            <li key={i} className="flex flex-col items-center text-center px-4 py-3 border-e border-border last:border-e-0 [&:nth-child(2)]:border-e-0 md:[&:nth-child(2)]:border-e">
              <span className="font-['Frank_Ruhl_Libre'] text-2xl font-bold text-amber-700">{item.num}</span>
              <span className="mt-1 text-xs text-muted-foreground">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════
   3. TREATMENTS
═══════════════════════════════════════ */
const treatments = [
  { icon: '🦴', title: 'כאב גב, צוואר וכתפיים', desc: 'כאב כרוני, נוקשות ומתח שמגבילים את היומיום', href: '/articles/pillar-pain.html' },
  { icon: '🤕', title: 'כאבי ראש ומיגרנות', desc: 'הקלה על מיגרנות חוזרות וכאבי ראש כרוניים', href: '/articles/pillar-pain.html' },
  { icon: '😮‍💨', title: 'סטרס וחרדה', desc: 'מתח מתמשך, דאגנות ותחושת עומס שלא מרפה', href: '/articles/pillar-stress-sleep.html' },
  { icon: '🌙', title: 'הפרעות שינה', desc: 'קושי להירדם, שינה קטועה ועייפות למחרת', href: '/articles/pillar-stress-sleep.html' },
  { icon: '🫁', title: 'אסטמה וקוצר נשימה', desc: 'הפחתת תדירות ועוצמת הסימפטומים', href: '/articles/pillar-digestion.html' },
  { icon: '🌸', title: 'פריון ובריאות האישה', desc: 'תמיכה בפריון, מחזור ואיזון הורמונלי', href: '/articles/pillar-fertility.html' },
]

function TreatmentsSection() {
  return (
    <section id="treatments" className="py-20 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">תחומי טיפול</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">מה הגוף מנסה לומר</h2>
          <p className="mt-3 text-muted-foreground">רפואה סינית קלאסית מטפלת בשורש, לא רק בסימפטום</p>
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {treatments.map((t) => (
            <li key={t.title}>
              <a href={t.href} className="flex h-full flex-col items-center rounded-2xl border border-border bg-card p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md">
                <span className="text-3xl" aria-hidden="true">{t.icon}</span>
                <h3 className="mt-3 text-sm font-bold text-foreground leading-snug">{t.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed flex-1">{t.desc}</p>
                <span className="mt-3 text-xs font-bold text-amber-600">למאמר ←</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   4. ABOUT
═══════════════════════════════════════ */
function AboutSection() {
  const credentials = [
    'BAc. Lic. Ac — I.C.O.M London',
    '7 שנים בלונדון (4 לימוד + 3 הדרכה קלינית)',
    'ממקימי האגודה לרפואה סינית בישראל (1995)',
    'מטפל מוסמך בכללית משלימה',
    'חבר באיגוד הבריטי לרפואה סינית (B.Ac.C)',
    'מרצה באוניברסיטה העברית',
  ]
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:items-center">

          <div className="order-2 md:order-1 overflow-hidden rounded-3xl aspect-[4/5] bg-amber-50 border border-border">
            <img
              src="/images/clinic/ron-portrait-clinic.jpg"
              alt="רון סמרה — מטפל ברפואה סינית"
              className="h-full w-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const next = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (next) next.style.display = 'flex';
              }}
            />
            <div className="hidden h-full items-center justify-center text-muted-foreground text-sm" aria-hidden="true">
              תמונת פורטרט
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">אודות</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              35 שנה של ידע,<br />בשירות הגוף שלך
            </h2>

            {/* Pull quote */}
            <blockquote className="my-6 border-s-4 border-amber-400 ps-4">
              <p className="text-lg font-['Frank_Ruhl_Libre'] italic text-stone-700 leading-relaxed">
                "אני לא מטפל בסימפטום. אני מחפש את הסיבה ומטפל בה."
              </p>
            </blockquote>

            <div className="space-y-3 text-stone-600 leading-relaxed text-sm md:text-base">
              <p>
                אני רון סמרה. מאז 1989 אני מטפל בכלים של רפואה סינית קלאסית —
                דיקור, צמחי מרפא, טווינה ומוקסה.
              </p>
              <p>
                למדתי בקולג' הבינלאומי לרפואה סינית בלונדון ושהיתי שם 7 שנים —
                4 שנות לימוד ו-3 שנות הדרכה קלינית. חזרתי לישראל לעבוד עם קופות החולים ובקליניקה פרטית.
              </p>
              <p>
                הגישה שלי פשוטה: לא רק לטפל בסימפטום — אלא להבין מה עומד מאחוריו.
              </p>
            </div>

            <ul className="mt-6 space-y-2.5">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="mt-0.5 shrink-0 font-bold text-amber-600">✓</span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild size="lg" className="rounded-2xl bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0 shadow-lg shadow-amber-500/20">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  <WaIcon />
                  שאלו אותי ישירות
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   5. PROCESS (4 steps)
═══════════════════════════════════════ */
const processSteps = [
  {
    num: '01',
    title: 'אבחון חוקתי',
    sub: 'Constitutional Diagnosis · Stems & Branches',
    desc: 'שיחה מעמיקה ואבחון על-פי שיטת Stems & Branches — חיפוש שורש חוסר האיזון, לא רק הסימפטום.',
  },
  {
    num: '02',
    title: 'שחרור הזרימה',
    sub: 'Flow Restoration',
    desc: 'דיקור מדויק לשחרור חסימות אנרגטיות ושחזור זרימת ה-Qi בערוצי הגוף.',
  },
  {
    num: '03',
    title: 'התיקון המבני',
    sub: 'The Structural Fix',
    desc: 'טיפול ממוקד בשורש הבעיה — צמחי מרפא, טווינה ומוקסה בהתאם לצרכים האישיים.',
  },
  {
    num: '04',
    title: 'חוסן ושמירה',
    sub: 'Resilience & Maintenance',
    desc: 'בניית עמידות הגוף, מניעת הישנות ושמירה על האיזון שהושג לאורך זמן.',
  },
]

function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-stone-900 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">תהליך הטיפול</span>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            התהליך פשוט, ברור ומותאם אישית
          </h2>
          <p className="mt-3 text-stone-400">טיפול טוב מתחיל בהקשבה</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-4 font-['Frank_Ruhl_Libre'] text-4xl font-bold text-amber-500/60">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-1 text-xs text-amber-400/80 font-medium tracking-wide">{step.sub}</p>
              <p className="mt-3 text-sm text-stone-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   6. TESTIMONIALS
═══════════════════════════════════════ */
const testimonials = [
  {
    text: 'הצלחת להביאני למצב בריא. אתה כישרון אמיתי.',
    author: 'חנה תבל',
    context: 'פציאליס וחרדה · תוך חודש ימים',
  },
  {
    text: 'מאז השתמשתי פעמים ספורות בלבד במשאף. השיפור היה מורגש תוך כמה מפגשים בלבד.',
    author: 'א.י',
    context: 'אסטמה · תוך 5 טיפולים',
  },
  {
    text: 'בפעם הראשונה בשנים אני קם בבוקר ומרגיש נח. כאב שלא נתן לי לישון — נעלם כמעט לגמרי.',
    author: 'דני ל.',
    context: 'נדודי שינה כרוניים · תוך 4 טיפולים',
  },
]

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">ביקורות</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">מה מטופלים אומרים</h2>
          <div className="mt-3 flex items-center justify-center gap-1.5">
            <span className="text-amber-400 text-lg">★★★★★</span>
            <span className="text-sm text-muted-foreground">Google Reviews</span>
          </div>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.author} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm border-s-4 border-s-amber-400">
              <span aria-hidden="true" className="absolute top-3 start-5 font-['Frank_Ruhl_Libre'] text-5xl leading-none text-amber-100 select-none">"</span>
              <p className="relative text-sm leading-relaxed text-foreground mb-4">{t.text}</p>
              <div className="border-t border-border pt-3 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-amber-700 block">{t.author}</span>
                    <span className="text-xs text-muted-foreground">{t.context}</span>
                  </div>
                  <span className="text-amber-400 text-sm" aria-label="5 כוכבים">★★★★★</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   7. FAQ
═══════════════════════════════════════ */
const faqs = [
  {
    q: 'האם דיקור סיני כואב?',
    a: 'בדרך כלל לא. המחטים דקות מאוד — רוב המטופלים כמעט לא מרגישים אותן. ייתכן עקצוץ קל בלבד. רוב האנשים נרגעים ולעיתים אף נרדמים במהלך הטיפול.',
  },
  {
    q: 'כמה טיפולים צריך?',
    a: 'בעיות חדשות ואקוטיות: בדרך כלל 3–5 טיפולים. בעיות כרוניות שנמשכות שנים: בדרך כלל 6–10 טיפולים. אקבע אומדן מדויק יותר לאחר האבחון הראשון.',
  },
  {
    q: 'תוך כמה זמן מרגישים שיפור?',
    a: 'מטופלים רבים מדווחים על שיפור כבר לאחר 1–3 טיפולים. בבעיות ותיקות השיפור נוטה להיות הדרגתי ומצטבר.',
  },
  {
    q: 'האם אפשר לשלב עם טיפול רפואי רגיל?',
    a: 'כן, בהחלט. רפואה סינית משלימה את הטיפול הרפואי הקונבנציונלי ולא מחליפה אותו. חשוב ליידע את הרופא המטפל.',
  },
  {
    q: 'מה כלול בטיפול הראשון?',
    a: 'הטיפול הראשון כולל: אבחון קונסטיטוציונלי מלא, תשאול רפואי מקיף, בניית תוכנית טיפול אישית, וטיפול דיקור ראשון. סה"כ 60–75 דקות.',
  },
]

function FaqSection() {
  const [open, setOpen] = React.useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-muted/40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">שאלות נפוצות</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">שאלות ותשובות</h2>
        </div>

        <ul className="space-y-3">
          {faqs.map((faq, i) => (
            <li key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-start font-semibold text-foreground hover:bg-muted/40 transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 shrink-0 text-amber-600 transition-transform duration-200',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground mb-4">יש שאלה נוספת?</p>
          <Button asChild size="lg" className="rounded-2xl bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon />
              שאלו אותי בוואטסאפ
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   9. ARTICLES PREVIEW
═══════════════════════════════════════ */
const articlePreviews = [
  { icon: '🦴', tag: 'כאב ותנועה', title: 'כאב גב וצוואר — מה הרפואה הסינית אומרת ואיך היא מטפלת', desc: 'הבנת שורש הכאב הכרוני ודרכי הטיפול הקלאסיות', href: '/articles/pillar-pain.html' },
  { icon: '🌙', tag: 'שינה וסטרס', title: 'סטרס ושינה — כיצד רפואה סינית מאזנת את מערכת העצבים', desc: 'הקשר בין מתח, שינה ובריאות כוללת — ומה אפשר לעשות', href: '/articles/pillar-stress-sleep.html' },
  { icon: '🌿', tag: 'עיכול וחיסון', title: 'עיכול ואיזון — הקשר בין מעיים, חיסון ואנרגיה', desc: 'כיצד מערכת העיכול משפיעה על כל הגוף ואיך לחזק אותה', href: '/articles/pillar-digestion.html' },
]

function ArticlesPreviewSection() {
  return (
    <section id="articles" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">ידע ורפואה</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">מאמרים מהמרפאה</h2>
          <p className="mt-3 text-muted-foreground">מדריכים מעמיקים על רפואה סינית, הגוף, ובריאות כוללת</p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articlePreviews.map((a) => (
            <li key={a.title}>
              <a href={a.href} className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="flex aspect-video items-center justify-center bg-amber-50/60 border-b border-border">
                  <span className="text-5xl" aria-hidden="true">{a.icon}</span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">{a.tag}</span>
                  <h3 className="text-base font-bold text-foreground leading-snug">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.desc}</p>
                  <span className="mt-2 text-sm font-bold text-amber-700">לקריאה ←</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <a href="articles.html">כל המאמרים ←</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   10. CTA
═══════════════════════════════════════ */
function CtaSection() {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">מוכנים להתחיל?</h2>
        <p className="mt-4 text-lg font-light text-stone-300">
          שלחו הודעה ונקבע זמן שנוח לכם — בלי לחץ, בלי התחייבות.
        </p>
        <p className="mt-1 text-sm text-amber-400">אפשר להתייעץ בלי התחייבות</p>

        <div className="mt-10">
          <Button asChild size="lg" className="rounded-2xl px-10 py-7 text-lg font-medium bg-gradient-to-l from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white border-0 shadow-xl shadow-amber-700/30">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <WaIcon />
              שלחו הודעה עכשיו
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-stone-400">
          <span>📍 מודיעין מכבים רעות</span>
          <span>🕘 ראשון–חמישי 09:00–19:00</span>
          <span>📞 052-351-8103</span>
        </div>

        {/* Clinic details */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
          {['חניה חינם בסביבה', 'חדר שקט ונקי', 'ציוד חד-פעמי', 'פרטיות מלאה'].map((detail) => (
            <div key={detail} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-stone-400">
              {detail}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Header page="home" />
      <main>
        <HeroSection />
        <TrustBar />
        <TreatmentsSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ArticlesPreviewSection />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
