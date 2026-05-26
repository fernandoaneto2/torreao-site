'use client';
import { useEffect } from 'react';

export default function ScrollInit() {
  useEffect(() => {
    // Smooth scroll with navbar offset
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
          const target = document.querySelector(href) as HTMLElement | null;
          if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
          }
        }
      });
    });

    // Card entrance animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    document
      .querySelectorAll<HTMLElement>('.service-card, .portfolio-card, .process-step, .testimonial-card, .why-card')
      .forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return null;
}
