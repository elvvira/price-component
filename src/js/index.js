// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { changeInfo } from './subscription';

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', e => changeInfo(e));
