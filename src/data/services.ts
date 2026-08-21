export type ServiceBand = {
  kicker: string;
  heading: string;
  body: string;
  cta?: 'emergency' | 'quote';
};

export type LeafPage = {
  slug: string;
  h1: string;
  title: string;
  meta: string;
  lead: string;
  keyword: string;
  band: ServiceBand;
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
    title: 'Foggy Window Repair Vancouver | Sealed Unit Replacement',
    meta: 'Foggy window repair in Vancouver. We replace the sealed unit (IGU) and keep your frame. Same-day photo quotes across Metro Vancouver.',
    lead: 'Foggy window repair in Metro Vancouver is a sealed-unit job, not a new window. Condensation between the panes means the IGU seal failed — we replace the glass and keep your existing frame.',
    keyword: 'foggy window repair Vancouver',
    band: {
      kicker: 'Keep the frame',
      heading: 'Replace the sealed unit, not the window.',
      body: 'When the perimeter seal fails, moisture sits between the panes. Cleaning does nothing. We measure the existing IGU, fabricate a matching unit, and swap only the glass — frames, trim, and sills stay.',
    },
    category: 'residential',
    imageKey: 'fogged',
  },
  {
    slug: 'residential/broken-window-glass-replacement',
    h1: 'Broken window glass replacement',
    title: 'Broken Window Repair Vancouver | Emergency Glass Replacement',
    meta: 'Broken window repair in Vancouver. Cracked or smashed glass replaced, with same-day board-up and 24/7 emergency service across Metro Vancouver.',
    lead: 'Broken window repair across Metro Vancouver starts with securing the opening. We board up or fit temporary glazing, then replace the pane or sealed unit.',
    keyword: 'broken window repair Vancouver',
    band: {
      kicker: 'Same day',
      heading: 'Board up first. Glass when it is ready.',
      body: 'A cracked or smashed pane is an open house. We secure the opening the same day — often the same hour — then replace the glass, tempered or sealed unit, once it is fabricated.',
      cta: 'emergency',
    },
    category: 'residential',
    imageKey: 'house',
  },
  {
    slug: 'residential/patio-door-glass-and-roller-repair',
    h1: 'Patio door glass and roller repair',
    title: 'Sliding Patio Door Repair Vancouver | Glass & Rollers',
    meta: 'Sliding patio door repair in Vancouver: glass, rollers, tracks, and tempered replacements. Metro Vancouver homes, condos, and townhouses.',
    lead: 'Sliding patio door repair in Metro Vancouver is usually rollers and track, not a new door. We also replace patio door glass when the lite is cracked or fogged.',
    keyword: 'sliding patio door repair Vancouver',
    band: {
      kicker: 'Sliders',
      heading: 'Usually the rollers, not a new door.',
      body: 'A patio door that sticks, jumps, or will not lock is often worn rollers and a dirty track. We replace glass, rollers, and hardware in the existing frame so you are not paying for a full door.',
    },
    category: 'residential',
    imageKey: 'patio',
  },
  {
    slug: 'residential/window-hardware-repair',
    h1: 'Window hardware repair',
    title: 'Window Crank & Hardware Repair Vancouver',
    meta: 'Window crank repair in Vancouver plus balances, hinges, latches, and weatherstripping. Keep the glass — fix the hardware. Metro Vancouver.',
    lead: 'Window hardware repair in Metro Vancouver covers cranks, sash balances, hinges, and latches. When the glass is fine, we repair the hardware instead of replacing the window.',
    keyword: 'window crank repair Vancouver',
    band: {
      kicker: 'Cranks & balances',
      heading: 'The glass is fine. The hardware is not.',
      body: 'A window that will not open, close, or stay up is usually a crank, balance, hinge, or latch. We repair or replace the hardware and leave the sealed unit in place.',
    },
    category: 'residential',
    imageKey: 'hardware',
  },
  {
    slug: 'residential/skylight-glass-replacement',
    h1: 'Skylight glass replacement',
    title: 'Skylight Repair Vancouver | Laminated Glass Replacement',
    meta: 'Skylight repair in Vancouver: laminated skylight glass replacement, leak checks, and access. Metro Vancouver homes and strata.',
    lead: 'Skylight glass replacement in Metro Vancouver uses laminated safety glass. We replace the lite, check the curb for leaks, and handle roof access.',
    keyword: 'skylight repair Vancouver',
    band: {
      kicker: 'Overhead',
      heading: 'Laminated glass, and we check the curb.',
      body: 'Skylight glass is laminated so it holds if it breaks. We replace the lite, inspect the curb and flashing for leaks, and handle the access — ladder, roof, or interior scaffold.',
    },
    category: 'residential',
    imageKey: 'living',
  },
  {
    slug: 'residential/shower-glass-and-enclosures',
    h1: 'Shower glass & frameless enclosures',
    title: 'Frameless Shower Glass Vancouver | Tempered Enclosures',
    meta: 'Frameless shower glass in Vancouver. 10 mm and 12 mm tempered shower doors and enclosures, measured to the tile. Metro Vancouver.',
    lead: 'Frameless shower glass in Metro Vancouver is cut to the finished tile. We fabricate 10 mm and 12 mm tempered enclosures — frameless, semi-frameless, and sliding.',
    keyword: 'frameless shower glass Vancouver',
    band: {
      kicker: 'Tempered',
      heading: 'Measured to the tile. 10 and 12 mm.',
      body: 'Frameless and semi-frameless enclosures are cut to the finished opening. We template after the tile is in, fabricate tempered panels with polished edges, and install hinges, clips, and seals that actually keep water in.',
    },
    category: 'residential',
    imageKey: 'shower',
  },
  {
    slug: 'residential/mirrors',
    h1: 'Custom mirrors',
    title: 'Custom Mirrors Vancouver | Bathroom, Gym & Closet',
    meta: 'Custom mirrors in Vancouver: bathroom, gym, closet, and back-painted glass. Polished or bevelled edges, safety-backed where required.',
    lead: 'Custom mirrors in Metro Vancouver are cut to the wall — bathroom, gym, closet, and back-painted. Polished or bevelled edges, with safety backing where it matters.',
    keyword: 'custom mirrors Vancouver',
    band: {
      kicker: 'Cut to the wall',
      heading: 'Polished, bevelled, safety-backed where it matters.',
      body: 'Bathroom, gym, closet, and back-painted mirrors. We template the wall, cut and polish or bevel the edge, and specify safety backing over tubs, doors, and anywhere code or common sense asks for it.',
    },
    category: 'residential',
    imageKey: 'mirror',
  },
  {
    slug: 'residential/glass-railings',
    h1: 'Glass railings & balcony guard glass',
    title: 'Glass Railing Vancouver | Balcony Guard Glass',
    meta: 'Glass railings and balcony guard glass in Vancouver. Safety glazing to CAN/CGSB-12.1. Panel replacement in existing systems. Metro Vancouver.',
    lead: 'Glass railing and balcony guard glass in Metro Vancouver must be safety glazing. We replace damaged panels in existing systems and build new guards to BC code.',
    keyword: 'glass railing Vancouver',
    band: {
      kicker: 'Guards',
      heading: 'Replace a panel. Keep the system.',
      body: 'Most railing jobs are a single damaged lite in an existing shoe, spigot, or post system. We match thickness and edgework as closely as discontinued glass allows, and we build new guards when the whole run is the job.',
    },
    category: 'residential',
    imageKey: 'railing',
  },
  {
    slug: 'residential/custom-glass-and-tabletops',
    h1: 'Custom glass and tabletops',
    title: 'Custom Cut Glass Vancouver | Tabletops & Shelves',
    meta: 'Custom cut glass in Vancouver: tabletops, shelves, splashbacks, CNC shapes, polished or bevelled edges, low-iron when the green edge would show.',
    lead: 'Custom cut glass in Metro Vancouver — tabletops, shelves, and CNC shapes. Polished or bevelled edges, low-iron glass when a green edge would show.',
    keyword: 'custom cut glass Vancouver',
    band: {
      kicker: 'Custom cut',
      heading: 'To drawing. Polished, bevelled, or low-iron.',
      body: 'Tabletops, shelves, splashbacks, and CNC shapes. We cut from a template or CAD file, finish the edge you specify, and use low-iron glass when a green edge would show against white stone or paint.',
    },
    category: 'residential',
    imageKey: 'glassRack',
  },
  {
    slug: 'commercial/storefront-glass-repair',
    h1: 'Storefront glass repair',
    title: 'Storefront Glass Repair Vancouver | After-Hours Board-Up',
    meta: 'Storefront glass repair in Vancouver. After-hours board-up and tempered or laminated glass so your shop opens on time. Metro Vancouver.',
    lead: 'Storefront glass repair in Metro Vancouver is an after-hours job. A broken shopfront should not close you during business hours — we board up overnight and replace the glass after close.',
    keyword: 'storefront glass repair Vancouver',
    band: {
      kicker: 'After hours',
      heading: 'Board-up tonight. Glass after close.',
      body: 'A broken shopfront shouldn’t cost you a day’s trade. We secure the opening the same night, then replace the tempered lite outside business hours so you open on schedule.',
      cta: 'emergency',
    },
    category: 'commercial',
    imageKey: 'storefront',
  },
  {
    slug: 'commercial/commercial-door-glass-and-hardware',
    h1: 'Commercial door glass and hardware',
    title: 'Commercial Door Glass Repair Vancouver | Closers & Exits',
    meta: 'Commercial door glass repair in Vancouver: full-height entries, closers, pivots, and panic devices. Metro Vancouver after-hours service.',
    lead: 'Commercial door glass repair in Metro Vancouver covers the lite and the hardware — closers, pivots, and exit devices — so the door works at 7am.',
    keyword: 'commercial door glass Vancouver',
    band: {
      kicker: 'Entries',
      heading: 'Glass, closers, and hardware that work at 7am.',
      body: 'Full-height glass entries fail at the closer, pivot, panic device, or the lite itself. We replace the glass and the hardware in one visit so the door is in spec before the first customer.',
    },
    category: 'commercial',
    imageKey: 'door',
  },
  {
    slug: 'commercial/curtain-wall-and-window-wall',
    h1: 'Curtain wall and window wall glass',
    title: 'Curtain Wall Glass Replacement Vancouver | High-Rise',
    meta: 'Curtain wall glass replacement in Vancouver. Unitised and stick systems with lift, swing stage, or rope access. Metro Vancouver commercial and strata.',
    lead: 'Curtain wall glass replacement in Metro Vancouver means matching the existing system and using the access the building actually allows — lift, swing stage, or rope.',
    keyword: 'curtain wall glass replacement Vancouver',
    band: {
      kicker: 'High-rise',
      heading: 'The access method the building actually needs.',
      body: 'Curtain wall and window-wall units are replaced from a lift, swing stage, or rope — whichever the elevation allows. We match the existing system, including spacers, gaskets, and coatings, and we work with the building’s access rules.',
    },
    category: 'commercial',
    imageKey: 'facade',
  },
  {
    slug: 'commercial/office-glass-partitions',
    h1: 'Office glass partitions',
    title: 'Office Glass Partitions Vancouver | Frameless & Acoustic',
    meta: 'Office glass partitions in Vancouver: frameless, demountable, and acoustic glass walls with manifestation film. Metro Vancouver offices.',
    lead: 'Office glass partitions in Metro Vancouver — frameless, demountable, and acoustic — with the manifestation film BC interiors typically require.',
    keyword: 'office glass partitions Vancouver',
    band: {
      kicker: 'Office fronts',
      heading: 'Demountable, frameless, acoustic. Film included.',
      body: 'Single and double-glazed partitions with the manifestation film the code requires. We build frameless or demountable systems so the floorplate can change without throwing the glass away.',
    },
    category: 'commercial',
    imageKey: 'office',
  },
  {
    slug: 'commercial/security-and-safety-glazing',
    h1: 'Security and safety glazing',
    title: 'Security Glass Vancouver | Laminated & Safety Film',
    meta: 'Security glass in Vancouver: laminated glazing and security film that hold after impact. Forced-entry and smash-and-grab upgrades. Metro Vancouver.',
    lead: 'Security glass in Metro Vancouver is laminated glazing or security film that holds in the opening when annealed glass would shard. Spec’d for smash-and-grab and forced entry.',
    keyword: 'security glass Vancouver',
    band: {
      kicker: 'Holds together',
      heading: 'Laminated glass and film, not just thicker glass.',
      body: 'Annealed glass shards. Laminated glass and security film hold in the opening after impact. We spec the interlayer and film for the threat — smash-and-grab, forced entry, or overhead — and we install it in the existing frame where it fits.',
    },
    category: 'commercial',
    imageKey: 'night',
  },
  {
    slug: 'commercial/window-film',
    h1: 'Window film',
    title: 'Window Film Vancouver | Solar, Privacy & Safety',
    meta: 'Window film in Vancouver: solar, privacy, safety, and anti-graffiti film when glass replacement is not the job. Metro Vancouver homes and storefronts.',
    lead: 'Window film in Metro Vancouver is the right job when the glass is sound — solar control, privacy, safety, or anti-graffiti — without replacing the pane.',
    keyword: 'window film Vancouver',
    band: {
      kicker: 'Film, not replacement',
      heading: 'Solar, privacy, safety, anti-graffiti.',
      body: 'Window film is the right job when the glass is sound and the problem is heat, glare, privacy, or graffiti. We spec the film to the glass type so you do not void a sealed-unit warranty or cook a coating.',
    },
    category: 'commercial',
    imageKey: 'film',
  },
  {
    slug: 'strata/sealed-unit-replacement-programs',
    h1: 'Strata sealed unit replacement programs',
    title: 'Strata Glass Replacement Vancouver | Sealed Unit Programs',
    meta: 'Strata glass replacement in Vancouver: building-wide sealed unit programs, condition reports, and AGM-ready documentation. Metro Vancouver councils.',
    lead: 'Strata glass replacement in Metro Vancouver is a building program, not one-off tickets. We survey, phase sealed-unit work to the budget cycle, and document it for council.',
    keyword: 'strata glass replacement Vancouver',
    band: {
      kicker: 'For councils',
      heading: 'One building. Phased to the budget cycle.',
      body: 'We survey the elevations, report unit by unit, and phase the work so it fits a fiscal year. Resident notice, photo records, and invoicing formatted for a depreciation report — not a stack of invoices after the AGM.',
    },
    category: 'strata',
    imageKey: 'apartment',
  },
  {
    slug: 'strata/rope-access-glass-replacement',
    h1: 'Rope access glass replacement',
    title: 'Rope Access Glass Replacement Vancouver | High-Rise',
    meta: 'Rope access glass replacement in Vancouver when a lift will not reach. High-rise strata and commercial IGU and lite replacement. Metro Vancouver.',
    lead: 'Rope access glass replacement in Metro Vancouver is for elevations a lift cannot reach. Certified rope access to swap high-rise glass without closing the street. [Client to confirm certification.]',
    keyword: 'rope access glass replacement Vancouver',
    band: {
      kicker: 'Access',
      heading: 'When a lift will not reach.',
      body: 'Some elevations are past a crane, a boom, or a swing stage. Rope access gets a certified crew to the unit without closing the street. [Client to confirm certification.] We still replace only the glass.',
    },
    category: 'strata',
    imageKey: 'crew',
  },
  {
    slug: 'strata/balcony-and-guard-glass',
    h1: 'Balcony and guard glass replacement',
    title: 'Balcony Glass Replacement Vancouver | Strata Guards',
    meta: 'Balcony glass replacement in Vancouver for strata guards. Single-panel matching in existing systems. Safety glazing, Metro Vancouver.',
    lead: 'Balcony glass replacement in Metro Vancouver is usually one damaged guard panel in a long run. We match the existing system and leave the rest of the elevation in place.',
    keyword: 'balcony glass replacement Vancouver',
    band: {
      kicker: 'One panel',
      heading: 'Match the run. Replace the damaged lite.',
      body: 'Strata balcony glass is usually one cracked or etched panel in a long run of the same system. We measure the existing shoe or clamp, match thickness and edgework, and leave the rest of the elevation alone.',
    },
    category: 'strata',
    imageKey: 'midrise',
  },
];
