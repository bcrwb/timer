const args = process.argv.slice(2);

args.forEach((val) => {
    setTimeout(()=> {
        process.stdout.write('\x07');
        },Number(val)*1000);
  
});

