import { Get, Post, Delete } from './fetch.mjs'

export async function listImages () {
  const imageList = $('#imageList')
  const images = await Get(`${window.namespace}/images`)

  if (images.length <= 0) {
    imageList.innerHTML = 'No images yet'
    return
  }

  const list = document.createElement('ul')
  for (const image of images) {
    const listItem = document.createElement('li')
    listItem.dataset.registry = image.registry
    listItem.dataset.repository = image.repository
    listItem.dataset.tag = image.tag
    listItem.dataset.name = image.name
    listItem.dataset.fullName = image.fullName

    const div = document.createElement('div')
    div.classList.add(`image__${image.name}`, 'inline')

    const span = document.createElement('span')
    span.textContent = image.fullName

    const button = document.createElement('button')
    button.classList.add('container-button')
    button.onclick = createContainer(image.name, image.fullName)
    button.textContent = 'Create container from this image'

    const deletebtn = document.createElement('button')
    deletebtn.onclick = deleteImage(image.fullName)
    deletebtn.textContent = 'Delete image'

    div.appendChild(span)
    div.appendChild(button)
    div.appendChild(deletebtn)
    listItem.appendChild(div)

    list.appendChild(listItem)
  }
  $('#imageList').innerHTML = ''
  $('#imageList').appendChild(list)
}

export async function listContainers () {
  const containerList = $('#containerList')
  const containers = await Get(`${window.namespace}/containers`)

  if (containers.length <= 0) {
    containerList.innerHTML = 'No containers yet'
    return
  }

  const list = document.createElement('ul')
  for (const container of containers) {
    const listItem = document.createElement('li')
    listItem.dataset.name = container

    const div = document.createElement('div')
    div.classList.add(`container__${container}`, 'inline')

    const span = document.createElement('span')
    span.textContent = container

    const button = document.createElement('button')
    button.onclick = createTask(container)
    button.textContent = 'Run task'

    const deletebtn = document.createElement('button')
    deletebtn.onclick = deleteContainer(container)
    deletebtn.textContent = 'Delete container'

    div.appendChild(span)
    div.appendChild(button)
    div.appendChild(deletebtn)
    listItem.appendChild(div)

    list.appendChild(listItem)
  }
  $('#containerList').innerHTML = ''
  $('#containerList').appendChild(list)
}

export async function pullImage (e) {
  e.target.innerHTML = 'Pulling...'
  const [registry, repository, fullName] = $('#imageName').value.split('/')
  await Post(`${window.namespace}/images/${registry}/${repository}/${fullName}`)
  e.target.innerHTML = 'Pulled'
  listImages()
  setInterval(() => { e.target.innerHTML = 'Pull' }, 3000)
}

function createContainer (name, image) {
  return async () => {
    await Post(`${window.namespace}/containers/${name}-${Date.now()}`, { image })
    await listContainers()
  }
}

function deleteImage (image) {
  return async ({ target }) => {
    target.textContent = 'Deleting...'
    await Delete(`${window.namespace}/images/${image}`)
    await listImages()
  }
}

function deleteContainer (containerName) {
  return async ({ target }) => {
    target.textContent = 'Deleting...'
    await Delete(`${window.namespace}/containers/${containerName}`)
    await listContainers()
  }
}

function createTask (containerName) {
  return async () => {

  }
}
