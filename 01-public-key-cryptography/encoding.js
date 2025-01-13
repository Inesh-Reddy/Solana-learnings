//bytes to ASCII
    //  01011001(89) 01011000(88) ====ASCI=====> Y X


//bytes to Hex
    // 0101(5) 1001(9) => (59) ,  0101(5) 1000(8)  =>  (58) =====hex====> 5958


//ASCII to bytes

    // string  => utf8 => Hex

//UINT8Arrya(byte array) to ASCII
    
    const arrayToHex = (byteArray) => {
        let hexString = '';
        for(let i=0; i< byteArray.length; i++){
            hexString = hexString + byteArray[i].toString(16).padStart(2, '0');
        }
        return hexString;
    }
    const string = "Hello"
    const byteArray1 = new TextEncoder().encode(string);
    console.log(byteArray1);
    const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
    const hexString = arrayToHex(byteArray);
    console.log(hexString);

//ASCII to Uint8Array(byte array)