 var slayt = document.getElementsByClassName("slayt");  //slayt classlarını bir diziye çekiyoruz
 
 var slaytSayısı = slayt.length;  // dizinin sayısı
 
 var slaytNo = 0; 
 
   slaytGoster(slaytNo); 
   
   
   function onceki() { // butonla bir onceki resme gecisi sağlayan fonksiyon
	   
	   slaytNo--;
	   
	   slaytGoster(slaytNo);
	   
	   clearInterval(s);
	   
   }
   
    function sonraki() { // butonla bir sonraki resme gecisi sağlayan fonksiyon
	   
	   slaytNo++;
	   
	   slaytGoster(slaytNo);
	    clearInterval(s);
   } 
   
  var s =  setInterval(function() { // slaytın 3 saniyede bir kendi kendine dönmesini sağlayan fonksiyon
	   
	   slaytNo++;
	   slaytGoster(slaytNo);
	   
	   
   },3000);
   
 
 
  function slaytGoster(slaytNumarası) {
	  
	    slaytNo = slaytNumarası;
		
		if(slaytNumarası >= slaytSayısı){ //son slayta geldiğinde basa donmesi saglanıyor
			
			slaytNo = 0;
			
		} 
		
		if(slaytNumarası < 0){    // 1. slayttan küçükse son slayta geçicek. baştayken geri denirse.
			
			slaytNo = slaytSayısı -1;
			
		}
	   
	    for(i = 0; i< slaytSayısı; i++) { 
			
			slayt[i].style.display = "none"; //tüm resimler gizleniyor
			
			
		} 
		
		slayt[slaytNo].style.display = "block"; // gecerli resim gosteriliyor
	   
	   
  }
   
 
 




 function kontrol()
 {
	var ad = document.getElementById("ad").value;
	var soyad = document.getElementById("soyad").value;
	var email = document.getElementById("email").value;
	var ed = email.indexOf("@");
    var nokta = email.lastIndexOf(".");
	var adres = document.getElementById("adres").value;
	var il = document.getElementById("il").value;
	var cinsiyet= document.getElementById("cinsiyet").value;
	
	if(ad == null || ad == "")
	{
		window.alert('Boş alanları doldurunuz !!!');
		return false;
	} 

    else if(soyad == null || soyad == "")
	{
		window.alert('Boş alanları doldurunuz !!!');
		return false;
	}
	
	else if(email == null || email == "")
	{
		window.alert('Boş alanları doldurunuz !!!');
		return false;
	}
	
	else if(ed < 1 || nokta < ed + 2 || nokta + 2 >= email.length )
	{
		alert("Geçerli email adresi giriniz !!!");
        return false;
	}
	
	
	else if(adres == null || adres == "")
	{
		window.alert('Boş alanları doldurunuz !!!');
		return false;
	}
	
	else if(il == null || il == "")
	{
		window.alert('Boş alanları doldurunuz !!!');
		return false;
	}
	

 }