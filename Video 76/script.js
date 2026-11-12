// Simulating getting data from server
// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 5000);
//     })
// }

async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/posts/1') //it will return a promise

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })

    let data = await x.json()
    // let data = await x.text()
    // console.log(data)
    return data
}

async function main(params) {
    console.log('Loading Modules');
    console.log('Doing Something');
    console.log('Loading Data');
    let data = await getData()

    console.log(data);

    console.log('Process Data');
    console.log('Task2');
}

main()
// console.log('Loading Modules');
// console.log('Doing Something');
// console.log('Loading Data');
// let data = getData()

// console.log(data);

// console.log('Process Data');
// console.log('Task2');

// data.then((v) => {
//     console.log(data);
//     console.log('Process data');
//     console.log('task 2');

// })