import { assert } from "chai";
import descendingOrder from "./Descending-Order/Descending-Order-Solution.js"; // Replace with the actual path to your function
import isIsogram from "./Isograms/isogram.js";
const DescendingTests = () => {
  describe("Basic tests", () => {
    // Define an individual test case
    it("Testing for fixed tests", () => {
      assert.strictEqual(descendingOrder(0), 0);
      assert.strictEqual(descendingOrder(1), 1);
      assert.strictEqual(descendingOrder(111), 111);
      assert.strictEqual(descendingOrder(15), 51);
      assert.strictEqual(descendingOrder(1021), 2110);
      assert.strictEqual(descendingOrder(123456789), 987654321);
    });
  });
  describe("Random tests", () => {  
  
    function randint(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    for(let i = 0; i < 100; i++){
      let num = randint(0, 10**randint(1, 10))
      let expected = +[...""+num].sort().reverse().join``
      it(`descendingOrder(${num}) should equal ${expected}`, () => {
        assert.strictEqual(descendingOrder(num), expected);
      });
    }
  })
}

const IsogramTests = () => {
  describe("Tests", () => {
    it("test", () => {
      assert.strictEqual( isIsogram("Dermatoglyphics"), true );
      assert.strictEqual( isIsogram("isogram"), true );
      assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
      assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
      assert.strictEqual( isIsogram("isIsogram"), false );
      assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
    });
  });

  describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual( isIsogram("Dermatoglyphics"), true );
      assert.strictEqual( isIsogram("isogram"), true );
      assert.strictEqual( isIsogram("moose"), false );
      assert.strictEqual( isIsogram("isIsogram"), false );
      assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
      assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
      assert.strictEqual( isIsogram("thumbscrewjapingly"), true );
      assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
    })
  
    let lowers = "abcdefghijklmnopqrstuvwxyz", uppers = lowers.toUpperCase();
    const rnd = function(x){return ~~(Math.random()*x)}
    const rndChr = function(str){ return str[rnd(str.length)] };
      
    it("More tests", () => {    
      assert.strictEqual(isIsogram(lowers), true)
      assert.strictEqual(isIsogram(uppers), true)
    })
    
    it("More Mixed tests", () => {
      assert.strictEqual(isIsogram(lowers+rndChr(lowers)), false)
      assert.strictEqual(isIsogram(lowers+rndChr(uppers)), false)
    })
       
    const shuffle = function(str){return str.split('').sort(function(){return Math.random() - 0.5}).join('')}
    
    it("Random tests", () => {
      for(let t=0; t<100; t++){
        let cc = shuffle(lowers), exp = true, chr;
        let len = lowers.length; 
        len = Math.min(3+rnd(len),len);
        let str = cc.slice(0,len);
        if( rnd(99)<50 ){
          chr = rndChr(str);
          if( rnd(99)<50 )
            chr=chr.toUpperCase();        
          str = shuffle(shuffle(str+chr));
          exp = false
        }
        assert.strictEqual(isIsogram(str),exp,!exp? " 2 '"+chr+"' in "+str+" !":"")
      }
    })
  })
}

// DescendingTests();
IsogramTests();