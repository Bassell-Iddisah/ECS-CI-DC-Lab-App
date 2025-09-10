// Simple JavaScript for enhanced interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Add smooth animations on load
    const cards = document.querySelectorAll(".info-card, .architecture-overview")
    cards.forEach((card, index) => {
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"

        setTimeout(() => {
            card.style.transition = "all 0.6s ease"
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
        }, index * 200)
    })

    // Add click-to-edit functionality for name and lab fields
    const editableFields = ["studentName", "labName"]

    editableFields.forEach((fieldId) => {
        const field = document.getElementById(fieldId)
        if (field) {
            field.addEventListener("click", function () {
                if (this.textContent.includes("[") && this.textContent.includes("]")) {
                    const input = document.createElement("input")
                    input.type = "text"
                    input.value = ""
                    input.className = "edit-input"
                    input.style.cssText = `
                        width: 100%;
                        padding: 8px;
                        border: 2px solid #667eea;
                        border-radius: 6px;
                        font-size: 1.2rem;
                        font-weight: 600;
                        background: white;
                        outline: none;
                    `

                    input.addEventListener("blur", function () {
                        if (this.value.trim()) {
                            field.textContent = this.value.trim()
                        }
                        field.style.display = "block"
                        this.remove()
                    })

                    input.addEventListener("keypress", function (e) {
                        if (e.key === "Enter") {
                            this.blur()
                        }
                    })

                    field.style.display = "none"
                    field.parentNode.appendChild(input)
                    input.focus()
                }
            })

            // Add hover effect for editable fields
            if (field.textContent.includes("[") && field.textContent.includes("]")) {
                field.style.cursor = "pointer"
                field.title = "Click to edit"

                field.addEventListener("mouseenter", function () {
                    this.style.background = "#e9ecef"
                    this.style.borderRadius = "6px"
                    this.style.padding = "4px 8px"
                })

                field.addEventListener("mouseleave", function () {
                    this.style.background = "transparent"
                    this.style.padding = "8px 0"
                })
            }
        }
    })

    // Add deployment timestamp
    const deploymentTime = new Date().toLocaleString()
    const footer = document.querySelector(".footer p")
    if (footer) {
        footer.innerHTML += `<br><small>Last deployed: ${deploymentTime}</small>`
    }

    // Add subtle parallax effect to background
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const parallax = document.body
        const speed = scrolled * 0.5
        parallax.style.backgroundPosition = `center ${speed}px`
    })
})
