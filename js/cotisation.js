
const cotisation = () => {
  const cotisations = {
    T1: 125,
    J1: 108,
    J2: 102,
    C1: 109,
    E2: 91,
    ecole: 255,
    licence: 41,
    ffh: 80,
    etudiant: 125,
  };
  const saeAvailable = {
    T1: true,
    J1: true,
    J2: true,
    C1: true,
    E2: true,
    ecole: false,
    licence: true,
    ffh: false,
    etudiant: false,
  };
  const cotisationGroup = document.querySelector('#cotisation-group');
  const cotisationSae = document.querySelector('#cotisation-sae');
  const cotisationSum = document.querySelector('#cotisation-sum');
  const updateSum = () => {
    const value = cotisationGroup.value;
    if (saeAvailable[value]) {
      cotisationSae.removeAttribute('disabled');
    } else {
      cotisationSae.setAttribute('disabled', 'disabled');
      cotisationSae.checked = false;
    }
    cotisationSum.value = cotisations[value]
      + (cotisationSae.checked ? 35 : 0);
  };
  cotisationGroup
    .addEventListener('change', updateSum);
  cotisationSae
    .addEventListener('change', updateSum);
};
