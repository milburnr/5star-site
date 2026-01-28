export const BUSINESS_INFO = {
  name: "5 Star Commercial Roofing",
  phone: "(806) 622-6041",
  phoneRaw: "8066226041",
  email: "admin@5starroofingpros.com",
  address: {
    street: "2909 S Western St",
    city: "Amarillo",
    state: "TX",
    zip: "79109",
    full: "2909 S Western St, Amarillo, TX 79109",
  },
  hours: {
    weekday: "9:00 AM - 5:00 PM",
    weekend: "9:00 AM - 5:00 PM",
  },
  social: {
    googleBusiness: "https://share.google/fl2pyMYIGwDQTd5KX",
  },
  experience: "Over 10 years",
  serviceAreas: {
    primary: ["Amarillo"],
    westTexas: ["Midland", "Odessa"],
    panhandle: ["Canyon", "Borger", "Pampa", "Dumas", "Hereford"],
  },
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/",
    submenu: [
      { label: "Residential Roofing", href: "/residential-roofing/" },
      { label: "Commercial Roofing", href: "/commercial-roofing/" },
      { label: "Industrial Roofing", href: "/industrial-roofing/" },
      { label: "Roofing Methods", href: "/roofing-methods/" },
    ],
  },
  { label: "Service Areas", href: "/service-areas/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "Contact", href: "/contact/" },
  { label: "About", href: "/about/" },
];
