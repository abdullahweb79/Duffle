
// ─── PRODUCTS DATA ───────────────────────────────────
const PRODUCTS = [
{
  id: 1,
  name: 'Nomad Executive Full-Grain Leather Duffle Bag — Teal',
  description: 'Crafted from premium full-grain leather in signature teal, this 45L weekender features solid brass hardware, YKK heavy-duty zippers, reinforced padded handles, a removable shoulder strap, and a high-quality cotton inner lining with organiser pockets. Dimensions: 22" L × 11" W × 11" H. Ideal for weekend getaways, business travel, gym use, and carry-on luggage.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 2,
  name: 'Onyx Executive Full-Grain Leather Duffle Bag — Jet Black',
  description: 'A commanding jet-black full-grain leather duffle engineered for the modern professional. Features antique brass hardware, YKK precision zippers, dual padded leather-wrapped handles, a detachable cross-body strap, protective rubber feet, and a premium woven cotton lining with a zippered security pocket. Dimensions: 22" L × 11" W × 11" H | Capacity: 45L.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 3,
  name: 'Bordeaux Executive Full-Grain Leather Duffle Bag — Burgundy',
  description: 'A bold deep-burgundy full-grain leather duffle that blends personality with premium craftsmanship. Solid brass fittings, YKK zippers, a full-length wide-mouth opening, reinforced stress points, protective rubber feet, and a fine cotton interior lining with slip pockets and a zippered valuables pouch. Dimensions: 22" L × 11" W × 11" H | Capacity: 45L.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 4,
  name: 'Expedition Canvas & Full-Grain Leather Duffle Bag — Charcoal',
  description: 'Heavy-duty waxed canvas duffle with full-grain leather trim at all wear points. Built with YKK industrial zippers, brass hardware, padded leather top handles, a removable shoulder strap, external end pockets, and a structured cotton-lined interior with slip and zip pockets. Dimensions: 24" L × 12" W × 12" H | Capacity: 55L. Ideal for adventure travel, extended trips, and gym use.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 5,
  name: 'Sahara Waxed Canvas & Leather Duffle Bag — Sand Beige',
  description: 'Vintage-inspired waxed canvas duffle in warm sand beige with full-grain leather trim that deepens with age. Features aged brass hardware, YKK zippers, a wide-mouth main compartment, magnetic-snap end pockets, a non-slip padded shoulder strap, and a woven cotton interior lining with organisation pockets and key-clip fob. Dimensions: 24" L × 12" W × 12" H | Capacity: 55L.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 6,
  name: 'Alpine Canvas & Leather Duffle Bag — Olive Green',
  description: 'Military-inspired olive green waxed canvas duffle with full-grain leather reinforcements at all stress points. Built with YKK heavy-duty zippers, solid brass D-rings and buckle hardware, riveted handle bases, double-stitched seams, and a cotton-lined interior with full-length slip pocket, zip security pocket, and snap-top open pocket. Dimensions: 24" L × 12" W × 12" H | Capacity: 55L.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 7,
  name: 'Sunburst Full-Grain Leather Duffle Bag — Mustard Yellow',
  description: 'A bold statement weekender in vibrant mustard yellow full-grain leather with gold-toned solid brass hardware and YKK premium zippers. Features padded double-carry handles, a removable adjustable shoulder strap, protective brass feet, and a premium cotton interior lining with zip-top valuables compartment, slip pockets, and key-clip fob. Dimensions: 22" L × 11" W × 11" H | Capacity: 45L.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 8,
  name: 'Heritage Full-Grain Leather Duffle Bag — Chocolate Brown',
  description: 'A classic chocolate brown full-grain leather duffle that develops a rich patina with age. Features antique brass hardware, YKK zippers, naturally wax-conditioned water-resistant leather, protective bottom studs, padded carry handles, and a fine woven cotton interior lining with slip pockets, a zip valuables pocket, and key-clip fob. Dimensions: 22" L × 11" W × 11" H | Capacity: 45L.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 9,
  name: 'Gatsby Two-Tone Full-Grain Leather Duffle Bag — Black & Tan',
  description: 'A luxury two-tone duffle in jet-black full-grain leather with rich tan leather trim on handles, base, and zipper pulls. Features polished brass hardware, YKK zippers, contrast hand-finished stitching, saddle-stitched handle bases, brass protective feet, and a warm-toned premium cotton interior lining with document sleeve, slip pockets, and a zip valuables pocket. Dimensions: 22" L × 11" W × 11" H | Capacity: 45L.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 10,
  name: 'Dome Barrel Canvas & Leather Duffle Bag — Graphite Grey',
  description: 'A refined dome-barrel weekender in premium graphite grey waxed canvas with rich tan full-grain leather trim across the handles, base corners, shoulder strap, and ID patch. The structured half-moon silhouette stands upright on its own and opens wide for effortless packing. Built with solid brass hardware and YKK precision zippers for smooth, lasting performance. Padded twin top handles and a removable adjustable cross-body strap offer versatile carry options for any journey. The high-quality cotton interior lining provides a clean, durable surface with multiple slip pockets and a zip-close security compartment to keep essentials organised. Dimensions: 20" L × 10" W × 12" H | Capacity: 38L. Ideal for overnight travel, gym use, weekend getaways, and smart casual carry.',
  category: 'duffle-bags',
  featured: false,
  images: [
    { src: 'img/Duffle bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Duffle bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Duffle bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Duffle bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
 {
  id: 11,
  name: "Men's Top-Grain Leather Crossbody Messenger Bag with Front Zip Pocket — Dark Brown",
  description: "Crafted for the modern professional who refuses to compromise on style or function, this men's leather crossbody messenger bag is made from premium top-grain cowhide leather that develops a beautiful patina over time. The standout contrast yellow front zip pocket gives this bag a bold, contemporary edge. Secured with YKK zippers and reinforced solid brass hardware throughout. Features an adjustable detachable crossbody strap, premium cotton interior lining, and a main zip compartment with organiser pockets. Dimensions: 11\" W × 9\" H × 3\" D | Capacity: ~10–12L | Fits up to 10\" tablet. Ideal for daily commutes, business travel, and weekend outings.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 12,
  name: "Handcrafted Leather Boho Crossbody Saddle Bag with Kilim Embroidery — Tan Brown",
  description: "Where artisan craftsmanship meets everyday versatility — this bohemian leather crossbody saddle bag is a wearable piece of art. The round structured silhouette is wrapped in top-grain cowhide leather and adorned with vibrant kilim-inspired hand embroidery in rich jewel tones. The contrast embroidered panel is hand-stitched with meticulous care, ensuring no two bags are exactly alike. Features solid brass snap closure, YKK inner zip pocket, an adjustable leather crossbody strap, and a premium cotton fabric lining. Dimensions: 9\" W × 9\" H × 3\" D | Capacity: ~5–6L. Perfect for festival season, casual outings, and the fashion-forward everyday look.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 13,
  name: "Premium Top-Grain Leather Structured Flap Crossbody Bag for Men — Espresso Brown",
  description: "Sharp lines. Refined leather. Timeless carry. This structured leather flap crossbody bag is engineered from top-grain cowhide leather in a deep espresso tone, with a clean geometric silhouette and fold-over flap design that communicates quiet confidence. The dual front pockets offer organised access to daily essentials, while the YKK-zipped main compartment keeps everything secure. Solid brass buckles, D-rings, and a magnetic snap closure complete the premium build. Wide padded adjustable crossbody strap included. Cotton-lined interior with organiser slots. Dimensions: 12\" W × 9\" H × 3.5\" D | Capacity: ~12–14L | Fits up to 11\" tablet.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 14,
  name: "Vintage Distressed Top-Grain Leather Crossbody Bag for Men — Cognac Tan",
  description: "Worn-in. Rugged. Effortlessly cool. This distressed leather crossbody bag is crafted from top-grain cowhide leather naturally textured to give it a vintage, lived-in character. The warm cognac tan tone and subtle surface grain tell a story of craftsmanship that only gets better with age. Features a main zippered compartment, front slip pocket, antique brass fittings, YKK zippers, and an adjustable detachable crossbody strap. The natural distressed finish means each bag carries its own unique texture variation. Premium cotton interior lining throughout. Dimensions: 10\" W × 8.5\" H × 3\" D | Capacity: ~9–10L.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 15,
  name: "Top-Grain Leather & Canvas Hybrid Crossbody Backpack Bag — Mustard Yellow",
  description: "The crossbody that thinks like a backpack. This bold mustard yellow leather and canvas crossbody bag combines hands-free convenience with the organised storage of a compact backpack. Constructed with top-grain cowhide leather accents and durable waxed canvas, built for adventurers and urban explorers alike. Multiple external pockets secured with YKK heavy-duty zippers keep gear sorted and accessible. Solid brass buckles and D-rings, dual carry options via shoulder and crossbody strap, and a premium cotton-lined interior for protection of camera gear and tech. Dimensions: 9\" W × 13\" H × 4\" D | Capacity: ~14–16L.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 16,
  name: "Women's Structured Top-Grain Leather Crossbody Bag with Chain Strap — Jet Black",
  description: "Minimalist. Modern. Magnetic. This structured black leather crossbody bag blends the sharp architecture of a modern fashion bag with the durability of top-grain cowhide leather. The clean fold-over flap and polished brass chain strap make it a versatile piece that transitions seamlessly from boardroom to dinner. Features a concealed YKK zipper closure, smooth uninterrupted leather panels, a fold-over flap with magnetic turn-lock, and an optional leather crossbody strap alongside the brass chain. Cotton-lined interior with back slip pocket and zip compartment. Dimensions: 10\" W × 7.5\" H × 3\" D | Capacity: ~7–8L.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 17,
  name: "Full-Flap Leather Messenger Crossbody Bag with Multi-Pocket Organization — Dark Walnut Brown",
  description: "For those who carry more and compromise nothing. This full-flap leather messenger bag is built from top-grain cowhide leather in a rich walnut brown, designed to handle the demands of daily professional and travel use. The wide fold-over flap covers a multi-pocket front panel for quick access without opening the main compartment. Features a wide padded adjustable crossbody strap, reinforced stress points, YKK zippers throughout, solid brass buckles and keepers, and a spacious cotton-lined interior with laptop sleeve. Ergonomic shoulder pad reduces strain on long commutes. Dimensions: 13\" W × 10\" H × 4\" D | Capacity: ~15–18L | Fits 13\" laptop.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 18,
  name: "Classic Top-Grain Leather Satchel Crossbody Bag with Structured Base — Dark Chocolate",
  description: "Some designs are timeless for a reason. This classic leather satchel crossbody draws from the heritage of traditional British satchels, reinterpreted in premium top-grain cowhide leather for the modern carry. The structured rectangular form, twin-buckle closure, and wide leather strap are iconic details that never go out of style. Handcrafted with precision stitching and solid brass roller hardware. The flat base construction ensures the bag stands upright independently. YKK rear zip pocket and premium cotton-lined interior. Develops a rich character patina over years of use. Dimensions: 12\" W × 10\" H × 4\" D | Capacity: ~13–15L | Fits 11\" tablet.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 19,
  name: "Vintage Worn-Leather Satchel Crossbody Bag — Olive Khaki with Antique Hardware",
  description: "Every scratch tells a story. This vintage-style leather satchel crossbody is made from top-grain cowhide leather with a deliberately worn finish that gives it the soul of a well-traveled heirloom. The olive khaki tone and antique brass hardware evoke the spirit of military heritage bags — rugged, purposeful, and rich in character. The hand-finished leather surface means no two bags look exactly the same. Features a buckle flap with magnetic back latch, YKK inner zipper compartments, a thick adjustable leather crossbody strap, and a premium cotton interior lining. The worn texture is pre-conditioned leather, not a dye effect. Dimensions: 11\" W × 9\" H × 3.5\" D | Capacity: ~11–12L.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 20,
  name: "Rustic Burnt Sienna Leather Crossbody Bag with Antique Buckle Strap — Handcrafted",
  description: "Raw warmth. Artisan soul. This rustic leather crossbody bag in a striking burnt sienna finish is a celebration of leather in its most authentic form. Made from top-grain oil-pull-up cowhide leather with a surface rich in natural variations — no two pieces alike. Paired with an antique brass oversized decorative buckle on the shoulder strap, this bag commands attention in the most understated way. The pull-up leather is self-healing — minor marks disappear with warmth and conditioning. Features YKK main compartment zipper, solid brass rings, a thick adjustable leather strap, and a clean cotton-lined interior. Dimensions: 10\" W × 9\" H × 3\" D | Capacity: ~9–11L.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 21,
  name: "Women's Top-Grain Leather Envelope Crossbody Bag with Structured Flap — Natural Tan",
  description: "Clean geometry. Warm leather. Effortless carry. This structured envelope crossbody bag is shaped with architectural precision from top-grain cowhide leather in a warm natural tan. The wide envelope flap and tapered silhouette make it equally at home at a business lunch or a weekend brunch — a true wardrobe multitasker. Features a solid brass turn-lock closure, YKK inner zipper compartment, a thin adjustable crossbody leather strap, and a premium cotton-lined interior that is clean, structured, and easy to maintain. The natural tan leather deepens and warms in color over time with use — developing into a uniquely personal hue. Dimensions: 11\" W × 8\" H × 3\" D | Capacity: ~8–10L.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(11.1)front.jpeg', label: 'Front' },
    { src: 'img/Cross body bags/P(11.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Cross body bags/P(11.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Cross body bags/P(11.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 22,
  name: "Dual-Tone Leather Vertical Crossbody Bag with Brass Rivet Detail — Navy Blue & Brown",
  description: "Two tones. One bold statement. This dual-tone vertical leather crossbody bag combines navy blue and rich brown top-grain cowhide leather in a striking split colorblock panel. The vertical silhouette, brass rivet detailing, and structured form make this a collector's piece for the discerning leather bag enthusiast. Compact and lightweight yet with surprising internal organisation — perfect for those who want maximum style in a minimal footprint. Features solid brass rivets and snap buckle hardware, YKK zipper inner compartment, an adjustable thin leather crossbody strap, and a premium cotton lining in a contrast color. Dimensions: 6.5\" W × 10\" H × 2.5\" D | Capacity: ~5–6L.",
  category: 'crossbody-bags',
  featured: false,
  images: [
    { src: 'img/Cross body bags/P(12.1)front.jpeg.png', label: 'Front' },
    { src: 'img/Cross body bags/P(12.2)back.jpeg.png',  label: 'Back'  },
    { src: 'img/Cross body bags/P(12.3)side.jpeg.png',  label: 'Side'  },
    { src: 'img/Cross body bags/P(12.4)inner.jpeg.png', label: 'Inner' },
  ]
},
{
  id: 23,
  name: 'Executive Vintage Doctor Briefcase | Top Grain Cowhide Leather Business Bag for Men',
  description: 'Commanding presence meets old-world craftsmanship in this executive-grade vintage doctor briefcase, handcrafted from top grain cowhide leather in a rich cognac-brown finish that deepens in character with every use. The roomy interior is lined with premium cotton fabric for a soft, protective finish against your laptop, documents, and essentials. Solid brass metal hardware and authentic YKK zippers ensure lasting durability, while the dual top handles offer a confident ergonomic grip. Whether heading to the boardroom, a client meeting, or an international conference, this leather briefcase makes a statement before you say a word. Dimensions: 30 × 39 × 7 cm | Capacity: 8L.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(1.1).jpeg', label: 'Front' },
    { src: 'img/Business bags/P(1.2).jpeg', label: 'Back'  },
    { src: 'img/Business bags/P(1.3).jpeg', label: 'Side'  },
    { src: 'img/Business bags/P(1.4).jpeg', label: 'Inner' },
  ]
},
{
  id: 24,
  name: 'Professional Charcoal Canvas Laptop Briefcase | Multi-Compartment Business Bag with Leather Trim',
  description: 'Refined, understated, and built for the modern professional — this charcoal grey canvas and top grain cowhide leather briefcase blends business utility with contemporary design. The slate-grey exterior makes a sophisticated alternative to traditional brown or black leather, perfectly suited to the minimalist executive aesthetic. Engineered for organisation with a multi-compartment layout that accommodates a laptop, files, cables, and daily essentials with ease. Interior finished in high-quality cotton fabric lining. Premium YKK zippers glide with precision while durable brass metal hardware reinforces every stress point. Transitions seamlessly from commute to conference room. Dimensions: 30 × 39 × 7 cm | Capacity: 8L.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(2.1)top.jpeg',   label: 'Top'   },
    { src: 'img/Business bags/P(2.2)inner.jpeg',  label: 'Inner' },
    { src: 'img/Business bags/P(2.3)Front.jpeg',  label: 'Front' },
    { src: 'img/Business bags/P(2.4)back.jpeg',   label: 'Back'  },
  ]
},
{
  id: 25,
  name: 'Classic Black Structured Lawyer Briefcase | Top Grain Cowhide Leather Executive Bag with Brass Clasp',
  description: 'Power. Precision. Permanence. This classic black structured briefcase is the definitive choice for legal professionals, senior executives, and business travellers who demand nothing short of excellence. Crafted from top grain cowhide leather in a deep jet-black finish, its clean silhouette and polished brass front clasp communicate authority without a word. The single-flap structured design offers quick-access convenience without sacrificing elegance. Cotton-lined interior provides a clean organised space for documents, a laptop, and business essentials. YKK zippers on secondary compartments deliver smooth reliable access. A timeless investment piece that only improves with age. Dimensions: 30 × 39 × 7 cm | Capacity: 8L.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(3.1)Front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(3.2)top.jpeg',   label: 'Top'   },
    { src: 'img/Business bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 26,
  name: 'Artisan Tan Leather Flap Briefcase | Top Grain Cowhide Business Bag with Antique Brass Lock',
  description: "There's a quiet luxury to a bag that doesn't try too hard — and this tan leather flap briefcase delivers exactly that. Handcrafted from top grain cowhide leather in a warm tan finish, the smooth single-flap silhouette exudes effortless sophistication. The antique brass turn-lock fastening adds a tasteful vintage detail that elevates the entire design. Spacious yet sleek interior is lined in smooth cotton fabric to protect documents and devices alike. YKK zippers provide reliable security for interior pockets, and the sturdy looped top handle ensures a confident comfortable carry. This briefcase ages beautifully — developing a rich personal patina over years of use. Dimensions: 30 × 39 × 7 cm | Capacity: 8L.",
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(4.1)top.jpeg',   label: 'Top'   },
    { src: 'img/Business bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 27,
  name: 'Dark Burgundy Dual-Clasp Executive Briefcase | Premium Top Grain Cowhide Leather Business Bag',
  description: 'Sophisticated. Structured. Unmistakably executive. This dark burgundy dual-clasp briefcase is crafted from top grain cowhide leather in a deep wine finish that commands respect in every professional setting. The twin brass push-clasp closures deliver a satisfying click of precision, keeping contents secure while adding a distinguished vintage character. The cotton-lined interior is designed to organise documents, a slim laptop, and daily essentials with clean efficiency. Premium YKK zippers on interior pockets offer smooth effortless access. The reinforced arched top handle provides a balanced comfortable grip ideal for long business days. This briefcase is for leaders who carry weight with grace. Dimensions: 30 × 39 × 7 cm | Capacity: 8L.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(5.2)top.jpeg',   label: 'Top'   },
    { src: 'img/Business bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 28,
  name: 'Deep Mahogany Wide-Body Leather Briefcase | Top Grain Cowhide Executive Bag with Gold Brass Hardware',
  description: 'Bold in presence, refined in craft — this deep mahogany wide-body briefcase is an executive statement piece unlike any other. Fashioned from premium top grain cowhide leather in a rich mahogany tone, the expansive structured profile and gleaming gold-tone brass clasps project authority and style in equal measure. The generous interior is ideally suited for professionals who carry more — files, a laptop, documents, and travel essentials — without compromising on form. Premium cotton fabric lining offers a soft clean environment for your belongings. YKK zippers provide reliable access to organised compartments. A trophy piece for the professional at the pinnacle of their career. Dimensions: 30 × 39 × 7 cm | Capacity: 8L.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(6.1)top.jpeg',   label: 'Top'   },
    { src: 'img/Business bags/P(6.2)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(6.3)back.jpeg',  label: 'Back'  },
    { src: 'img/Business bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 29,
  name: 'Dark Brown Buckle-Strap Leather Messenger Briefcase | Top Grain Cowhide Business Bag for Professionals',
  description: 'Where classic messenger style meets executive polish, this dark brown buckle-strap briefcase redefines professional carry. Crafted from robust top grain cowhide leather in a deep espresso brown, the front buckle-strap fastening adds a rugged handsome detail that sets this bag apart from conventional briefcases. The spacious interior — lined in high-quality cotton fabric — easily fits a laptop, documents, and everyday essentials. Premium YKK zippers ensure smooth secure access to all compartments, while solid brass metal hardware reinforces the structure at every key point. Carry with the top handle or attach an optional shoulder strap for versatile everyday use. Built for professionals who blend function with distinct personal style. Dimensions: 30 × 39 × 7 cm | Capacity: 8L.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(7.1)top.jpeg',   label: 'Top'   },
    { src: 'img/Business bags/P(7.2)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(7.3)front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 30,
  name: 'Large Pebbled Leather Travel Briefcase | Top Grain Cowhide Multi-Compartment Business Bag with Shoulder Strap',
  description: 'For the professional who lives between cities, this large pebbled top grain cowhide leather briefcase is your ultimate travel companion. The distinctive pebble-textured finish adds tactile depth and exceptional durability, resisting scuffs and scratches while developing a handsome patina over time. The multi-compartment layout is designed for the road warrior — with space for a laptop, documents, chargers, and travel essentials, all organised in a cotton-lined interior. Premium YKK zippers run smoothly on every pocket, and solid brass metal hardware reinforces every attachment point. The detachable shoulder strap offers hands-free versatility whether navigating airports or boardrooms. The briefcase that works as hard as you do. Dimensions: 30 × 39 × 7 cm | Capacity: 8L.',
  category: 'business-bags',
  featured: false,
  images: [
    { src: 'img/Business bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Business bags/P(8.2)side.jpeg',  label: 'Side'  },
    { src: 'img/Business bags/P(8.3)top.jpeg',   label: 'Top'   },
    { src: 'img/Business bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
 {
    id: 32,
    name: 'Heritage Stitch Brown Top-Grain Cowhide Leather Belt with Antique Brass Square Buckle',
    description: 'The Heritage Stitch is a handcrafted brown leather belt built for the man who appreciates traditional craftsmanship in every detail. Cut from top-grain cowhide leather with a firm, full-bodied hand feel that holds its shape through years of daily wear. Contrasting white edge stitching runs the full length of the belt, framing the rich brown hide with a classic Western-inspired detail that works equally well with denim, chinos, or leather trousers. The antique brass square buckle adds a warm, vintage tone that complements the cognac leather perfectly. Five pre-punched holes with reinforced eyelets ensure a precise, lasting fit. Width: 3.8 cm (1.5 in). Available sizes: 28–46. Finish: antique brass hardware. A belt that gets better with every wear.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.23.jpeg'
  },
  {
    id: 33,
    name: 'Classico Tan Smooth Top-Grain Cowhide Leather Dress Belt with Silver Pin Buckle',
    description: 'The Classico Tan is the essential leather dress belt — clean, smooth, and perfectly proportioned for both formal and smart-casual wear. Crafted from top-grain cowhide leather in a warm tan with a polished smooth finish that pairs seamlessly with navy suits, beige chinos, or brown leather shoes. The slim silver pin buckle sits flush and understated, keeping the overall look sharp and refined without distraction. The supple yet firm leather body lies flat through belt loops and maintains its shape without curling or creasing over time. Five reinforced punch holes ensure a precise fit. Width: 3.5 cm (1.4 in). Available sizes: 28–46. A wardrobe essential for the well-dressed man.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.24.jpeg'
  },
  {
    id: 34,
    name: 'Garrison Black Studded Top-Grain Cowhide Leather Belt with Silver Rectangular Buckle',
    description: 'The Garrison is a bold black leather belt that commands attention through its distinctive studded detailing and sharp silver rectangular buckle. Crafted from top-grain cowhide leather in a deep, near-black finish with precisely spaced stud accents along the outer edge — adding texture and edge to an otherwise classic silhouette. The silver rectangular frame buckle provides a modern, industrial contrast against the dark hide. Built with reinforced stitching throughout and a firm leather body that holds structure through daily use. Five precision-punched holes with hardened eyelets ensure a secure, lasting fit. Width: 3.8 cm (1.5 in). Available sizes: 28–46. For the rider and the rebel alike.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.25 (1).jpeg'
  },
  {
    id: 35,
    name: 'Regent Dark Brown Top-Grain Cowhide Leather Belt with Brushed Silver Square Buckle',
    description: 'The Regent is a distinguished dark brown leather belt designed for the professional wardrobe. Cut from top-grain cowhide leather with a smooth, deep chocolate finish that coordinates effortlessly with dark denim, charcoal suits, and formal trousers. The brushed silver square buckle provides a contemporary matte finish that reads as polished without being flashy — the mark of genuinely good taste. The firm leather body lies perfectly flat through belt loops and resists the creasing and curling that affect lower-quality alternatives. Reinforced stitching throughout and five precision-punched holes with hardened eyelets for a precise, durable fit. Width: 3.8 cm (1.5 in). Available sizes: 28–46. Built for the boardroom and beyond.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.25 (2).jpeg'
  },
  {
    id: 36,
    name: 'Baton Brown Top-Grain Cowhide Leather Belt with Silver Centre-Bar Square Buckle',
    description: 'The Baton is a clean, well-proportioned dark brown leather belt finished with a classic silver centre-bar square buckle — a timeless hardware choice that transitions effortlessly between smart-casual and formal occasions. Crafted from top-grain cowhide leather with a smooth finish and firm body that maintains its structure and shape through years of regular wear. The centre-bar buckle design allows for quick, easy adjustment without the bulk of a frame buckle, making this one of the most practical and versatile belts in the collection. Reinforced stitching throughout and five precision-punched holes for a confident, lasting fit. Width: 3.8 cm (1.5 in). Available sizes: 28–46. A belt that quietly does everything right.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.25.jpeg'
  },
  {
    id: 37,
    name: 'Saddle Stitch Tan Top-Grain Cowhide Leather Belt with Double Edge Stitching & Brass Buckle',
    description: 'The Saddle Stitch is a heritage-crafted tan leather belt that showcases traditional saddlery detailing in an everyday wearable format. Crafted from top-grain cowhide leather and finished with double-row white edge stitching along both sides — a technique borrowed from fine equestrian leatherwork that adds both structural reinforcement and refined visual character. The warm tan colour sits beautifully with cream, camel, olive, and navy clothing palettes. A solid brass pin buckle complements the natural leather tone, while the firm, flat body ensures the belt lies cleanly through every loop. Five reinforced punch holes with hardened eyelets for a precise, enduring fit. Width: 3.8 cm (1.5 in). Available sizes: 28–46. A craftsmans belt for everyday wear.',
    category: 'accessories',
    price: '$55',
    featured: true,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.26.jpeg'
  },
  {
    id: 38,
    name: 'Piazza Brown Slim Top-Grain Cowhide Leather Dress Belt with Minimal Brass Pin Buckle',
    description: 'The Piazza Brown is a slim, refined leather dress belt designed for the man whose style philosophy is rooted in quiet confidence and impeccable fit. Cut from top-grain cowhide leather in a warm medium brown with a smooth, unblemished finish that pairs with everything from a three-piece suit to tailored weekend chinos. The slim brass pin buckle is intentionally understated — small in scale, perfectly positioned, and finished in warm gold that harmonises with the leather tone. The narrow profile and clean, unembellished surface make this the ideal choice for formal occasions and professional settings. Five precision-punched holes for a tailored fit. Width: 3.2 cm (1.25 in). Available sizes: 28–46. Elegance through restraint.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.27.jpeg'
  },
  {
    id: 39,
    name: 'Frontier Distressed Brown Top-Grain Cowhide Leather Belt with Antique Brass Buckle',
    description: 'The Frontier is a hand-distressed brown leather belt for the man who values character over perfection. Crafted from top-grain cowhide leather with an intentional antiqued and worn-in surface treatment that gives the belt a one-of-a-kind, lived-in quality from day one. The irregular tone variation, subtle surface creasing, and burnished edges all signal genuine leather quality and artisan process. The antique brass buckle — warm in tone with a deliberately aged finish — completes the vintage aesthetic. The belt body is firm and durable despite its distressed exterior, maintaining structure through daily use. Five reinforced punch holes for a confident fit. Width: 3.8 cm (1.5 in). Available sizes: 28–46. Built to look better the more you wear it.',
    category: 'accessories',
    price: '$55',
    featured: false,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.29.jpeg'
  },
  {
    id: 40,
    name: 'Gaucho Wide Brown Top-Grain Cowhide Leather Statement Belt with Large Antique Gold Buckle',
    description: 'The Gaucho is a wide-cut, statement leather belt that draws its inspiration from South American gaucho and Western traditions — bold, confident, and unapologetically premium. Crafted from top-grain cowhide leather in a rich warm brown with a wide body that commands presence on any outfit. The oversized antique gold buckle is the centrepiece — a heavy, substantial piece of brass hardware with a warm aged finish that anchors the belt\'s bold character. This is not a belt that hides — it is worn with pride over jeans, boots, and casual tailoring by those who understand that accessories make the outfit. Five precision-punched holes for a secure fit. Width: 4.5 cm (1.75 in). Available sizes: 28–46. For the man who wears his confidence on the outside.',
    category: 'accessories',
    price: '$55',
    featured: true,
    image: 'img/Belts/WhatsApp Image 2026-05-06 at 17.49.23.jpeg'
  },
  {
    id: 41,
    name: 'Vortex Black Mesh-Back Top-Grain Cowhide Leather Motorbike Gloves with Reinforced Knuckles',
    description: 'The Vortex is a high-performance black motorbike glove that balances maximum ventilation with serious protection. The dorsal panel combines top-grain cowhide leather reinforcement over the knuckles and finger joints with a breathable mesh back panel that allows continuous airflow during warm-weather riding — keeping hands cool without sacrificing impact protection. Hard-shell reinforced knuckle guards absorb and deflect impact in the event of a fall, while the padded palm reduces vibration fatigue on long rides. A wrist strap with solid brass hardware adjuster delivers a secure, rattle-free fit under jacket cuffs. Pre-curved finger construction reduces hand fatigue and mimics the natural riding grip position. Available in black. Sizes: S–XXL. The everyday performance riding glove.',
    category: 'accessories',
    featured: true,
    image: 'img/Gloves/Motorbike gloves/Glove(1).jpeg'
  },
  {
    id: 42,
    name: 'Ironguard Black Hard-Knuckle Top-Grain Cowhide Leather Motorbike Gloves with CE Protection',
    description: 'The Ironguard is a serious protection motorbike glove built for riders who prioritise safety without compromising on premium leather quality. Constructed from top-grain cowhide leather with a CE-level hard-shell moulded knuckle protector that provides certified impact resistance across the most vulnerable areas of the hand. The full leather palm and finger panels offer abrasion resistance in the event of a slide, while an internal gel palm pad absorbs vibration on long motorway rides. A wide Velcro wrist closure with solid brass adjuster hardware locks the glove securely in place. Touchscreen-compatible fingertip allows phone operation without removal. Pre-curved ergonomic cut for a natural riding grip. Available in black. Sizes: S–XXL.',
    category: 'accessories',
    featured: true,
    image: 'img/Gloves/Motorbike gloves/Glove(2).jpeg'
  },
  {
    id: 43,
    name: 'Café Racer Brown Vintage Top-Grain Cowhide Leather Motorbike Gloves with Classic Strap Closure',
    description: 'The Café Racer is a vintage-inspired brown leather motorbike glove for riders who appreciate the classic look of old-school motorcycling without sacrificing modern safety standards. Crafted from full top-grain cowhide leather with a smooth cognac brown finish that develops a characterful patina through regular use. The clean, uncluttered silhouette with a single wrist strap and solid brass snap closure channels the spirit of 1960s European café racer culture. Internal knuckle reinforcement and a padded palm provide essential protection, while the unlined leather construction allows a direct, tactile connection to the handlebars. A snug, pre-curved fit reduces hand fatigue on longer rides. Available in brown. Sizes: S–XXL. For the rider who rides with style as much as purpose.',
    category: 'accessories',
    featured: false,
    image: 'img/Gloves/Motorbike gloves/Glove(3).jpeg'
  },
  {
    id: 44,
    name: 'Armour Black Full-Protection Top-Grain Cowhide Leather Motorbike Gloves with Hard-Shell Guards',
    description: 'The Armour is a fully protected black motorbike glove engineered for riders who demand maximum coverage on every ride. Constructed from top-grain cowhide leather with hard-shell protectors across the knuckles, finger joints, and the back of the hand — providing multi-zone impact protection rarely found outside of race-spec equipment. The reinforced leather palm and abrasion-resistant fingertip panels provide slide protection, while internal padding absorbs road vibration during long-distance touring. A wide wrist closure with solid brass hardware adjustment creates a locked, secure fit that won\'t shift under braking or in an emergency situation. Pre-curved ergonomic cut for a natural riding position. Available in black. Sizes: S–XXL. Serious protection for serious riders.',
    category: 'accessories',
    featured: false,
    image: 'img/Gloves/Motorbike gloves/Glove(4).jpeg'
  },
  {
    id: 45,
    name: 'HiViz Black & Neon Yellow Top-Grain Cowhide Leather Motorbike Gloves with Reflective Safety Panel',
    description: 'The HiViz is a high-visibility safety motorbike glove designed for riders who prioritise being seen as much as being protected. Constructed from top-grain cowhide leather in black with bold neon yellow accent panels across the dorsal and wrist areas — dramatically increasing hand visibility in low-light, dawn, dusk, and night riding conditions. Reinforced knuckle guards and padded palm panels provide essential impact and abrasion protection, while the ventilated construction keeps hands cool in warmer conditions. A secure wrist strap with solid brass hardware adjuster locks the glove in position under jacket cuffs. Pre-curved ergonomic cut for a natural, fatigue-reducing riding grip. Available in black and neon yellow. Sizes: S–XXL. The safety-first choice for commuter and touring riders.',
    category: 'accessories',
    featured: false,
    image: 'img/Gloves/Motorbike gloves/Glove(5).jpeg'
  },
  {
    id: 46,
    name: 'Phantom Grey Camo Armoured Top-Grain Cowhide Leather Motorbike Gloves with Multi-Zone Protection',
    description: 'The Phantom is a tactical grey camouflage motorbike glove that combines a distinctive military-inspired aesthetic with multi-zone armoured protection across the full hand. Constructed from top-grain cowhide leather with a grey camo pattern finish and hard-shell moulded protectors over the knuckles and finger joints, providing certified impact resistance for street and adventure riding. Reinforced leather palm and abrasion-resistant fingertip construction deliver essential slide protection. The articulated finger construction and pre-curved palm allow a natural grip position that reduces fatigue on long rides. A secure wrist closure with solid brass hardware adjuster creates a locked fit under jacket cuffs. Available in grey camo. Sizes: S–XXL. For the rider who takes protection as seriously as their style.',
    category: 'accessories',
    featured: true,
    image: 'img/Gloves/Motorbike gloves/Glove(6).jpeg'
  },
 {
  id: 47,
  name: 'Maverick Leather Motorbike Gloves | Full-Grain Cowhide Riding Gloves with Knuckle Protection — Jet Black',
  description: 'Built for riders who take both safety and style seriously, the Maverick Motorbike Gloves are crafted from premium full-grain cowhide leather in jet black. Reinforced knuckle guards provide critical impact protection, while the padded palm lining absorbs vibration and reduces fatigue on long rides. Pre-curved finger construction mirrors the natural grip position, reducing hand strain and improving throttle and brake feel. Double-stitched seams at all stress points ensure the gloves hold up to years of hard riding. The adjustable wrist strap with snap closure delivers a secure, customizable fit over any jacket cuff. Available in sizes S–XXL. Ideal for motorcycle commuting, touring, and track days.',
  category: 'accessories',
  featured: true,
  image: 'img/Gloves/Motorbike gloves/Glove(7).jpeg'
},
{
  id: 48,
  name: 'Forge Master Leather Welding Safety Gloves | Heavy-Duty Split Cowhide Work Gloves — Tan Yellow',
  description: 'Engineered for the demands of welding, metal fabrication, and high-heat industrial work, the Forge Master Safety Gloves are constructed from durable split cowhide leather in a classic tan yellow finish. The generous gauntlet cuff extends well past the wrist to shield forearms from sparks, spatter, and radiant heat. Reinforced palm and finger panels provide abrasion resistance during heavy-duty handling, while the soft cotton inner lining wicks moisture and adds comfort during extended wear. Double-stitched seams with fire-resistant thread ensure structural integrity under thermal stress. Suitable for MIG, TIG, and stick welding. Available in sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(1).jpeg'
},
{
  id: 49,
  name: 'Hi-Vis Pro Leather Work Gloves | Reflective Safety Gloves for Construction & Industrial Use — Yellow & Black',
  description: 'Stay visible and stay protected on every job site with the Hi-Vis Pro Leather Work Gloves. Combining rugged split cowhide leather construction with high-visibility yellow paneling and reflective silver safety strips, these gloves are designed for construction workers, road crews, and industrial professionals operating in low-light or high-traffic environments. The reinforced fingertips and palm provide superior grip and abrasion resistance, while the snug wrist closure keeps the gloves firmly in place during intensive tasks. Double-stitched throughout for long-term durability. Meets general industry safety standards. Available in sizes S–XXL. Ideal for construction, logistics, landscaping, and highway work.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(2).jpeg'
},
{
  id: 50,
  name: 'RedGuard Long-Cuff Leather Safety Gloves | Heat & Abrasion Resistant Work Gloves — Red',
  description: 'The RedGuard Long-Cuff Safety Gloves are purpose-built for jobs where hand and forearm protection cannot be compromised. Crafted from premium split cowhide leather in a striking red finish, the extended gauntlet cuff reaches well above the wrist, providing comprehensive coverage against sparks, heat, sharp edges, and chemical splashes. Reinforced double-leather palm panels deliver maximum grip and abrasion resistance under heavy-duty use, while the flexible finger construction maintains dexterity for detailed work. Stitched with high-tenacity thread throughout all load-bearing seams. Suitable for welding, foundry work, glass handling, and heavy industrial applications. Available in sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(3).jpeg'
},
{
  id: 51,
  name: 'SunGuard Long-Cuff Leather Welding Gloves | Extended Forearm Protection Work Gloves — Mustard Yellow',
  description: 'Offering full forearm coverage in a warm mustard yellow split cowhide leather, the SunGuard Long-Cuff Welding Gloves are engineered for welders, furnace operators, and industrial workers requiring extended protection from heat, sparks, and abrasion. The extra-long gauntlet cuff design shields the forearm from wrist to mid-arm, reducing exposure during overhead and horizontal welding passes. Reinforced palm and thumb saddle construction prolongs glove life under constant friction and heat exposure. Interior cotton lining provides a comfortable barrier between the leather and skin during long work sessions. Double-stitched with fire-resistant thread. Available in sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(4).jpeg'
},
{
  id: 52,
  name: 'ChemShield Rubber-Coated Safety Gloves | Industrial Chemical & Liquid Resistant Work Gloves — Orange Red',
  description: 'When chemical exposure, liquid handling, and wet environments are part of the job, the ChemShield Rubber-Coated Safety Gloves deliver a robust barrier between your hands and the hazard. Constructed with a heavy-gauge rubber-coated exterior in high-visibility orange-red, these gloves resist a broad range of chemicals, oils, acids, and solvents. The textured outer surface provides a firm, non-slip grip on wet and oily surfaces, while the extended cuff protects the wrist and lower forearm from splashes and runoff. Cotton interior lining ensures comfort during prolonged use. Ideal for chemical processing, laboratory work, cleaning, food production, and wet industrial environments. Available in sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(5).jpeg'
},
{
  id: 53,
  name: 'CutMaster Anti-Cut Leather Safety Gloves | Cut-Resistant Work Gloves for Glass & Metal Handling — White',
  description: 'Precision handling of sharp materials demands precision protection. The CutMaster Anti-Cut Safety Gloves are crafted from a premium split cowhide leather upper with a reinforced cut-resistant inner layer, designed specifically for glass handling, sheet metal fabrication, butchery, and precision industrial assembly. The clean white finish allows for easy inspection of glove integrity, while the form-fitting construction maintains the dexterity required for detailed, close-tolerance work. The extended tan leather cuff provides additional wrist and forearm coverage against edge contact. High-tenacity stitching at all critical seam points ensures structural reliability under stress. Available in sizes S–XXL.',
  category: 'accessories',
  featured: false,
  image: 'img/Gloves/Safety gloves/sAFETYg(6).jpeg'
},
{
  id: 54,
  name: 'The Classic Bifold | Full-Grain Cowhide Leather Wallet with Card Slots & Billfold — Cognac Brown',
  description: 'The original leather wallet, perfected. The Classic Bifold is handcrafted from full-grain cowhide leather in a warm cognac brown that develops a rich personal patina over years of daily carry. The clean two-fold design opens to reveal multiple card slots, a full-length billfold compartment, and an ID window — everything you need, nothing you do not. The slim profile sits comfortably in a front or back pocket without bulk. Precise saddle stitching in contrast thread reinforces all seams, and the snap-free design means nothing between you and your cash. Dimensions: approx. 4.3" × 3.5" folded. A timeless everyday carry essential for the discerning man.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(1).jpeg'
},
{
  id: 55,
  name: 'The Noir Snap Wallet | Textured Full-Grain Leather Snap-Close Bifold Wallet — Dark Espresso',
  description: 'Understated authority in the palm of your hand. The Noir Snap Wallet is constructed from full-grain cowhide leather with a distinctive dark textured finish that resists scuffs and delivers a premium tactile experience. The secure brass snap closure keeps all contents firmly in place — no accidental openings, no loose cards. Inside, multiple card slots and a billfold compartment organize your essentials with clean efficiency. The compact form factor is designed to slip effortlessly into any pocket or bag interior. The dark espresso leather deepens in character over time, making this wallet uniquely yours the longer you carry it. Dimensions: approx. 4.3" × 3.5" folded.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(2).jpeg'
},
{
  id: 56,
  name: 'The Croc Mini Wallet | Crocodile-Embossed Leather Compact Card Wallet — Chocolate Brown',
  description: 'Big personality. Minimal footprint. The Croc Mini Wallet is a compact card wallet crafted from full-grain cowhide leather with a precision crocodile-emboss pattern pressed into the surface, delivering the look of exotic leather with the durability and ethical assurance of premium cowhide. The small-format design carries your essential cards and folded cash without the bulk of a traditional billfold. A secure snap or tuck closure keeps contents from shifting. Perfect as a slim front-pocket wallet, travel card holder, or a secondary wallet for minimalist daily carry. The chocolate brown finish develops a warm patina with use. Dimensions: approx. 3.5" × 2.8" folded.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(3).jpeg'
},
{
  id: 57,
  name: 'The Vertical Slim | Top-Grain Leather Vertical Card Wallet with Cash Pocket — Tan Brown',
  description: 'For the minimalist who still needs everything. The Vertical Slim is a portrait-orientation card wallet crafted from smooth top-grain cowhide leather in warm tan brown. The vertical layout is a deliberate design choice — it sits taller and narrower in the pocket than a traditional bifold, making it virtually invisible in slim-cut trousers or suit pockets. Multiple card slots fan out for quick single-handed access, while the center cash pocket accommodates folded notes without bulk. The contrast edge stitching and clean exterior make this wallet as elegant as it is functional. Dimensions: approx. 3.0" × 4.5" — a refined choice for the minimal carry lifestyle.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(4).jpeg'
},
{
  id: 58,
  name: 'The Grand Bifold | Large Full-Grain Leather Billfold Wallet with Multiple Compartments — Havana Brown',
  description: 'For those who carry more and refuse to sacrifice quality, the Grand Bifold delivers generous capacity in a premium full-grain cowhide leather construction. The rich Havana brown exterior showcases the natural grain texture of the leather, developing a deep lived-in patina over time that no synthetic wallet can replicate. The spacious interior features multiple card slots, a wide billfold compartment for thick cash stacks, and additional slip pockets for receipts, transit cards, and loose essentials. Double-stitched seams throughout ensure the wallet holds its form across years of heavy daily use. Dimensions: approx. 4.5" × 3.8" folded. The wallet for those who carry with confidence.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(5).jpeg'
},
{
  id: 59,
  name: 'The Croc Snap Bifold | Crocodile-Embossed Leather Snap Wallet with Card & Cash Slots — Dark Brown',
  description: 'Exotic texture. Everyday durability. The Croc Snap Bifold pairs a precision crocodile-embossed full-grain cowhide leather exterior with a practical snap-close bifold format. The embossed pattern is deep and consistent, giving this wallet a tactile luxury that sets it apart from smooth leather alternatives. The brass snap closure provides a satisfying, secure close while keeping your cards and cash firmly contained. Inside, a clean layout of card slots and a full-length billfold ensures efficient organization for daily carry. The dark brown finish resists visible wear, making this wallet a long-term companion for demanding daily use. Dimensions: approx. 4.3" × 3.5" folded.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(6).jpeg'
},
{
  id: 60,
  name: 'The Cash & Carry Billfold | Full-Grain Leather Bifold Wallet with Wide Bill Compartment — Medium Brown',
  description: 'Designed for those who still carry cash and carry it properly, the Cash & Carry Billfold is a full-grain cowhide leather wallet engineered around the billfold compartment rather than treating it as an afterthought. The wide, unobstructed note compartment lays flat and full-length, accommodating bills of any denomination without folding twice. Multiple card slots sit alongside for organized daily access, and the clean medium brown exterior develops character with every transaction. Saddle-stitched seams and a reinforced spine ensure the wallet holds its flat profile even when fully loaded. Dimensions: approx. 4.3" × 3.5" folded. The no-nonsense wallet for the cash-forward professional.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(7).jpeg'
},
{
  id: 61,
  name: 'The Artisan Snap Wallet | Hand-Stitched Full-Grain Leather Bifold Snap Wallet — Natural Tan',
  description: 'Craftsmanship you can feel with every open and close. The Artisan Snap Wallet is handcrafted from full-grain cowhide leather in natural tan, distinguished by its prominent hand-stitched border detailing that wraps the entire perimeter of the wallet. This contrast saddle-stitch finish is a hallmark of artisan leather goods — both structural and decorative, reinforcing every edge while signaling the quality within. The brass snap closure keeps contents secure, opening to reveal a practical layout of card slots and a full billfold compartment. The natural tan leather will warm and deepen beautifully over time, developing a personal patina unique to each owner. Dimensions: approx. 4.3" × 3.5" folded.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(8).jpeg'
},
{
  id: 62,
  name: 'The Shadow Quilted Bifold | Quilted Full-Grain Leather Flat Wallet — Jet Black',
  description: 'Sleek, dark, and unmistakably premium — the Shadow Quilted Bifold is crafted from full-grain cowhide leather with a precision quilted diamond pattern pressed across the entire exterior surface. The all-black finish combined with the deep geometric texture creates a wallet that demands attention without saying a word. The slim flat profile sits flush in any pocket, while the interior delivers a clean layout of multiple card slots and a full-length billfold compartment for notes. No bulky snap or clasp — just a clean fold that stays flat. Contrast stitching traces the quilt lines for added visual depth and structural reinforcement. Dimensions: approx. 4.3" × 3.5" folded. The wallet for those who prefer darkness done well.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(9).jpeg'
},
{
  id: 63,
  name: 'The Continental Long Wallet | Full-Grain Leather Women\'s Long Snap Wallet with Organizer — Cognac Brown',
  description: 'Generous in capacity, refined in every detail — the Continental Long Wallet is a full-format leather wallet designed for those who carry cards, cash, receipts, and coins all in one organized piece. Crafted from full-grain cowhide leather in a rich cognac brown with a vintage burnished finish, the surface develops a deep personal patina with daily handling. The long format opens via a secure brass snap closure to reveal multiple card slots, a full-length billfold section, coin compartment, and interior slip pockets for complete everyday organization. The wide body fits comfortably in a handbag, clutch, or jacket breast pocket. Saddle-stitched seams in contrast thread run the full perimeter. Dimensions: approx. 7.5" × 3.8" closed. The definitive everyday companion for the organized professional.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(10).jpeg'
},
{
  id: 64,
  name: 'The Pebbled Tab Bifold | Pebbled Full-Grain Leather Bifold Wallet with Tab Snap Closure — Dark Chocolate',
  description: 'Built for those who demand security without sacrificing style, the Pebbled Tab Bifold features a distinctive side-tab snap closure that keeps all contents firmly contained while adding a refined structural detail to the exterior. Crafted from full-grain cowhide leather with a natural pebble texture in deep chocolate brown, the surface is naturally resistant to scuffs and minor abrasion — a practical advantage for daily carry. The tab snap fastening clicks shut with satisfying precision, securing the wallet completely. Inside, multiple card slots, a billfold compartment, and a slip pocket provide organized storage for all everyday essentials. The pebbled grain deepens in character with age. Dimensions: approx. 4.5" × 3.8" folded.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(11).jpeg'
},
{
  id: 65,
  name: 'The Desert Slim Bifold | Distressed Suede-Finish Leather Slim Wallet — Camel Tan',
  description: 'Sun-faded character from day one. The Desert Slim Bifold is crafted from soft distressed cowhide leather in a warm camel tan finish, pre-treated to give it the effortless, broken-in look of a wallet that has already earned its story. The supple, matte surface has a suede-like hand-feel while retaining the durability of full leather construction. The slim no-closure design keeps the profile minimal and pocket-friendly, opening flat to reveal card slots and a clean billfold section. The natural tan will continue to develop its own unique weathered patina with daily use — shifting warmer and richer over time. Lightweight and soft against the hand. Dimensions: approx. 4.3" × 3.5" folded. For the laid-back minimalist.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(12).jpeg'
},
{
  id: 66,
  name: 'The Diamond Press Bifold | Diamond-Embossed Full-Grain Leather Bifold Wallet with Card Fan — Jet Black',
  description: 'Precision geometry meets everyday function. The Diamond Press Bifold is crafted from full-grain cowhide leather in jet black, with a bold all-over diamond emboss pattern that gives the exterior a sharp, architectural quality unlike any standard smooth wallet. The open bifold design fans out to reveal multiple card slots on both wings, allowing single-handed card access without removing the wallet from your pocket. A full-length billfold compartment sits center for clean note storage. The all-black palette and diamond texture resist visible wear and minor surface marks, maintaining a sharp appearance through heavy daily use. High-tenacity stitching reinforces all edges. Dimensions: approx. 4.3" × 3.5" folded. A geometric statement in everyday carry.',
  category: 'accessories',
  featured: false,
  image: 'img/Leather wallets/Wallet(13).jpeg'
},
{
  id: 67,
  name: 'Slugger Pro Red Top-Grain Cowhide Leather Baseball Backpack with Bat Sleeves & YKK Zippers',
  description: 'Step onto the diamond with the Slugger Pro — a bold red premium leather baseball backpack engineered for serious players who demand performance and durability in equal measure. Constructed from top-grain cowhide leather with a high-density padded back panel and ergonomic shoulder straps, this bag carries your full kit in complete comfort. Dual external bat sleeves secure two full-size bats, while a large vented main compartment holds helmets, cleats, and apparel. Side mesh pockets keep a water bottle and accessories within reach. All compartments are secured by YKK zippers for smooth, reliable access, and the interior is fully lined with premium cotton fabric to protect gear from abrasion. Solid brass hardware on buckles and D-rings adds a premium finish. Capacity: 30–35 Litres. Dimensions: 55 × 35 × 25 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 68,
  name: 'Diamond Hauler Grey Premium Wheeled Baseball Roller Bag with Telescoping Handle & YKK Zippers',
  description: 'The Diamond Hauler is the ultimate team travel companion — a full-size wheeled baseball roller bag built for players who carry everything from bats and helmets to cleats and full uniforms. Constructed from rugged top-grain cowhide leather in a sleek charcoal grey, this upright-style bag features a smooth-glide telescoping carry handle, heavy-duty inline skate wheels, and a reinforced base panel for maximum floor durability. The main compartment is generously sized for complete kit storage, with a dedicated ventilated shoe/cleat pocket to isolate odours. Multiple front organisation pockets with YKK zippers offer fast, reliable access to smaller items. Interior fully lined in premium cotton fabric. Solid brass hardware throughout. Capacity: 55–60 Litres. Dimensions: 90 × 35 × 30 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 69,
  name: 'Strikeout Elite Black & Neon Green Premium Baseball Backpack with Ventilated Bat Compartment',
  description: 'High-visibility on and off the field — the Strikeout Elite baseball backpack in black and neon green is built for the competitive player who refuses to blend in. Crafted from top-grain cowhide leather with reinforced stress points and padded air-flow back panel, this backpack distributes load evenly during long travel days. The ventilated main compartment accommodates a full helmet and kit, with dedicated bat sleeves running along the exterior for two full-size bats. Neon accent trim on zippers and shoulder straps ensures quick identification in busy dugouts. All pockets feature YKK zippers for dependable, smooth-glide access. Interior is fully lined in premium cotton fabric. Solid brass hardware on all attachment points. Capacity: 30–35 Litres. Dimensions: 55 × 35 × 25 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 70,
  name: 'Powerplay Pro Black & Green Premium Baseball Backpack with Insulated Bottle Holder & Bat Sleeves',
  description: 'The Powerplay Pro is a feature-packed black and neon green baseball backpack designed for players who stay hydrated and organised through every inning. Built from top-grain cowhide leather with padded, contoured shoulder straps and a ventilated back panel for all-day carry comfort. The side-mounted insulated bottle holder keeps water cold during warm-weather play, while dual external bat sleeves secure two full-size bats externally. The spacious main compartment holds a full helmet, gloves, and apparel, with a front organisation panel for small accessories. All YKK zippers provide smooth, heavy-use access. Premium cotton fabric interior lining protects all gear from scratches. Solid brass hardware on all mounting and adjustment points. Capacity: 32–36 Litres. Dimensions: 55 × 35 × 25 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 71,
  name: 'Grand Slam Tri-Tone Black, Grey & Red Premium Baseball Backpack with Dual Bat Sleeves',
  description: 'Make a statement in the dugout with the Grand Slam — a tri-tone black, grey, and red premium baseball backpack that brings professional-level organisation and carry capacity to every player. Constructed from top-grain cowhide leather with a structured frame, reinforced base, and padded back system for long-haul comfort. The dual external bat sleeves accommodate two full-size bats with secure zip retention, while the main compartment offers generous space for a full helmet, cleats, and apparel. A front zip organisation pocket with YKK zipper keeps valuables and accessories within arm\'s reach. Red accent stitching and trim reflect serious team spirit. Interior lined in premium cotton fabric throughout. Solid brass hardware on all straps and closures. Capacity: 30–35 Litres. Dimensions: 55 × 35 × 25 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 72,
  name: 'BlueStrike Elite Royal Blue & Neon Green Premium Baseball Backpack with Padded Back System',
  description: 'Stand out in the field with the BlueStrike Elite — a royal blue and neon green premium baseball backpack that combines bold colour blocking with serious performance construction. Built from top-grain cowhide leather with a structured, load-bearing frame and padded mesh back panel designed for ventilated, posture-friendly carry. Dual external bat sleeves with zip closure secure full-size bats, while the large main compartment handles a helmet, full kit, and footwear. YKK zippers on all pockets ensure smooth, reliable access in any weather. The neon green accent on straps, pocket trims, and zipper pulls makes this bag instantly recognisable in any dugout. Interior fully lined in premium cotton fabric. Solid brass hardware throughout. Capacity: 30–35 Litres. Dimensions: 55 × 35 × 25 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 73,
  name: 'Fielder\'s Choice Navy Blue Premium Baseball Backpack with External Glove Holder & Bat Sleeve',
  description: 'Designed for the fielder who values quick transitions from bag to play, the Fielder\'s Choice is a navy blue premium baseball backpack featuring a dedicated external glove holder that keeps your fielding glove securely mounted and immediately accessible. Constructed from top-grain cowhide leather with reinforced stitching and a padded carry system for comfortable shoulder and back support. The single external bat sleeve holds a full-size bat, while the roomy main compartment stores a helmet, uniform, and accessories. A front panel zip pocket with YKK zipper organises keys, wallet, and small gear. The navy colourway presents a clean, professional look on and off the field. Interior lined throughout in premium cotton fabric. Solid brass hardware on all adjustment points. Capacity: 28–32 Litres. Dimensions: 52 × 33 × 24 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 74,
  name: 'Allstar Black Premium Baseball Backpack with Glove Holder, Dual Bat Sleeves & YKK Zippers',
  description: 'The Allstar is the complete black baseball backpack — built for tournament-level players who need a bag that carries everything without compromise. Constructed from top-grain cowhide leather with a heavy-duty reinforced structure, padded back panel, and wide-base stability for independent standing. An external glove holder keeps your fielding glove secured and ventilated on the exterior, while dual bat sleeves provide easy access to two full-size bats without opening the main bag. The spacious interior holds a full helmet, cleats, and uniform with room to spare, and is fully lined in premium cotton fabric for clean, protected storage. All access points use YKK zippers for smooth, long-cycle reliability. Solid brass hardware on all straps and buckles. Capacity: 32–36 Litres. Dimensions: 55 × 35 × 25 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Baseball bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Baseball bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Baseball bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Baseball bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 75,
  name: 'Courtside Pro Black Premium Basketball Backpack with Dedicated Ball Compartment & YKK Zippers',
  description: 'The Courtside Pro is the serious player\'s basketball backpack — purpose-built with a large, reinforced bottom ball compartment that securely holds a full-size NBA basketball while keeping the rest of your gear completely separate and organised. Constructed from top-grain cowhide leather with a padded back panel, ergonomic shoulder straps, and a chest strap for on-the-move stability. The main compartment comfortably holds a full change of kit, shoes, and accessories, while front organisation pockets with YKK zippers keep valuables and training gear easily accessible. Side mesh pockets accommodate a water bottle on each side. Interior is fully lined in premium cotton fabric throughout. Solid brass hardware on all attachment and adjustment points. A bag built for the court-ready athlete who expects premium quality in every detail. Capacity: 35–40 Litres. Dimensions: 55 × 35 × 28 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 76,
  name: 'Hardwood Classic Red Premium Top-Grain Cowhide Leather Basketball Duffle Bag with YKK Zippers',
  description: 'The Hardwood Classic is a clean, no-nonsense red basketball duffle bag built for players who travel to every game ready to perform. Crafted from top-grain cowhide leather with reinforced double-stitched seams and a structured base panel that holds its shape whether packed full or half-empty. Twin top carry handles with brass hardware rings allow easy one-hand or two-hand grip, while the wide main compartment comfortably fits a full-size basketball, training shoes, uniform, and accessories. End-zip pockets secured by YKK zippers provide fast, reliable access to valuables and smaller gear. The black contrast handles and trim give this bag a sharp, athletic identity. Interior fully lined in premium cotton fabric for clean, protected storage. An adjustable, removable shoulder strap offers hands-free carry on long walks. Capacity: 40–45 Litres. Dimensions: 60 × 30 × 30 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 77,
  name: 'Fastbreak Red Premium Top-Grain Cowhide Leather Basketball Bag with Ventilated Shoe Compartment',
  description: 'The Fastbreak is a high-performance red basketball bag purpose-built for players who keep their footwear separate from the rest of their kit. A dedicated, ventilated bottom shoe compartment keeps basketball shoes and court footwear isolated from clean clothing and accessories — preventing odour transfer and protecting both. The spacious top main compartment holds a full-size basketball, uniform, and personal items with ease. Constructed from top-grain cowhide leather with reinforced stress-point stitching and a structured carry system. All compartments are sealed with YKK zippers for smooth, reliable access. Dual top handles with brass hardware rings and a removable padded shoulder strap offer flexible carry options. Interior fully lined in premium cotton fabric. Solid brass hardware throughout. Capacity: 42–48 Litres. Dimensions: 62 × 32 × 30 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 78,
  name: 'Triple Threat Red & Grey Premium Top-Grain Cowhide Leather Basketball Backpack with Side Bottle Pocket',
  description: 'The Triple Threat is a feature-loaded red and grey basketball backpack engineered for athletes who need every piece of gear organised and immediately accessible. Constructed from top-grain cowhide leather with a padded, ventilated back panel and wide ergonomic shoulder straps for comfortable carry on and off the court. The extra-deep main compartment easily accommodates a full-size basketball alongside court shoes, uniform, and accessories. A quick-access side compartment with YKK zipper provides a dedicated space for smaller items, while a wide-mouth side mesh bottle pocket keeps hydration within reach at all times. Front organiser pocket with YKK zipper for keys, phone, and wallet. Interior fully lined in premium cotton fabric. Solid brass hardware on all strap adjusters and attachment points. Capacity: 35–40 Litres. Dimensions: 55 × 35 × 28 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 79,
  name: 'Blacktop Pro Premium Top-Grain Cowhide Leather Basketball Duffle Bag with Brass Hardware & YKK Zippers',
  description: 'Understated, powerful, and built for the serious athlete — the Blacktop Pro is a full-size black basketball duffle bag that carries your entire game-day kit with zero compromise. Crafted from top-grain cowhide leather in all-black, with reinforced double-stitched seams and a wide flat-base construction for stable, independent standing. The generous main compartment handles a full-size basketball, court shoes, and a complete uniform with room to spare. Dual top carry handles with solid brass hardware D-rings allow confident one-hand or two-hand carry, while end-access pockets with YKK zippers provide fast retrieval of accessories. A removable padded shoulder strap offers hands-free carry for longer distances. Interior fully lined in premium cotton fabric to keep gear clean and scratch-free. Solid brass hardware on all closures and adjustments. Capacity: 40–45 Litres. Dimensions: 60 × 30 × 30 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 80,
  name: 'Drop Zone Black Premium Top-Grain Cowhide Leather Basketball Backpack with External Ball Compartment',
  description: 'Never stuff a basketball into a main compartment again — the Drop Zone backpack features a dedicated oversized external ball pocket that holds a full-size NBA basketball securely and independently, keeping the rest of your kit clean and completely organised. Constructed from top-grain cowhide leather with a structured, reinforced frame and padded ergonomic shoulder straps for comfortable carry to and from practice. The roomy main compartment stores court shoes, uniform, and personal items, while a front YKK-zip organiser pocket keeps valuables accessible. A ventilated shoe pocket at the base isolates footwear from fresh clothing. YKK zippers on all access points for smooth, high-cycle reliability. Interior fully lined in premium cotton fabric. Solid brass hardware on all strap attachments and buckles. Capacity: 35–40 Litres. Dimensions: 55 × 35 × 28 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Basketball bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Basketball bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Basketball bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Basketball bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 81,
  name: 'Gridiron Navy Premium Top-Grain Cowhide Leather Football Duffle Bag with YKK Zippers & Brass Hardware',
  description: 'The Gridiron Navy is a premium full-size football duffle bag built for players who demand serious carry capacity and lasting durability every training day and match day. Crafted from top-grain cowhide leather in a deep navy blue with contrast grey base panelling, the bag combines a sharp, professional look with robust construction — reinforced double-stitched seams, structured base, and high-density handles with solid brass hardware rings. The oversized main compartment holds full pads, helmet, cleats, and a complete uniform without overpacking. End-zip compartments with YKK zippers offer fast access to boots, water bottles, and essentials. A removable padded shoulder strap enables hands-free carry across the car park or stadium. Interior is fully lined in premium cotton fabric for clean, abrasion-free storage. Solid brass hardware on all closures, handles, and adjustment points. Capacity: 55–60 Litres. Dimensions: 68 × 35 × 33 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 82,
  name: 'Shadow Strike Quilted Diagonal Top-Grain Cowhide Leather Football Backpack with YKK Zippers',
  description: 'The Shadow Strike is a sleek, fashion-forward football backpack that brings premium construction to the training ground. Crafted from top-grain cowhide leather with a bold diagonal quilted panel pattern that adds structural rigidity and distinctive visual texture. The padded back system and wide ergonomic shoulder straps distribute load comfortably for daily commute and training carry. The spacious main compartment holds boots, training kit, and accessories, while a front YKK-zip organiser pocket keeps valuables secure. Side zip pockets provide quick access without opening the main bag. All zippers are YKK for smooth, long-cycle reliability. Interior fully lined in premium cotton fabric. Solid brass hardware on all strap adjusters and attachment rings. A bag that performs as sharply as it looks. Capacity: 28–32 Litres. Dimensions: 50 × 32 × 22 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 83,
  name: 'Matchday Pro Black Dual-Tier Top-Grain Cowhide Leather Football Duffle Bag with Brass Hardware',
  description: 'The Matchday Pro redefines the football duffle with a structured dual-tier design that separates clean kit from boots and wet gear without compromise. Built from top-grain cowhide leather in all-black with reinforced double-stitched seams and a firm base for independent standing. The upper main compartment carries full training or match kit, while the lower ventilated tier provides a completely separate, accessible space for boots, shin pads, and damp clothing. Dual top carry handles with solid brass D-ring hardware allow confident carry, with a removable padded shoulder strap for hands-free transport. All access points feature YKK zippers. Interior fully lined in premium cotton fabric throughout both tiers. Solid brass hardware on all closures and adjustments. Capacity: 45–50 Litres. Dimensions: 65 × 32 × 32 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 85,
  name: 'Stealth Edition Black Minimalist Top-Grain Cowhide Leather Football Backpack with YKK Zippers',
  description: 'The Stealth Edition is built for the player who lets their game do the talking. This all-black minimalist football backpack strips away distraction and delivers pure functionality in a clean, professional silhouette. Constructed from top-grain cowhide leather with a smooth matte finish, reinforced load-bearing seams, and a padded back panel for all-day carry comfort. The structured main compartment holds a full match kit including boots and accessories, with a front organisation pocket for smaller items. All access points are sealed by YKK zippers for dependable performance in any conditions. Interior fully lined in premium cotton fabric. Solid brass hardware on shoulder strap adjusters and D-rings. A timeless football backpack that pairs with any kit colour. Capacity: 28–32 Litres. Dimensions: 50 × 32 × 22 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 86,
  name: 'Captain\'s Navy Structured Top-Grain Cowhide Leather Football Backpack with Padded Carry System',
  description: 'The Captain\'s Navy is a sharp, professional-grade navy blue football backpack designed for the player who values structure and organisation above everything. Crafted from top-grain cowhide leather with a semi-rigid outer shell that holds its shape whether packed or empty. The padded ergonomic back panel and contoured shoulder straps with brass hardware adjusters deliver all-day carry comfort during pre-match travel and training commutes. A large main compartment organises full kit, boots, and personal items, with front and side zip pockets for fast access to essentials. All zippers are YKK rated for heavy daily use. Interior fully lined in premium cotton fabric for clean, protected storage. Solid brass hardware throughout. Capacity: 30–35 Litres. Dimensions: 52 × 33 × 24 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 87,
  name: 'Prestige Grey Marl Premium Top-Grain Cowhide Leather Football Duffle Bag with YKK Zippers',
  description: 'The Prestige Grey Marl is an elevated football duffle bag that brings a refined, luxury-sport aesthetic to everyday training. Crafted from top-grain cowhide leather with a distinctive heathered grey texture, this bag stands out from standard black and navy alternatives without sacrificing a clean, versatile look. The wide main compartment provides generous room for a full match kit, boots, and accessories, while end-zip pockets with YKK zippers offer quick, organised access. Dual top handles with solid brass hardware rings allow easy carry, and a removable padded shoulder strap provides hands-free flexibility. Reinforced base panel with rubber feet keeps the bag protected on wet changing room floors. Interior fully lined in premium cotton fabric. Solid brass hardware throughout. Capacity: 40–45 Litres. Dimensions: 60 × 30 × 30 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 88,
  name: 'Emerald Luxe Geometric Quilted Top-Grain Cowhide Leather Football Tote Bag with Brass Hardware',
  description: 'The Emerald Luxe is the football bag that refuses to look like one. This striking teal-green geometric quilted tote bag is crafted from top-grain cowhide leather with a bold raised diamond pattern that gives the bag a fashion-forward identity suited for players who carry their style as confidently as their skills. Wide leather-wrapped top handles with solid brass hardware rings allow elegant shoulder carry, while the open-top main compartment provides fast, unrestricted access to kit. Internal zip pockets with YKK zippers keep valuables and accessories organised and secure inside the spacious main body. Side slip pockets provide additional fast-access storage. Interior fully lined in premium cotton fabric. Solid brass hardware on all handle attachments and ring connectors. Capacity: 35–40 Litres. Dimensions: 55 × 30 × 28 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 89,
  name: 'Reactor Black & Neon Green Top-Grain Cowhide Leather Football Backpack with Ball Holder & Bottle Pocket',
  description: 'The Reactor is a fully loaded black and neon green football backpack built for players who carry everything — ball, boots, kit, and hydration — in one organised, go-anywhere pack. Constructed from top-grain cowhide leather with reinforced stress points and a ventilated padded back panel for all-day comfort. The external elastic ball net securely holds a full-size football on the outside of the bag, freeing up the entire main compartment for a complete training kit. A wide-mouth side mesh bottle pocket keeps a water bottle accessible at all times, while a front YKK-zip organiser pocket manages smaller essentials. Neon green contrast on straps, zippers, and trim keeps this bag instantly visible in busy training environments. Interior fully lined in premium cotton fabric. Solid brass hardware throughout. Capacity: 32–36 Litres. Dimensions: 55 × 35 × 25 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 90,
  name: 'Primera Black Premium Top-Grain Cowhide Leather Football Duffle Bag with Ventilated Boot Compartment',
  description: 'Clean, durable, and competition-ready — the Primera is a full-size black football duffle bag designed for serious club and academy players. Crafted from top-grain cowhide leather with a smooth matte finish, reinforced double-stitched seams, and a structured base for stable floor standing. The large main compartment holds a complete match kit, while a ventilated lower boot compartment keeps footwear isolated from fresh clothing and accessories. Dual top carry handles with solid brass D-ring hardware provide a secure grip, and a removable padded shoulder strap enables comfortable cross-body carry. All pockets and compartments are sealed with YKK zippers for smooth, high-cycle access. Interior fully lined in premium cotton fabric. Solid brass hardware on all closures and strap hardware. Capacity: 45–50 Litres. Dimensions: 63 × 32 × 30 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Football bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Football bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Football bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Football bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 91,
  name: 'Courtcraft Black Premium Top-Grain Cowhide Leather Tennis Crossbody Bag with YKK Zippers',
  description: 'The Courtcraft is a slim, sophisticated black tennis crossbody bag engineered for players who travel light and arrive organised. Crafted from top-grain cowhide leather with a clean, structured silhouette, this messenger-style bag holds one to two tennis racquets along with balls, wristbands, and court accessories in a compact, easy-carry format. The main racquet compartment features a padded interior lining in premium cotton fabric to protect frames from vibration and scratching. A front organisation pocket with YKK zipper keeps keys, phone, and small gear accessible. The adjustable brass-hardware shoulder strap allows precise length adjustment for cross-body or single-shoulder carry. Ideal for club sessions, recreational play, or light tournament travel where a full kit bag is not required. Solid brass hardware throughout. Capacity: 15–18 Litres. Dimensions: 75 × 28 × 12 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 92,
  name: 'Wimbledon Heritage Cream & Green Stripe Top-Grain Cowhide Leather Tennis Racquet Bag',
  description: 'The Wimbledon Heritage is a classically inspired cream and forest green stripe tennis racquet bag that pays homage to the great traditions of the sport. Crafted from top-grain cowhide leather with a flat, structured silhouette and bold green stripe detailing, this bag channels the timeless grass-court aesthetic loved by club players and enthusiasts alike. Holds up to three full-size tennis racquets in a padded main compartment lined with premium cotton fabric to protect frames at all times. A front zip pocket with YKK zipper stores balls, grips, and small accessories. Leather-wrapped handles with solid brass hardware rings allow comfortable top-carry, while an adjustable shoulder strap offers cross-body convenience. The cream leather exterior develops a beautiful natural patina over time. Solid brass hardware throughout. Capacity: 3-racquet. Dimensions: 76 × 30 × 12 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 93,
  name: 'Baseline Pro Black Premium Top-Grain Cowhide Leather Tennis Duffle Racquet Bag with YKK Zippers',
  description: 'The Baseline Pro is a full-size black tennis duffle bag built for the touring or tournament player who needs to carry racquets, footwear, clothing, and accessories in one high-quality, organised pack. Crafted from top-grain cowhide leather with a structured wide-body duffle format and reinforced double-stitched seams throughout. The main compartment accommodates up to six racquets alongside court shoes and a full change of clothing. A dedicated end-zip accessory pocket with YKK zipper keeps balls, grips, sweatbands, and small gear neatly separated. Dual top handles with solid brass hardware rings for easy carry, with a removable padded shoulder strap for hands-free transport between courts. Interior fully lined in premium cotton fabric. All zippers are YKK for smooth, heavy-use reliability. Solid brass hardware throughout. Capacity: 6-racquet / 45–50 Litres. Dimensions: 76 × 33 × 33 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 94,
  name: 'Ace Purple & Pink Premium Top-Grain Cowhide Leather Tennis Backpack with Racquet Sleeve & YKK Zippers',
  description: 'The Ace is a bold purple and pink tennis backpack designed for the player who brings personality to every court. Crafted from top-grain cowhide leather with vibrant two-tone colourblocking and reinforced ergonomic shoulder straps for comfortable all-day carry. A dedicated side racquet sleeve holds one to two full-size racquets externally, keeping them accessible without opening the main bag. The main compartment stores court shoes, a full change of clothing, and personal accessories with ease. A front YKK-zip organiser pocket manages balls, grips, and smaller essentials, while side mesh pockets keep a water bottle within reach. Interior fully lined in premium cotton fabric throughout. Solid brass hardware on all strap adjusters and attachment points. A standout bag for the confident, style-conscious player. Capacity: 25–28 Litres. Dimensions: 50 × 32 × 22 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 95,
  name: 'Sorrento Tan & Brown Top-Grain Cowhide Leather Tennis Sling Backpack with YKK Zippers',
  description: 'The Sorrento is a refined Italian-inspired tennis sling backpack crafted from top-grain cowhide leather in a warm two-tone tan and brown colourway. The teardrop silhouette is both visually distinctive and ergonomically optimised — the curved body sits naturally against the back for balanced single-strap or cross-body carry. A padded main compartment holds one to two tennis racquets alongside balls, a change of clothing, and court accessories, all protected by a premium cotton fabric interior lining that prevents frame scratching. The front zip pocket with YKK zipper organises keys, wallet, and smaller essentials, while exterior slip pockets provide quick no-zip access. All closures use YKK zippers for dependable, smooth-glide performance. Solid brass hardware on all strap adjusters and D-rings. The leather develops a rich natural patina with use. Capacity: 18–22 Litres. Dimensions: 50 × 30 × 15 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 96,
  name: 'Club Series White Premium Top-Grain Cowhide Leather Tennis Duffle Bag with Black Contrast Handles',
  description: 'The Club Series is a clean, sporty white tennis duffle bag that brings a crisp, tournament-ready aesthetic to every court session. Crafted from top-grain cowhide leather with a structured wide-body duffle format and bold black contrast handles that give the bag a sharp, athletic identity. The spacious main compartment holds up to six racquets alongside court shoes, clothing, and accessories, with end-zip pockets secured by YKK zippers for organised, fast access to balls, grips, and smaller gear. Dual top handles with solid brass hardware D-rings allow confident two-hand carry, while a removable padded shoulder strap provides comfortable hands-free transport between courts. Reinforced base panel protects the bag on wet changing room floors. Interior fully lined in premium cotton fabric. Solid brass hardware throughout. A versatile bag equally suited to club play and competitive tournament travel. Capacity: 45–50 Litres. Dimensions: 76 × 33 × 33 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 97,
  name: 'Grand Tour Cognac Premium Top-Grain Cowhide Leather 3-Racquet Tennis Bag with Brass Hardware',
  description: 'The Grand Tour Cognac is a classically proportioned 3-racquet tennis bag crafted from top-grain cowhide leather in a warm cognac tan — a timeless choice for the discerning club and competitive player. The structured horizontal silhouette is the gold standard format for racquet bags, offering a perfect balance of portability and carrying capacity. The padded main compartment holds up to three full-size racquets in a premium cotton fabric lined interior that protects frames from contact damage. A front zip pocket with YKK zipper provides organised storage for balls, wristbands, grips, and small accessories. Leather-wrapped top handle with solid brass hardware rings allows easy one-hand carry, while the adjustable padded shoulder strap enables comfortable hands-free transport. The cognac leather will develop a characterful patina over time. Solid brass hardware throughout. Capacity: 3-racquet. Dimensions: 76 × 30 × 20 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 98,
  name: 'Ivory Slim Minimal Top-Grain Cowhide Leather Tennis Racquet Sleeve Bag with YKK Zipper',
  description: 'The Ivory Slim is a beautifully restrained tennis racquet sleeve for the minimalist player who carries only what is essential. Crafted from top-grain cowhide leather in a clean cream ivory, this slim flat-profile bag holds one to two full-size racquets in a precisely tailored interior lined with premium cotton fabric for full-surface frame protection. The single full-length YKK zipper runs cleanly along the top edge for easy racquet insertion and removal. A compact front slip pocket provides space for a small personal item. The leather-wrapped top handle with solid brass hardware allows easy hand-carry, while the adjustable shoulder strap with brass adjuster offers comfortable cross-body carry to and from the court. A pure, unfussy design that lets the leather quality speak for itself. The ivory hide develops a warm natural patina over time. Capacity: 1–2 racquets. Dimensions: 76 × 28 × 8 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 99,
  name: 'Lune Cream Structured Top-Grain Cowhide Leather Tennis Racquet Bag with Gold Brass Hardware',
  description: 'The Lune is an elegantly structured cream tennis racquet bag that brings luxury fashion sensibility to the court. Crafted from top-grain cowhide leather with a smooth, clean ivory finish and a gently moulded hard-shell profile that protects racquets from external impact during travel and transit. The wide-mouth main compartment holds up to three full-size racquets in a spacious interior fully lined with premium cotton fabric. Gold-finish solid brass hardware on the top handle rings, zipper pulls, and shoulder strap connectors adds a refined, premium detail that elevates this bag well above standard court bags. The front YKK-zip pocket provides organised storage for balls, grips, and accessories. The leather-wrapped top handle allows elegant single-hand carry, with an adjustable padded shoulder strap for longer distances. A statement bag for the player who values craftsmanship as much as performance. Capacity: 3-racquet. Dimensions: 76 × 32 × 18 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 100,
  name: 'Veloce Cognac & Navy Top-Grain Cowhide Leather Tennis Duffle Bag with Circle Detail & YKK Zippers',
  description: 'The Veloce is a bold, design-forward cognac brown tennis duffle bag that combines Italian sporting heritage with premium leather craftsmanship. Crafted from top-grain cowhide leather in a rich warm cognac, the bag features a distinctive navy blue circular appliqué detail on the front panel — a signature design element that gives this bag an immediately recognisable, premium identity. The wide-body duffle format comfortably holds up to six racquets alongside court shoes, full clothing, and accessories. End-zip and front-access pockets with YKK zippers provide fast, organised retrieval of balls, grips, and smaller items. Dual leather-wrapped top handles with solid brass hardware D-rings allow secure two-hand carry, while a removable padded shoulder strap offers flexible hands-free transport. Interior fully lined in premium cotton fabric throughout. Solid brass hardware on all closures, handles, and adjustments. The cognac leather develops a rich patina over time. Capacity: 6-racquet / 45–50 Litres. Dimensions: 76 × 33 × 33 cm.',
  category: 'sports-bags',
  featured: false,
  images: [
    { src: 'img/Tenis bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Tenis bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tenis bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tenis bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 101,
  name: 'Maverick Weekender | Men\'s Top Grain Cowhide Leather Duffle Bag in Distressed Espresso — 40L Travel Bag',
  description: 'Built for the man who travels with purpose, the Maverick Weekender is a premium top grain cowhide leather duffle bag finished in a rich distressed espresso brown. The aged lived-in patina deepens beautifully with every journey. Designed for weekend getaways, business travel, and gym use alike, this 40-litre carry-all delivers serious capacity without compromising on refined aesthetics. Solid brass hardware lends a weighty heirloom quality to every clasp and D-ring, while YKK zippers ensure smooth reliable closure that stands up to years of heavy use. The interior is lined with premium high-quality cotton fabric. Carry by the twin top handles or sling over the shoulder with the included adjustable leather strap. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 102,
  name: 'The Heritage Overnighter | Structured Top Grain Leather Duffle Bag in Classic Cognac — 40L Luxury Travel Bag',
  description: 'Timeless in form and flawless in function, the Heritage Overnighter is the definitive leather travel bag for those who demand both elegance and endurance. Crafted from premium top grain cowhide leather in a warm cognac tone, this structured 40-litre duffle embodies old-world craftsmanship with modern practicality. The clean boxy silhouette stands upright with confidence, keeping your belongings neatly organized. Solid brass fittings add a polished luxury touch to every detail, while YKK zippers deliver smooth dependable performance. The Heritage Overnighter develops a rich patina over time, becoming more distinctly yours with every trip. This is not a disposable travel bag — it is an investment in quality that gets better with age. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(2.2)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 103,
  name: 'The Oxblood Voyager | Vintage Patina Top Grain Cowhide Leather Duffle Bag — 40L Premium Overnight Bag',
  description: 'Rare in colour, exceptional in quality — the Oxblood Voyager is a bold statement in premium leather travel goods. Handcrafted from top grain cowhide leather in a deep oxblood tone with a naturally aged patina, this bag carries the character of a well-travelled life. The rich burgundy-brown finish develops further with use, making each bag uniquely its own over time. Solid brass hardware reinforces every stress point with durability and distinction, while premium YKK zippers ensure effortless secure access. The interior is lined with high-quality cotton fabric that keeps contents clean and organized trip after trip. The Oxblood Voyager is for those who understand that a truly great bag is measured not in seasons, but in decades. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 104,
  name: 'The Caramel Classic | Minimalist Top Grain Leather Duffle Bag in Tan — 40L Men\'s Weekend Travel Bag',
  description: 'Stripped back to the essentials, the Caramel Classic is a masterclass in understated luxury. Crafted from smooth full-bodied top grain cowhide leather in a warm tan finish, this 40-litre duffle is designed for the traveller who values clean lines and lasting quality over fleeting trends. The smooth leather surface offers a sophisticated contrast to overly distressed styles, making it equally at home in a hotel lobby or a first-class lounge. Solid brass metal hardware adds just the right amount of refinement, while YKK zippers provide smooth reliable operation. The interior is finished with a premium cotton lining that is as refined as the exterior. Clean. Confident. Timeless. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 105,
  name: 'The Executive Noir | Top Grain Cowhide Leather Duffle Bag with Shoe Compartment in Jet Black — 40L Business Travel Bag',
  description: 'Precision-engineered for the modern professional, the Executive Noir redefines what a leather travel bag can do. Crafted from premium top grain cowhide leather in a jet black finish, this 40-litre duffle integrates a dedicated shoe compartment at the base — keeping your footwear separated from your clothes without sacrificing a single litre of packing space. The all-black aesthetic is sharp and authoritative, ready for the boardroom as much as the departure lounge. Solid brass hardware provides structural reinforcement at every critical point and YKK zippers run with effortless precision expected of executive-grade luggage. The interior is fully lined in premium cotton fabric. Business travel, gym sessions, weekend trips — the Executive Noir handles every transition without missing a beat. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 106,
  name: 'The Rugged Nomad | Weathered Top Grain Cowhide Leather Duffle Bag in Dark Brown — 40L Adventure Travel Bag',
  description: 'Some bags look like they belong in a display case. The Rugged Nomad looks like it belongs in the world. Crafted from top grain cowhide leather with a purposefully weathered rustic dark brown finish, this 40-litre bag is built for those who prefer experience over pristine. The naturally textured surface hides scuffs and wear gracefully, making it the perfect companion for adventure travel and everyday rugged use. The long adjustable shoulder strap provides hands-free carry comfort across long distances, while solid brass hardware and YKK zippers ensure every fastening point is as tough as the leather surrounding it. Inside, the premium cotton lining keeps contents protected and organized. The Rugged Nomad gets better with every journey. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 107,
  name: 'The Golden Trail | Vintage-Style Top Grain Leather Duffle Bag in Mustard Gold — 40L Retro Weekend Bag',
  description: 'Warm, bold, and undeniably distinctive, the Golden Trail is for those who refuse to blend in. Crafted from top grain cowhide leather in a rich mustard gold tone, this vintage-inspired 40-litre duffle turns heads without trying. The warm earthy hue deepens and enriches over time, developing a one-of-a-kind patina that no factory can replicate. The soft supple leather exterior is matched in quality by solid brass fittings that gleam warmly against the golden tone, and YKK zippers that glide every time every trip. The premium cotton interior lining keeps your belongings organized and protected. Bold enough to be remembered. Built well enough to last a lifetime. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 108,
  name: 'The Rosé Reverie | Embossed Top Grain Cowhide Leather Duffle Bag in Dusty Mauve — 40L Women\'s Luxury Travel Bag',
  description: 'Elegance meets edge in the Rosé Reverie — a premium leather duffle bag designed for the woman who travels in style. Crafted from top grain cowhide leather with a subtle embossed texture and a sophisticated dusty mauve finish, this bag is as much a fashion statement as it is a functional travel companion. The 40-litre capacity makes it perfect for weekend getaways, spa retreats, or city breaks, offering enough space without sacrificing the sleek silhouette. Solid brass hardware glows warmly against the muted rose tone while YKK zippers provide smooth reliable closure. The interior is lined with premium cotton fabric — soft against your belongings, easy to clean, and built to last. Thoughtfully designed. Distinctly feminine. Effortlessly luxurious. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 109,
  name: 'The Urban Slate | Contemporary Top Grain Cowhide Leather Duffle Bag in Charcoal Grey — 40L Modern Carry-All',
  description: 'Sharply modern, quietly luxurious — the Urban Slate is a contemporary leather duffle bag for those who move through the world with confidence. Crafted from premium top grain cowhide leather in a refined charcoal grey, this 40-litre bag speaks the visual language of urban sophistication and function-first design. The structured silhouette maintains its form whether fully packed or lightly loaded. Solid brass hardware adds a premium contrast against the dark grey leather, while YKK zippers ensure every opening and closure is as smooth and reliable as the day it was made. The interior is lined with high-quality cotton fabric, providing a clean and organized environment for everything you carry. Modern. Minimal. Masterful. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 110,
  name: 'The Trailblazer Canvas | Waxed Canvas & Top Grain Cowhide Leather Duffle Bag in Desert Tan — 40L Adventure Weekender with Shoe Compartment',
  description: 'Where rugged utility meets refined craftsmanship, the Trailblazer Canvas stands in a class of its own. Built from premium waxed canvas with top grain cowhide leather trims and handles, this 40-litre weekender is engineered for the adventurer who refuses to compromise on quality. The desert tan waxed canvas exterior is naturally weather-resistant, repelling moisture and dirt while developing a rich character-filled wax patina with every outing. The standout feature is the dedicated shoe compartment at the base — keeping footwear away from clothes, making it perfect for gym sessions, weekend travel, or back-to-back business trips. Top grain cowhide leather handles are reinforced at every stress point, aging gracefully to a warm honey tone. Solid brass metal hardware and YKK zippers complete the premium build. Interior fully lined with high-quality cotton fabric. Dimensions: 26H × 54L × 28W cm | Capacity: 40L.',
  category: 'leather-duffle-bags',
  featured: false,
  images: [
    { src: 'img/Ld bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Ld bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Ld bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Ld bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 111,
  name: 'DuffleCraftCo Ranger Roll-Top Tactical Backpack | Olive Drab | Military-Grade MOLLE Rucksack',
  description: 'Engineered for the field and built to outlast the mission, the Ranger Roll-Top Tactical Backpack in Olive Drab is a precision-crafted military-style rucksack for operators, outdoor adventurers, and gear enthusiasts who demand exceptional quality. Constructed from heavy-duty 1000D Cordura Nylon with reinforced stress-point stitching, this pack resists abrasion, water, and harsh environmental conditions. The roll-top closure system provides adaptable capacity management — compress for day missions or expand for extended operations. Features MOLLE webbing on the front panel, solid brass metal hardware, authentic YKK zippers on all access points, padded adjustable shoulder straps, and a premium soft-touch cotton fabric interior lining that protects sensitive gear and electronics. Dimensions: 20"H × 13"W × 8"D | Capacity: 45L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 112,
  name: 'DuffleCraftCo Coyote Assault MOLLE Tactical Backpack | 3-Day Pack | Tan Military Rucksack',
  description: 'Meet your 72-hour companion. The Coyote Assault MOLLE Tactical Backpack is a battle-tested multi-compartment pack purpose-built for operators, law enforcement, and serious outdoor tacticians. The coyote brown colorway meets military and law enforcement concealment standards while projecting an unmistakable professional presence. Engineered with a structured frame and full-panel MOLLE/PALS webbing for unlimited customization with pouches, holsters, and hydration bladders. Features a triple-compartment layout, front zippered admin panel with organizer slots, hydration bladder sleeve compatible up to 3L, sternum strap and waist belt for load stabilization, solid brass metal hardware, YKK zippers rated for 10,000+ cycles, and a high-quality cotton fabric interior lining. Dimensions: 21"H × 14"W × 9"D | Capacity: 50L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 113,
  name: 'DuffleCraftCo Desert Storm Large Tactical Backpack | Khaki MOLLE Rucksack | Mil-Spec Gear Bag',
  description: 'Dominate the terrain. The Desert Storm Large-Frame Tactical Backpack in Khaki is engineered for maximum load-bearing performance, handling extended missions, overlanding expeditions, and survival scenarios where you need every essential organized and ready. The large-frame structure provides superior back support and weight distribution while the expansive main compartment and modular exterior offer virtually limitless storage options. Features full MOLLE/PALS grid across front, sides, and waist belt, multiple zippered compartments with internal organizer panels, a laptop/tablet sleeve fitting up to 15", padded back panel with airflow channels, adjustable sternum strap, padded hip belt, solid brass metal hardware, genuine YKK zippers, and premium cotton fabric interior lining. Dimensions: 22"H × 15"W × 10"D | Capacity: 60L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 114,
  name: 'DuffleCraftCo Coyote Flat-Pack Tactical Range Bag | Modular Admin Panel | Mil-Spec Gear Organizer',
  description: 'Precision organization for the prepared professional. The Coyote Flat-Pack Tactical Range Bag is a slim-profile high-capacity gear organizer designed for range days, vehicle storage, and mission-ready EDC setups. Its low-profile flat-panel construction slides effortlessly into vehicles, vaults, or under seats — while opening up to reveal a fully organized interior system. Features MOLLE attachment loops on the exterior for mounting to vehicle seats or larger packs, multiple internal compartment dividers with hook-and-loop organization panels, a front zippered pocket for quick-access items, reinforced carry handle, heavy brass metal hardware, YKK zippers for smooth reliable access, and a premium cotton interior lining that protects optics, magazines, and accessories. Dimensions: 18"H × 12"W × 4"D | Capacity: ~15L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 115,
  name: 'DuffleCraftCo Coyote 3-Day Assault Tactical Backpack | Multi-Compartment MOLLE Pack | 50L Military Bag',
  description: 'The Coyote 3-Day Assault Pack is engineered for the operator who demands zero compromise. Inspired by special operations load-out protocols, this multi-compartment assault pack organizes your kit across three distinct zones — main compartment, secondary compartment, and front admin panel — ensuring mission-critical items are always at your fingertips. The full-coverage MOLLE webbing system transforms this pack into a fully modular platform adaptable to any mission profile. Features triple-compartment layout with internal mesh organization pockets, full front and side MOLLE/PALS webbing, padded laptop and hydration sleeve up to 15" and 3L, adjustable padded shoulder straps, sternum strap, load-lifter straps, rubber-reinforced drag handle, solid brass hardware, YKK zippers, and premium high-quality cotton interior lining. Dimensions: 21"H × 13"W × 9"D | Capacity: 50L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 116,
  name: 'DuffleCraftCo Woodland MOLLE Tactical Backpack | MultiCam Camo Military Rucksack | 50L Assault Pack',
  description: 'Vanish into the terrain. The Woodland MOLLE Tactical Assault Backpack in MultiCam Woodland Camouflage is designed for operators who need to move undetected through dense forested and mixed environments. This is a fully operational tactical platform built for serious field use, not just aesthetics. The wide-format MOLLE exterior supports a complete pouching system while the reinforced internal structure ensures load remains stable and centered regardless of terrain. Features full-panel MOLLE/PALS webbing front and sides, large main compartment with internal organizer, front zippered admin pocket, side compression straps for load control, padded back panel with ventilation channels, adjustable sternum strap and hip belt, solid brass hardware, YKK zippers, and premium cotton fabric interior lining. Dimensions: 21"H × 14"W × 9"D | Capacity: 50L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 117,
  name: 'DuffleCraftCo MultiCam Tactical Crossbody Messenger Bag | Compact MOLLE Sling Pack | EDC Gear Bag',
  description: 'Fast. Compact. Always ready. The MultiCam Tactical Crossbody Messenger Bag is designed for rapid-access single-shoulder carry — perfect for range bags, EDC setups, vehicle kits, and urban tactical use. Its square structured profile maximizes internal volume within a minimal footprint while the MultiCam pattern keeps things professional and field-ready. Features MOLLE rows on the front panel for modular pouch attachment, main compartment with internal divider pockets, front zippered access pocket, adjustable padded crossbody sling strap, top and side carry handles, solid brass metal hardware, YKK zippers for reliable rapid access, and a premium cotton fabric interior lining that protects electronics and accessories. Dimensions: 12"H × 10"W × 5"D | Capacity: ~12L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 118,
  name: 'DuffleCraftCo Blackout Stealth Tactical Backpack | All-Black MOLLE Military Pack | 50L Urban Assault Bag',
  description: 'Darkness is your advantage. The Blackout Stealth Tactical Backpack is the definitive all-black tactical pack for urban operators, law enforcement, security professionals, and tactical enthusiasts who require a no-compromise carry solution that blends seamlessly into any environment. The all-black colorway strips away anything non-essential, delivering a clean authoritative presence equally at home in a professional security operation or a business-casual tactical setup. Features matte black-coated solid brass hardware, all-black finish YKK zippers, full MOLLE/PALS webbing system on front and sides, triple-compartment layout with internal admin panel, padded laptop sleeve fitting 15", hydration bladder compatible 3L sleeve, sternum strap, padded hip belt, padded back ventilation panel, and premium black cotton fabric interior lining. Dimensions: 21"H × 14"W × 9"D | Capacity: 50L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 119,
  name: 'DuffleCraftCo Woodland DPM Large Expedition Tactical Backpack | 60L+ Military Rucksack | Camo MOLLE Pack',
  description: 'When the mission demands everything — and then some — the Woodland DPM Expedition Tactical Backpack rises to the occasion. This large-format expedition-grade tactical rucksack is built for extended field operations, multi-day trekking, and serious load-out configurations. The classic Woodland DPM camouflage delivers proven concealment in temperate, forest, and jungle environments. Available as a set with a coordinating smaller companion pack for total modular versatility. Features full MOLLE/PALS webbing on front, side, and hip belt, main compartment with internal frame sleeve and hydration port, multiple external zippered pockets, compression straps, padded hip belt with side MOLLE points, removable top lid that converts to a standalone day pack, load lifter straps, solid brass metal hardware throughout, YKK zippers on every access point, and premium cotton fabric interior lining. Dimensions: 24"H × 16"W × 11"D | Capacity: 65–70L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 120,
  name: 'DuffleCraftCo Ranger Green 3-Day MOLLE Tactical Backpack | 50L Military Assault Pack | Mil-Spec Rucksack',
  description: 'Introducing the Ranger Green MOLLE Assault Backpack — a mil-spec multi-compartment tactical rucksack engineered for operators, survivalists, law enforcement professionals, and serious outdoor adventurers who refuse to compromise on gear. Purpose-built for 72-hour operations, extended range sessions, and rugged backcountry missions. Crafted from premium 1000D Cordura Nylon with reinforced double-stitched seams and stress-point bar-tacking. The full-coverage MOLLE/PALS webbing grid on the front panel and sides creates a fully customizable load-out platform compatible with all standard MOLLE pouches, holsters, and accessories. Features triple-compartment layout, velcro patch panel, hydration bladder sleeve up to 3L, padded laptop sleeve up to 15", ergonomic air-channel back panel, adjustable padded shoulder straps with load lifters, padded hip belt, solid brass metal hardware, genuine YKK zippers, and premium high-quality cotton fabric interior lining. Dimensions: 21"H × 14"W × 9"D | Capacity: 50L.',
  category: 'tactical-bags',
  featured: false,
  images: [
    { src: 'img/Tac bags/P(10.1)front.jpeg', label: 'Front' },
    { src: 'img/Tac bags/P(10.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Tac bags/P(10.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Tac bags/P(10.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 121,
  name: 'Trailblazer Distressed Top-Grain Cowhide Leather Motorcycle Saddle Bag',
  description: 'Hand-distressed top-grain cowhide leather saddle bag with a rugged vintage character that deepens with every ride. Features solid brass buckles, D-rings, and rivets in an antique finish, YKK-zip side pockets for fast access, and a premium cotton fabric interior lining for clean, abrasion-free storage. Adjustable mounting straps for universal fitment on cruiser and chopper models. Capacity: 10–12 Litres. Dimensions: 35 × 26 × 13 cm.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(1.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(1.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(1.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(1.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 122,
  name: 'Midnight Rider Classic Flap Top-Grain Cowhide Leather Motorcycle Saddle Bag — Forest Green',
  description: 'A rare and sophisticated forest green top-grain cowhide leather saddle bag with a classic fold-over flap design. Dual solid brass buckle-strap closures ensure a secure hold at touring speeds, while YKK-zip side pockets provide quick access to essentials. Premium cotton fabric lining keeps the spacious main compartment clean and structured. Balanced saddle profile engineered for even weight distribution. Capacity: 12–15 Litres. Dimensions: 38 × 28 × 14 cm.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(2.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(2.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(2.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(2.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 123,
  name: 'Executive Quilted Top-Grain Cowhide Leather Motorcycle Briefcase Saddle Bag',
  description: 'A structured briefcase-style motorcycle saddle bag crafted from top-grain cowhide leather with a precision quilted panel for added rigidity and visual refinement. Features a top carry handle for off-bike use, solid brass zip pulls and trim hardware, YKK zippers on all compartments, and a premium cotton fabric lining with organised interior pockets. Designed for the urban professional rider who demands both style and function. Capacity: 15–18 Litres. Dimensions: 40 × 30 × 15 cm.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(3.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(3.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(3.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(3.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 124,
  name: 'Braided Edge Premium Top-Grain Cowhide Leather Motorcycle Satchel Saddle Bag',
  description: 'A collector-grade motorcycle satchel saddle bag in jet black top-grain cowhide leather, finished with hand-woven leather braid along all edges and strap loops — a traditional artisan technique that reinforces seams and adds unmistakable character. Secured by dual solid brass buckle straps on the fold-over flap. YKK-zip interior side pockets and a premium cotton fabric lining complete this craftsman-quality piece. Capacity: 11–13 Litres. Dimensions: 36 × 28 × 13 cm.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(4.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(4.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(4.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(4.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 125,
  name: 'Classic Rider Smooth Top-Grain Cowhide Leather Motorcycle Flap Saddle Bag — Black',
  description: 'The definitive everyday motorcycle saddle bag — clean, timeless, and built to last. Crafted from smooth jet black top-grain cowhide leather with twin solid brass buckle-strap flap closures. YKK-zip side pockets keep phone, wallet, and tools within arm\'s reach, while the premium cotton fabric lining ensures a clean interior ride after ride. Adjustable mounting straps offer universal fitment across cruiser, bobber, and standard motorcycle models. Capacity: 12–15 Litres. Dimensions: 38 × 28 × 14 cm.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(5.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(5.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(5.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(5.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 126,
  name: 'Cognac Heritage Curved Top-Grain Cowhide Leather Motorcycle Saddle Bag',
  description: 'A warm cognac brown top-grain cowhide leather saddle bag defined by its ergonomic curved silhouette — designed to mirror the natural contour of a saddle and distribute weight evenly across the rear seat. Develops a beautifully rich patina over time, making it a piece that only improves with age. Solid brass hardware throughout, YKK-zip exterior pockets for fast access, and a premium cotton fabric lining for clean long-distance touring storage. Capacity: 11–13 Litres. Dimensions: 37 × 27 × 13 cm.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(6.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(6.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(6.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(6.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 127,
  name: 'Stormdrifter Antique Weathered Top-Grain Cowhide Leather Motorcycle Saddle Bag',
  description: 'A hand-weathered top-grain cowhide leather saddle bag finished with a multi-tone antiquing process that creates dramatic tonal variation — deep shadow in the creases, warm amber highlights on the surface. No two bags are identical. Solid brass buckle flap closure, YKK-zip side pockets, and a full premium cotton fabric lining deliver the functionality to match the character. Adjustable leather saddle straps for a confident, rattle-free fit on most motorcycle models. Capacity: 10–12 Litres. Dimensions: 36 × 26 × 13 cm.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(7.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(7.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(7.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(7.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 128,
  name: 'Ironclad Studded Roll Top-Grain Cowhide Leather Motorcycle Barrel Saddle Bag',
  description: 'A cylindrical barrel-style saddle bag in jet black top-grain cowhide leather, built for the custom chopper and biker culture aesthetic. Rows of solid brass dome studs adorn the body and strap hardware for a bold, unmistakable road presence. Dual YKK zippers — full-length top-load and end-access — provide flexible retrieval. A removable brass-buckle strap system allows universal mounting across sissy bars, rear racks, and seat loops. Interior fully lined in premium cotton fabric for clean, padded storage. Capacity: 14 Litres. Dimensions: 45 × 20 cm (L × D).',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(8.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(8.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(8.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(8.4)inner.jpeg', label: 'Inner' },
  ]
},
{
  id: 129,
  name: 'Desperado Studded Oversized Buckle Top-Grain Cowhide Leather Motorcycle Saddle Bag',
  description: 'The most visually commanding bag in the collection. This large-format black top-grain cowhide leather saddle bag is anchored by an oversized solid brass centre buckle as its hero feature, surrounded by a full front-panel pattern of solid brass dome studs. Deep main compartment and YKK-zip side pockets offer serious carrying capacity for multi-day touring. Premium cotton fabric lining throughout and adjustable quick-release brass buckle mounting straps for universal fitment. Built for riders who demand maximum presence and maximum capacity. Capacity: 16–18 Litres. Dimensions: 40 × 30 × 16 cm.',
  category: 'bike-saddle-bags',
  featured: false,
  images: [
    { src: 'img/Bike saddle bags/P(9.1)front.jpeg', label: 'Front' },
    { src: 'img/Bike saddle bags/P(9.2)back.jpeg',  label: 'Back'  },
    { src: 'img/Bike saddle bags/P(9.3)side.jpeg',  label: 'Side'  },
    { src: 'img/Bike saddle bags/P(9.4)inner.jpeg', label: 'Inner' },
  ]
},
];

const CATEGORIES = [
  { slug: 'leather-duffle-bags', label: 'Leather Duffle Bags', icon: 'shopping-bag' },
  { slug: 'duffle-bags', label: 'Duffle Bags', icon: 'briefcase' },
  { slug: 'business-bags', label: 'Business Bags', icon: 'briefcase' },
  { slug: 'crossbody-bags', label: 'Crossbody Bags', icon: 'shopping-bag' },
  { slug: 'accessories', label: 'Accessories', icon: 'wallet' },
  { slug: 'sports-bags', label: 'Sports Bags', icon: 'zap' },
  { slug: 'bike-saddle-bags', label: 'MotorBike Saddle Bags', icon: 'bike' },
  { slug: 'tactical-bags', label: 'Tactical Bags', icon: 'shield' }
];

// ─── NAVIGATION HELPER ───────────────────────────────
// Used by buttons/cards to navigate to another page with optional params.
const app = {
  navigate(page, params = {}) {
    if (page === 'home') {
      location.href = 'index.html';
    } else if (page === 'products') {
      const qs = params.category ? `?category=${encodeURIComponent(params.category)}` : '';
      location.href = 'products.html' + qs;
    } else if (page === 'contact') {
      const qs = params.product ? `?product=${encodeURIComponent(params.product)}` : '';
      location.href = 'contact.html' + qs;
    }
  }
};

// ─── URL PARAMS HELPER ────────────────────────────────
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name) || '';
}

// ─── NAV ─────────────────────────────────────────────
function initNav() {
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
  // Scroll shadow
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (navbar) navbar.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(44,36,32,0.1)' : '';
  }, { passive: true });
}

// ─── HOME PAGE ────────────────────────────────────────
function initHomePage() {
  // Categories grid
const catGrid = document.getElementById('home-cat-grid');

if (catGrid) {
  catGrid.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-card" data-reveal
      onclick="app.navigate('products', { category: '${cat.slug}' })">

      <div class="cat-icon" data-lucide="${cat.icon}"></div>

      <h3>${cat.label}</h3>
      <span class="cat-arrow">→</span>

    </div>
  `).join('');

  lucide.createIcons();
}


  // Featured products
  const featGrid = document.getElementById('home-featured-grid');
  if (featGrid) {
    const featured = PRODUCTS.filter(p => p.featured);
    featGrid.innerHTML = featured.map(p => `
      <div class="product-card" data-reveal>
        <div class="product-img">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='img/placeholder.svg'" loading="lazy">
          <div class="product-overlay">
            <button class="btn btn-primary btn-sm" onclick="app.navigate('contact',{product:'${encodeURIComponent(p.name)}'})">Order Now</button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-cat">${p.category.replace(/-/g,' ')}</span>
          <h3>${p.name}</h3>
          <p>${p.description.substring(0, 80)}...</p>
          <div class="product-footer">
            <span class="product-price">${p.price || 'Contact for Price'}</span>
            <button class="btn-link" onclick="app.navigate('contact',{product:'${encodeURIComponent(p.name)}'})">Inquire →</button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// ─── PRODUCTS PAGE ────────────────────────────────────

function productCardHTML(p) {
  const allImages = (p.images && p.images.length)
    ? p.images
    : [{ src: p.image, label: 'Front' }];

  const imagesJSON  = encodeURIComponent(JSON.stringify(allImages));
  const colorsJSON  = encodeURIComponent(JSON.stringify(p.colors || []));
  const safeName    = p.name.replace(/'/g, "\\'");
  const encodedName = encodeURIComponent(p.name);

  const colorSwatches = (p.colors && p.colors.length)
    ? `<div class="color-swatches">
         ${p.colors.map((c, i) =>
           `<span class="color-swatch${i === 0 ? ' active' : ''}"
                  title="${c.label}"
                  data-index="${i}"
                  style="background:${c.hex}"></span>`
         ).join('')}
         <span class="color-label"></span>
       </div>`
    : '';

  return `
    <div class="product-card" data-reveal
         data-images="${imagesJSON}"
         data-colors="${colorsJSON}">

      <!-- Image Gallery -->
      <div class="product-img-wrap">
<div class="product-img" onclick="openProductModal(${JSON.stringify(p).replace(/"/g, '&quot;')})">          <img class="product-main-img"
               src="${allImages[0].src}"
               alt="${p.name}"
               onerror="this.src='img/placeholder.svg'"
               loading="lazy">
          <div class="product-overlay">
            <button class="btn btn-primary btn-sm"
                    onclick="event.stopPropagation();app.navigate('contact',{product:'${encodedName}'})">
              Order Now
            </button>
          </div>
        </div>

        ${allImages.length > 1 ? `
        <div class="angle-thumbs">
          ${allImages.map((img, i) =>
            `<img class="angle-thumb${i === 0 ? ' active' : ''}"
                  src="${img.src}"
                  alt="${p.name} ${img.label}"
                  onerror="this.src='img/placeholder.svg'"
                  loading="lazy"
                  data-index="${i}"
                  data-label="${img.label}">`
          ).join('')}
        </div>
        <div class="angle-label">${allImages[0].label} view</div>` : ''}
      </div>

      <!-- Product Info -->
      <div class="product-info">
        <span class="product-cat">${p.category.replace(/-/g, ' ')}</span>
       <h3 class="product-title-link" onclick="openProductModal(${JSON.stringify(p).replace(/"/g, '&quot;')})">${p.name}</h3>

        <div class="product-desc-wrap">
          <p class="product-desc">
            <span class="desc-text">${p.description}</span>
          </p>
          ${p.description.length > 120 ? `
          <button class="desc-toggle" onclick="toggleDesc(this)">
            <span class="toggle-label">Read more</span>
            <svg class="toggle-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="4,6 8,10 12,6"/>
            </svg>
          </button>` : ''}
        </div>

        ${colorSwatches}

        <div class="product-footer">
          <span class="product-price">${p.price || 'Contact for Price'}</span>
          <button class="btn-link"
                  onclick="app.navigate('contact',{product:'${encodedName}'})">
            Inquire →
          </button>
        </div>
      </div>
    </div>
  `;
}
function toggleDesc(btn) {
  const wrap = btn.closest('.product-desc-wrap');
  const label = btn.querySelector('.toggle-label');
  const isExpanded = wrap.classList.toggle('expanded');
  label.textContent = isExpanded ? 'Read less' : 'Read more';
}
// ─── PRODUCT CARD INTERACTIVITY ───────────────────────────────────────────────
// Call once after cards are injected into the DOM (replaces / extends initReveal)
 
function initProductCards() {
  document.querySelectorAll('.product-card').forEach(card => {
    const images  = JSON.parse(decodeURIComponent(card.dataset.images || '[]'));
    const colors  = JSON.parse(decodeURIComponent(card.dataset.colors || '[]'));
    const mainImg = card.querySelector('.product-main-img');
    if (!mainImg) return;
 
    // ── helpers ──────────────────────────────────────────────────────────────
    let currentColorIndex = 0;
 
    function getImagesForColor(colorIdx) {
      const c = colors[colorIdx];
      return (c && c.images && c.images.length) ? c.images : images;
    }
 
    function switchMainImage(idx, colorIdx = currentColorIndex) {
      const pool = getImagesForColor(colorIdx);
      const src  = pool[idx] || pool[0];
      if (!src) return;
 
      mainImg.classList.add('img-switching');
      setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove('img-switching');
      }, 150);
 
      // sync dots
      card.querySelectorAll('.angle-dot').forEach((d, i) =>
        d.classList.toggle('active', i === idx));
 
      // sync thumbs
      card.querySelectorAll('.angle-thumb').forEach((t, i) =>
        t.classList.toggle('active', i === idx));
    }
 
    function switchColor(colorIdx) {
      currentColorIndex = colorIdx;
      const c = colors[colorIdx];
      if (!c) return;
 
      // Update swatch active state
      card.querySelectorAll('.color-swatch').forEach((s, i) =>
        s.classList.toggle('active', i === colorIdx));
 
      // Update color label
      const label = card.querySelector('.color-label');
      if (label) label.textContent = c.label || '';
 
      // Rebuild angle thumbs for this color's images
      const pool = getImagesForColor(colorIdx);
      const thumbWrap = card.querySelector('.angle-thumbs');
      if (thumbWrap) {
        thumbWrap.querySelectorAll('.angle-thumb').forEach((t, i) => {
          t.src = pool[i] || pool[0];
          t.classList.toggle('active', i === 0);
        });
      }
 
      // Reset main image to first in new pool
      switchMainImage(0, colorIdx);
    }
 
    // ── angle thumbnail clicks ────────────────────────────────────────────────
    card.querySelectorAll('.angle-thumb').forEach(thumb => {
      thumb.addEventListener('click', e => {
        e.stopPropagation();
        switchMainImage(parseInt(thumb.dataset.index, 10));
      });
    });
 
    // ── dot clicks ────────────────────────────────────────────────────────────
    card.querySelectorAll('.angle-dot').forEach(dot => {
      dot.addEventListener('click', e => {
        e.stopPropagation();
        switchMainImage(parseInt(dot.dataset.index, 10));
      });
    });
 
    // ── color swatch clicks ───────────────────────────────────────────────────
    card.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', e => {
        e.stopPropagation();
        switchColor(parseInt(swatch.dataset.index, 10));
      });
 
      // Show color label on hover
      swatch.addEventListener('mouseenter', () => {
        const label = card.querySelector('.color-label');
        if (label) label.textContent = colors[parseInt(swatch.dataset.index, 10)]?.label || '';
      });
    });
 
    // ── keyboard arrow navigation on focused card ─────────────────────────────
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', e => {
      const dots  = card.querySelectorAll('.angle-dot');
      const active = card.querySelector('.angle-dot.active');
      if (!active) return;
      const cur = parseInt(active.dataset.index, 10);
      if (e.key === 'ArrowRight') switchMainImage(Math.min(cur + 1, dots.length - 1));
      if (e.key === 'ArrowLeft')  switchMainImage(Math.max(cur - 1, 0));
    });
  });
}
 
// ─── UPDATED renderProducts ───────────────────────────────────────────────────
 
function renderProducts(category = 'all', search = '') {
  const searchLower = search.toLowerCase();
 
  let filtered = PRODUCTS;
  if (category !== 'all') filtered = filtered.filter(p => p.category === category);
  if (search) filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(searchLower) ||
    p.description.toLowerCase().includes(searchLower) ||
    p.category.toLowerCase().includes(searchLower)
  );
 
  // Update filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.cat === category);
    tab.onclick = () => {
      const cat      = tab.dataset.cat;
      const searchVal = document.getElementById('prod-search-input')?.value || '';
      renderProducts(cat, cat === 'all' ? searchVal : '');
    };
  });
 
  // Update search input
  const searchInput = document.getElementById('prod-search-input');
  if (searchInput) searchInput.value = search;
 
  // Results info
  const resultsInfo = document.getElementById('results-info');
  if (resultsInfo) {
    resultsInfo.innerHTML = `${search ? `Showing results for "<strong>${search}</strong>" — ` : ''}<strong>${filtered.length}</strong> product${filtered.length !== 1 ? 's' : ''} found`;
  }
 
  // Render grid
  const grid = document.getElementById('products-grid');
  if (!grid) return;
 
  if (category === 'all' && !search) {
    grid.innerHTML = CATEGORIES.map(cat => {
      const catProducts = PRODUCTS.filter(p => p.category === cat.slug);
      if (!catProducts.length) return '';
      return `
        <div class="category-section">
          <div class="category-header">
            <h2>${cat.label}</h2>
            <span class="see-all" onclick="renderProducts('${cat.slug}','')">See all →</span>
          </div>
          <div class="products-grid">
            ${catProducts.map(p => productCardHTML(p)).join('')}
          </div>
        </div>
      `;
    }).join('');
  } else if (filtered.length > 0) {
    grid.innerHTML = `<div class="products-grid">${filtered.map(p => productCardHTML(p)).join('')}</div>`;
  } else {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No products found</h3>
        <p>Try a different search or <span style="color:var(--brown);cursor:pointer" onclick="renderProducts('all','')">view all products</span>.</p>
      </div>
    `;
  }
 
  // Init reveal animations + NEW card interactivity
  setTimeout(() => {
    initReveal();
    initProductCards();
  }, 100);
}
 
// ─── UPDATED initProductsPage ─────────────────────────────────────────────────
 
function initProductsPage() {
  const category = getParam('category') || 'all';
  const search   = getParam('search')   || '';
  renderProducts(category, search);
}

// ─── CONTACT PAGE ─────────────────────────────────────
function initContactPage() {
  const product     = getParam('product');
  const productInput = document.getElementById('contact-product');
  const messageArea  = document.getElementById('contact-message');
  if (productInput && product) {
    const decoded = decodeURIComponent(product);
    productInput.value = decoded;
    if (messageArea && !messageArea.value) {
      messageArea.value = `I am interested in: ${decoded}. Please send me more information about pricing and availability.`;
    }
  }
  // Clear any stale alerts
  const alertEl = document.getElementById('contact-alert');
  if (alertEl) alertEl.className = 'alert alert-hidden';
}




// ─── REVEAL ANIMATIONS ───────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal]:not(.revealed)').forEach(el => obs.observe(el));
}

// ─── INIT — detect which page we're on ────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();

  const path = location.pathname;

  if (path.endsWith('products.html')) {
    initProductsPage();
  } else if (path.endsWith('contact.html')) {
    initContactPage();
  } else {
    // index.html / home
    initHomePage();
  }

  initReveal();
});
function openLightbox(src, name) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-title').textContent = name;
  lb.style.display = 'flex';
  requestAnimationFrame(() => lb.classList.add('open'));
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  setTimeout(() => { lb.style.display = 'none'; }, 260);
}
document.getElementById('products-grid').addEventListener('mouseover', function(e) {
  const thumb = e.target.closest('.angle-thumb');
  if (!thumb) return;

  const card = thumb.closest('.product-card');
  const mainImg = card.querySelector('.product-main-img');
  const label = card.querySelector('.angle-label');
  const allThumbs = card.querySelectorAll('.angle-thumb');

  allThumbs.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');

  mainImg.style.opacity = '1';
  setTimeout(() => {
    mainImg.src = thumb.src;
    mainImg.style.opacity = '1';
  }, 1000);

  if (label) label.textContent = (thumb.dataset.label || '') + ' view';
});
// ─── PRODUCT DETAIL MODAL ─────────────────────────────────────────────────────

function openProductModal(p) {
  const allImages = (p.images && p.images.length)
    ? p.images
    : [{ src: p.image, label: 'Front' }];

  let currentIdx = 0;

  const modal = document.getElementById('product-modal');
  const backdrop = document.getElementById('product-modal-backdrop');

  // Populate
  modal.querySelector('.pm-title').textContent     = p.name;
  modal.querySelector('.pm-cat').textContent       = p.category.replace(/-/g, ' ');
  modal.querySelector('.pm-desc').textContent      = p.description;
  modal.querySelector('.pm-price').textContent     = p.price || 'Contact for Price';

  // Main image
  const mainImg = modal.querySelector('.pm-main-img');
  mainImg.src = allImages[0].src;
  mainImg.alt = p.name;

  // Thumbnails
  const thumbWrap = modal.querySelector('.pm-thumbs');
  thumbWrap.innerHTML = allImages.map((img, i) => `
    <img class="pm-thumb${i === 0 ? ' active' : ''}"
         src="${img.src}"
         alt="${p.name} ${img.label}"
         data-index="${i}"
         onerror="this.src='img/placeholder.svg'">
  `).join('');

  // Label
  const label = modal.querySelector('.pm-angle-label');
  label.textContent = allImages[0].label + ' view';

  // Thumb click
  thumbWrap.querySelectorAll('.pm-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      currentIdx = parseInt(thumb.dataset.index);
      mainImg.style.opacity = '0.4';
      setTimeout(() => {
        mainImg.src = allImages[currentIdx].src;
        mainImg.style.opacity = '1';
      }, 150);
      thumbWrap.querySelectorAll('.pm-thumb').forEach((t, i) =>
        t.classList.toggle('active', i === currentIdx));
      label.textContent = allImages[currentIdx].label + ' view';
    });
  });

  // Prev / Next arrows
  modal.querySelector('.pm-prev').onclick = () => {
    currentIdx = (currentIdx - 1 + allImages.length) % allImages.length;
    updateModalImage();
  };
  modal.querySelector('.pm-next').onclick = () => {
    currentIdx = (currentIdx + 1) % allImages.length;
    updateModalImage();
  };

  function updateModalImage() {
    mainImg.style.opacity = '0.4';
    setTimeout(() => {
      mainImg.src = allImages[currentIdx].src;
      mainImg.style.opacity = '1';
    }, 150);
    thumbWrap.querySelectorAll('.pm-thumb').forEach((t, i) =>
      t.classList.toggle('active', i === currentIdx));
    label.textContent = allImages[currentIdx].label + ' view';
  }

  // Inquire button
  modal.querySelector('.pm-inquire-btn').onclick = () => {
    closeProductModal();
    app.navigate('contact', { product: p.name });
  };

  // Order Now button
  modal.querySelector('.pm-order-btn').onclick = () => {
    closeProductModal();
    app.navigate('contact', { product: p.name });
  };

  // Open
  backdrop.style.display = 'flex';
  requestAnimationFrame(() => backdrop.classList.add('open'));
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const backdrop = document.getElementById('product-modal-backdrop');
  backdrop.classList.remove('open');
  setTimeout(() => {
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }, 280);
}

// Close on backdrop click
document.getElementById('product-modal-backdrop')?.addEventListener('click', function(e) {
  if (e.target === this) closeProductModal();
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProductModal();
});
