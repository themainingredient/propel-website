import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

function stickySection() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
  }

  const stickyWrapper = document.querySelector('.section-sticky')
  const stickyFirst = document.querySelector('.section--first')
  const stickySecond = document.querySelector('.section--second')
  const stickyThird = document.querySelector('.section--third')

  if (stickyWrapper) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickySecond,
        start: 'center bottom',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    })
    tl.fromTo(
      stickyFirst,
      {
        scale: '1',
        y: '0%',
      },
      {
        scale: '0.9',
        y: '-10%',
      }
    )
  }

  if (stickyWrapper) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyThird,
        start: 'center bottom',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    })
    tl.fromTo(
      stickySecond,
      {
        scale: '1',
        y: '0%',
      },
      {
        scale: '0.9',
        y: '-10%',
      }
    )
  }

  if (stickyWrapper) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: stickyThird,
        start: 'center bottom',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    })
    tl.to(stickyFirst, {
      scale: '0.8',
      y: '-20%',
    })
  }
}

export default stickySection
