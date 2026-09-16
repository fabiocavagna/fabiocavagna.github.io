export type ProjectSection = {
  heading: string;
  body: string;
  images?: { src: string; alt: string }[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  teaser: string;
  tools: string[];
  highlights: { label: string; value: string }[];
  sections: ProjectSection[];
  learned: string;
};

const img = (name: string) => `/images/atss/${name}`;

export const projects: Project[] = [
  {
    slug: 'analysis-and-testing-of-space-structures',
    title: 'Analysis and Testing of Space Structures',
    subtitle:
      'Structural compliance study of an axial-symmetric spacecraft with the Vega-C launcher',
    summary:
      'A complete structural compliance analysis of an axial-symmetric spacecraft intended for launch on the Vega-C launch vehicle via the Vampire 937 adapter. Both spacecraft and launcher were modeled in Femap and analyzed with MSC Nastran and MATLAB, following ECSS space-industry practices and verifying compliance with the Vega-C User Manual.',
    teaser: img('atss.jpg'),
    tools: ['Femap', 'MSC Nastran', 'MATLAB'],
    highlights: [
      { label: 'Spacecraft mass', value: '1232 kg' },
      { label: 'Lateral frequency', value: '13.4 Hz (> 12 Hz)' },
      { label: 'Longitudinal frequency', value: '55.6 Hz (> 20 Hz)' },
      { label: 'Buckling margin', value: '~199' },
    ],
    sections: [
      {
        heading: 'Mass / CoG Compliance',
        body: 'The spacecraft mass (1232 kg) and center-of-gravity height (1.62 m) were verified against the Vega-C User Manual limits. The static moment at the LV-SC interface stays below the maximum allowed value, preventing structural failure during launch. Both constraints are satisfied.',
        images: [{ src: img('MassCoGCompliance.svg'), alt: 'Mass and CoG compliance' }],
      },
      {
        heading: 'Modal Analysis',
        body: 'Spacecraft and launcher finite element models were tuned to meet frequency requirements (lateral > 12 Hz, longitudinal > 20 Hz). The spacecraft achieves 13.4 Hz lateral and 55.6 Hz longitudinal, both compliant. Dynamic decoupling between launcher and spacecraft is confirmed.',
        images: [
          { src: img('SC_mode_Lat1.png'), alt: 'Lateral mode 1' },
          { src: img('SC_mode_Lat2.png'), alt: 'Lateral mode 2' },
          { src: img('SC_mode_Lon.png'), alt: 'Longitudinal mode' },
        ],
      },
      {
        heading: 'Static Analysis and Overfluxes',
        body: "Line loads and overflux indices were computed under the flight envelope's quasi-static load combinations. Overflux peaks were identified and clamp band tension was assessed: all compliant.",
        images: [{ src: img('overfluxes_completo.svg'), alt: 'Overfluxes' }],
      },
      {
        heading: 'Launcher / Spacecraft Dynamic Coupling',
        body: 'Transmissibility analysis confirmed negligible dynamic coupling between the launcher and spacecraft, validating the independent design approach.',
        images: [{ src: img('LVSCDynCoupling2D.svg'), alt: 'Dynamic coupling' }],
      },
      {
        heading: 'Thermoelastic Analysis',
        body: 'A thermal map was applied and thermoelastic deformation evaluated. A criticality was found: the relative bore-sight rotation between the telescope and star tracker (~0.17°) is too high for typical pointing requirements. Design changes (e.g. low-CTE composite materials) are recommended for the next iteration.',
        images: [{ src: img('ThermalDeformation.png'), alt: 'Thermal deformation' }],
      },
      {
        heading: 'Sine Test Prediction',
        body: 'Sinusoidal vibration tests were simulated along three axes. Primary notching limited interface loads to qualification levels; secondary notching was needed in X and Y to protect the telescope (qualified up to 10 g lateral, 20 g longitudinal). The notched profiles remain above the Equivalent Sine Input threshold. Compliant.',
        images: [
          { src: img('X_input.svg'), alt: 'Sine input' },
          { src: img('X_input1.svg'), alt: 'Sine input detail' },
        ],
      },
      {
        heading: 'Acoustic Test Prediction',
        body: "The spacecraft's random vibration response to the acoustic qualification environment was simulated. The predicted APSD for the telescope stays below ECSS qualification levels in both out-of-plane and in-plane directions. Compliant.",
        images: [{ src: img('IP_qualification.svg'), alt: 'In-plane qualification' }],
      },
      {
        heading: 'Severity Comparison',
        body: 'A unified comparison of sine, random, and shock severities confirmed the telescope is qualified across the entire 20–10,000 Hz band.',
        images: [{ src: img('Severity_comparison.svg'), alt: 'Severity comparison' }],
      },
      {
        heading: 'Buckling Analysis',
        body: 'Eigenvalue buckling analysis under all quasi-static load cases yielded a minimum eigenvalue of ~200 (3rd stage max acceleration), giving a margin of safety of ~199. The spacecraft is significantly oversized with respect to buckling.',
        images: [{ src: img('buckshape10_def.png'), alt: 'Buckling shape' }],
      },
    ],
    learned:
      'Supervised by Pietro Nali, a Thales Alenia Space specialist in the design and dynamic testing of satellites, this project taught me the key concepts behind the main analyses performed during the design and development phases of a satellite. Beyond hands-on experience with industry-standard software such as Femap and MSC Nastran, it strengthened my teamwork and problem-solving skills, as we tackled complex, interdependent structural analyses under realistic constraints. I gained a deeper understanding of how structural compliance is assessed end-to-end, and learned to critically interpret results and propose design improvements when non-conformities arise.',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
