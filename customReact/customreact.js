function customRender(reactElement,container){
    const domElementt=document.createElement
    (reactElement.type)
  /*
    domElementt.innerHTML=reactElement.children
    domElementt.setAttribute('href',
        reactElement.props.href)
    domElementt.setAttribute('target',
        reactElement.props.target)
    container.appendChild(domElementt)

    */
   domElementt.innerHTML=reactElement.children
   for (const prop in reactElement.props) {
    if(prop==='children') continue;
    domElementt.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElementt)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer)