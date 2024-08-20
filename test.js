import { assert } from "chai";
import descendingOrder from "./Descending-Order/Descending-Order-Solution.js"; // Replace with the actual path to your function
import isIsogram from "./Isograms/isogram.js";
import openOrSenior    from "./Categorize New Member/Categorization.js";
import Multiple_Of_3_Or_5_solution from "./Multiples-Of-3-Or-5/Multiples-of-3-or-5-Solution.js";
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
  });
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

const MultiplesTest = () => {
  function test(n, expected) {
    it(`n=${n}`, () => {  
      let actual = Multiple_Of_3_Or_5_solution(n);
      assert.strictEqual(actual, expected)
    });
  }
  
  describe("basic tests", function(){
    test(10,23)
    test(20,78)
    test(200,9168)
  })
  
  describe("smallest cases", function() {
    test(-1,0)
    test(0,0)
    test(1,0)
    test(2,0)
    test(3,0)
    test(4,3)
    test(5,3)
    test(6,8)
  })
  
  describe("random cases", function() {
    
    function randint(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function _solution(number){
      let sum = 0;
      
      for(let i = 1; i< number; i++){
        if(i % 3 == 0 || i % 5 == 0){
          sum += i
        }
      }
      return sum;
    }
    
    for(let i = 0; i < 100; i++) {
      let rand = randint(0, 10**randint(1, 5)) - 100
      test(rand, _solution(rand));
    }
  })
}

const Categorization = () => {
  describe("Categorize New Member", () => {
    it("Fixed tests", () => {
      assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
      assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
      assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
    });
  
    it( "Edge cases:", () => {
      assert.deepEqual(openOrSenior([]),[], "Empty array")
      assert.deepEqual(openOrSenior([[54,9],[55,9]]),['Open','Senior'], "age for 'Senior' should be > 54")
      assert.deepEqual(openOrSenior([[55,7],[55,9]]),['Open','Senior'], "handicap for 'Senior' should be > 7")
    });
  
    it("Some random tests:", () => {
      
      function randint(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
      function ref(data){
       return data.map(x => x[0] >= 55 && x[1] > 7? 'Senior': 'Open')
      }
      
      for( let t = 0; t< 100; t++){
        let arr = Array.from({length: randint(3, 8)}, (_, i) => [randint(10, 90), randint(-2, 26)])
        assert.deepEqual(openOrSenior(arr.slice()), ref(arr.slice()), `Testing for members = ${JSON.stringify(arr)}`)
      };
    })
  })
}

// DescendingTests();
// IsogramTests();
// MultiplesTest();
Categorization();  