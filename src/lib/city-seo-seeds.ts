import { stateSeoSeedBySlug, type StateSeoSeed } from "@/lib/state-seo-seeds";

export type CitySeoSeed = {
  slug: string;
  name: string;
  stateSlug: string;
  stateName: string;
  titleStateName: string;
  cityNeighbors: string[];
  stateSeed: StateSeoSeed;
};

const stateTitleNameBySlug: Record<string, string> = {
  "jammu-and-kashmir": "Jammu & Kashmir",
  "andaman-and-nicobar-islands": "Andaman & Nicobar",
  "dadra-and-nagar-haveli-and-daman-and-diu": "Dadra, Nagar Haveli, Daman & Diu",
};

export const cityNamesByStateSlug: Record<string, string[]> = {
  "andhra-pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
  "arunachal-pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Aalo", "Ziro"],
  assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
  bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Bihar Sharif"],
  chhattisgarh: ["Raipur", "Bhilai Nagar", "Korba", "Bilaspur", "Durg"],
  goa: ["Mormugao", "Margao", "Mapusa", "Panaji", "Curchorem-Cacora"],
  gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  haryana: ["Faridabad", "Gurugram", "Rohtak", "Hisar", "Panipat"],
  "himachal-pradesh": ["Shimla", "Dharamshala", "Solan", "Mandi", "Palampur"],
  jharkhand: ["Dhanbad", "Ranchi", "Jamshedpur", "Bokaro Steel City", "Mango"],
  karnataka: ["Bengaluru", "Hubballi-Dharwad", "Mysuru", "Kalaburagi", "Mangaluru"],
  kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur"],
  "madhya-pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain"],
  maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Pimpri-Chinchwad"],
  manipur: ["Imphal", "Thoubal", "Kakching", "Lilong", "Mayang Imphal"],
  meghalaya: ["Shillong", "Tura", "Mawlai", "Nongthymmai", "Jowai"],
  mizoram: ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Lawngtlai"],
  nagaland: ["Dimapur", "Kohima", "Tuensang", "Mokokchung", "Wokha"],
  odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Brahmapur", "Sambalpur"],
  punjab: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  rajasthan: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer"],
  sikkim: ["Gangtok", "Namchi", "Rangpo", "Jorethang", "Singtam"],
  "tamil-nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"],
  telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam"],
  tripura: ["Agartala", "Dharmanagar", "Udaipur", "Kailashahar", "Bishalgarh"],
  "uttar-pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Meerut"],
  uttarakhand: ["Dehradun", "Haridwar", "Haldwani-Kathgodam", "Rudrapur", "Kashipur"],
  "west-bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
  "andaman-and-nicobar-islands": ["Port Blair", "Garacharma", "Prothrapur", "Bambooflat", "Hut Bay"],
  chandigarh: ["Chandigarh", "Mani Majra", "Daria", "Mauli Jagran", "Behlana"],
  "dadra-and-nagar-haveli-and-daman-and-diu": ["Silvassa", "Daman", "Diu", "Naroli", "Dadra"],
  delhi: ["Delhi", "New Delhi", "Nangloi", "Sultan Pur Majra", "Deoli"],
  "jammu-and-kashmir": ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Sopore"],
  ladakh: ["Leh", "Kargil", "Choglamsar", "Spituk", "Diskit"],
  lakshadweep: ["Kavaratti", "Andrott", "Minicoy", "Amini", "Agatti"],
  puducherry: ["Puducherry", "Oulgaret", "Karaikal", "Yanam", "Mahe"],
};

function slugifyCity(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const citySeoSeedList: CitySeoSeed[] = Object.entries(cityNamesByStateSlug).flatMap(([stateSlug, cities]) => {
  const stateSeed = stateSeoSeedBySlug.get(stateSlug);

  if (!stateSeed) {
    throw new Error(`Missing state SEO seed for city list: ${stateSlug}`);
  }

  return cities.map((city) => ({
    slug: slugifyCity(city),
    name: city,
    stateSlug,
    stateName: stateSeed.name,
    titleStateName: stateTitleNameBySlug[stateSlug] ?? stateSeed.name,
    cityNeighbors: cities.filter((candidate) => candidate !== city).slice(0, 4),
    stateSeed,
  }));
});

export const citySeoSeedByStateAndSlug = new Map(
  citySeoSeedList.map((seed) => [`${seed.stateSlug}:${seed.slug}`, seed] as const),
);

export const seoCityRoutes = citySeoSeedList.map((seed) => `/india/${seed.stateSlug}/cities/${seed.slug}`);
