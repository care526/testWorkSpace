const envinfo = require('envinfo');

// envinfo.run(
//     {
//         Binaries: ['Node', 'Yarn', 'npm'],
//         Browsers: ['Chrome', 'Firefox', 'Safari'],
//     },
//     { json: true, showNotFound: true }
// ).then(console.log);


const node = envinfo.helpers.getNodeInfo()

node.then(res => {
    console.log(res);
})
