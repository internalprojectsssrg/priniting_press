import business from "../assets/businesscardimg.jpg"
import badge from "../assets/badgesimg.jpg"
import binding from "../assets/binding.jpg"
import broucher from "../assets/brouches.jpg"
import calender from "../assets/calenders.jpg"
import certificate from "../assets/certificate.jpg"
import goldfoiling from "../assets/goldfoiling.jpg"
import idcard from "../assets/idcard.jpg"
import menucard from "../assets/menucard.jpg"
import multicolor from "../assets/multicolorimg.jpg"
import premiumbusiness from "../assets/premiumbusinesscard.jpg"
import uvprinting from "../assets/uvprinting.jpg"
import file from "../assets/filescovers.jpg"
import valvetprinting from "../assets/valvetprinting.jpg"
import valetparking from "../assets/valetparkingimg.jpg"
import acrylic from "../assets/acrylicimag.jpg"
import stickerandpvc from "../assets/stickersandpvc.jpg"
import frostedimg from "../assets/frostedimages.jpg"
import stickershape from "../assets/Sticker.jpg"
import customshape from "../assets/customshapecutting.jpg"
import tshirtprinting from "../assets/tshirtprinting.jpg"
import fabricprinting from "../assets/fabricprinting.jpg"
import caps from "../assets/capsprinting.jpg"
import umbrella from "../assets/ummberallaprinting.jpg"
import bagsprint from "../assets/bagsprinting.jpg"
import mug from "../assets/mugprintind.jpg"
import sweetboxes from "../assets/sweetbox.jpg"
import cliponboard from "../assets/cliponboard.jpg"
import signageboard from "../assets/sinageboard.jpg"
import cnc from "../assets/CNC cutting.jpg"
import foamboards from "../assets/foamboards.jpg"
import sunboard from "../assets/sunboards.jpg"
import acpboard from "../assets/acpboard.jpg"
import menuboard from "../assets/menuboards.jpg"
import wallsinage from "../assets/wallsinage.jpg"
import mounmentsinage from "../assets/mounmentsinage.jpg"
import customcovers from "../assets/customcovers.jpg"
import custombags from "../assets/custombags.jpg"
import customtotebags from "../assets/customtotebags.jpg"
import lgiftbox from "../assets/giftboxes.jpg"
import parcelboxes from "../assets/parcelboxes.jpg"
import cardboard from "../assets/cardboardimg.jpg"
import sweetboxs from "../assets/sweetbox.jpg"
import customframe from "../assets/customframeimg.jpg"
import channelsinage from "../assets/chaneelsinage.jpg"
import ledlettersinage from "../assets/ledsinage.jpg"
import digitalsinage from "../assets/digitalsinage.jpg"
import vinlystickers from "../assets/vinylstickers.jpg"
import foster from "../assets/fosterstickers.jpg"
import flexis from "../assets/fleximg.jpg"
import rollup from "../assets/rollupstandees.jpg"
import ironstandee from "../assets/ironstandees.jpg"
import luxurystandee from "../assets/luxrystandees.jpg"
import woodenstandee from "../assets/woodenstandees.jpg"
import flags from "../assets/flags.jpg"
import teakettle from "../assets/teakettle1.jpg"


export const serviceData = {
  print: [
    // --- Stationery & Corporate ---
    { name: "Multicolour Offset Printing", tag: "Bulk / Press", image: multicolor },
    { name: "Business Cards", tag: "Corporate", image: business },
    { name: "Premium Business Cards", tag: "Luxury", image: premiumbusiness },
    { name: "iD Cards", tag: "Corporate", image: idcard },
    { name: "Files & Covers", tag: "Stationery", image: file },
    { name: "Certificates", tag: "Official", image: certificate},
    { name: "Dairies & Calenders", tag: "Stationery", image: calender },

    // --- Marketing & Hospitality ---
    { name: "Brochures", tag: "Marketing", image:broucher },
    { name: "Menu Cards", tag: "Hospitality", image: menucard },
    { name: "Badges", tag: "Events", image: badge },
    { name: "Valet Parking Tags", tag: "Hospitality", image: valetparking },
    { name: "Perfect Binding", tag: "Finishing", image: binding },

    // --- Premium & Specialty ---
    { name: "Gold Foiling", tag: "Premium", image: goldfoiling},
    { name: "Velvet Printing", tag: "Premium", image: valvetprinting},
    { name: "UV Printing", tag: "Specialty", image:uvprinting},
    { name: "Acrylic Printing", tag: "Specialty", image: acrylic },

    // --- Stickers & Cutting ---
    { name: "Stickers & PVC Stickers", tag: "Labels", image: stickerandpvc },
    { name: "Frosted Stickers", tag: "Interior", image: frostedimg},
    { name: "Sticker Shape Cutting", tag: "Custom", image: stickershape },
    { name: "Custom Shape Cutting", tag: "Custom", image:customshape  },

    // --- \ ---
    { name: "Tshirt Printing", tag: "Apparel", image: tshirtprinting },
    { name: "Fabric Printing", tag: "Apparel", image:fabricprinting },
    { name: "Caps Printing", tag: "Apparel", image: caps},
    { name: "Umbrella Printing", tag: "Merch", image: umbrella },
    { name: "Tote Bags with Printing", tag: "Merch", image: bagsprint },
    { name: "Mug Printing", tag: "Merch", image: mug },
    { name: "Tea Kettles", tag: "Custom Merch", image: teakettle },
    
    // --- Packaging Specifics ---
    { name: "Sweet Boxes", tag: "Packaging", image:sweetboxes},
  ],
  brand: [
    // --- Boards & Signage ---
    { name: "Clipon Boards", tag: "Signage", image:cliponboard },
    { name: "Signage Boards", tag: "Signage", image: signageboard },
    { name: "CNC Cutting Acrylic Boards", tag: "Signage", image: cnc },
    { name: "Foam Boards", tag: "Signage", image:foamboards  },
    { name: "Sun Boards", tag: "Signage", image:sunboard },
    { name: "ACP Sheets", tag: "Signage", image: acpboard },
    { name: "Menu Boards", tag: "Signage", image:menuboard },
    { name: "Wall Signage", tag: "Signage", image:wallsinage },
    { name: "Monument Signage Boards", tag: "Outdoor", image:mounmentsinage  },

    // --- LED & Digital ---
    { name: "Channel LED Boards", tag: "Outdoor", image: channelsinage },
    { name: "LED Letters Signage", tag: "Outdoor", image: ledlettersinage},
    { name: "Digital Signage", tag: "Tech", image: digitalsinage },

    // --- Stickers & Vinyl ---
    { name: "Vinyl Stickers", tag: "Large Format", image: vinlystickers},
    { name: "Frosted Stickers", tag: "Interior", image:foster },
    { name: "Flexis", tag: "Large Format", image: flexis },

    // --- Standees ---
    { name: "Roll up Standees", tag: "Displays", image: rollup },
    { name: "Iron Standees", tag: "Displays", image: ironstandee},
    { name: "Luxury Standees", tag: "Premium", image: luxurystandee },
    { name: "Wooden Standees", tag: "Custom", image: woodenstandee },

    // --- Other Branding ---
    { name: "Flags", tag: "Outdoor", image: flags },
    { name: "Photo Frames", tag: "Interior", image: customframe },
  ],
  pack: [
    // --- Boxes ---
    { name: "Luxury Gift Boxes", tag: "Premium", image: lgiftbox},
    { name: "Parcel Boxes", tag: "Shipping", image:parcelboxes },
    { name: "Cardboard Boxes", tag: "Shipping", image:cardboard },
    { name: "Sweet Boxes", tag: "Specialty", image: sweetboxs},

    // --- Bags & Covers ---
    { name: "Custom Tote Bags", tag: "Eco", image:customtotebags },
    { name: "Printed Covers", tag: "Stationery", image: customcovers},
    { name: "Bags", tag: "Packaging", image: custombags},
  ]
};