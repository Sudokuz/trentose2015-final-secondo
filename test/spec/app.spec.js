/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the FlirtrModel object */

describe("Flirtr", function() {

  it("should not be adding score with wrong input", function() {  
    
      FlirtrModel.analyse("aaa");
      expect(FlirtrModel.getScore()).toBe(0);
      
  });
    
    it("should be adding score with a right input with no neutralisers"), function(){
        
        FlirtrModel.analyse("asdnasd love asd");
      expect(FlirtrModel.getScore()).toBe(1);
    }
    
    it("should not be adding score with a right input when there's also a neutraliser"), function(){
        
        FlirtrModel.analyse("asd friend nasd love asd");
      expect(FlirtrModel.getScore()).toBe(0);
    }
    
    it("should correctly be adding more points when more results hit with no neutraliser"), function(){
        
        FlirtrModel.analyse("asdnasd love asd kiss");
      expect(FlirtrModel.getScore()).toBe(2);
    }
 
});
