function validateAndSubmit(){
    var selectedOshi=document.getElementById("oshi").value;
    if(selectedOshi !=="Gresella" && selectedOshi!=="Azizi" && selectedOshi !=="Shani"){
        alert("Oshinya harus diantara: Gresella,Azizi,Shani");
    }else{
        var oshi=selectedOshi;
        var tanggalLahir=document.getElementById("tanggalLahir").value;
        var ismun =document.getElementById("ismun").value;
        var hasilRegristasi="Nama: " + ismun + "<br>Oshi Pilihan: " + oshi + "<br>Tanggal Lahir:"+tanggalLahir;

        document.getElementById("hasilRegristasiBox").innerHTML=hasilRegristasi;
    }
}
