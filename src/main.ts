// TODO: metric

import { Clipping, fetchClipping } from './api'
import { CDN_PREFIX, logoURL, rootDOM, WEBSITE_ENDPOINT } from './common'
import './prefers-dark'
import './style.styl'

const bookCount = 100
const clippingCount = 100

// generate header

function getHeaderDOM(clipping: Clipping) {
  const header = document.createElement('header')
  const avatar = clipping.creator.avatar.startsWith('http') ?
    clipping.creator.avatar : `${CDN_PREFIX}/${clipping.creator.avatar}`
  header.classList.add('ck-header')
  header.innerHTML = `
    <div class='ck-profile'>
        <img src='${avatar}' class='ck-avatar' />
        <div class='ck-profile-id'>
            <span>${clipping.creator.name}</span>
            <!--
            <span>已读 ${bookCount} 本书，做了 ${clippingCount} 份摘录</span>
            -->
        </div>
    </div>
    <img src='${logoURL}' class='ck-logo' />
`
  return header
}

async function main() {
  const cidStr = rootDOM.getAttribute('data-cid')
  if (!cidStr) {
    return
  }
  const cid = ~~cidStr

  const clipping = await fetchClipping(cid)
  const newHeader = getHeaderDOM(clipping)
  rootDOM.insertBefore(newHeader, rootDOM.firstChild)

  const href = `${WEBSITE_ENDPOINT}/dash/${clipping.creator.id}/clippings/${clipping.id}?iac=1`

  rootDOM.addEventListener('click', () => {
    window.open(href, '_blank')
  })
}

main()