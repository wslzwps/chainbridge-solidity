const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || "https://polygon-rpc.com");

const amount = web3.utils.toBN("10000000000000000");
const recipientAddress = '0xa3bF104b053551DE495D61D229232fc4a14C3275';
const cleanRecipientAddress = recipientAddress.slice(2);
const lenRecipientAddress = cleanRecipientAddress.length / 2;

// 创建Buffer
const buffer = Buffer.alloc(32 + 32 + lenRecipientAddress);

// 使用正确的二进制数据填充Buffer
buffer.fill(web3.utils.toHex(amount).slice(2).padStart(64, '0'), 0, 32, 'hex'); // 填充纯二进制的amount数据
buffer.fill(web3.utils.toHex(lenRecipientAddress).slice(2).padStart(64, '0'), 32, 64, 'hex'); // 填充纯二进制的长度数据
buffer.fill(cleanRecipientAddress, 64, 64 + lenRecipientAddress, 'hex'); // 填充纯二进制的地址数据

console.log("Manual encoded data:", buffer.toString('hex'));
