const u=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};u();const a=document.querySelector(".primary-header"),d=document.querySelector(".mobile-nav-toggle"),n=document.querySelector(".primary-navigation");function s(){n.hasAttribute("data-visible")?document.documentElement.style.overflow="hidden":document.documentElement.style.overflow="auto"}function m(){n.removeAttribute("data-visible"),a.removeAttribute("data-overlay")}function f(){n.toggleAttribute("data-visible"),a.toggleAttribute("data-overlay")}d.addEventListener("click",()=>{f(),s()});document.documentElement.addEventListener("click",i=>{i.target.className==="primary-header"&&(m(),s())});new A11YSlider(document.querySelector(".slider"),{adaptiveHeight:!1,dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:3700,responsive:{641:{dots:!1}}});