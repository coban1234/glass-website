import { withBase } from '../lib/base';

export const site = {
  brand: 'Northlight Glass',
  region: 'Metro Vancouver',
  phoneDisplay: '(604) XXX-XXXX',
  phoneTel: 'tel:+16040000000',
  email: '[EMAIL]',
  strataEmail: '[STRATA EMAIL]',
  quoteEmail: '[QUOTE EMAIL]',
  sms: '[SMS NUMBER]',
  address: '[ADDRESS]',
  hours: 'Mon–Fri 7am–6pm',
  emergencyHours: '24/7 emergency',
  rating: '[RATING]',
  reviewCount: '[COUNT]',
  positioning: 'We replace the glass, not the whole window.',
} as const;

/** Stand-in photography only. Replace with commissioned shots before launch.
 *  fogged/clear are the homepage hero pair — do not reuse them as generic page banners. */
export const photos = {
  fogged: withBase('/images/hero-fogged.jpg'),
  foggedSrcset: `${withBase('/images/hero-fogged-2560.jpg')} 2560w, ${withBase('/images/hero-fogged.jpg')} 5504w`,
  clear: withBase('/images/hero-clear.jpg'),
  clearSrcset: `${withBase('/images/hero-clear-2560.jpg')} 2560w, ${withBase('/images/hero-clear.jpg')} 5504w`,
  living:
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80',
  storefront:
    'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1600&q=80',
  midrise:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
  shower:
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1600&q=80',
  house:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  crew: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80',
  apartment:
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
  night: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2400&q=80',
  glassRack:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  mirror:
    'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1600&q=80',
  patio:
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
  door: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  office:
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
  film: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
  facade:
    'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80',
  hardware:
    'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80',
  railing:
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1600&q=80',
};

export const residentialRepair = [
  { href: withBase('/services/residential/foggy-window-sealed-unit-replacement/'), label: 'Foggy / sealed units' },
  { href: withBase('/services/residential/broken-window-glass-replacement/'), label: 'Broken glass' },
  { href: withBase('/services/residential/patio-door-glass-and-roller-repair/'), label: 'Patio doors' },
  { href: withBase('/services/residential/window-hardware-repair/'), label: 'Window hardware' },
  { href: withBase('/services/residential/skylight-glass-replacement/'), label: 'Skylights' },
];

export const residentialInstall = [
  { href: withBase('/services/residential/shower-glass-and-enclosures/'), label: 'Shower glass' },
  { href: withBase('/services/residential/mirrors/'), label: 'Mirrors' },
  { href: withBase('/services/residential/glass-railings/'), label: 'Glass railings' },
  { href: withBase('/services/residential/custom-glass-and-tabletops/'), label: 'Custom glass' },
];

export const commercialLinks = [
  { href: withBase('/services/commercial/storefront-glass-repair/'), label: 'Storefront glass' },
  { href: withBase('/services/commercial/commercial-door-glass-and-hardware/'), label: 'Door glass & hardware' },
  { href: withBase('/services/commercial/office-glass-partitions/'), label: 'Partitions' },
  { href: withBase('/services/commercial/security-and-safety-glazing/'), label: 'Security glazing' },
  { href: withBase('/services/commercial/window-film/'), label: 'Window film' },
  { href: withBase('/services/commercial/curtain-wall-and-window-wall/'), label: 'Curtain wall' },
];

export const strataLinks = [
  { href: withBase('/services/strata/sealed-unit-replacement-programs/'), label: 'Sealed unit programs' },
  { href: withBase('/services/strata/rope-access-glass-replacement/'), label: 'Rope access' },
  { href: withBase('/services/strata/balcony-and-guard-glass/'), label: 'Balcony guard glass' },
];

export const services = [
  {
    slug: 'foggy',
    href: withBase('/services/residential/foggy-window-sealed-unit-replacement/'),
    title: 'Sealed unit replacement',
    image: photos.fogged,
  },
  {
    slug: 'emergency',
    href: withBase('/emergency/'),
    title: 'Emergency glass repair',
    image: photos.night,
  },
  {
    slug: 'storefront',
    href: withBase('/services/commercial/storefront-glass-repair/'),
    title: 'Storefront glass',
    image: photos.storefront,
  },
  {
    slug: 'shower',
    href: withBase('/services/residential/shower-glass-and-enclosures/'),
    title: 'Shower enclosures',
    image: photos.shower,
  },
  {
    slug: 'mirrors',
    href: withBase('/services/residential/mirrors/'),
    title: 'Custom mirrors',
    image: photos.mirror,
  },
  {
    slug: 'strata',
    href: withBase('/services/strata/'),
    title: 'Strata programs',
    image: photos.midrise,
  },
];

export const howItWorks = [
  {
    n: '01',
    title: 'Call or send a photo',
    body: 'Text a photo and rough measurements, or use the contact form. Most jobs can be priced from that alone.',
  },
  {
    n: '02',
    title: 'Get a written quote',
    body: 'A fixed price, the glass spec, and a lead time — usually the same day.',
  },
  {
    n: '03',
    title: 'We measure and order',
    body: 'We confirm on site, then fabricate to exact size. Standard units are typically ready within [X] days.',
  },
  {
    n: '04',
    title: 'Install and clean up',
    body: 'Usually under two hours per unit. We take the old glass away and recycle it.',
  },
];

export const reviews = [
  {
    quote: 'They replaced three fogged units without touching the frames. In and out in a morning.',
    name: 'J. Patel',
    place: 'Burnaby',
  },
  {
    quote: 'Storefront boarded at 1am, glass in before we opened. Insurance photos were already done.',
    name: 'M. Chen',
    place: 'Mount Pleasant',
  },
  {
    quote: 'Our strata needed a phased program and actual paperwork. They delivered both.',
    name: 'R. Singh',
    place: 'New Westminster',
  },
];

export const projects = [
  {
    slug: 'kitsilano-sealed-units',
    title: 'Sealed unit replacement, 1978 low-rise',
    location: 'Kitsilano',
    property: 'Residential low-rise',
    service: 'Sealed unit replacement',
    scope: '14 failed IGUs, two elevations',
    glass: 'Double-glazed, Low-E, argon',
    access: 'Ladder',
    duration: '3 days',
    problem: 'Fourteen units had failed seals. The aluminium frames were sound.',
    did: 'We measured, fabricated matching Low-E units, and replaced the glass without touching the frames.',
    result: 'Clear views again, same frames, a fraction of a window-replacement quote.',
    image: photos.clear,
  },
  {
    slug: 'mount-pleasant-storefront',
    title: 'Overnight storefront board-up and glass',
    location: 'Mount Pleasant',
    property: 'Retail',
    service: 'Storefront glass repair',
    scope: 'Tempered lite, aluminium frame check',
    glass: 'Tempered, 10 mm',
    access: 'Street level, after hours',
    duration: 'Board-up same night; glass next evening',
    problem: 'A break-in left a hole in the shopfront at 11pm.',
    did: 'Board-up that night, insurance photos, tempered glass in after close the next day.',
    result: 'The shop opened on schedule. No daytime closure.',
    image: photos.storefront,
  },
  {
    slug: 'west-vancouver-shower',
    title: 'Frameless shower enclosure',
    location: 'West Vancouver',
    property: 'House',
    service: 'Shower glass',
    scope: 'Frameless 12 mm enclosure',
    glass: '12 mm tempered, polished edge',
    access: 'Interior',
    duration: 'Measure + 8-day fabricate + 3-hour install',
    problem: 'A dated framed enclosure was leaking at the curb.',
    did: 'Tempered 12 mm frameless panels, brushed nickel hinges, coating.',
    result: 'A clear enclosure that reads as part of the room.',
    image: photos.shower,
  },
  {
    slug: 'new-westminster-strata',
    title: 'Phased sealed-unit program, 38 units',
    location: 'New Westminster',
    property: 'Strata mid-rise',
    service: 'Strata sealed unit program',
    scope: 'Survey + 38 replacements over two budget cycles',
    glass: 'Double-glazed, Low-E',
    access: 'Boom lift',
    duration: 'Two phases, 11 months',
    problem: 'Failed units across one elevation. Council needed a plan that fit the AGM.',
    did: 'Unit-by-unit condition report, phased quotes, resident notice, lift access, completion photos.',
    result: 'Documentation the council could put in front of an AGM, and a building that looks finished.',
    image: photos.apartment,
  },
];

export const municipalities = [
  'Vancouver',
  'Burnaby',
  'Richmond',
  'New Westminster',
  'North Vancouver',
  'West Vancouver',
  'Surrey',
  'Coquitlam',
];

export type ServicePage = {
  path: string;
  title: string;
  h1: string;
  keyword: string;
  meta: string;
  lead: string;
  image: string;
  crumbs: { href: string; label: string }[];
};

export const servicePages: ServicePage[] = [
  {
    path: '/services/residential/foggy-window-sealed-unit-replacement/',
    title: 'Foggy Window & Sealed Unit Replacement Vancouver',
    h1: 'Foggy window repair & sealed unit replacement',
    keyword: 'foggy window repair Vancouver',
    meta: 'Condensation between the panes means a failed seal. We replace the sealed unit and keep your existing frame — typically half the cost of a new window. Metro Vancouver.',
    lead: 'Condensation between the panes means a failed seal. We replace the sealed unit and keep your existing frame.',
    image: photos.fogged,
    crumbs: [
      { href: withBase('/services/'), label: 'Services' },
      { href: withBase('/services/residential/'), label: 'Residential' },
      { href: withBase('/services/residential/foggy-window-sealed-unit-replacement/'), label: 'Foggy windows' },
    ],
  },
  {
    path: '/services/residential/broken-window-glass-replacement/',
    title: 'Broken Window Glass Replacement Vancouver',
    h1: 'Broken window glass replacement',
    keyword: 'broken window repair Vancouver',
    meta: 'Broken or cracked window glass replaced across Metro Vancouver. Same-day temporary glazing and 24/7 emergency board-up.',
    lead: 'Broken glass is a security problem. We secure the opening, then replace the pane or the sealed unit.',
    image: photos.house,
    crumbs: [
      { href: withBase('/services/'), label: 'Services' },
      { href: withBase('/services/residential/'), label: 'Residential' },
      { href: withBase('/services/residential/broken-window-glass-replacement/'), label: 'Broken glass' },
    ],
  },
  {
    path: '/services/residential/shower-glass-and-enclosures/',
    title: 'Frameless Shower Glass Vancouver',
    h1: 'Shower glass & enclosures',
    keyword: 'frameless shower glass Vancouver',
    meta: 'Frameless and semi-frameless shower glass in 10 and 12 mm tempered. Metro Vancouver.',
    lead: 'Frameless, semi-frameless, and sliding enclosures in tempered safety glass, measured to the tile.',
    image: photos.shower,
    crumbs: [
      { href: withBase('/services/'), label: 'Services' },
      { href: withBase('/services/residential/'), label: 'Residential' },
      { href: withBase('/services/residential/shower-glass-and-enclosures/'), label: 'Shower glass' },
    ],
  },
  {
    path: '/services/commercial/storefront-glass-repair/',
    title: 'Storefront Glass Repair Vancouver',
    h1: 'Storefront glass repair',
    keyword: 'storefront glass repair Vancouver',
    meta: 'After-hours storefront glass repair and board-up across Metro Vancouver. Tempered and laminated.',
    lead: 'The real cost of a broken storefront is closing during business hours. We work after hours.',
    image: photos.storefront,
    crumbs: [
      { href: withBase('/services/'), label: 'Services' },
      { href: withBase('/services/commercial/'), label: 'Commercial' },
      { href: withBase('/services/commercial/storefront-glass-repair/'), label: 'Storefront' },
    ],
  },
];
