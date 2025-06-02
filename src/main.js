import './style.scss'
import LocomotiveScroll from 'locomotive-scroll';
import { banner } from './js/banner';
import { skill } from './js/skill';
import { experience } from './js/experience';
import { expandSkill } from './js/expandSkill';
import { project } from './js/project';
document.querySelector('#app').innerHTML = `
<div data-scroll-container>
    <section data-scroll-section class="banner">${banner}</section>
    <section data-scroll-section class="skill">${skill}</section>
      <section data-scroll-section class="expanded-skill">${expandSkill}</section>
    <section data-scroll-section class="experience">${experience}</section>
    <section data-scroll-section class="project">${project}</section>
  </div>
`
setTimeout(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });
}, 100)
// <div id="js-target" class="target">TARGET</div>