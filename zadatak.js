
let a = prompt ("Unesite prvi broj:")
const ro = prompt ("Unesite operaciju (+), oduzimanja(-), množenja(*) ili deljenja(/):")
let b = prompt ("Unesite drugi broj:")

a = Number(a)
b = Number(b)

switch (ro) {
    case "+": {
        alert("Rezultat sabiranja je:" + (a+b))
        break
    }

    case "-": {
        alert("Rezultat oduzimanja je:" + (a-b))
        break
    }

    case "*": {
        alert("Rezultat množenja je:" + (a*b))
        break
    }

    case "/": {
        alert("Rezultat deljenja je:" + (a/b))
        break
    }

    default: {
        alert("Niste uneli validnu operaciju (sabiranje(+), oduzimanje(-), množenje(*), deljenje(/))")
    }
}