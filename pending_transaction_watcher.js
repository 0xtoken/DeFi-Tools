const ethers = require('ethers');

require('dotenv').config();
const apiKey = { projectId: process.env.INFRA_PROJECT_ID };
const provider = new ethers.providers.InfuraWebSocketProvider('homestead', apiKey);

async function main() {
    provider
        .on('pending', pendingTransaction=> {
            console.log(`new pending transaction received. ${pendingTransaction}`);
            // do whatever you like.
        });
}

main()
.catch(err => {
   console.log(err);
});
