
const cotisation = () => {
  const cotisationSaeAmount = 35;
  const cotisations = {
    T1: 133,
    J1: 114,
    J2: 109,
    C1: 116,
    E1: 98,
    E2: 104,
    licence: 44,
    etudiant: 133,
  };
  const saeAvailable = {
    T1: true,
    J1: true,
    J2: true,
    C1: true,
    E1: true,
    E2: true,
    licence: true,
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
      + (cotisationSae.checked ? cotisationSaeAmount : 0);
  };
  cotisationGroup
    .addEventListener('change', updateSum);
  cotisationSae
    .addEventListener('change', updateSum);
};
