/**
 * Scroll-reveal: elements marked with `data-reveal` fade/slide in when they
 * enter the viewport. Runs on every route change (including initial load).
 *
 * Elements are only hidden when `html[data-reveal-ready]` is present (set by an
 * inline head script), so content stays visible without JS.
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

let observer: IntersectionObserver | null = null;

function revealAll(): void {
  document
    .querySelectorAll<HTMLElement>('[data-reveal]')
    .forEach((el) => el.classList.add('is-revealed'));
}

function observePending(): void {
  if (!('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  observer ??= new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      }
    },
    {threshold: 0.15, rootMargin: '0px 0px -40px 0px'},
  );

  document
    .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)')
    .forEach((el) => observer!.observe(el));
}

export function onRouteDidUpdate(): void {
  if (!ExecutionEnvironment.canUseDOM) return;
  // Wait a frame so the new route's DOM is committed.
  requestAnimationFrame(observePending);
}
