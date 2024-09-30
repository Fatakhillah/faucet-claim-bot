const axios = require('axios');

const claimFaucet = async (walletAddress) => {
    try {
        const response = await axios.post('https://cloud.google.com/application/web3/faucet/ethereum/holesky', {
            address: walletAddress
        });
        console.log('Faucet claimed successfully:', response.data);
    } catch (error) {
        console.error('Error claiming faucet:', error.response ? error.response.data : error.message);
    }
};

const walletAddress = '0x653d8dED2F4f14a3aA516339680ede6d4681DEC9'; // Ganti dengan alamat dompet Anda
claimFaucet(walletAddress);
