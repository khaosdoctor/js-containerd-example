import { listTasks } from './actions.mjs'
import { listImages, pullImage, listContainers } from './actions.mjs'
window.namespace = 'default'
window.$ = document.querySelector.bind(document)

window.onload = () => {
  $('#namespaceName').value = window.namespace
  $('#imageListAction').onclick = listImages
  $('#imagePullAction').onclick = pullImage
  $('#containerListAction').onclick = listContainers
  $('#taskListAction').onclick = listTasks
  $('#namespaceName').onchange = ({ target: { value } }) => {
    window.namespace = value
    $('.namespace__selection span.toast').innerHTML = `Namespace set`

    setTimeout(() => {
      $('.namespace__selection span.toast').innerHTML = ``
    }, 3000)
  }
}
