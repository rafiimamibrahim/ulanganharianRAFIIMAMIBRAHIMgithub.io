//NO 1
function cetakFunction(a){
    return `Hallo Nama Saya` + a
}

console.log(cetakFunction("Rafi"));

// NO 2
function myFunction (angka1, angka2) {
    return angka1 + angka2;
}
let angka1 = 20;
let angka2 = 7;
let output= myFunction(angka1, angka2);

console.log(output);


//NO 3
function haii (){
    let a = "Hello"
    return "hello";     
}
let hai = haii((mao) => mao.a === "Hello")
console.log(hai);





// // NO 4
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia",
    showName : function(){
        console.log(` bahasa ${this.bahasa}`);
    }
}
obj.showName();


// // NO 5
let arrayDaftarPeserta = ["john doe","laki laki","1992","baca buku"]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    kelahiran :arrayDaftarPeserta[2],
    hobi : arrayDaftarPeserta[3],

}

console.log(objDaftarPeserta);

// no 6

const buah = [{
    Nama:'Nanas',
    warna: 'Kuning',
    adaBijinya:'tidak',
    harga: 9000,
}, 
{
    Nama:'Jeruk',
    warna: 'Orange',
    adaBijinya:'ada',
    harga: 8000,
},
{
    Nama:'Semangka',
    warna: 'Hijau & Merah',
    adaBijinya:'ada',
    harga: 10000,
},
{
    Nama:'Pisang',
    warna: 'Kuning',
    adaBijinya:'tidak',
    harga: 5000,
}
]



const buahBerbiji = buah.filter ((biji) => biji.adaBijinya == "ada")
console.log(buahBerbiji);