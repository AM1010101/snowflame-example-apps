const tabs = [...document.querySelectorAll('.tab')];
const panels = [...document.querySelectorAll('.panel')];

function activateTab(tabId) {
  for (const tab of tabs) {
    tab.classList.toggle('active', tab.dataset.tab === tabId);
  }
  for (const panel of panels) {
    panel.classList.toggle('active', panel.id === tabId);
  }
}

for (const tab of tabs) {
  tab.addEventListener('click', () => activateTab(tab.dataset.tab));
}
