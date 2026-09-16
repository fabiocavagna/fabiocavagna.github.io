export const site = {
  name: 'Fabio Cavagna',
  role: 'Aerospace Engineer — Structural Dynamics & Spacecraft Structures',
  tagline: 'PhD Candidate in Aerospace Engineering, Politecnico di Milano',
  email: 'fabiocavagna0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fabio-cavagna',
  linkedinLabel: 'linkedin.com/in/fabio-cavagna',
  location: 'Milan, Italy',
  cvHref: '/cv.pdf',
};

export const about = [
  `Fabio Cavagna is a PhD researcher in Aerospace Engineering at Politecnico di Milano, in
   collaboration with Siemens Digital Industries Software. His research focuses on decoupling
   methodologies for fixed-base modal analysis, with particular emphasis on experimental and
   numerical approaches for spacecraft structures.`,
  `He graduated in Space Engineering from Politecnico di Milano in 2023 and completed an Advanced
   Master's degree in Aeronautical and Space Structures at ISAE-SUPAERO in 2024. He has also gained
   professional experience through internships at Thales Alenia Space and CNES, the French Space
   Agency.`,
  `His areas of expertise include structural dynamics, modal analysis, environmental testing, and
   numerical simulation of spacecraft structures. He has presented his research at international
   conferences, including ECSSMET 2024 and ISMA 2026.`,
];

export const researchInterests = [
  'Structural Dynamics',
  'Modal Analysis',
  'Environmental Testing',
  'Spacecraft Structures',
];

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  context?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'PhD Researcher',
    org: 'Siemens Digital Industries Software',
    location: 'Leuven, Belgium',
    period: 'Dec 2024 — Present',
    points: [
      'Conducted experimental tests of structures mounted on shaker tables, post-processing acquired data to extract modal parameters with Simcenter Testlab.',
      'Performed numerical simulations of structures using Simcenter Nastran, validating results against experimental data.',
    ],
  },
  {
    role: 'Structural Dynamics Intern',
    org: 'CNES',
    location: 'Paris, France',
    period: 'Apr 2024 — Oct 2024',
    points: [
      'Defined testing procedures for the experimental campaign, including installation of a small-scale tank and definition of safety measures.',
      'Performed numerical simulations to compute the sloshing and hydro-elastic modes of liquid tanks.',
    ],
  },
  {
    role: 'Master Thesis Intern',
    org: 'Thales Alenia Space',
    location: 'Turin, Italy',
    period: 'Mar 2023 — Sept 2023',
    points: [
      'Assessed methodologies to evaluate and compare the severity of mechanical loads (Shock Response Spectrum, Extreme Response Spectrum, Fatigue Damage Spectrum).',
      'Developed a novel MATLAB approach for comparing the severity of multi-DoF mechanical loads, focusing on interface forces under 6-DoF loads.',
    ],
  },
  {
    role: 'Structural Engineer',
    org: 'Polispace',
    location: 'Milan, Italy',
    period: 'Mar 2023 — Sept 2023',
    context: "Student association developing a CubeSat for ESA's \"Fly Your Satellite!\" program.",
    points: [
      'Simplified CAD geometries and integrated them into the FEM model.',
      'Contributed to defining structural requirements for the Thermal Vacuum Chamber Test.',
    ],
  },
];

export type Education = {
  degree: string;
  org: string;
  location: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    degree: 'PhD Candidate in Aerospace Engineering',
    org: 'Politecnico di Milano',
    location: 'Milan, Italy',
    period: 'Dec 2024 — Present',
    note: 'Research topic: "Decoupling techniques based on substructuring for fixed-base analysis."',
  },
  {
    degree: 'Advanced Master in Aeronautical and Space Structures',
    org: 'ISAE-SUPAERO',
    location: 'Toulouse, France',
    period: 'Oct 2023 — Oct 2024',
  },
  {
    degree: 'M.S. in Space Engineering',
    org: 'Politecnico di Milano',
    location: 'Milan, Italy',
    period: 'Sept 2021 — Oct 2023',
  },
  {
    degree: 'B.S. in Aerospace Engineering',
    org: 'Politecnico di Milano',
    location: 'Milan, Italy',
    period: 'Sept 2018 — Sept 2021',
  },
];

export const skills: { category: string; items: string }[] = [
  { category: 'CAE', items: 'Simcenter 3D, Abaqus, Femap, MSC Nastran, Patran, Ansys Mechanical, HyperMesh' },
  { category: 'CAD', items: 'CATIA, SolidWorks, Solid Edge, Autodesk Inventor' },
  { category: 'Programming', items: 'MATLAB, Python, LaTeX' },
];

export const languages: { language: string; level: string }[] = [
  { language: 'Italian', level: 'Mother tongue' },
  { language: 'English', level: 'Proficient user' },
  { language: 'French', level: 'Basic user' },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  location: string;
  year: number;
};

export const publications: Publication[] = [
  {
    title: 'Methodologies for fixed-base modal analysis derived from shaker table testing',
    authors: 'Cavagna, F., Kosova, G., Di Lorenzo, E., Dozio, L.',
    venue: 'International Conference on Noise and Vibration Engineering (ISMA)',
    location: 'Leuven, Belgium',
    year: 2026,
  },
  {
    title: 'A critical assessment on the mechanical load severity comparison, with focus on aerospace applications',
    authors: 'Nali, P., Cavagna, F., Dozio, L.',
    venue: 'European Conference on Spacecraft Structures, Materials and Environmental Testing (ECSSMET)',
    location: 'Noordwijk, Netherlands',
    year: 2024,
  },
];
