function beregnMoms(beløb, momsSats = 25) {
    let moms = (beløb * momsSats) / 100;
    let total = beløb + moms;

    console.log(`Total inklusiv moms: ${total} DKK`);
    console.log(`Moms udgør: ${moms} DKK`);
}

