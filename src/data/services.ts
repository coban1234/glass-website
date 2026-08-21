export type LeafPage = {
  slug: string;
  h1: string;
  title: string;
  meta: string;
  lead: string;
  category: 'residential' | 'commercial' | 'strata';
  imageKey:
    | 'fogged'
    | 'house'
    | 'patio'
    | 'hardware'
    | 'living'
    | 'shower'
    | 'mirror'
    | 'railing'
    | 'glassRack'
    | 'storefront'
    | 'door'
    | 'facade'
    | 'office'
    | 'night'
    | 'film'
    | 'apartment'
    | 'crew'
    | 'midrise';
};

export const leafServices: LeafPage[] = [
  {
    slug: 'residential/foggy-window-sealed-unit-replacement',
    h1: 'Foggy window repair & sealed unit replacement',
    title: 'Foggy Window & Sealed Unit Replacement Vancouver',
    meta: 'Condensation between the panes means a failed seal. We replace the sealed unit and keep your existing frame. Metro Vancouver.',
    lead: 'Condensation between the panes means a failed seal. We replace the sealed unit and keep your existing frame.',
    category: 'residential',
    imageKey: 'fogged',
  },
  {
    slug: 'residential/broken-window-glass-replacement',
    h1: 'Broken window glass replacement',
    title: 'Broken Window Glass Replacement Vancouver',
    meta: 'Broken or cracked window glass replaced across Metro Vancouver. Same-day temporary glazing and 24/7 emergency board-up.',
    lead: 'Broken glass is a security problem. We secure the opening, then replace the pane or the sealed unit.',
    category: 'residential',
    imageKey: 'house',
  },
  {
    slug: 'residential/patio-door-glass-and-roller-repair',
    h1: 'Patio door glass and roller repair',
    title: 'Sliding Patio Door Repair Vancouver',
    meta: 'Patio door glass, rollers, tracks, and tempered replacements across Metro Vancouver.',
    lead: 'Glass, rollers, and track — most stuck sliders are a hardware problem, not a new door.',
    category: 'residential',
    imageKey: 'patio',
  },
  {
    slug: 'residential/window-hardware-repair',
    h1: 'Window hardware repair',
    title: 'Window Crank & Hardware Repair Vancouver',
    meta: 'Cranks, balances, hinges, latches, and weatherstripping. Metro Vancouver.',
    lead: 'When the hardware fails and the glass is fine, we repair the hardware.',
    category: 'residential',
    imageKey: 'hardware',
  },
  {
    slug: 'residential/skylight-glass-replacement',
    h1: 'Skylight glass replacement',
    title: 'Skylight Repair Vancouver',
    meta: 'Laminated skylight glass replacement. Leak diagnosis and access handled. Metro Vancouver.',
    lead: 'Overhead glazing is laminated for a reason. We replace the glass and check the curb.',
    category: 'residential',
    imageKey: 'living',
  },
  {
    slug: 'residential/shower-glass-and-enclosures',
    h1: 'Shower glass & enclosures',
    title: 'Frameless Shower Glass Vancouver',
    meta: 'Frameless and semi-frameless shower glass in 10 and 12 mm tempered. Metro Vancouver.',
    lead: 'Frameless, semi-frameless, and sliding enclosures in tempered safety glass, measured to the tile.',
    category: 'residential',
    imageKey: 'shower',
  },
  {
    slug: 'residential/mirrors',
    h1: 'Custom mirrors',
    title: 'Custom Mirrors Vancouver',
    meta: 'Bathroom, gym, closet, and back-painted mirrors. Polished or bevelled edges. Metro Vancouver.',
    lead: 'Cut to the wall, polished or bevelled, safety-backed where it matters.',
    category: 'residential',
    imageKey: 'mirror',
  },
  {
    slug: 'residential/glass-railings',
    h1: 'Glass railings & guard glass',
    title: 'Glass Railing Vancouver',
    meta: 'Glass railings and balcony guards. Safety glazing to CAN/CGSB-12.1. Metro Vancouver.',
    lead: 'The view is the product. The code is the work. We replace panels in existing systems and build new guards.',
    category: 'residential',
    imageKey: 'railing',
  },
  {
    slug: 'residential/custom-glass-and-tabletops',
    h1: 'Custom glass and tabletops',
    title: 'Custom Cut Glass Vancouver',
    meta: 'CNC shapes, polished edges, low-iron tabletops and shelving. Metro Vancouver.',
    lead: 'Cut to drawing, polished or bevelled, low-iron when the green edge would show.',
    category: 'residential',
    imageKey: 'glassRack',
  },
  {
    slug: 'commercial/storefront-glass-repair',
    h1: 'Storefront glass repair',
    title: 'Storefront Glass Repair Vancouver',
    meta: 'After-hours storefront glass repair and board-up. Tempered and laminated. Metro Vancouver.',
    lead: 'The real cost of a broken storefront is closing during business hours. We work after hours.',
    category: 'commercial',
    imageKey: 'storefront',
  },
  {
    slug: 'commercial/commercial-door-glass-and-hardware',
    h1: 'Commercial door glass and hardware',
    title: 'Commercial Door Repair Vancouver',
    meta: 'Closers, pivots, panic devices, and full-height glass entries. Metro Vancouver.',
    lead: 'Doors that have to work at 7am. Glass, closers, and exit hardware.',
    category: 'commercial',
    imageKey: 'door',
  },
  {
    slug: 'commercial/curtain-wall-and-window-wall',
    h1: 'Curtain wall and window wall',
    title: 'Curtain Wall Glass Replacement Vancouver',
    meta: 'Unitised and stick curtain wall glass replacement with high-rise access. Metro Vancouver.',
    lead: 'High-rise glass with the access method the building actually needs.',
    category: 'commercial',
    imageKey: 'facade',
  },
  {
    slug: 'commercial/office-glass-partitions',
    h1: 'Office glass partitions',
    title: 'Office Glass Partitions Vancouver',
    meta: 'Demountable, frameless, and acoustic glass partitions. Metro Vancouver.',
    lead: 'Single and double-glazed office fronts, manifestation film included.',
    category: 'commercial',
    imageKey: 'office',
  },
  {
    slug: 'commercial/security-and-safety-glazing',
    h1: 'Security and safety glazing',
    title: 'Security Glass Vancouver',
    meta: 'Laminated, security film, and forced-entry resistance. Metro Vancouver.',
    lead: 'Laminated glass and film that hold when annealed would not.',
    category: 'commercial',
    imageKey: 'night',
  },
  {
    slug: 'commercial/window-film',
    h1: 'Window film',
    title: 'Window Film Vancouver',
    meta: 'Solar, privacy, safety, and anti-graffiti film. Metro Vancouver.',
    lead: 'Film when replacement is not the job — solar, privacy, safety, anti-graffiti.',
    category: 'commercial',
    imageKey: 'film',
  },
  {
    slug: 'strata/sealed-unit-replacement-programs',
    h1: 'Sealed unit replacement programs',
    title: 'Strata Sealed Unit Programs Vancouver',
    meta: 'Building-wide sealed unit programs with documentation for councils. Metro Vancouver.',
    lead: 'Survey, condition report, phased quotes that fit a budget cycle, resident notice, completion photos.',
    category: 'strata',
    imageKey: 'apartment',
  },
  {
    slug: 'strata/rope-access-glass-replacement',
    h1: 'Rope access glass replacement',
    title: 'Rope Access Glass Replacement Vancouver',
    meta: 'Rope-access glass replacement for high-rise strata and commercial. Metro Vancouver.',
    lead: 'When a lift will not reach, rope access will — if the crew is certified for it. [CLIENT to confirm.]',
    category: 'strata',
    imageKey: 'crew',
  },
  {
    slug: 'strata/balcony-and-guard-glass',
    h1: 'Balcony and guard glass',
    title: 'Strata Guard Glass Vancouver',
    meta: 'Balcony guard glass replacement for strata buildings. Metro Vancouver.',
    lead: 'Single-panel replacement in an existing system, matched as closely as discontinued glass allows.',
    category: 'strata',
    imageKey: 'midrise',
  },
];
