const DBservice = class {
	getData = (url)=>{
		const res = fetch(url);
		console.log(res);
	}
	getTestData = ()=>{
		return this.getData('test.json')
	}
}

console.log(new DBservice().getTestData());



const leftMenu= document.querySelector('.left-menu');
const hanburger =document.querySelector('.hamburger');
const tvShowsList=document.querySelector('.tv-shows__list');
modal =document.querySelector('.modal');
// open/close menu

hanburger.addEventListener('click', ()=>{
	leftMenu.classList.toggle('openMenu');
	hanburger.classList.toggle('open');
}); 
document.addEventListener('click',(event)=>{
if(!event.target.closest('.left-menu')){
	leftMenu.classList.remove('openMenu');
	hanburger.classList.remove('open');
}
});
leftMenu.addEventListener('click', event=>{
	const target = event.target;
	const dropdown =target.closest('.dropdown');
	if(dropdown){
		dropdown.classList.toggle('active');
		leftMenu.classList.add('openMenu');
		hanburger.classList.add('open')
	}
});

//open modal window 

tvShowsList.addEventListener('click', event=>{
	event.preventDefault();
	const target= event.target;
	const card = target.closest('.tv-card');
	console.log(card);

	if(card){
		document.body.style.overflow='hidden';
		modal.classList.remove('hide')
	}
});
//closed
modal.addEventListener('click', event => {
	 console.log(event.target.classList.contains('.cross'));
	 if(event.target.closest('.cross') || 
	 	event.target.classList.contains('modal')){
		 document.body.style.overflow='';
		 modal.classList.add('hide');
	 }
});
//смена карточки

const changeImage = event =>{
	const card = event.target.closest('.tv-shows__item');

	if(card){
		const img = card.querySelector('.tv-card__img');
		
		if(img.dataset.backdrop){
			[img.src,img.dataset.backdrop]=[img.dataset.backdrop,img.src];	
		}
	}

};
tvShowsList.addEventListener('mouseover', changeImage);
tvShowsList.addEventListener('mouseout', changeImage);




const mike = new human('Mike', 43);
const alex =new human('Alex',15)
console.log(mike);
console.log(alex);