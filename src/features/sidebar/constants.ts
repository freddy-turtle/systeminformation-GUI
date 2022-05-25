import { OS_URL } from 'src/routes/os/constants';
import { PROCESSUS_LIST_URL } from 'src/routes/processus/constants';
import { SYSTEM_URL } from 'src/routes/system/constants';

export const SIDEBAR_LINK_PROCESSUS = {
  icon: 'bi-arrow-down-right-square-fill',
  label: 'Processus',
  url: PROCESSUS_LIST_URL
};

export const SIDEBAR_LINK_SYSTEM = {
  icon: 'bi-asterisk',
  label: 'System',
  url: SYSTEM_URL
};

export const SIDEBAR_LINK_OS = {
  icon: 'bi-gear-fill',
  label: 'Os',
  url: OS_URL
};

export const links = [
  SIDEBAR_LINK_SYSTEM,
  SIDEBAR_LINK_OS,
  SIDEBAR_LINK_PROCESSUS
];
