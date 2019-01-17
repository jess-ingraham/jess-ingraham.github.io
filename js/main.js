
document.addEventListener('DOMContentLoaded', main);


function main(){

	fadeInHeader();

//	document.querySelectorAll(".box h3, .box h4, p.date").forEach((box) =>{
//		box.addEventListener('click', openClose, false);
//	});
}

function openDropdown(id){

	let dropdownId;
	rows.forEach((row) =>{
		row.ids.forEach((check) =>{
			if(id === check){
				dropdownId = row.rowId;
			}
		});
	});

	let desc;
	content.forEach((check) =>{
		if(check.id === id){
			desc = check.cont;
		}
	});

	let dropdown = document.querySelector("#"+ dropdownId);
	dropdown.innerHTML = desc;

	dropdown.classList.add('open');
}

function closeDropdown(id){

	let dropdownId;
	rows.forEach((row) =>{
		row.ids.forEach((check) =>{
			if(id === check){
				dropdownId = row.rowId;
			}
		});
	});

	let dropdown = document.querySelector("#"+ dropdownId);
	dropdown.innerHTML = '';

	dropdown.classList.remove('open');	
}

function addSelect(box){
	// want every other box besides the one that's clicked to close, then select the box

	//remove the class from all the others
	document.querySelectorAll(".box").forEach((other) =>{
		if(other.classList.contains("selected")){
			other.classList.remove("selected");
			closeDropdown(other.id);
			// other.querySelector('div.dropdown').classList.remove('open');
		}
	});
	
	box.classList.add("selected");
	openDropdown(box.id);
}


function openClose(evt){
	//check if the box is already open, if it is close it, if it's not then close the other box and open this one

	//if the h3 element was selected, then set box to the parent element instead
	let box;
	if(evt.target.parentNode.classList.contains('box')){
		box = evt.target.parentNode;
	}
	else{
		box = evt.target;
	}

	//check if the box is already open

	if(box.classList.contains('selected')){
		box.classList.remove('selected');
		closeDropdown(box.id);

	}
	else{
		//if it's not then open the box
		addSelect(box);
	}


}

function fadeInHeader(){

	let items = [];
	items.push(document.querySelector('div.about_me'));

	document.querySelectorAll('div.images img').forEach((image)=>{
		items.push(image);
	});

	items.push(document.querySelector('div.pic-caption'));


	items.forEach(function(item, index){
		setTimeout(()=>{unfade(item)}, (1000 * index));
	});

}

function unfade(element) {
	var op = 0.1;  // initial opacity
	element.style.display = 'block';
	var timer = setInterval(function () {
		if (op >= 1){
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 10);
}