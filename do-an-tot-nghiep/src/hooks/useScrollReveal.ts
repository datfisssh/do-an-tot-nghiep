import { useEffect } from 'react';

/**
 * A highly performant React hook that uses IntersectionObserver
 * to trigger CSS scroll reveals for elements with the `.reveal` class.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px 0px -100px 0px', // trigger 100px before entering screen fully for cleaner look
      threshold: 0.05, // trigger as soon as 5% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once it has been revealed, we can stop observing to preserve memory/performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements that want to be revealed
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
