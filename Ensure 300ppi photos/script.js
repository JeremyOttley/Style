Array.from(document.getElementsByTagName('img'), img => {

  img.addEventListener('load', e => {
    e.target.style.setProperty('--naturalWidth', e.target.naturalWidth)
    e.target.style.setProperty('--naturalHeight', e.target.naturalHeight)
  })

})
