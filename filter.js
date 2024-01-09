
//     FILTER
//     - Cria um novo array, a partir do array percorrido (array original)
//     - Cria um novo array APENAS com os elementos filtrados
//     - Aceita 3 parâmetros
//     - item
//     - index 
//     - array completo

//     retur true -> item atual passa para o novo array
//     return false -> item atual NÃO passa pro novo array
//  


const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number => {
    if (number < 100 || number % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(newList)


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'kim Hyun Suk', foundedOn: 1938 },
    {
        name: 'Microsoft',
        marketValue: 415,
        CEO: 'Sayta Nadella',
        foundedOn: 1975,
    },

    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    {
        name: 'Facebook',
        marketValue: 383,
        CEO: 'Mark Zuckeberg',
        foundedOn: 2004,
    },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },


]

const newCompanies = companies.filter(company => {
    if (company.marketValue < 200  && company.foundedOn > 1990) return true
    else return false
})

console.log(newCompanies)
