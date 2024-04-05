//membuat 100 angka random dari 1-50
function randomarraygenerator(){
    let randomarray =[]
    for(let i=0; i<100; i++){
        let randommvalue = Math.floor(Math.random()*50)+1
        randomarray.push(randommvalue)
    }
    return randomarray
}

//memecah array menjadi array even dan odd
function oddevenarray(randomarray){
    let evenarray = []
    let oddarray = []

    for(let i=0; i<randomarray.length; i++){
        if(i%2==0){
            evenarray.push(randomarray[i])
        } else{
            oddarray.push(randomarray[i])
        }
    }
    return{
        evenarray: evenarray,
        oddarray: oddarray
    }
}

//menjalankan fungsi randomarraygenerator dan oddevenarray
let random = randomarraygenerator()
let randommerge = oddevenarray(random) 
let even = randommerge.evenarray
let odd = randommerge.oddarray

//membuat fungsi max
function maxnumber(array){
    let max = array[0]
    for(let x of array){
        if(x > max){
            max = x
        }
    }
    return max
}

//menjalankan fungsi max
let maxeven = maxnumber(even)
let maxodd = maxnumber(odd)

//membuat fungsi min
function minnumber(array){
    let min = array[0]
    for(let x of array){
        if(x < min){
            min = x
        }
    }
    return min
}

//menjalankan fungsi min
let mineven = minnumber(even)
let minodd = minnumber(odd)

//membuat fungsi total
function totalnumber(array){
    let total = 0
    for(let x of array){
        total = total + x
    }
    return total
}
//menjalankan fungsi total
let totaleven = totalnumber(even)
let totalodd = totalnumber(odd)

//membuat fungsi mean
function meannumber(array){
    let total = 0
    let mean = 0
    for(let x of array){
        total = total + x
    }
    mean = total/array.length
    return mean
}

//menjalankan fungsi mean
let meaneven = meannumber(even)
let meanodd = meannumber(odd)

//membuat fungsi maxcomparison
function maxcomparison(even,odd){
    if(even>odd){
        console.log(`Nilai max array genap dengan angka ${even} lebih besar dari array ganjil dengan angka ${odd}`)
    } else if(even<odd){
        console.log(`Nilai max array genap dengan angka ${even} lebih kecil dari array ganjil dengan angka ${odd}`)
    }else {
        console.log(`Nilai max array genap dengan angka ${even} sama besar dari array ganjil dengan angka ${odd}`)
    }
}

//membuat fungsi mincomparison
function mincomparison(even,odd){
    if(even>odd){
        console.log(`Nilai min array genap dengan angka ${even} lebih besar dari array ganjil dengan angka ${odd}`)
    } else if(even<odd){
        console.log(`Nilai min array genap dengan angka ${even} lebih kecil dari array ganjil dengan angka ${odd}`)
    }else {
        console.log(`Nilai min array genap dengan angka ${even} sama besar dari array ganjil dengan angka ${odd}`)
    }
}

//membuat fungsi totalcomparison
function totalcomparison(even,odd){
    if(even>odd){
        console.log(`Nilai total array genap dengan angka ${even} lebih besar dari array ganjil dengan angka ${odd}`)
    } else if(even<odd){
        console.log(`Nilai total array genap dengan angka ${even} lebih kecil dari array ganjil dengan angka ${odd}`)
    }else {
        console.log(`Nilai total array genap dengan angka ${even} sama besar dari array ganjil dengan angka ${odd}`)
    }
}

//membuat fungsi meancomparison
function meancomparison(even,odd){
    if(even>odd){
        console.log(`Nilai mean array genap dengan angka ${even} lebih besar dari array ganjil dengan angka ${odd}`)
    } else if(even<odd){
        console.log(`Nilai mean array genap dengan angka ${even} lebih kecil dari array ganjil dengan angka ${odd}`)
    }else {
        console.log(`Nilai mean array genap dengan angka ${even} sama besar dari array ganjil dengan angka ${odd}`)
    }
}

//mengeksekusi semua perintah
console.log(`array dengan jumlah index ${random.length}`)
console.log(`array genap dengan jumlah index ${even.length}`)
console.log(`array ganjil dengan jumlah index ${odd.length}`)
console.log(`nilai min pada array genap ${mineven}`)
console.log(`nilai min pada array ganjil ${minodd}`)
console.log(`nilai max pada array genap ${maxeven}`)
console.log(`nilai max pada array ganjil ${maxodd}`)
console.log(`nilai total pada array genap ${totaleven}`)
console.log(`nilai total pada array ganjil ${totalodd}`)
console.log(`nilai rata-rata pada array genap ${meaneven}`)
console.log(`nilai rata-rata pada array ganjil ${meanodd}`)
maxcomparison(maxeven,maxodd)
mincomparison(mineven,minodd)
totalcomparison(totaleven,totalodd)
meancomparison(meaneven,meanodd)

