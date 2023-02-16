import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';
// import {appendChild} from '../../scripts/scripts.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {

  
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const breadcrumbPath = cfg.breadcrumb || '/breadcrumb';
  const resp = await fetch(`${breadcrumbPath}.plain.html`);
  const html = await resp.text();
  const breadcrumb = document.createElement('div');
  // const logobreadcrumb=document.createElement('img');




  // document.breadcrumb.appendChild(logobreadcrumb);
  // console.dir(breadcrumb);
  breadcrumb.classList.add('breadcrumb');



  breadcrumb.innerHTML = html;
  await decorateIcons(breadcrumb);
  block.append(breadcrumb);

}

