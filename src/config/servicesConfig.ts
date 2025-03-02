import { siteConfig } from "./siteConfig";

export const servicesConfig = {
    OSW_Services: [
        {
            activeService: true,
            name: 'Surfaces',
            url: '/services#Surfaces',
            aria_label: "Surface Pressure Washing",
            src: "/OSW_Surface3.png",
            className: "",
            service: {
                titleMsg: "Surface Pressure Washing",
                subTitleMsg: "Driveways, Patios, Pool Decks, Porches, Stoops, Walkways",
                serviceMsg: "Surface Pressure Washing",
                estimateMsg: "Ready to peel away the dirt?",
                details: [
                    {
                        detailSummary: "Concrete, Brick, or Stone",
                        detailDescription: "Accumulating grime seems to be a superpower of hard surfaces.  While there is no miracle to keep them clean forever, with our refined C3PO process you'll get the longest lasting results possible.",
                        detailImageURL: "/OSW_Surface4.png",
                        detailImageAlt: "Clean Driveway",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "Stains and Chemicals",
                        detailDescription: "Often, it's more than just grime that makes your surfaces look bad.  We can treat oil, paint, rust, tire and hard water marks, sometimes removing them entirely.",
                        detailImageURL: "/OSW_Driveway_Rust1.png",
                        detailImageAlt: "Oil Stain",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "Resealing & Regrouting",
                        detailDescription: "The cleaning is complete, but the job's not truly done. Sealer guards against future stains and chemical damage, while fresh sand revitalizes those joints. Investing in these services will pay off for years to come.",
                        detailImageURL: "/OSW_Paver2.png",
                        detailImageAlt: "Paver Regrout",
                        detailImageClass: "",
                    },
                ],
            },
        },
        {
            activeService: true,
            name: 'Siding',
            url: '/services#Siding',
            aria_label: "Siding Soft Washing",
            src: "/OSW_Siding1.png",
            className: "",
            service: {
                titleMsg: "Siding Soft Washing",
                subTitleMsg: "Gentle whole-home cleaning.",
                serviceMsg: "Siding Soft Washing",
                estimateMsg: "Squeeze the dirt away from your siding.",
                details: [
                    {
                        detailSummary: "Vinyl, Stucco, Hardie Board",
                        detailDescription: "Regardless of what your home or business is surrounded with, our gentle and effective cleaning methods will leave your property sparkling clean without causing any damage.",
                        detailImageURL: "/OSW_Siding3.png",
                        detailImageAlt: "Vinyl Siding",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "TWO FREE Waste Bins",
                        detailDescription: "And hey, while we're making things shine, don't forget to check out our Waste Bin service! You get TWO FREE residential bin cleanings with any whole-house siding wash.  Because who wants a sparkling house with stinky bins?",
                        detailImageURL: "/OSW_WasteBin2.png",
                        detailImageAlt: "Vinyl Siding",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "Citrus Spider Shield",
                        detailDescription: "Our Citrus Spider Shield isn't just a scent, it's an eviction notice! This specialized, long-lasting treatment creates a barrier spiders despise. Think of it as giving spiders a 'taste' of orange they won't forget, sending them packing!",
                        detailImageURL: "/OSW_SpiderShield.png",
                        detailImageAlt: "",
                        detailImageClass: "",
                    },
                ],
            },
        },
        {
            activeService: true,
            name: 'Decks',
            url: '/services#Decks',
            aria_label: "Surface Pressure Washing",
            src: siteConfig.OSW_IMG.DECK1,
            className: "",
            service: {
                titleMsg: "Deck Soft Washing",
                subTitleMsg: "Restore your deck's natural beauty.",
                serviceMsg: "Decks",
                estimateMsg: "Ready for a dazzling deck?",
                details: [
                    {
                        detailSummary: "Wood, Composite, Vinyl",
                        detailDescription: "We promise to never use high pressure on any deck material.  You can have peace of mind that your deck will not be damaged by our gentle soft deck wash service.",
                        detailImageURL: siteConfig.OSW_IMG.DECK1,
                        detailImageAlt: "",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "Brightening, Sealing, Restaining",
                        detailDescription: "People are amazed at the magical transformations we can bring to your outdoor spaces.  Whether your looking to brighten, seal, or restain, your deck, we'll make it look as though it were touched by an enchantment.",
                        detailImageURL: siteConfig.OSW_IMG.DECK1,
                        detailImageAlt: "",
                        detailImageClass: "",
                    },
                ],
            },
        },
        {
            activeService: true,
            name: 'Fences',
            url: '/services#Fences',
            aria_label: "Surface Pressure Washing",
            src: "/OSW_Fence1.png",
            className: "",
            service: {
                titleMsg: "Fence Washing",
                subTitleMsg: "Clean, Beautiful, Protected",
                serviceMsg: "Fences Soft Washing",
                estimateMsg: "Ready for a fresh fence?",
                details: [
                    {
                        detailSummary: "Wood, Vinyl, Metal",
                        detailDescription: "Regular wood fence washing is essential to preserve its beauty and integrity. Removing dirt, mildew, and stains through professional cleaning not only enhances the fence's curb appeal but also prevents potential decay, ensuring a longer-lasting and aesthetically pleasing addition to your property. comfortable living environment during hot and dry weather.",
                        detailImageURL: siteConfig.OSW_IMG.FenceVinyl,
                        detailImageAlt: "",
                        detailImageClass: "absolute scale-[2.1] left-[60px] top-[100px]",
                    },
                    {
                        detailSummary: "Restore, Reseal, Stain",
                        detailDescription: "Regular vinyl fence washing is essential to maintain its appearance and durability. Professional cleaning removes dirt, mold, and stains, preventing degradation and ensuring your fence remains a lasting, low-maintenance asset to your property.",
                        detailImageURL: siteConfig.OSW_IMG.FenceWood,
                        detailImageAlt: "",
                        detailImageClass: "absolute scale-[2.0] left-[60px] top-[110px]",
                    },
                ],
            },
        },
        {
            activeService: true,
            name: 'Roofs',
            url: '/services#Roofs',
            aria_label: "Surface Pressure Washing",
            src: siteConfig.OSW_IMG.Roof1,
            className: "",
            service: {
                titleMsg: "Roof Soft Washing",
                subTitleMsg: "A natural clean for a lasting roof",
                serviceMsg: "Roofs",
                estimateMsg: "Let the sun shine onto your home",
                details: [
                    {
                        detailSummary: "Shingle, Tile, Metal",
                        detailDescription: "We use a customized soft wash technique, perfectly tailored to your roofing material, to banish algae, moss, and grime without causing damage. Our skilled technicians will leave your roof sparkling clean!",
                        detailImageURL: siteConfig.OSW_IMG.Roof1,
                        detailImageAlt: "",
                        detailImageClass: "absolute scale-[2.1] left-[60px] top-[100px]",
                    },
                ],
            },
        },
        {
            activeService: true,
            name: 'Gutters',
            url: '/services#Gutters',
            aria_label: "Surface Pressure Washing",
            src: "/OSW_Gutters2.png",
            className: "",
            service: {
                titleMsg: "Gutters Rejuvenation",
                subTitleMsg: "Reviving Curb Appeal, Restoring Flow.",
                serviceMsg: "Gutters",
                estimateMsg: "Ready for gleaming gutters?",
                details: [
                    {
                        detailSummary: "Brightening",
                        detailDescription: "Unsightly \"tiger stripes\" on your gutters are caused by a stubborn build-up of dirt, pollen, and grime. Our Gutter brightening service will tame those stripes, gently removing years of accumulated stains revealing the clean, bright gutters beneath.",
                        detailImageURL: "/OSW_Gutters3.png",
                        detailImageAlt: "",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "Debris",
                        detailDescription: "To keep your gutters looking their best, you need proper flow! We can also remove all debris, ensuring those stripes don't return for as long as possible.",
                        detailImageURL: "/OSW_Gutters1.png",
                        detailImageAlt: "",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "Downspout",
                        detailDescription: "Orange Soft Wash can also flush out downspouts and clear drains, preventing backups and keeping those tiger stripes at bay.  Don't let clogged downspouts ruin your freshly brightened gutters!",
                        detailImageURL: "/OSW_Downspout1.png",
                        detailImageAlt: "",
                        detailImageClass: "",
                    },

                ],
            },
        },
        {
            activeService: false,
            name: 'Boats & RVs',
            url: '/services#Boat & RVs',
            aria_label: "Surface Pressure Washing",
            src: siteConfig.OSW_IMG.SURFACE2,
            className: "",
            service: {
                titleMsg: "Siding Soft Washing",
                subTitleMsg: "Hey",
                serviceMsg: "Boats & RVs",
                estimateMsg: "Ready to peel away the dirt?",
                details: [],
            },
        },

        {
            activeService: false,
            name: 'Graffiti',
            url: '/services#Graffiti',
            aria_label: "Surface Pressure Washing",
            src: siteConfig.OSW_IMG.SURFACE2,
            className: "",
            service: {
                titleMsg: "Siding Soft Washing",
                subTitleMsg: "Hey",
                serviceMsg: "Graffiti",
                estimateMsg: "Ready to peel away the dirt?",
                details: [],
            },
        },
        {
            activeService: true,
            name: 'Commercial',
            url: '/services#Commercial',
            aria_label: "Surface Pressure Washing",
            src: "/OSW_Commercial1.png",
            className: "",
            service: {
                titleMsg: "Commercial Services",
                subTitleMsg: "Cost Effective, Time Efficient, Highest Quality, Best Value",
                serviceMsg: "Commercial Properties",
                estimateMsg: "Ready for a brighter business!",
                details: [
                    {
                        detailSummary: "Building",
                        detailDescription: "Our experienced teams can scale any service to meet your property needs.  We use industry-standard equipment and proven techniques, to deliver results with minimal disruption to your operations.",
                        detailImageURL: "/OSW_Commercial1.png",
                        detailImageAlt: "Quality",
                        detailImageClass: "",
                    },

                    {
                        detailSummary: "Dumpsters",
                        detailDescription: "Our teams use a combination of pressure and soft washing to tackle exceptionally tough grease and organic buildup to leaving your dumpster(s) & pad(s) thoroughly sanitized and refreshed.",
                        detailImageURL: "/OSW_Dumpster1.png",
                        detailImageAlt: "Dumpster and Pad",
                        detailImageClass: "",
                    },

                ],
            },
        },
        {
            activeService: false,
            name: 'Windows',
            url: '/services?service=siding',
            aria_label: "Surface Pressure Washing",
            src: siteConfig.OSW_IMG.SIDING1,
            className: "",
            service: {
                titleMsg: "Siding Soft Washing",
                tsubTitleMsg: "Hey",
                serviceMsg: "We can clean any siding...",
                estimateMsg: "Ready to peel away the dirt?",
                details: [
                    {
                        detailSummary: "Vinyl",
                        detailDescription: "Vinyl siding looks good, it’s versatile, and has a great lifespan. However, it does need to be maintained in order to be able to reach its full durability. Our house washing service will remove any staining, moss, and other residues to have the siding on your home looking brand new.",
                        detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                        detailImageAlt: "",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "Stucco",
                        detailDescription: "Stucco sidings, with their unique texture and classic appearance, need special care to preserve their beauty. Over time, they can attract dirt and grime that’s hard to remove. Our specialized house washing methods ensure your stucco remains clean and vibrant, enhancing its durability while maintaining its distinctive look.",
                        detailImageURL: siteConfig.OSW_IMG.Birdbath1,
                        detailImageAlt: "",
                        detailImageClass: "",
                    },
                    {
                        detailSummary: "Hardie Board",
                        detailDescription: "Hardie Board siding is renowned for its robustness and authentic look. Yet, without proper upkeep, even the toughest Hardie Board can lose its charm. Our house washing service dives deep to clear off any muck, mildew, or marks. Once we’re done, your Hardie Board siding will not only recapture its original allure but also be primed for many more years of service.",
                        detailImageURL: siteConfig.OSW_IMG.Paver1,
                        detailImageAlt: "",
                        detailImageClass: "",
                    },
                ],
            },
        },
    ],
} as const;   