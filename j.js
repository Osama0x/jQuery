$(function(){

    $("#button").click(function(s){
        s.preventDefault();
       
        const namequst=$("#name").val();
        const Bill=$("#Bill").val();
        const Phone=$("#Phone").val();
        
       

        if((namequst==='') || (Phone==='')  || (Bill==='')){
            alert("Please fill all ");
        }
        else{
            var appendText="<p>● Customer: <b> &nbsp"+namequst+"&nbsp</b> ● Phone is: <b>&nbsp;"+Phone+"&nbsp;</b> ● Number of bill:<b>  &nbsp;"+Bill+"&nbsp;</b> </p>" ;
           
            $("#output-details").append(appendText);

            $("#name").val("");
            $("#Phone").val("");
            $("#Bill").val("");
        
        }
   })

    const printBtn = document.getElementById('print');
    printBtn.addEventListener('click',function(){
    print(); 
     
});
});

     