export const calculateWCAGCompliance = (contrast: number) => {
  const thresholds = {
    AA: { normal: 4.5, large: 3.0, components: 3.0 },
    AAA: { normal: 7.0, large: 4.5 },
  };

  return {
    AA: {
      normal: contrast >= thresholds.AA.normal,
      large: contrast >= thresholds.AA.large,
      components: contrast >= thresholds.AA.components,
    },
    AAA: {
      normal: contrast >= thresholds.AAA.normal,
      large: contrast >= thresholds.AAA.large,
    },
  };
};

export const generateComplianceColor = (
  AACompliant: boolean,
  AAACompliant: boolean,
) => {
  if (AACompliant && AAACompliant) {
    return { backgroundColor: "#bdffc0", color: "#005704" };
  }

  if (AACompliant) {
    return { backgroundColor: "#fddeaf", color: "#6b3600" };
  }

  return { backgroundColor: "#ffb3b3", color: "#6b0000" };
};
