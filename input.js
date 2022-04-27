function jumlah() {
    var Bil1 = parseFloat(document.fform.bilangan1.value);
    var Bil2 = parseFloat(document.fform.bilangan2.value);
    if (isNaN(Bil2))       
        Bil2 = 0.0;
    var Hasil = Bil1+Bil2;
    alert("hasil penjumlahan = "+ Hasil);
}

function kurang() {
    var Bil1 = parseFloat(document.fform.bilangan1.value);
    var Bil2 = parseFloat(document.fform.bilangan2.value);
    if (isNaN(Bil2))       
        Bil2 = 0.0;
    var Hasil = Bil1-Bil2;
    alert("hasil pengurangan = "+ Hasil);
}

function kali() {
    var Bil1 = parseFloat(document.fform.bilangan1.value);
    var Bil2 = parseFloat(document.fform.bilangan2.value);
    if (isNaN(Bil2))       
        Bil2 = 0.0;
    var Hasil = Bil1*Bil2;
    alert("hasil pengurangan = "+ Hasil);
}

function bagi() {
    var Bil1 = parseFloat(document.fform.bilangan1.value);
    var Bil2 = parseFloat(document.fform.bilangan2.value);
    if (isNaN(Bil2))       
        Bil2 = 0.0;
    var Hasil = Bil1/Bil2;
    alert("hasil pengurangan = "+ Hasil);
}