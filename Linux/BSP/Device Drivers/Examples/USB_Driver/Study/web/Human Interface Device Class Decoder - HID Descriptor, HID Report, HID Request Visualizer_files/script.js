
function ToggleImage(HideImg, ShowImg) {
	if ( document.getElementById ) {
		var hi=document.getElementById(HideImg)
			hi.style.display = (hi.style.display != "block") ? "block" : "none"
		var si=document.getElementById(ShowImg)
			si.style.display = (si.style.display != "none") ? "none" : "block"		
	}
}