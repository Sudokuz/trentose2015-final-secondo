$(document).ready(function(){
    
    $("#checkBtn").click(function(){
           console.log( $("#inputPhrase").val() );
            FlirtrController.check();
            console.log( $("#inputPhrase").val().search(patterns[0].word) );
            console.log( $("#inputPhrase").val().search(patterns[0].neutraliser) );
       });
    
    
    
});

var FlirtrModel = {  
    
    score: 0,
    
    /* initialise model */
    init : function(){
        this.score = 0;
        $(".answer").hide();
    },
  
   /* It sets the phrase to analyse */
   analyse : function (phrase){
       
       this.init();
       
       for (var i; i< patterns.length; i++){
           
           if(phrase.search(patterns[i].word) =! -1){             
            
                if(phrase.search(patterns[i].neutraliser) == -1){
                    this.score = parseInt(this.score + patterns[i].score); 
                }
           }
       }
       
   },
  
   /* Returns the flirting score (number) of the phrase.
    * It is computed by looking for flirting patterns, 
    * adding up the individual scores of the matching
    * patterns (unless the pattern neutraliser is found to 
    * the right of the matching word)
    */
   getScore : function () {
       
       FlirtrView.update(this.score);
       return this.score;
   }
         
};

var FlirtrView = {
    
    /* view takes care of updating HTML document with current score */
    update: function(score){
        
        $(".answer").text("Score: "+score);
        $(".answer").show();
        
    }
    
    
    
};

var FlirtrController = {
    
    check: function() {
        
        FlirtrModel.analyse( $("#inputPhrase").val() );
        FlirtrModel.getScore();
    }
    
}
