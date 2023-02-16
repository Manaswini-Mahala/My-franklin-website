import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';
// import {appendChild} from '../../scripts/scripts.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {

  
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const navPath = cfg.nav || '/nav';
  const resp = await fetch(`${navPath}.plain.html`);
  const html = await resp.text();
  const nav = document.createElement('nav');
  const logoNav=document.createElement('img');




  // document.nav.appendChild(logoNav);
  // console.dir(nav);
  nav.classList.add('navbar');



  nav.innerHTML = html;
  await decorateIcons(nav);
  block.append(nav);

}

