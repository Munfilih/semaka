window.onscroll = function() {
    toggleStickyHeader();
};

function toggleStickyHeader() {
    const header = document.querySelector('.sticky-top');
    if (window.scrollY > 0) {  // When you scroll down
        header.classList.add('visible'); // Show the sticky header
    } else {
        header.classList.remove('visible'); // Hide the sticky header
    }
}
