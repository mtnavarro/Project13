function expect(val) {
    const expectObject = {};
  
    expectObject.toBe = function(otherVal) {
      if (val !== otherVal) {
        throw new Error("Not Equal");
      }
      return true;
    };
  
    expectObject.notToBe = function(otherVal) {
      if (val === otherVal) {
        throw new Error("Equal");
      }
      return true;
    };
  
    return expectObject;
  }

  let result = "";


  // Test 1
  const expectObject1 = expect(1);

  try {
    expectObject1.toBe(1);
    result += `Value: 1 => Passed \n`;    
  } catch (error) {
    result += `Value: 1 => Failed \n`;    
  }
  
  // Test 2
  const expectObject2 = expect("hello");
  
  try {
    expectObject2.notToBe("hello");
    result += `Value: hello => Passed \n`;
  } catch (error) {
    result += `Value: hello => Failed \n`;
  }
  
  document.getElementById("result").textContent = result;