const btn = document.getElementById('stack-toggle');
const wrapper = document.getElementById('wrapper');

btn.addEventListener('click', () => {
    const isHidden = wrapper.hasAttribute('hidden');
    if (isHidden) {
        wrapper.removeAttribute('hidden');
        btn.textContent = 'Hide Stack';
        btn.setAttribute('aria-expanded', 'true');
    } else {
        wrapper.setAttribute('hidden', '');
        btn.textContent = 'View Stack';
        btn.setAttribute('aria-expanded', 'false');
    }
});