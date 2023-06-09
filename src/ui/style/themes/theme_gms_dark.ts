import themeDefaults from './common'

const theme = {
  type: 'dark',
  id: 'gms_dark',
  name: 'GMS Red - Dark',
  colors: {
    ...themeDefaults,
    primary: '#991E2A',
    exotic: '#673AB7',
    active: '#d93f4e',
    accent: '#8c1420',
    secondary: '#283593',
    pilot: '#424242',
    error: '#F44336',
    info: '#1565C0',
    success: '#00C853',
    warning: '#FFAB00',

    weapon: '#555555',
    'mech-weapon': '#555555',
    'pilot-weapon': '#555555',

    text: '#fff',
    subtle: '#b3b9ba',
    stark: '#fff',
    anti: '#000',
    'light-text': '#96a0a0',
    'stark-text': '#fff',

    background: '#000',
    panel: '#333',
    tooltip: '#222',
    'light-panel': '#444',
    'dark-panel': '#111',
    'panel-border': '#666',
    'stark-panel': '#222',

    'action--downtime': '#37474F',
    'reserve--organization': '#455A64',
    'action--reaction': '#512DA8',
  },
}
export default theme
