const IMG_URL = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
const API_KEY = '42ff8c58d1f50c43406409cb9167e68f';



const leftMenu= document.querySelector('.left-menu');
const hanburger =document.querySelector('.hamburger');
const tvShowsList=document.querySelector('.tv-shows__list');
modal =document.querySelector('.modal');




const DBservice = class {
	getData =async (url)=>{
		const res = await fetch(url);
		console.log(res);
		if (res.ok){
			return res.json();

		}else{
			throw new Error(`не удалось получить данные по адресу ${url}`)
		}
	}

	getTestData = ()=>{
		return this.getData('test.json')
	}
}
const renderCard = response =>{
	console.log(response);
	tvShowsList.textContent = '';
	

	response.results.forEach(({
								backdrop_path: backdrop,
								name: title,
								poster_path:poster,
								vote_average:vote
								})=>{

		const posterIMG =poster ? IMG_URL + poster : 'img/no-poster.jpg';
		const backdropIMG ='';
		const voidElem = '';

		const card = document.createElement('li');
		card.className = 'tv-shows__item';
		card.innerHTML = `
		<a href="#" class="tv-card">
			<span class="tv-card__vote">${vote}</span>
			<img class="tv-card__img"
				src="${posterIMG}"
				data-backdrop="${IMG_URL + backdrop}"
				alt="${title}">
			<h4 class="tv-card__head">${title}</h4>
		</a>
		`;
		 tvShowsList.append(card);
	});


}
new DBservice().getTestData().then(renderCard);














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

// const mike = new human('Mike', 43);
// const alex =new human('Alex',15)
// console.log(mike);
// console.log(alex);