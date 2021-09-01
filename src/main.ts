import './style.styl'

const logoURL = ''
const ROOT_SELECTOR_CLASS = 'ck-clipping-card'
const root = document.querySelector('.' + ROOT_SELECTOR_CLASS)
console.log(root)

const bookCount = 100
const clippingCount = 100


// generate header

function getHeaderDOM() {
    const avatarURL = ''
    const username = ''
    const header = document.createElement('header')
    header.innerHTML = `
    <div>
        <img src='${avatarURL}' />
        <div>
            <span>${username}</span>
            <span>已读 ${bookCount} 本书，做了 ${clippingCount} 份摘录</span>
        </div>
    </div>
    <img src='${logoURL}' />
`
    return header
}

const newHeader = getHeaderDOM()

root?.insertBefore(newHeader, root.firstChild)