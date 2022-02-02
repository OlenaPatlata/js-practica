const wrapperRef = document.querySelector('.wrapper');
console.log("~ ~ wrapperRef", wrapperRef);
console.dir(wrapperRef)


const firstPRef = wrapperRef.querySelector('p');
console.dir(firstPRef)
firstPRef.style.backgroundColor = 'aqua';
const secPRef = wrapperRef.querySelector('#elem');
console.dir(secPRef)
console.log("~ ~ secPRef", secPRef);
console.log("~ ~ secPRef", secPRef)


const pRefs = document.querySelectorAll('p')
console.log("pRefs", pRefs)





console.log(pRefs)
console.log([...pRefs])
console.log("~ ~ [...pRefs]", [...pRefs]);
console.log();
const parRef = document.querySelector('.wrapper #elem')
parRef.classList.add('blue')
console.log(parRef);



const elemRef=document.querySelector()