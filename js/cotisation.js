
const cotisation = () => {
  const cotisationSaeAmount = 35;
  const cotisations = {
    T1: 128,
    J1: 109,
    J2: 105,
    C1: 111,
    E1: 99,
    E2: 93,
    licence: 41,
  };
  const saeAvailable = {
    T1: true,
    J1: true,
    J2: true,
    C1: true,
    E1: true,
    E2: true,
    licence: true,
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
