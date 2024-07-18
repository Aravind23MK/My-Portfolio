	var tablinks = document.getElementByClassName("tab-links");
	var tabcontents = document.getElementByClassName("tab-contents");
	function opentab(tabname){
		for (tablink of tablinks){
			tablink.classList.remove("active-link");
		}
		for (tabcontent of tabcontents){
			tabcontent.classList.remove("active-tab");
		}
		event.currentTarget.classList.add("active-link");
		document.getElementById(tabname).classList.add("active-tab");
	
	}

	var pos = document.documentElement;
	pos.addEventListener('mousemove', e =>{
		pos.style.setProperty('--x', e.clientX = 'px')
		pos.style.setProperty('--y', e.clientY = 'px')
   })