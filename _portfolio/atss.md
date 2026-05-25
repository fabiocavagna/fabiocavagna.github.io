---
title: "Analysis and Testing of Space Structures"
excerpt: "Study of the structural compliance of an ideal axial-symmetric spacecraft with the Vega-C launcher"
header:
  teaser: /assets/images/atss.jpg
---

## Objective

The project covers a complete structural compliance analysis of an axial-symmetric spacecraft (SC) intended for launch on the Vega-C launch vehicle (LV), using the Vampire 937 adapter. Both the SC and LV are modeled in Femap and analyzed with MSC Nastran, and MATLAB. The analyses follow standard space-industry practices and verify compliance with the Vega-C User Manual requirements.

## Tools

- MSC Nastran
- Femap
- MATLAB

## Approach

The following analyses were carried out:

### Mass/CoG Compliance

The spacecraft mass (1232 kg) and center of gravity height (1.62 m) were verified against the Vega-C User Manual limits. The static moment at the LV-SC interface must remain below the maximum allowed value to prevent structural failure during launch. Both constraints are satisfied.

![Mass and CoG compliance](/assets/images/MassCoGCompliance.png){: .align-center}

### Modal Analysis
SC and LV finite element models were tuned to meet frequency requirements (lateral > 12 Hz, longitudinal > 20 Hz). The SC achieves 13.4 Hz lateral and 55.6 Hz longitudinal, both compliant. Dynamic decoupling between LV and SC is confirmed.

<div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
  <img src="/assets/images/SC_mode_Lat1.png" alt="Lateral mode 1" style="width: 30%;">
  <img src="/assets/images/SC_mode_Lat2.png" alt="Lateral mode 2" style="width: 30%;">
  <img src="/assets/images/SC_mode_Lon.png" alt="Longitudinal mode" style="width: 30%;">
</div>

### Static Analysis and Overfluxes
Line loads and overflux indices were computed under the flight envelope's quasi-static load combinations. Overflux peaks were identified and clamp band tension was assessed: all compliant.
![Overfluxes](/assets/images/overfluxes_completo.png){: .align-center}

### Launcher/Spacecraft Dynamic Coupling
Transmissibility analysis confirmed negligible dynamic coupling between the LV and SC, validating the independent design approach.
![Dynamic coupling](/assets/images/LVSCDynCoupling2D.png){: .align-center}

### Thermoelastic Analysis
 A thermal map was applied and thermoelastic deformation evaluated. A criticality was found: the relative bore-sight rotation between the telescope and star tracker (~0.17°) is too high for typical pointing requirements. Design changes (e.g., using low-CTE composite materials) are recommended for the next iteration.
![Thermal deformation](/assets/images/ThermalDeformation.png){: .align-center}

### Sine Test Prediction
Sinusoidal vibration tests were simulated along three axes. Primary notching was applied to limit interface loads to qualification levels. Secondary notching was needed in the X and Y directions to protect the telescope (qualified up to 10 g lateral, 20 g longitudinal). The notched profiles remain above the ESI (Equivalent Sine Input) threshold. Compliant.
![Sine input](/assets/images/X_input.png){: .align-center}

![Sine input detail](/assets/images/X_input1.png){: .align-center}

### Acoustic Test Prediction
The SC's random vibration response to the acoustic qualification environment was simulated. The predicted APSD for the telescope stays below ECSS qualification levels in both out-of-plane and in-plane directions. Compliant.

![IP qualification](/assets/images/IP_qualification.png){: .align-center}

### Severity Comparison
A unified comparison of sine, random, and shock severities confirmed the telescope is qualified across the entire 20–10,000 Hz band.

![Severity comparison](/assets/images/Severity_comparison.png){: .align-center}


### Buckling Analysis
Eigenvalue buckling analysis under all quasi-static load cases yielded a minimum eigenvalue of ~200 (3rd stage max acceleration), giving a margin of safety of ~199. The SC is significantly oversized with respect to buckling.

![Buckling](/assets/images/buckshape10_def.png){: .align-center}

## What I Learned

Key takeaways from this project...
