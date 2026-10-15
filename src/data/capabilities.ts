export const capabilities = [
  {
    "slug": "laser-cutting",
    "title": "Laser Cutting",
    "tagline": "Cut a clear path from drawing to component.",
    "description": "A focused laser follows a programmed profile to cut sheet material. The right process depends on material type, thickness, edge requirements and part geometry.",
    "applications": [
      "Flat panels and brackets",
      "Enclosure profiles",
      "Detailed sheet components"
    ],
    "considerations": [
      "Material grade and thickness",
      "Kerf, heat effects and edge condition",
      "Hole sizes, nesting and drawing revisions"
    ],
    "process": [
      "CAD profile review",
      "Nesting and programming",
      "Cutting",
      "Edge inspection"
    ],
    "href": "/capabilities/laser-cutting/"
  },
  {
    "slug": "sheet-metal-punching",
    "title": "Sheet Metal Punching",
    "tagline": "Repeatable features. Thoughtful sheet design.",
    "description": "Punching uses a punch and die to create holes, slots and other features in sheet metal. Tool availability and part layout influence the practical design.",
    "applications": [
      "Ventilation panels",
      "Mounting plates",
      "Repeated hole patterns"
    ],
    "considerations": [
      "Tool access and available shapes",
      "Hole spacing and edge distances",
      "Burr direction and sheet distortion"
    ],
    "process": [
      "Feature review",
      "Tool selection",
      "Punching sequence",
      "Deburring and inspection"
    ],
    "href": "/capabilities/sheet-metal-punching/"
  },
  {
    "slug": "sheet-metal-forming",
    "title": "Sheet Metal Forming",
    "tagline": "Give flat material its working shape.",
    "description": "Sheet metal forming changes a sheet into a three-dimensional part. Bend geometry and material behaviour must be considered together to achieve a practical design.",
    "applications": [
      "Folded enclosures",
      "Structural brackets",
      "Covers and trays"
    ],
    "considerations": [
      "Bend radius and material grain",
      "Bend allowance and springback",
      "Tool access and flange clearance"
    ],
    "process": [
      "Drawing review",
      "Bend planning",
      "Forming",
      "Dimensional review"
    ],
    "href": "/capabilities/sheet-metal-forming/"
  },
  {
    "slug": "roll-forming",
    "title": "Roll Forming",
    "tagline": "Consistent profiles through progressive forming.",
    "description": "Roll forming passes strip material through successive rollers to develop a continuous cross-section. Profile complexity and tooling investment influence project suitability.",
    "applications": [
      "Long channels",
      "Edge trims",
      "Repeated section profiles"
    ],
    "considerations": [
      "Consistent cross-section",
      "Tooling and production economics",
      "Straightness and cut-to-length requirements"
    ],
    "process": [
      "Section review",
      "Tooling assessment",
      "Progressive forming",
      "Profile inspection"
    ],
    "href": "/capabilities/roll-forming/"
  },
  {
    "slug": "tube-bending",
    "title": "Tube Bending",
    "tagline": "Turn a tube layout into a considered component.",
    "description": "Tube bending shapes hollow sections around a planned bend path. Material, wall thickness and bend radius determine how a tube responds during forming.",
    "applications": [
      "Frames and supports",
      "Handles and rails",
      "Tubular assemblies"
    ],
    "considerations": [
      "Outside diameter and wall thickness",
      "Bend radius and ovality",
      "Joint access and end preparation"
    ],
    "process": [
      "Tube specification",
      "Bend sequence",
      "Forming",
      "Fit and geometry review"
    ],
    "href": "/capabilities/tube-bending/"
  },
  {
    "slug": "welding-and-grinding",
    "title": "Welding and Grinding",
    "tagline": "Join the details. Refine the finish.",
    "description": "Welding joins compatible materials using a process selected for the joint and application. Grinding can prepare edges or refine a weld where the design requires it.",
    "applications": [
      "Fabricated frames",
      "Sheet assemblies",
      "Joined brackets and supports"
    ],
    "considerations": [
      "Material compatibility and joint design",
      "Distortion, fixturing and weld access",
      "Finish requirements and inspection criteria"
    ],
    "process": [
      "Joint review",
      "Preparation and fixturing",
      "Welding",
      "Finishing and inspection"
    ],
    "href": "/capabilities/welding-and-grinding/"
  },
  {
    "slug": "cnc-machining",
    "title": "CNC Machining",
    "tagline": "Controlled material removal for defined features.",
    "description": "Computer-controlled machining removes material using programmed tool paths. Turning and milling choices depend on part geometry, stock and the required features.",
    "applications": [
      "Mounting components",
      "Housings and interfaces",
      "Prototype mechanical parts"
    ],
    "considerations": [
      "Datum strategy and feature access",
      "Tool radius and internal corners",
      "Tolerances, surface finish and inspection"
    ],
    "process": [
      "Model review",
      "Process and tool planning",
      "Machining",
      "Dimensional inspection"
    ],
    "href": "/capabilities/cnc-machining/"
  }
] as const;
