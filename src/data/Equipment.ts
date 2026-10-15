// Data transcribed from design-reference/pages/Equipment.dc.html renderVals().
export const designData = {
  "groups": [
    {
      "id": "cutting",
      "eyebrow": "Cutting & punching",
      "title": "Laser, turret punch and shear",
      "machines": [
        {
          "kind": "Laser cutting",
          "name": "6kW big-bed fiber laser",
          "photo": "[Photo: fiber laser]",
          "blurb": "Precision cutting on full-size sheets with minimal waste.",
          "rows": [
            {
              "k": "Max sheet size (X, Y)",
              "v": "158″ × 79″"
            },
            {
              "k": "Max axis travel (X, Y, Z)",
              "v": "160″ × 81″ × 4″"
            },
            {
              "k": "Positioning speed (X, Y)",
              "v": "4,724″/min per axis"
            },
            {
              "k": "Max Z-axis speed",
              "v": "2,362″/min"
            },
            {
              "k": "Repeatability",
              "v": "0.0004″"
            }
          ]
        },
        {
          "kind": "Punching",
          "name": "Turret punch",
          "photo": "[Photo: turret punch]",
          "blurb": "Nearly 1,000 tools in the library to cut setup time and tooling cost.",
          "rows": [
            {
              "k": "Max sheet size (X, Y)",
              "v": "100″ × 39″"
            },
            {
              "k": "Max axis travel (X, Y)",
              "v": "39″ × 50″"
            },
            {
              "k": "Table speed (X, Y combined)",
              "v": "1,968″/min"
            },
            {
              "k": "Turret stations",
              "v": "58"
            },
            {
              "k": "Strokes per minute",
              "v": "350"
            },
            {
              "k": "Hits per minute (1″ centers)",
              "v": "200"
            }
          ]
        },
        {
          "kind": "Shearing",
          "name": "Shear",
          "photo": "[Photo: shear]",
          "blurb": "Straight cuts on sheet stock up to 12 ft long.",
          "rows": [
            {
              "k": "Capacity, mild steel",
              "v": "1/4″ (0.250″)"
            },
            {
              "k": "Shear length",
              "v": "144″"
            },
            {
              "k": "Rake of upper blade",
              "v": "1/4″"
            },
            {
              "k": "Speed",
              "v": "60 strokes/min"
            },
            {
              "k": "Gap / throat",
              "v": "18″"
            },
            {
              "k": "Hold-downs",
              "v": "13"
            }
          ]
        }
      ]
    },
    {
      "id": "forming",
      "eyebrow": "Forming",
      "title": "Press brakes and rollers",
      "machines": [
        {
          "kind": "Press brake",
          "name": "Precision press brakes",
          "photo": "[Photo: press brake]",
          "blurb": "Bending, forming and shaping for light brackets through heavy plate.",
          "rows": [
            {
              "k": "Capacity",
              "v": "28–350 ton"
            },
            {
              "k": "Overall die surface",
              "v": "10′–12′"
            },
            {
              "k": "Stroke length",
              "v": "8″"
            },
            {
              "k": "Open height",
              "v": "15″"
            },
            {
              "k": "Press speed",
              "v": "80 cycles/min"
            },
            {
              "k": "Tolerance",
              "v": "±0.005″"
            }
          ]
        },
        {
          "kind": "Roll forming",
          "name": "Plate rollers",
          "photo": "[Photo: rollers]",
          "blurb": "Rolled cylinders, cones and curves.",
          "rows": [
            {
              "k": "Max bed length",
              "v": "6′"
            },
            {
              "k": "Max material thickness",
              "v": "5/16″ (0.312″)"
            },
            {
              "k": "Roll diameter",
              "v": "8″"
            }
          ]
        }
      ]
    },
    {
      "id": "machining",
      "eyebrow": "Machining & turning",
      "title": "CNC mills and lathe",
      "machines": [
        {
          "kind": "CNC milling",
          "name": "HAAS VF-4 SS",
          "photo": "[Photo: HAAS VF-4 SS]",
          "blurb": "High-speed vertical machining center.",
          "rows": [
            {
              "k": "Table size",
              "v": "52.0″ × 19.5″"
            },
            {
              "k": "Travels (X, Y, Z)",
              "v": "50″ × 20″ × 25″"
            },
            {
              "k": "Spindle speed",
              "v": "100–12,000 RPM"
            },
            {
              "k": "Rapid traverse",
              "v": "1,400 IPM"
            },
            {
              "k": "Max cutting",
              "v": "833 IPM"
            }
          ]
        },
        {
          "kind": "CNC milling",
          "name": "Milltronics RH30",
          "photo": "[Photo: Milltronics RH30]",
          "blurb": "Large-table vertical machining center.",
          "rows": [
            {
              "k": "Table size",
              "v": "73″ × 24″"
            },
            {
              "k": "Travels (X, Y, Z)",
              "v": "60″ × 30″ × 28″"
            },
            {
              "k": "Spindle speed",
              "v": "100–8,000 RPM"
            },
            {
              "k": "Rapid traverse",
              "v": "500 IPM"
            }
          ]
        },
        {
          "kind": "CNC milling",
          "name": "HAAS VF-4 milling center",
          "photo": "[Photo: HAAS VF-4]",
          "blurb": "Vertical milling center for general machining.",
          "rows": [
            {
              "k": "Table size",
              "v": "40″ × 19″"
            },
            {
              "k": "Travels (X, Y, Z)",
              "v": "50″ × 20″ × 25″"
            },
            {
              "k": "Spindle nose to table",
              "v": "4″–29″"
            },
            {
              "k": "Rapid traverse",
              "v": "710 IPM"
            },
            {
              "k": "Spindle speed",
              "v": "0–7,500 RPM"
            }
          ]
        },
        {
          "kind": "CNC turning",
          "name": "HAAS SL-20T lathe",
          "photo": "[Photo: HAAS SL-20T]",
          "blurb": "CNC lathe for turned components.",
          "rows": [
            {
              "k": "Travels (X, Z)",
              "v": "8.45″ × 20″"
            },
            {
              "k": "Max turning diameter",
              "v": "10″"
            },
            {
              "k": "Max turning length",
              "v": "20″"
            },
            {
              "k": "Max bar capacity",
              "v": "2″"
            },
            {
              "k": "Swing over bed",
              "v": "23″"
            },
            {
              "k": "Spindle speed",
              "v": "50–3,400 RPM"
            }
          ]
        }
      ]
    },
    {
      "id": "welding",
      "eyebrow": "Welding",
      "title": "Manual and robotic welding",
      "machines": [
        {
          "kind": "Robotic welding",
          "name": "Cooper Cobot",
          "photo": "[Photo: Cooper Cobot cell]",
          "blurb": "Collaborative robot welding for consistent, repeatable beads.",
          "rows": [
            {
              "k": "Tolerance",
              "v": "Within ±0.2 mm in some cases"
            },
            {
              "k": "Code",
              "v": "AWS D1.1"
            },
            {
              "k": "Cell specs",
              "v": "[Reach · payload · positioner]"
            }
          ]
        },
        {
          "kind": "Manual welding",
          "name": "AWS-qualified welding team",
          "photo": "[Photo: welder at work]",
          "blurb": "Complex weldments, large assemblies and multi-part structures.",
          "rows": [
            {
              "k": "Processes",
              "v": "MIG · TIG · stud · solder & brazing"
            },
            {
              "k": "Qualification",
              "v": "Up to 1″ thick with WPSs"
            },
            {
              "k": "Oversight",
              "v": "Third-party welding engineer reviews WPS/WPQ"
            },
            {
              "k": "Calibration",
              "v": "Welders calibrated annually"
            }
          ]
        }
      ]
    },
    {
      "id": "finishing",
      "eyebrow": "Finishing",
      "title": "Paint booth and partners",
      "machines": [
        {
          "kind": "Finishing",
          "name": "Batch paint booth",
          "photo": "[Photo: paint booth]",
          "blurb": "In-house painting; powder coating and polishing through vetted local partners.",
          "rows": [
            {
              "k": "Paint types",
              "v": "Enamels · catalyst paints"
            },
            {
              "k": "Two-part systems",
              "v": "Epoxy · polyurethane"
            },
            {
              "k": "Powder coating",
              "v": "Local partners, inspected by ATA before shipment"
            }
          ]
        }
      ]
    }
  ]
} as const;
