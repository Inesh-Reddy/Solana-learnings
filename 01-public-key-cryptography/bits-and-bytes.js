//bits
const bits =0;
console.log(bits);

//bytes
const bytes = 202;
console.log(bytes);

//Array of bytes
const aBytes = [202,244,1,23]
console.log(aBytes);

//Uint8Array
const uintBytes = new Uint8Array([0,255,127,128]);
console.log(uintBytes);
/**
Why use UInt8Array over native arrays ?
    They use less space. Every number takes 64 bits (8 bytes). But every value in a UInt8Array takes 1 byte.
    UInt8Array Enforces constraints - It makes sure every element doesn’t exceed 255.
 */
let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[0] = 300; //after 255 again starts from 0
//So this uint8Arr will return 44 { uint8Arr[0] }
console.log(uint8Arr)
console.log(`This will return ${uint8Arr[0]} coz, 255+ 44 + 1(consider  0 as 1 value)  =>  gives 300`);
