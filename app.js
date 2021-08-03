const spacing = document.querySelector('#spacing')
const blur = document.querySelector('#blur')
const base_color = document.querySelector('#base')

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}


inputs.forEach(el => el.addEventListener('change', handleUpdate))
inputs.forEach(el => el.addEventListener('mousemove', handleUpdate))