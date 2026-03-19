export const researchAreas = [
  {
    id: 1,
    title: "Fast Radio Bursts as Cosmological Probes",
    icon: "radio",
    description: "Utilizing FRBs to probe the circumgalactic and intergalactic medium, measure baryon distribution, and constrain cosmological parameters.",
    highlights: [
      "FRB dispersion measures as tracers of diffuse baryons",
      "Constraining baryon mass in galaxy halos (M31 study)",
      "CHIME/FRB Outriggers Collaboration member"
    ],
    color: "cosmic-purple"
  },
  {
    id: 2,
    title: "Host Galaxy Demographics",
    icon: "galaxy",
    description: "Investigating the environments and host galaxies of Fast Radio Bursts to understand their progenitor systems and formation mechanisms.",
    highlights: [
      "Optical spectroscopic follow-up campaigns",
      "50+ nights as PI at Lick Observatory",
      "Multi-facility observations (Keck, Gemini)"
    ],
    color: "nebula-pink"
  },
  {
    id: 3,
    title: "CGM/IGM Baryon Studies",
    icon: "atom",
    description: "Probing diffuse baryons in nearby galaxy halos using FRB dispersion measures and machine learning approaches.",
    highlights: [
      "Bayesian inference and MCMC methods",
      "PATH algorithm for probabilistic association",
      "Constraining missing baryon problem"
    ],
    color: "teal-burst"
  },
  {
    id: 4,
    title: "Spectroscopic Analysis",
    icon: "spectrum",
    description: "Quasar absorption lines, Damped Lyman-alpha systems (DLAs), and the physics of the interstellar and intergalactic medium.",
    highlights: [
      "DLA studies at Maria Mitchell Association",
      "DESI Collaboration member",
      "Advanced spectral reduction pipelines (PypeIt)"
    ],
    color: "supernova-orange"
  }
];

export const technicalSkills = {
  languages: [
    { name: "Python", level: "advanced", tools: ["astropy", "numpy", "scipy", "emcee", "matplotlib", "PypeIt", "frb", "zdm"] },
    { name: "JavaScript & React", level: "proficient" },
    { name: "SQL", level: "proficient" },
    { name: "Bash/Shell", level: "proficient" }
  ],
  methods: [
    "Bayesian inference",
    "MCMC sampling",
    "Monte Carlo simulations",
    "PATH algorithm",
    "Machine learning (scikit-learn)"
  ],
  tools: [
    "Docker",
    "Git/GitHub",
    "HPC clusters",
    "PypeIt spectral reduction",
    "DBSP_DRP pipeline"
  ],
  archives: [
    "Pan-STARRS PS1",
    "DECaLS",
    "MAST",
    "NED",
    "Vizier"
  ]
};
