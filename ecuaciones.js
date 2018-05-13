function calcVmax(){

	var wb=parseFloat(document.getElementById("wb").value);
	var wo=parseFloat(document.getElementById("wo").value);
	var wp=parseFloat(document.getElementById("wp").value);
	
	if(isNaN(wb)){
		//Wb=Wo-Wp
		if((isNaN(wo)||isNaN(wp))==false){
			wb=wo-wp;
		}else{
			alert("Ingrese los valores de Wo y Wp para calcular Wb");
			return false;
		}
	}

	//impulso it
	var it=parseFloat(document.getElementById("it").value); 

	if(isNaN(it)==false){
		var g=9.8;
		var vmax=(it*g)/wb;
	}else{
		alert("Ingrese un valor para It");
		return false;
	}

	document.getElementById('vmax').textContent  = vmax.toString();
	return true;
}

function calcVav(){
	var vo=parseFloat(document.getElementById("vo").value);
	var vmax=parseFloat(document.getElementById("vmax").innerText);

	if(isNaN(vo)==false){
		var vav=(vo+vmax)/2;
	}else{
		alert("Ingrese un valor para Vo");
		return false;
	}

	document.getElementById('vav').textContent = vav.toString();
	return true;
}

function calcSb(){
	var vav=parseFloat(document.getElementById("vav").innerText);
	var tb=parseFloat(document.getElementById("tb").value);
	
	if(isNaN(tb)==false){
		var sb=vav*tb;
	}else{
		alert("Ingrese un valor para tb");
		return false;
	}

	document.getElementById('sb').textContent = sb.toString();
	return true;
}

function calcSc(){
	var vmax=parseFloat(document.getElementById("vmax").innerText);
	var g=9.8;

	if(isNaN(vmax)==false){
		var sc=(vmax*vmax)/(2*g);
	}else{
		alert("Calcule el valor de Vmax primero.");
		return false;
	}

	document.getElementById('sc').textContent =sc.toString();
	return true;
}

function calcSt(){
	var sc=parseFloat(document.getElementById("sc").innerText);
	var sb=parseFloat(document.getElementById("sb").innerText);

	if(isNaN(sc)==false && isNaN(sb)==false){
		var st=sc+sb;
	}else{
		alert("Calcule Sc y Sb primero.");
		return false;
	}


	document.getElementById('st').textContent =st.toString();
	return true;
}

function calcD(){
	var e = document.getElementById("temp");
	var temp=e.options[e.selectedIndex].text;
	
	var i = document.getElementById("forma");
	var formaTemp=i.options[i.selectedIndex].text;

	var v=parseFloat(document.getElementById("vav").innerText);
	var ar=parseFloat(document.getElementById("ar").value);
	
	var p=0;
	var cd=0;

	switch(formaTemp) {
	    case "Conica":
	        cd = 0.667;
	        break;
	    case "Ojiva":
	        cd = 0.446;
	        break;
	    case "Parabolica":
	        cd = 0.5;
	        break;
	    case "Eliptica":
	    	cd=0.333;
	    	break;
	    default:
	        cd = 0;
	}

	switch(temp) {
	    case "-1.1":
	        p=1.0590;
	        break;
	    case "1.6":
	        p=1.0486;
	        break;
	    case "4.4":
	        p=1.0380;
	        break;
	    case "7.2":
	        p=1.0277;
	        break;
	    case "10":
	        p=1.0177;
	        break;
	    case "12.7":
	        p=1.0078;
	        break;
	    case "15.5":
	        p=0.9885;
	        break;
	    case "18.3":
	        p=0.9980;
	        break;
	    case "21.1":
	        p=0.9792;
	        break;
	    case "23.8":
	        p=0.9700;
	        break;
	    case "26.6":
	        p=0.9610;
	        break;   
	    case "29.4":
	        p=0.9522;
	        break;
	    case "32.2":
	        p=9435;
	        break;
	    case "35":
	        p=0.9350;
	        break;
	    case "37.7":
	        p=0.9266
	        break;
	    case "40":
	        p=0.9175;
	        break;
	    default:
	    	p=0;
	}

	if(cd!=0 && p!=0 && isNaN(v)==false && isNaN(ar)==false){
		var d=0.5*p*v*v*cd*ar;
	}else{
		alert("Ingrese o calcule P, Cd, Vav y Ar respectivamente.");
		return false;
	}

	document.getElementById('d').textContent =d.toString();
	return true;
}

function calcA(){
	var w=parseFloat(document.getElementById("w").value);
	var wc=parseFloat(document.getElementById("wc").value);
	var f=parseFloat(document.getElementById("f").value);
	var d=parseFloat(document.getElementById("d").innerText);
	var g=9.8;

	if(isNaN(w)==false && isNaN(wc)==false && isNaN(f)==false && isNaN(d)==false){
		var a=((f-d)*g)/(w-wc);
	}else{
		alert("Ingrese o calcule F, D, W, Wc respectivamente.");
		return false;
	}

	document.getElementById('a').textContent =a.toString();
	return true;
}