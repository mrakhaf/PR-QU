const dropDown = (id) => {
    const elmnt = document.getElementById(`home__contentResponsiveDetails${id}`)
    if (elmnt.style.display == '' || elmnt.style.display == 'none') {
        elmnt.style.display = 'block'
    } else {
        elmnt.style.display = 'none'
    }
}