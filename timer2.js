const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
    if(key === '\u0003'){
        console.log("thanks for using me")
    process.exit()

    } if (key >=1 && key <=9 ){
        console.log(`setting timer for ${key} seconds`)
    }
        setTimeout(() => {
        process.stdout.write('\x07');
    },1000 * key)
  });
