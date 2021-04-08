const init = () => {
  removeText()
  dankMemes.forEach((image_url) => renderImage(image_url));
}

const removeText = () => {
  const remove_div = document.querySelector('#removethis')
  remove_div.remove()
}

const renderImage = (image_url) => {
    // Create the element
    const img = document.createElement('img')
    // Change it
    img.src = image_url
    // Identify the parent
    const parent_node = document.querySelector('#add-img-here')
      // ✋🏻
      parent_node.appendChild(img)
}

init()
