// Carousel functionality
let currentSlideIndex = 0
const slides = document.querySelectorAll(".carousel-slide")
const indicators = document.querySelectorAll(".indicator")

function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"))
  indicators.forEach((indicator) => indicator.classList.remove("active"))

  // Show current slide
  slides[index].classList.add("active")
  indicators[index].classList.add("active")
}

function changeSlide(direction) {
  currentSlideIndex += direction

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1
  }

  showSlide(currentSlideIndex)
}

function currentSlide(index) {
  currentSlideIndex = index - 1
  showSlide(currentSlideIndex)
}

// Auto-play carousel
setInterval(() => {
  changeSlide(1)
}, 8000)

// Scroll animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll(".declaration-text p")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

// Smooth scrolling for navigation
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  })
}

// Event listeners
window.addEventListener("scroll", handleScrollAnimations)
window.addEventListener("load", () => {
  // Initialize first slide
  showSlide(0)

  // Add fade-in class to declaration paragraphs
  const declarationParagraphs = document.querySelectorAll(".declaration-text p")
  declarationParagraphs.forEach((p) => p.classList.add("fade-in"))
})

// Keyboard navigation for carousel
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    changeSlide(-1)
  } else if (e.key === "ArrowRight") {
    changeSlide(1)
  }
})

// Touch/swipe support for mobile
let startX = 0
let endX = 0

document.querySelector(".carousel").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX
})

document.querySelector(".carousel").addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX
  handleSwipe()
})

function handleSwipe() {
  const swipeThreshold = 50
  const diff = startX - endX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      changeSlide(1) // Swipe left - next slide
    } else {
      changeSlide(-1) // Swipe right - previous slide
    }
  }
}

// Add floating hearts animation
function createFloatingHeart() {
  const heart = document.createElement("div")
  heart.innerHTML = "💖"
  heart.style.position = "fixed"
  heart.style.left = Math.random() * 100 + "vw"
  heart.style.top = "100vh"
  heart.style.fontSize = "1.5rem"
  heart.style.pointerEvents = "none"
  heart.style.zIndex = "1000"
  heart.style.animation = "floatUp 4s linear forwards"

  document.body.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 4000)
}

// Add CSS for floating hearts
const style = document.createElement("style")
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000)

// Add click effect to social links
document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()

    // Create ripple effect
    const ripple = document.createElement("div")
    ripple.style.position = "absolute"
    ripple.style.borderRadius = "50%"
    ripple.style.background = "rgba(255, 107, 157, 0.6)"
    ripple.style.transform = "scale(0)"
    ripple.style.animation = "ripple 0.6s linear"
    ripple.style.left = "50%"
    ripple.style.top = "50%"
    ripple.style.width = "20px"
    ripple.style.height = "20px"
    ripple.style.marginLeft = "-10px"
    ripple.style.marginTop = "-10px"

    link.style.position = "relative"
    link.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })
})

// Add ripple animation CSS
const rippleStyle = document.createElement("style")
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(rippleStyle)
